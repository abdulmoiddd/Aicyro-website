import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../lib/firebase"; // Adjust path if necessary

// Helper to format timestamps dynamically
const getRelativeTime = (timestamp, now) => {
  const diffInSeconds = Math.floor(
    (now - new Date(timestamp).getTime()) / 1000,
  );
  if (diffInSeconds < 30) return "Just now";
  if (diffInSeconds < 60) return `${diffInSeconds} sec ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hr ago`;
  return new Date(timestamp).toLocaleDateString();
};

export default function CookieDataDisplay() {
  const [cookies, setCookies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(Date.now());

  // Real-time clock for the "relative time" display
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 10000); // Update every 10s
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cookiesRef = ref(db, "user_cookies");

    const unsubscribe = onValue(cookiesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedData = Object.keys(data)
          .map((key) => ({
            id: key,
            ...data[key],
          }))
          .sort(
            (a, b) =>
              new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
          );

        setCookies(formattedData);
      } else {
        setCookies([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <section className="w-full max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-4 h-4 rounded-full bg-[var(--border-color)] animate-pulse" />
          <div className="h-8 w-48 bg-[var(--border-color)] animate-pulse rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="theme-glass-card h-[280px] animate-pulse flex flex-col gap-4"
            >
              <div className="flex justify-between">
                <div className="h-5 w-24 bg-[var(--border-color)] rounded" />
                <div className="h-5 w-16 bg-[var(--border-color)] rounded-full" />
              </div>
              <div className="h-4 w-32 bg-[var(--border-color)] rounded mt-2" />
              <div className="space-y-3 mt-4">
                <div className="h-3 w-full bg-[var(--border-color)] rounded" />
                <div className="h-3 w-4/5 bg-[var(--border-color)] rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto p-6 fade-in">
      {/* Lively Header */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]"></span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">
              Visitor Data
            </h2>
          </div>
          <p className="text-[var(--foreground-muted)] text-sm ml-6">
            Real-time tracking of active user sessions and consent states.
          </p>
        </div>

        {/* <div className="theme-badge px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 w-max">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          {cookies.length} Active Sessions
        </div> */}
      </div>

      {cookies.length === 0 ? (
        <div className="text-center py-20 theme-glass-card border-dashed">
          <p className="text-[var(--foreground-muted)] font-medium">
            No active sessions found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cookies.map((cookie) => {
            const isJustNow =
              now - new Date(cookie.updatedAt).getTime() < 60000;
            const consentAccepted = cookie.consentStatus === "accepted";

            return (
              <div
                key={cookie.id}
                className={`theme-glass-card group relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--primary)] ${isJustNow ? "ring-1 ring-[var(--primary)]/30" : ""}`}
              >
                {/* Subtle thematic glow inside the card on hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--primary)] opacity-0 blur-[40px] group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

                {/* Header: Username & Relative Time */}
                <div className="flex justify-between items-start mb-5 pb-4 border-b border-[var(--border-color)] relative z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[var(--foreground)] font-bold text-base tracking-wide flex items-center gap-2">
                      {cookie.username}
                      {isJustNow && (
                        <span className="text-[8px] uppercase tracking-wider bg-[var(--primary)] text-white px-1.5 py-0.5 rounded shadow-[0_0_8px_var(--primary)] animate-pulse">
                          Active
                        </span>
                      )}
                    </span>
                    <span className="text-xs font-medium text-[var(--foreground-muted)] flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 opacity-70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {getRelativeTime(cookie.updatedAt, now)}
                    </span>
                  </div>

                  {/* Dynamic Consent Badge */}
                  <span
                    className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border flex items-center gap-1.5 shadow-sm transition-colors ${
                      consentAccepted
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${consentAccepted ? "bg-emerald-500" : "bg-amber-500"}`}
                    />
                    {cookie.consentStatus}
                  </span>
                </div>

                {/* Content Details */}
                <div className="space-y-3 text-sm relative z-10">
                  <p className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[var(--background)] border border-[var(--border-color)] text-[var(--primary)]">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <strong className="text-[var(--foreground)] w-20">
                      Device
                    </strong>
                    <span className="text-[var(--foreground-muted)] truncate flex-1">
                      {cookie.deviceName}
                    </span>
                  </p>

                  <p className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[var(--background)] border border-[var(--border-color)] text-[var(--primary)]">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <strong className="text-[var(--foreground)] w-20">
                      Region
                    </strong>
                    <span className="text-[var(--foreground-muted)] truncate flex-1">
                      {cookie.timeZone}
                    </span>
                  </p>

                  <p className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[var(--background)] border border-[var(--border-color)] text-[var(--primary)]">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                    </span>
                    <strong className="text-[var(--foreground)] w-20">
                      Language
                    </strong>
                    <span className="text-[var(--foreground-muted)] truncate flex-1 uppercase">
                      {cookie.language}
                    </span>
                  </p>
                </div>

                {/* User Agent Block - Styled like a terminal output */}
                <div className="mt-5 pt-4 border-t border-[var(--border-color)] relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-xs text-[var(--foreground)] flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-[var(--foreground-muted)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      Raw Agent
                    </strong>
                  </div>
                  <div className="bg-[var(--background)] border border-[var(--border-color)] rounded-lg p-2.5 group-hover:border-[var(--primary)]/30 transition-colors">
                    <p
                      className="text-[10px] leading-relaxed text-[var(--foreground-muted)] font-mono line-clamp-2 hover:line-clamp-none transition-all cursor-help break-all"
                      title={cookie.rawUserAgent}
                    >
                      {cookie.rawUserAgent}
                    </p>
                  </div>
                </div>

                {/* Subtle Footer */}
                <div className="mt-4 flex items-center justify-between text-[9px] text-[var(--foreground-muted)] font-mono relative z-10">
                  <span className="opacity-50">ID</span>
                  <span className="opacity-60 truncate pl-4">
                    {cookie.anonId}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
