
import "@/styles/globals.css";
import Head from "next/head";
import Favicon from "../assets/favicon.png";
import LogoAnimation from "../Components/LogoAnimation";
import { useState, useEffect } from "react";
import Sticky from "../Components/Home/StickyEstimateBtn" 
// 1. Import the Provider
import { GoogleOAuthProvider } from '@react-oauth/google';
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

function App({ Component, pageProps }) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("aicyro_visited");
    if (!hasVisited) {
      setShowSplash(true);
      sessionStorage.setItem("aicyro_visited", "true");
    }
  }, []);

  return (
    // 2. Wrap the app with the Provider and pass the Client ID
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Head>
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESC} />
        <meta name="keywords" content={DEFAULT_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href={Favicon.src} />
      </Head>

      {showSplash && (
        <LogoAnimation onComplete={() => setShowSplash(false)} />
      )}

      <main className={poppins.className}>
      <Sticky />

        <Component {...pageProps} />
        </main>
    </GoogleOAuthProvider>
  );
}

export default App;