from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Iterable, List, Dict


# ---------- Flatten JSON to Text ----------

def _flatten_text(obj: Any) -> str:
    parts: List[str] = []

    def rec(x: Any):
        if x is None:
            return
        if isinstance(x, str):
            s = x.strip()
            if s:
                parts.append(s)
            return
        if isinstance(x, (int, float, bool)):
            parts.append(str(x))
            return
        if isinstance(x, list):
            for i in x:
                rec(i)
            return
        if isinstance(x, dict):
            for k, v in x.items():
                if isinstance(k, str) and k.lower() in {"title", "heading", "name", "label", "question"}:
                    parts.append(k)
                rec(v)

    rec(obj)

    # remove duplicates while keeping order
    seen = set()
    out: List[str] = []
    for p in parts:
        if p not in seen:
            seen.add(p)
            out.append(p)

    return "\n".join(out)


# ---------- Build Documents from JSON ----------

def build_documents_from_site_json(
    site_json_path: str | Path,
    site_base_url: str = ""
) -> List[Dict]:

    p = Path(site_json_path)
    data = json.loads(p.read_text(encoding="utf-8"))

    docs: List[Dict] = []

    for section, payload in data.items():
        text = _flatten_text(payload)
        if not text.strip():
            continue

        url = ""
        if "service" in section.lower():
            url = "/services"
        elif "portfolio" in section.lower() or "case" in section.lower():
            url = "/portfolio"
        elif "blog" in section.lower():
            url = "/blogs"
        elif "contact" in section.lower():
            url = "/contact"

        docs.append({
            "text": text,
            "metadata": {
                "source": str(p.name),
                "section": section,
                "url": (site_base_url + url) if (site_base_url and url) else url,
            }
        })

    # Handle nested arrays like services, portfolio items
    for key in ["portfolioPreview", "portfolio", "projects", "caseStudies", "services", "serviceCards"]:
        if key in data and isinstance(data[key], list):
            for item in data[key]:
                text = _flatten_text(item)
                if not text.strip():
                    continue

                url = ""
                if isinstance(item, dict):
                    url = item.get("projectUrl") or item.get("url") or ""
                    if url and not url.startswith("/") and not url.startswith("http"):
                        url = "/" + url

                docs.append({
                    "text": text,
                    "metadata": {
                        "source": str(p.name),
                        "section": key,
                        "url": (site_base_url + url) if (site_base_url and url.startswith("/")) else url,
                    }
                })

    return docs


# ---------- Chunk Documents ----------

def chunk_documents(
    docs: Iterable[Dict],
    max_chars: int = 3000,
    overlap_chars: int = 300
) -> List[Dict]:

    out: List[Dict] = []

    for d in docs:
        t = d["text"]
        metadata = d.get("metadata", {})

        if len(t) <= max_chars:
            out.append(d)
            continue

        start = 0
        while start < len(t):
            end = min(len(t), start + max_chars)
            chunk_text = t[start:end]

            meta = dict(metadata)
            meta["chunk_start"] = start

            out.append({
                "text": chunk_text,
                "metadata": meta
            })

            if end == len(t):
                break

            start = max(0, end - overlap_chars)

    return out