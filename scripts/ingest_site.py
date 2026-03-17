from __future__ import annotations

import os
from pathlib import Path

from app.rag.ingest import build_documents_from_site_json, chunk_documents
from app.rag.index import upsert_documents


def main() -> None:
    site_json = os.getenv("SITE_JSON_PATH", "../Aicyro-website-main/src/database_chat.json")
    site_base_url = os.getenv("SITE_BASE_URL", "")  # e.g., https://aicyro.com

    p = Path(site_json)
    if not p.exists():
        raise SystemExit(f"SITE_JSON_PATH not found: {p.resolve()}")

    docs = build_documents_from_site_json(p, site_base_url=site_base_url)
    docs = chunk_documents(docs, max_chars=3000, overlap_chars=300)

    if not docs:
        raise SystemExit("No documents produced from site JSON. Check the file contents.")

    texts = [d["text"] for d in docs]
    upsert_documents(texts)
    print(f"Ingestion complete. Upserted {len(docs)} chunks into the vector DB.")


if __name__ == "__main__":
    main()
