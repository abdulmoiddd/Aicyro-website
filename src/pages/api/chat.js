export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const backendBaseUrl = process.env.AICYRO_CHAT_BACKEND_URL || "http://127.0.0.1:8000";

  try {
    const upstream = await fetch(`${backendBaseUrl}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const contentType = upstream.headers.get("content-type") || "";
    const payload = contentType.includes("application/json")
      ? await upstream.json()
      : { error: await upstream.text() };

    return res.status(upstream.status).json(payload);
  } catch (error) {
    return res.status(502).json({
      error: "Unable to reach chatbot backend.",
      detail: error.message,
    });
  }
}
