from __future__ import annotations

from typing import Iterator, List

import google.generativeai as genai
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, PointStruct, VectorParams
from sentence_transformers import SentenceTransformer

from app.utils.config import settings


qdrant = QdrantClient(
    url=settings.qdrant_url,
    api_key=settings.qdrant_api_key or None
)

embedding_model = SentenceTransformer("all-MiniLM-L6-v2")

genai.configure(api_key=settings.gemini_api_key)
gemini_model = genai.GenerativeModel(settings.gemini_model)


SYSTEM_POLICY = """
You are Aicyro's website assistant.

Rules:
You are Aicyro's website assistant. Answer only using retrieved website content. 
If unsure, ask for clarification. Never invent information.
""".strip()

def ensure_collection():
    collections = [c.name for c in qdrant.get_collections().collections]

    if settings.qdrant_collection not in collections:
        qdrant.create_collection(
            collection_name=settings.qdrant_collection,
            vectors_config=VectorParams(
                size=384,  # all-MiniLM-L6-v2 embedding size
                distance=Distance.COSINE
            )
        )


# ---------- Upsert Documents ----------

def upsert_documents(texts: List[str]):
    ensure_collection()

    vectors = embedding_model.encode(texts).tolist()

    points = [
        PointStruct(
            id=i,
            vector=vectors[i],
            payload={"text": texts[i]}
        )
        for i in range(len(texts))
    ]

    qdrant.upsert(
        collection_name=settings.qdrant_collection,
        points=points
    )

def build_prompt(question: str, top_k: int = 5) -> str:
    ensure_collection()

    query_vector = embedding_model.encode(question).tolist()

    results = qdrant.search(
        collection_name=settings.qdrant_collection,
        query_vector=query_vector,
        limit=top_k
    )

    context = "\n\n".join(
        hit.payload.get("text", "")
        for hit in results
        if hit.payload and hit.payload.get("text")
    )

    if not context.strip():
        context = "No relevant context found."

    prompt = f"""
{SYSTEM_POLICY}

Context:
{context}

Question:
{question}
"""

    return prompt


def query_rag(question: str, top_k: int = 5) -> str:
    prompt = build_prompt(question, top_k=top_k)

    response = gemini_model.generate_content(
        prompt,
        generation_config={
            "max_output_tokens": settings.max_tokens,
            "temperature": 0.2,
            "top_p": 0.8
        }
    )

    return response.text if getattr(response, "text", None) else ""


def query_rag_stream(question: str, top_k: int = 5):
    prompt = build_prompt(question, top_k=top_k)

    response = gemini_model.generate_content(
        prompt,
        generation_config={
            "max_output_tokens": settings.max_tokens,
            "temperature": 0.25,
            "top_p": 0.8
        },
        stream=True
    )

    for chunk in response:
        text = getattr(chunk, "text", None)
        if text:
            # split large model chunks into smaller UI-friendly pieces
            step = 12
            for i in range(0, len(text), step):
                yield text[i:i + step]