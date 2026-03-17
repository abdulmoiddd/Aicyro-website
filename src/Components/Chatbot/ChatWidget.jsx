import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Bot,
  LoaderCircle,
  MessageCircle,
  SendHorizonal,
  Sparkles,
  X,
} from "lucide-react";

const STARTER_PROMPTS = [
  "What services does Aicyro offer?",
  "Can you build an MVP for my startup?",
];

const INITIAL_MESSAGE = {
  id: "welcome",
  role: "bot",
  text: "Hi — I’m Aicyro Assistant. Ask me about our services, AI solutions, project planning, or next steps.",
  time: "Now",
};

function formatTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function MessageBubble({ role, text, time, isStreaming = false }) {
  const isBot = role === "bot";

  return (
    <div className={`flex items-end gap-2 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-md shadow-black/20">
          <Bot className="h-4 w-4" />
        </div>
      )}

      <div
        className={[
          "max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-md",
          isBot
            ? "rounded-bl-md bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-white"
            : "rounded-br-md border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground)]",
        ].join(" ")}
      >
        {isStreaming && !text ? (
          <div className="flex items-center gap-2 text-white/90">
            <LoaderCircle className="h-4 w-4 animate-spin" />
            <span>Thinking…</span>
          </div>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              ul: ({ children }) => <ul className="mb-2 ml-5 list-disc space-y-1 last:mb-0">{children}</ul>,
              ol: ({ children }) => <ol className="mb-2 ml-5 list-decimal space-y-1 last:mb-0">{children}</ol>,
              li: ({ children }) => <li className="pl-1">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
            }}
          >
            {text}
          </ReactMarkdown>
        )}

        <div className={`mt-1 text-[11px] ${isBot ? "text-white/75" : "text-[var(--foreground-muted)]"}`}>
          {time}
        </div>
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [hasMounted, setHasMounted] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
    const storedSession = window.localStorage.getItem("aicyro_chat_session_id");
    const id = storedSession || `aicyro-${Math.random().toString(36).slice(2, 10)}`;
    setSessionId(id);
    if (!storedSession) {
      window.localStorage.setItem("aicyro_chat_session_id", id);
    }
  }, []);

  useEffect(() => {
    if (!hasMounted || !scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading, hasMounted]);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  const appendMessage = (role, text, extra = {}) => {
    const id = extra.id || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    setMessages((prev) => [
      ...prev,
      {
        id,
        role,
        text,
        time: extra.time || formatTime(),
      },
    ]);

    return id;
  };

  const updateMessageText = (id, updater) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id !== id) return message;
        const nextText = typeof updater === "function" ? updater(message.text) : updater;
        return { ...message, text: nextText };
      })
    );
  };

  const parseSSEChunk = (chunk, handlers) => {
    const events = chunk.split("\n\n");
    const completeEvents = events.slice(0, -1);
    const remainder = events[events.length - 1] || "";

    for (const evt of completeEvents) {
      const lines = evt.split("\n");
      let eventName = "message";
      let dataStr = "";

      for (const line of lines) {
        if (line.startsWith("event:")) {
          eventName = line.slice(6).trim();
        } else if (line.startsWith("data:")) {
          dataStr += line.slice(5).trim();
        }
      }

      if (!dataStr) continue;

      let parsed;
      try {
        parsed = JSON.parse(dataStr);
      } catch {
        continue;
      }

      if (eventName === "meta") {
        handlers.onMeta?.(parsed);
      } else if (eventName === "token") {
        handlers.onToken?.(parsed);
      } else if (eventName === "done") {
        handlers.onDone?.(parsed);
      } else if (eventName === "error") {
        handlers.onError?.(parsed);
      }
    }

    return remainder;
  };

  const streamBotReply = async (text, botMessageId) => {
    const response = await fetch("/api/chat-stream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
        session_id: sessionId,
      }),
    });

    if (!response.ok) {
      const contentType = response.headers.get("content-type") || "";
      const payload = contentType.includes("application/json")
        ? await response.json()
        : { error: await response.text() };

      throw new Error(payload?.detail || payload?.error || "Chat request failed.");
    }

    if (!response.body) {
      throw new Error("Streaming is not supported in this browser.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let buffer = "";
    let streamFinished = false;

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      buffer = parseSSEChunk(buffer, {
        onMeta: (meta) => {
          if (meta?.session_id) {
            setSessionId(meta.session_id);
            window.localStorage.setItem("aicyro_chat_session_id", meta.session_id);
          }
        },
        onToken: (payload) => {
          const token = payload?.text || "";
          if (!token) return;

          updateMessageText(botMessageId, (prevText) => prevText + token);
        },
        onDone: () => {
          streamFinished = true;
        },
        onError: (payload) => {
          throw new Error(payload?.message || "Streaming failed.");
        },
      });
    }

    if (buffer.trim()) {
      parseSSEChunk(`${buffer}\n\n`, {
        onMeta: (meta) => {
          if (meta?.session_id) {
            setSessionId(meta.session_id);
            window.localStorage.setItem("aicyro_chat_session_id", meta.session_id);
          }
        },
        onToken: (payload) => {
          const token = payload?.text || "";
          if (!token) return;

          updateMessageText(botMessageId, (prevText) => prevText + token);
        },
        onDone: () => {
          streamFinished = true;
        },
        onError: (payload) => {
          throw new Error(payload?.message || "Streaming failed.");
        },
      });
    }

    if (!streamFinished) {
      throw new Error("Stream ended before completion.");
    }
  };

  const sendMessage = async (overrideText = "") => {
    const text = (overrideText || input).trim();
    if (!text || loading) return;

    appendMessage("user", text);
    setInput("");

    const botMessageId = `${Date.now()}-bot-${Math.random().toString(36).slice(2, 8)}`;
    appendMessage("bot", "", { id: botMessageId });

    setLoading(true);

    try {
      await streamBotReply(text, botMessageId);

      setMessages((prev) =>
        prev.map((message) =>
          message.id === botMessageId && !message.text.trim()
            ? {
                ...message,
                text: "Thanks — I received your message.",
              }
            : message
        )
      );
    } catch (error) {
      const fallbackText =
        error?.message?.includes("429") || error?.message?.toLowerCase().includes("rate")
          ? "You’ve reached the chat limit for a moment. Please wait a little and try again."
          : "I’m having trouble connecting right now. Please try again in a moment or contact Aicyro directly through the contact form.";

      updateMessageText(botMessageId, (prevText) => prevText || fallbackText);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendMessage();
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="fixed bottom-[130px] right-4 z-[90] sm:bottom-[50px] sm:right-8">
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="w-[calc(100vw-2rem)] max-w-[390px] overflow-hidden rounded-[28px] border border-white/10 bg-[var(--card-bg)] text-[var(--foreground)] shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="relative overflow-hidden bg-[linear-gradient(135deg,var(--primary),var(--secondary),var(--accent-blue))] px-5 pb-5 pt-4 text-white">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
              <div className="absolute right-8 top-10 h-16 w-16 rounded-full bg-white/10" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] backdrop-blur-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    Live chat
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight">Ask Aicyro</h2>
                  <p className="mt-1 max-w-[265px] text-sm text-white/85">
                    Chat with our AI assistant about services, pricing, project fit, and next steps.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/15 bg-white/10 p-2 text-white transition hover:bg-white/20"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="border-b border-[var(--border-color)] bg-white/5 px-4 py-3">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                Suggested prompts
              </div>
              <div className="flex flex-wrap gap-2">
                {STARTER_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-white/10 bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-white hover:shadow-[0_0_0_1px_var(--primary)]"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div
              ref={scrollRef}
              className="max-h-[360px] space-y-4 overflow-y-auto bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] px-4 py-4"
            >
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  role={message.role}
                  text={message.text}
                  time={message.time}
                  isStreaming={loading && message.role === "bot" && message.id === messages[messages.length - 1]?.id}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-[var(--border-color)] bg-[var(--card-bg)] p-4">
              <div className="flex items-center gap-2 rounded-2xl border border-[var(--border-color)] bg-white/5 px-3 py-2 shadow-inner">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about AI development, MVPs, or pricing..."
                  className="h-10 flex-1 bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--foreground-muted)]"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <SendHorizonal className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2 text-center text-[11px] text-[var(--foreground-muted)]">
                {loading ? "Generating response…" : "Typically replies in a few seconds"}
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.button
            key="chat-launcher"
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(135deg,var(--primary),var(--secondary))] px-5 py-3 text-white shadow-[0_18px_45px_rgba(67,97,238,0.35)] backdrop-blur-xl"
            aria-label="Open chat"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold leading-tight">Ask Aicyro</div>
              <div className="text-xs text-white/80">Live AI assistant</div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}