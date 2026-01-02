import { useState, useEffect } from "react";
import Head from "next/head";
import Hero from "../Components/Home/Hero";
import KeyFeature from "../Components/Home/keyfeature";
import Counter from "../Components/Home/counter";
import WeOffer from "../Components/Home/weoffer";
import Steps from "../Components/Home/steps";
import Exploring from "../Components/Home/exploring";
import Testimonial from "../Components/Home/Testimonial";
import Experience from "../Components/Home/Experience";
import Faqs from "../Components/Home/faqs";
import Footer from "../Components/Essntials/footer";
import Favicon from "../assets/favicon.png";
import Navbar from "../Components/Essntials/Navbar";
// import Ogimage from "./og-image.jpg";

// --- 1. Import the Animation Component ---
import LogoAnimation from "../Components/LogoAnimation";

const HomePage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent body scroll when splash is showing
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowContent(true);
  };

  return (
    <div className="bg-[#0B0219]">
      {/* Splash Screen */}
      {showSplash && <LogoAnimation onComplete={handleSplashComplete} />}

      {/* Head should always render for SEO */}
      <Head>
        {/* --- DYNAMIC FAVICON --- */}
        <meta
          name="google-site-verification"
          content="H3IiET-R1ROp6Mc2C-542EEtOVyXboeB1knzQkRVOx0"
        />
        <link rel="icon" href={Favicon.src} />

        {/* --- LANGUAGE TAG --- */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="language" content="English" />

        {/* --- PRIMARY META TAGS --- */}
        <title>Advanced AI & Cybersecurity Solutions - Aicyro</title>
        <meta
          name="description"
          content="Aicyro Solutions transforms businesses with intelligent SaaS development, AI-driven innovation, and robust cybersecurity. We build scalable, secure cloud products for startups and enterprises."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Aicyro Solutions, SaaS Development, SaaS development company, AI Solutions, Cybersecurity, Cyber security experts, VAPT, Machine Learning, Cloud Architecture, Web Development, App Development, Software Agency, Pakistan"
        />
        <meta name="author" content="Aicyro Solutions" />

        {/* UPDATED: Canonical URL */}
        <link rel="canonical" href="https://aicyronextjs.netlify.app/" />

        {/* --- OPEN GRAPH (SOCIAL SHARING) --- */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aicyro Solutions | Revolutionizing Intelligence & Security Innovation"
        />
        <meta
          property="og:description"
          content="Your partner for end-to-end digital transformation. Specializing in rapid SaaS MVPs, AI integration, and advanced cybersecurity services."
        />

        {/* UPDATED: Open Graph URL */}
        <meta property="og:url" content="https://aicyronextjs.netlify.app/" />

        {/* UPDATED: Image Path */}
        <meta
          property="og:image"
          content="https://aicyronextjs.netlify.app/og-image.jpg"
        />
        <meta property="og:site_name" content="Aicyro Solutions" />

        {/* --- TWITTER CARD --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Aicyro Solutions | AI, SaaS & Cybersecurity Experts"
        />
        <meta
          name="twitter:description"
          content="Building smart, secure, and scalable software. Explore our services in AI, Cloud, and App Development."
        />

        {/* UPDATED: Twitter Image Path */}
        <meta
          name="twitter:image"
          content="https://aicyronextjs.netlify.app/og-image.jpg"
        />

        {/* --- JSON-LD SCHEMA MARKUP --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aicyro Solutions",
              url: "https://aicyronextjs.netlify.app/",
              logo: "https://aicyronextjs.netlify.app/logo.png",
              slogan: "Revolutionizing Intelligence Security Innovation",
              description:
                "Aicyro Solutions is a software development firm specializing in SaaS architecture, Artificial Intelligence, and Cybersecurity. We help clients launch MVPs and scale enterprise solutions.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
                addressRegion: "Islamabad Capital Territory",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-51-6122768",
                contactType: "customer service",
                areaServed: "World",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://www.linkedin.com/company/aicyro-solutions",
                "https://www.facebook.com/aicyro",
                "https://x.com/aicyro",
                "https://www.instagram.com/aicyro",
              ],
            }),
          }}
        />
      </Head>

      {/* Hero Section - Loads during splash but hidden until splash completes */}
      <header
        className={
          showSplash
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-500"
        }
        style={
          showSplash
            ? {
                visibility: "hidden",
                position: "absolute",
                width: "100%",
                height: "auto",
                top: 0,
                left: 0,
                zIndex: -1,
              }
            : {
                visibility: "visible",
                position: "relative",
                zIndex: 1,
              }
        }
      >
        <Navbar />
        <Hero />
      </header>

      {/* Rest of Website Content - Loads after splash completes */}
      {showContent && (
        <>
          <main>
            <KeyFeature />
            <Counter />
            <WeOffer />

            {/* FIX: Steps is now hidden on mobile and visible on md (tablet) and up */}
            <div className="hidden md:block">
              <Steps />
            </div>

            <Exploring />
            <Testimonial />
            <Experience />
            <Faqs />
          </main>

          <footer>
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
};

export default HomePage;
