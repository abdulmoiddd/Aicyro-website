from __future__ import annotations

import time
from collections import defaultdict, deque


class SlidingWindowRateLimiter:
    """Simple in-memory sliding-window limiter.

    Notes:
      - Suitable for dev/MVP.
      - For production (multi-instance), use Redis/Upstash.
    """

    def __init__(self, limit_per_min: int):
        self.limit = max(1, int(limit_per_min))
        self.window_s = 60
        self._hits: dict[str, deque[float]] = defaultdict(deque)

    def allow(self, key: str) -> bool:
        now = time.time()
        q = self._hits[key]
        # evict old
        while q and q[0] <= now - self.window_s:
            q.popleft()
        if len(q) >= self.limit:
            return False
        q.append(now)
        return True
