"use client";
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Navbar from "@/Components/Essntials/Navbar"; // Ensure this path matches your file structure
import Footer from "@/Components/Essntials/footer";
import { motion } from "framer-motion";
import LeadMagnet from "@/Components/Home/AIReadinessTeaser";


// --- 1. DECORATIVE COMPONENTS ---

const SpineShadow = () => (
  <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none" />
);

const DataVisual = ({ color }) => (
  <div className="w-full flex gap-2 items-end justify-center h-16 mt-6 opacity-70">
    <div className={`w-3 h-8 rounded-t-sm ${color.replace("text", "bg")}/40`} />
    <div
      className={`w-3 h-12 rounded-t-sm ${color.replace("text", "bg")}/60`}
    />
    <div className={`w-3 h-6 rounded-t-sm ${color.replace("text", "bg")}/30`} />
    <div
      className={`w-3 h-14 rounded-t-sm ${color.replace("text", "bg")}/80`}
    />
    <div
      className={`w-3 h-10 rounded-t-sm ${color.replace("text", "bg")}/50`}
    />
  </div>
);

// --- 2. THE PAGE COMPONENT ---
const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="demoPage h-full w-full bg-[#150a2e] overflow-hidden border-r border-white/5"
      ref={ref}
    >
      <div className="relative h-full w-full p-8 flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
        <SpineShadow />

        {/* Decorative corner accents */}
        <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-white/10 rounded-tr-xl" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-white/10 rounded-bl-xl" />

        <div className="relative z-20 flex flex-col items-center text-center">
          {props.children}
        </div>

        <span className="absolute bottom-4 right-6 text-[10px] tracking-widest font-mono text-gray-600">
          PAGE {props.number.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
});
Page.displayName = "Page";

// --- 3. MAIN LAYOUT ---

export default function NewsletterViewer() {
  const bookRef = useRef(null);

  const pages = [
    {
      id: 1,
      type: "cover",
      title: "MONTHLY INSIGHTS",
      subtitle: "August 2025 Edition",
      desc: "Strategic Analysis & AI Trends",
      accent: "text-[#8F8BF9]", // Matched to your Navbar hover color
    },
    {
      id: 2,
      type: "content",
      title: "Executive Summary",
      desc: "An overview of the rapid shifts in SaaS adoption across enterprise sectors.",
      accent: "text-purple-400",
    },
    {
      id: 3,
      type: "content",
      title: "Q1 Performance",
      desc: "Analyzing the metrics that defined the first quarter growth trajectory.",
      accent: "text-blue-400",
    },
    {
      id: 4,
      type: "content",
      title: "Market Trends",
      desc: "Emerging patterns in AI utilization and consumer behavior.",
      accent: "text-pink-400",
    },
    {
      id: 5,
      type: "content",
      title: "Our Projects",
      desc: "A showcase of recent deliverables and success stories.",
      accent: "text-cyan-400",
    },
    {
      id: 6,
      type: "cover",
      title: "AICYRO SOLUTIONS",
      subtitle: "www.aicyro.com",
      desc: "Thank you for reading",
      accent: "text-[#8F8BF9]",
    },
  ];

  return (
    // Background matches Navbar mobile menu color (#0B0219) for consistency
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B1138] via-[#0B0219] to-[#05010D]">
      {/* Navbar will sit on top due to absolute positioning in your Navbar code */}
      <Navbar />

      {/* Added pt-32 (padding-top) to clear the absolute Navbar so content isn't hidden */}
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8F8BF9]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center mb-10 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8F8BF9] to-cyan-400">
              Library
            </span>
          </h1>
          <p className="text-gray-400 text-sm tracking-wide uppercase">
            Flip to explore our latest reports
          </p>
        </div>

        {/* FLIPBOOK CONTAINER */}
        <div className="relative z-20 shadow-[0_20px_50px_-12px_rgba(143,139,249,0.15)]">
          <HTMLFlipBook
            width={400}
            height={550}
            size="stretch"
            minWidth={300}
            maxWidth={500}
            minHeight={400}
            maxHeight={700}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="flip-book bg-[#150a2e]"
            ref={bookRef}
          >
            {pages.map((page, index) => (
              <Page number={index + 1} key={page.id}>
                {page.type === "cover" ? (
                  <>
                    <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 shadow-inner">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-wider">
                      {page.title}
                    </h2>
                    <p
                      className={`text-sm font-semibold mb-6 ${page.accent} uppercase tracking-widest`}
                    >
                      {page.subtitle}
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
                    <p className="text-gray-400 text-sm max-w-[200px] leading-relaxed">
                      {page.desc}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-full flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                      <h3 className={`text-xl font-bold ${page.accent}`}>
                        {page.title}
                      </h3>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-7 text-left mb-8 font-light">
                      {page.desc}
                      <br />
                      <br />
                      <span className="opacity-50">
                        Detailed analytics and performance metrics for the{" "}
                        {page.title} section.
                      </span>
                    </p>

                    <DataVisual color={page.accent} />
                  </>
                )}
              </Page>
            ))}
          </HTMLFlipBook>
        </div>

        {/* CONTROLS */}
        <div className="mt-12 flex items-center gap-6 z-20">
          <button
            onClick={() => bookRef.current.pageFlip().flipPrev()}
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>{" "}
            Prev
          </button>

          <div className="h-1 w-1 rounded-full bg-white/20" />

          {/* Button style matched to Navbar's 'Book a Demo' button */}
          <button
            onClick={() => bookRef.current.pageFlip().flipNext()}
            className="group flex items-center gap-2 px-8 py-3 text-sm font-bold text-white rounded-full bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] hover:shadow-[0_0_20px_rgba(121,115,219,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Next Page{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </main>
<LeadMagnet />  
      <Footer />
    </div>
  );
}
