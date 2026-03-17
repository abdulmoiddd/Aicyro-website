from __future__ import annotations

from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=4000)
    session_id: str | None = Field(default=None, max_length=128)
    page_url: str | None = Field(default=None, max_length=2048)


class Source(BaseModel):
    title: str | None = None
    url: str | None = None
    section: str | None = None


class ChatResponse(BaseModel):
    answer: str
    sources: list[Source] = []
    session_id: str | None = None
