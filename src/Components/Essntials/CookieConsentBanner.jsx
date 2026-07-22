// src/components/Essential/CookieConsentBanner.jsx
import React, { useState, useEffect } from "react";
import { ref, set } from "firebase/database";
import { db } from "../../lib/firebase";
import {
  setStrictCookie,
  getStrictCookie,
  getOrCreateAnonId,
  CONSENT_COOKIE_NAME,
} from "../../lib/cookiePersonalization";

/**
 * Helper: Parses the browser environment into a clean, readable Device Name
 */
function getReadableDeviceName() {
  if (typeof window === "undefined") return "Unknown Device";

  const ua = navigator.userAgent;
  let os = "Unknown OS";
  let type = "Desktop";

  // Identify OS
  if (/Windows/i.test(ua)) os = "Windows PC";
  else if (/Macintosh|Mac OS X/i.test(ua)) os = "Macintosh";
  else if (/Android/i.test(ua)) {
    os = "Android";
    type = "Mobile";
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    os = "iOS Device";
    type = "Mobile";
  } else if (/Linux/i.test(ua)) os = "Linux";

  // Check if tablet
  if (/Tablet|iPad/i.test(ua)) type = "Tablet";

  return `${os} (${type})`;
}

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // 🛑 Do not block the screen or ask for cookies on the /lg page
    if (
      typeof window !== "undefined" &&
      (window.location.pathname === "/lg" ||
        window.location.pathname.startsWith("/lg/"))
    ) {
      return;
    }

    const existingConsent = getStrictCookie(CONSENT_COOKIE_NAME);
    if (!existingConsent) {
      setShowBanner(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const unblockWebsite = () => {
    document.body.style.overflow = "auto";
    setShowBanner(false);
  };

  const handleDecision = async (status) => {
    setIsSaving(true);
    const anonId = getOrCreateAnonId();

    // 1. Immediately store cookie locally
    setStrictCookie(CONSENT_COOKIE_NAME, { status, timestamp: Date.now() });

    // 2. Extract Device Name and determine Username
    const deviceName = getReadableDeviceName();

    // Checks localStorage for a logged-in user, or defaults to a distinct Visitor Username
    const storedAppUser =
      typeof window !== "undefined"
        ? localStorage.getItem("aicyro_username")
        : null;
    const username =
      storedAppUser || `Visitor_${anonId ? anonId.substring(0, 8) : "Guest"}`;

    // 3. Prepare structured payload containing username & deviceName
    const payload = {
      username: username,
      deviceName: deviceName,
      anonId: anonId || "unknown",
      consentStatus: status,
      language: typeof window !== "undefined" ? navigator.language : "unknown",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
      updatedAt: new Date().toISOString(),
      rawUserAgent:
        typeof window !== "undefined" ? navigator.userAgent : "unknown",
    };

    // 4. Save to Firebase Realtime Database
    try {
      if (!db) {
        console.warn("⚠️ Firebase Realtime DB not initialized.");
      } else if (anonId) {
        const userCookieRef = ref(db, `user_cookies/${anonId}`);
        await set(userCookieRef, payload);
        console.log(
          "✅ Saved profile, device, and consent to Firebase Realtime Database!",
        );
      }
    } catch (error) {
      console.error("❌ Failed to save to Firebase Realtime Database:", error);
    } finally {
      setIsSaving(false);
      unblockWebsite();
    }
  };

  if (!showBanner) return null;

  return (
    /* Full-Screen Blocking Backdrop */
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-2xl p-4 select-none">
      {/* Changed hardcoded whites/grays to card background and border variables */}
      <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-md w-full p-8 text-center animate-in zoom-in-95 duration-200">
        {/* Separated the background opacity from the text color to keep the lock icon fully visible */}
        <div className="relative mx-auto w-14 h-14 flex items-center justify-center rounded-2xl mb-5 text-2xl text-[var(--primary)]">
          <div className="absolute inset-0 bg-[var(--primary)] opacity-10 rounded-2xl"></div>
          <span className="relative z-10">🔒</span>
        </div>

        {/* Updated text colors to use foreground variables */}
        <h2 className="text-2xl font-extrabold text-[var(--foreground)] mb-3">
          Cookie & Privacy Policy
        </h2>

        <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-8">
          We use essential browser cookies and log basic device profile metrics
          to secure our platform. Please accept or reject cookies to unlock and
          view the website.
        </p>

        <div className="flex flex-col gap-3">
          {/* Main Button: Uses primary variable for background */}
          <button
            onClick={() => handleDecision("accepted")}
            disabled={isSaving}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[var(--primary)] hover:opacity-90 shadow-lg transition-all disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Accept All Cookies"}
          </button>

          {/* Secondary Button: Uses background variable for its resting state and border color on hover */}
          <button
            onClick={() => handleDecision("rejected")}
            disabled={isSaving}
            className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] bg-[var(--background)] hover:bg-[var(--border-color)] transition-all disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Reject Non-Essential"}
          </button>
        </div>
      </div>
    </div>
  );
}
