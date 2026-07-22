// src/pages/_app.jsx

import "@/styles/globals.css";
import Head from "next/head";
import Favicon from "../assets/favicon.png";
import LogoAnimation from "../Components/LogoAnimation";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import RootLayout from "./layout";
import ThemeProvider from "../Components/ThemeProvider";
import { trackVisit } from "../lib/activityTracker";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Poppins } from "next/font/google";

const DEFAULT_TITLE = "Advanced AI & Cybersecurity Solutions | Aicyro ";
const DEFAULT_DESC = "Aicyro Solutions is a SaaS development company...";
const DEFAULT_KEYWORDS = "SaaS development company, Cyber security experts...";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // Match weights from your report
  variable: "--font-poppins", // Optional: if you use Tailwind variables
  display: "swap",
});
export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("aicyro_visited");
    if (!hasVisited) {
      setShowSplash(true);
      sessionStorage.setItem("aicyro_visited", "true");
    }
  }, []);

  useEffect(() => {
    // Track the landing page view exactly once
    if (router.isReady) {
      trackVisit(router.pathname);
    }

    // Track subsequent navigations
    const handleRouteChange = (url) => trackVisit(url);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.isReady, router.pathname]);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Head>
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESC} />
        <meta name="keywords" content={DEFAULT_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href={Favicon.src} />
      </Head>
      {showSplash && <LogoAnimation onComplete={() => setShowSplash(false)} />}
      <ThemeProvider>
        <RootLayout className={poppins.className}>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}
