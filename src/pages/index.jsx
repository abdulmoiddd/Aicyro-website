
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Hero from "../Components/Home/Hero";
import Faqs from "../Components/Home/extra/faqs";
import Footer from "../Components/Essntials/footer";
import Favicon from "../assets/favicon.png";
import Navbar from "../Components/Essntials/Navbar";
import { ArrowRight , Calculator } from "lucide-react"; // Import for the sticky button

// --- 1. Import the Animation Component ---
import LogoAnimation from "../Components/LogoAnimation";
import CoreServices from "@/Components/Home/extra/coreservices";
import WhyAicyro from "@/Components/Home/extra/whyaicyrosc4";
import LeadMagnet from "@/Components/Home/LeadMagnet";
import PortfolioPreview from "@/Components/Home/extra/portfoliopreview";
import ProblemSolution from "@/Components/Home/extra/ProblemSolution";
import ProblemSection from "@/Components/Home/problemsection";
import ServicesSection from "@/Components/Home/sevicesslection";
import ProcessSection from "@/Components/Home/ProcessSection";
import CaseSection from "@/Components/Home/CaseSection";
import WhyChooseSection from "@/Components/Home/WhyChooseSection";
import Testimonial from "@/Components/Home/Testimonial";
import ClientLoo from "@/Components/Home/clienlogos";
import LeadMagnetAIReadiness from "@/Components/Home/AIReadinessTeaser";
import LeadMagnetSaaSSecurity from "@/Components/Home/SecurityChecklistTeaser";
import Leadmangnet4 from "@/Components/Home/EstimatorTeaser.jsx"

const HomePage = () => {
  // New state to verify if we have checked the session storage
  const [isStorageChecked, setIsStorageChecked] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check session storage to see if splash was already shown
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      // If seen, skip splash and show content immediately
      setShowSplash(false);
      setShowContent(true);
    } else {
      // If not seen, show splash
      setShowSplash(true);
    }

    // Mark storage check as complete
    setIsStorageChecked(true);
  }, []);

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
    // Save flag in session storage so it doesn't load again in this session
    sessionStorage.setItem("hasSeenSplash", "true");
    
    setShowSplash(false);
    setShowContent(true);
  };

  // Prevent rendering until we know whether to show the splash or not
  if (!isStorageChecked) {
    return <div className="bg-[#0B0219] min-h-screen w-full"></div>;
  }

  return (
    <div className="bg-[--background]">
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

        {/* --- PRIMARY META TAGS (UPDATED) --- */}
        <title>
          Custom Software & AI Development Company | Aicyro Solutions
        </title>
        <meta
          name="description"
          content="Aicyro builds secure custom software, AI solutions, SaaS platforms, and cloud applications for startups and enterprises. Book a free consultation today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="custom software development company, AI software development services, SaaS development agency, web and mobile app development, cybersecurity solutions provider, Aicyro Solutions, Cloud Architecture, Software Agency"
        />
        <meta name="author" content="Aicyro Solutions" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://aicyro.com/" />

        {/* --- OPEN GRAPH (SOCIAL SHARING) (UPDATED) --- */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Software & AI Development Company | Aicyro Solutions"
        />
        <meta
          property="og:description"
          content="Aicyro builds secure custom software, AI solutions, SaaS platforms, and cloud applications for startups and enterprises. Book a free consultation today."
        />

        {/* Open Graph URL */}
        <meta property="og:url" content="https://aicyro.com/" />

        {/* Open Graph Image */}
        <meta property="og:image" content="https://aicyro.com/og-image.jpg" />
        <meta property="og:site_name" content="Aicyro Solutions" />

        {/* --- TWITTER CARD (UPDATED) --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Software & AI Development Company | Aicyro Solutions"
        />
        <meta
          name="twitter:description"
          content="Aicyro builds secure custom software, AI solutions, SaaS platforms, and cloud applications for startups and enterprises. Book a free consultation today."
        />

        {/* Twitter Image */}
        <meta name="twitter:image" content="https://aicyro.com/og-image.jpg" />

        {/* --- JSON-LD SCHEMA MARKUP --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aicyro Solutions",
              url: "https://aicyro.com/",
              logo: "https://aicyro.com/logo.png",
              slogan: "Revolutionizing Intelligence Security Innovation",
              description:
                "Aicyro builds secure custom software, AI solutions, SaaS platforms, and cloud applications for startups and enterprises.",
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

        {/* CORRECTED APOLLO SCRIPT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo() {
                var n=Math.random().toString(36).substring(7), o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
                o.async=!0;
                o.defer=!0;
                o.onload=function(){window.trackingFunctions.onLoad({appId:"68b8d2452a128f00197e7840"})};
                document.head.appendChild(o);
              }
              initApollo();
            `
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
            <ProblemSection />
            {/* <ProblemSolution /> */}
            <ServicesSection />
            <LeadMagnetAIReadiness/>
            <ProcessSection />
            <CaseSection />
            {/* <LeadMagnetSaaSSecurity /> */}
            <Leadmangnet4 />
            <WhyChooseSection />
            <ClientLoo />
            <Testimonial />
            {/* <CoreServices /> */}
            {/* <PortfolioPreview /> */}
            {/* <WhyAicyro /> */}

            <LeadMagnet />

            {/* <Faqs /> */}
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
