export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const backendBaseUrl =
    process.env.AICYRO_CHAT_BACKEND_URL || "http://127.0.0.1:8000";

  try {
    const upstream = await fetch(`${backendBaseUrl}/chat/stream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream",
      },
      body: JSON.stringify(req.body),
    });

    if (!upstream.ok) {
      const contentType = upstream.headers.get("content-type") || "";
      const payload = contentType.includes("application/json")
        ? await upstream.json()
        : { error: await upstream.text() };

      return res.status(upstream.status).json(payload);
    }

    res.writeHead(200, {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    });

    if (typeof res.flushHeaders === "function") {
      res.flushHeaders();
    }

    const reader = upstream.body?.getReader();

    if (!reader) {
      res.write(
        `event: error\ndata: ${JSON.stringify({
          message: "Upstream stream is unavailable.",
        })}\n\n`
      );
      return res.end();
    }

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        res.write(Buffer.from(value));
      }
    } catch (streamError) {
      res.write(
        `event: error\ndata: ${JSON.stringify({
          message: streamError.message || "Streaming proxy failed.",
        })}\n\n`
      );
    } finally {
      res.end();
    }
  } catch (error) {
    return res.status(502).json({
      error: "Unable to reach chatbot backend.",
      detail: error.message,
    });
  }
}