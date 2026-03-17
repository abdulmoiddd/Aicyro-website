from __future__ import annotations

import os
from dataclasses import dataclass
from dotenv import load_dotenv

load_dotenv()


def _get(name: str, default: str | None = None) -> str:
    v = os.getenv(name, default)
    if v is None:
        raise RuntimeError(f"Missing required env var: {name}")
    return v


@dataclass(frozen=True)
class Settings:
    # Provider selection
    # Supported: "gemini"
    llm_provider: str = _get("LLM_PROVIDER", "gemini").lower()

    # Gemini (Google AI Studio / Gemini Developer API)
    gemini_api_key: str = _get("GEMINI_API_KEY", "")
    gemini_model: str = _get("GEMINI_MODEL", "gemini-2.5-flash")
    gemini_embed_model: str = _get("GEMINI_EMBED_MODEL", "text-embedding-004")

    # Vector DB (Qdrant)
    qdrant_url: str = _get("QDRANT_URL", "http://localhost:6333")
    qdrant_api_key: str = os.getenv("QDRANT_API_KEY", "")
    qdrant_collection: str = _get("QDRANT_COLLECTION", "aicyro_site_kb")

    # App
    app_env: str = _get("APP_ENV", "dev")
    allowed_origins: list[str] = tuple(
        o.strip() for o in _get("ALLOWED_ORIGINS", "http://localhost:3000").split(",") if o.strip()
    )
    rate_limit_per_min: int = int(_get("RATE_LIMIT_PER_MIN", "20"))
    max_context_chunks: int = int(_get("MAX_CONTEXT_CHUNKS", "6"))
    max_tokens: int = int(_get("MAX_TOKENS", "1000"))


settings = Settings()
