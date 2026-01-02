import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../Components/Essntials/Navbar";
import Footer from "../../Components/Essntials/footer";
import Seo from "../../Components/Essntials/Seo";

// --- FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";

const MotionLink = motion(Link);

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const WebDevelopment = () => {
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FIREBASE DATA FETCHING ---
  useEffect(() => {
    // Pointing to the new Web Development path
    const serviceRef = ref(database, "Servicessubpages/WebDevelopment");
    const unsubscribe = onValue(
      serviceRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setServiceData(snapshot.val());
          setLoading(false);
        } else {
          setError("Content not found");
          setLoading(false);
        }
      },
      (err) => {
        console.error("Firebase read error:", err);
        setError("Failed to load content");
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // Helper to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper to format text with bullet points
  const formatText = (text) => {
    if (!text) return null;
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {/* Handles bullets, checkmarks, cross marks, or numbered lists */}
        {line.trim().startsWith("•") ||
        line.trim().startsWith("✔") ||
        line.trim().startsWith("❌") ||
        line.trim().match(/^\d\./) ? (
          <span className="block pl-4 mb-2 text-white/90">
            <span className="text-[#677ED6] mr-2">
              {line.trim().startsWith("✔")
                ? "✔"
                : line.trim().startsWith("❌")
                ? "❌"
                : line.trim().startsWith("•")
                ? "•"
                : ""}
            </span>
            {line
              .trim()
              .replace(/^[•✔❌]|\d\./, "")
              .trim()}
          </span>
        ) : (
          <span className="block mb-4">{line}</span>
        )}
      </React.Fragment>
    ));
  };

  if (loading)
    return (
      <div className="bg-[#0A0118] min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#677ED6] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error || !serviceData)
    return (
      <div className="bg-[#0A0118] min-h-screen flex justify-center items-center text-red-400">
        {error}
      </div>
    );

  return (
    <div className="bg-[#0A0118] min-h-screen text-white relative font-sans selection:bg-[#677ED6] selection:text-white">
      <Seo
        title={serviceData.Title}
        description={serviceData["Meta Description"]}
        url="/services/web-development"
      />

      <Navbar />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* --- HERO HEADER --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16 relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-full border border-[#677ED6] text-[#677ED6] text-xs font-bold tracking-widest uppercase mb-6 bg-[#677ED6]/10"
          >
            Web Engineering
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Web Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#677ED6] to-purple-400">
              in 2025
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            {serviceData["Meta Description"]}
          </motion.p>
        </motion.div>

        {/* --- MAIN LAYOUT WITH STICKY SIDEBAR --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          {/* --- LEFT: STICKY TABLE OF CONTENTS --- */}
          <aside className="lg:col-span-3 hidden lg:block relative">
            <div className="sticky top-32 space-y-2 border-l border-white/10 pl-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Contents
              </h3>
              <ul className="space-y-4">
                {serviceData.Sections &&
                  serviceData.Sections.map((section, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className="text-sm text-gray-400 hover:text-[#677ED6] transition-colors text-left"
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>

          {/* --- CENTER: CONTENT --- */}
          <main className="lg:col-span-9 space-y-12">
            {serviceData.Sections &&
              serviceData.Sections.map((section, idx) => (
                <motion.section
                  key={idx}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#677ED6]/30 transition-all duration-300"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {section.title}
                  </h2>
                  <div className="text-gray-300 leading-loose text-base md:text-lg">
                    {formatText(section.content)}
                  </div>
                </motion.section>
              ))}
          </main>
        </div>
      </div>

      {/* --- BACKGROUND GLOWS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[-20%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-20%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
