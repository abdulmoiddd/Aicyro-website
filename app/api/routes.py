from __future__ import annotations

import json
import uuid

from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import StreamingResponse

from app.api.schemas import ChatRequest, ChatResponse
from app.rag.index import query_rag, query_rag_stream
from app.utils.config import settings
from app.utils.rate_limit import SlidingWindowRateLimiter
import asyncio
router = APIRouter()
limiter = SlidingWindowRateLimiter(settings.rate_limit_per_min)

SYSTEM_POLICY = (
    "You are Aicyro's website assistant. "
    "Answer only using retrieved website content. "
    "If the answer is not in the retrieved content, clearly say you do not know based on the website content. "
    "Never invent information."
)


def _rate_limit_key(req: Request, session_id: str | None) -> str:
    ip = req.client.host if req.client else "unknown"
    return session_id or ip


@router.get("/health")
def health():
    return {"ok": True, "env": settings.app_env}


@router.post("/chat", response_model=ChatResponse)
def chat(payload: ChatRequest, req: Request):
    session_id = payload.session_id or str(uuid.uuid4())

    key = _rate_limit_key(req, session_id)
    if not limiter.allow(key):
        raise HTTPException(status_code=429, detail="Rate limit exceeded.")

    try:
        answer = query_rag(payload.message, top_k=settings.max_context_chunks)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return ChatResponse(
        answer=answer,
        sources=[],
        session_id=session_id
    )


@router.post("/chat/stream")
async def chat_stream(payload: ChatRequest, req: Request):
    session_id = payload.session_id or str(uuid.uuid4())

    key = _rate_limit_key(req, session_id)
    if not limiter.allow(key):
        raise HTTPException(status_code=429, detail="Rate limit exceeded.")

    async def event_generator():
        try:
            yield f"event: meta\ndata: {json.dumps({'session_id': session_id})}\n\n"

            for chunk in query_rag_stream(
                payload.message,
                top_k=settings.max_context_chunks
            ):
                yield f"event: token\ndata: {json.dumps({'text': chunk})}\n\n"
                await asyncio.sleep(0.03)

            yield "event: done\ndata: {}\n\n"

        except Exception as e:
            yield f"event: error\ndata: {json.dumps({'message': str(e)})}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )