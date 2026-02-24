
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../Components/Essntials/Navbar";
import Footer from "../../Components/Essntials/footer";
import Seo from "../../Components/Essntials/Seo";

// --- FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
import LeadMagnet from "@/Components/Home/AIReadinessTeaser";

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

const AISolutions = () => {
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FIREBASE DATA FETCHING ---
  useEffect(() => {
    // Pointing to the new AI Solutions path
    const serviceRef = ref(database, "Servicessubpages/AISolutions");
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
        {/* Handles standard bullets, checkmarks, or numbered lists starting with digit */}
        {line.trim().startsWith("•") ||
        line.trim().startsWith("✔") ||
        line.trim().match(/^\d\./) ? (
          // UPDATED: Text color using foreground-muted
          <span className="block pl-4 mb-2 text-[var(--foreground-muted)]/90">
            {/* UPDATED: Bullet color using accent-blue */}
            <span className="text-[var(--accent-blue)] mr-2">
              {line.trim().startsWith("✔") ? "✔" : "•"}
            </span>
            {line
              .trim()
              .replace(/^[•✔]|\d\./, "")
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
      // UPDATED: Background and Accent color
      <div className="bg-[var(--background)] min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[var(--accent-blue)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error || !serviceData)
    return (
      // UPDATED: Background and Error Text
      <div className="bg-[var(--background)] min-h-screen flex justify-center items-center text-red-400">
        {error}
      </div>
    );

  return (
    // UPDATED: Background and Text variables
    <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)] relative font-sans selection:bg-[var(--accent-blue)] selection:text-white transition-colors duration-300">
      <Seo
        title={serviceData.Title}
        description={serviceData["Meta Description"]}
        url="/services/aisolutions"
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
            // UPDATED: Badge colors
            className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent-blue)] text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase mb-6 bg-[var(--accent-blue)]/10"
          >
            Intelligent Automation
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            AI Solutions <br />
            {/* UPDATED: Gradient text using Accent/Primary vars */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]">
              in 2025
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            // UPDATED: Text color
            className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg"
          >
            {serviceData["Meta Description"]}
          </motion.p>

          {/* DIAGRAM TRIGGER: Visualizing the AI ecosystem */}
          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
             
          </motion.div>
        </motion.div>

        {/* --- MAIN LAYOUT WITH STICKY SIDEBAR --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          {/* --- LEFT: STICKY TABLE OF CONTENTS --- */}
          <aside className="lg:col-span-3 hidden lg:block relative">
            {/* The sticky class here ensures the TOC moves with scroll but stays in view */}
            {/* UPDATED: Border color */}
            <div className="sticky top-32 space-y-2 border-l border-[var(--border-color)] pl-6">
              <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider mb-4">
                Contents
              </h3>
              <ul className="space-y-4">
                {serviceData.Sections &&
                  serviceData.Sections.map((section, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        // UPDATED: Link colors
                        className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-left"
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
            
            {/* DIAGRAM TRIGGER: Visualizing the lifecycle before detailed sections */}
            <div className="mb-8">
               
            </div>

            {serviceData.Sections &&
              serviceData.Sections.map((section, idx) => (
                <motion.section
                  key={idx}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  // UPDATED: Card background and border
                  className="bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-3xl p-8 md:p-10 hover:border-[var(--accent-blue)]/30 transition-all duration-300"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-6">
                    {section.title}
                  </h2>
                  {/* UPDATED: Body Text Color */}
                  <div className="text-[var(--foreground-muted)] leading-loose text-base md:text-lg">
                    {formatText(section.content)}
                  </div>
                </motion.section>
              ))}
          </main>
        </div>
      </div>

      <LeadMagnet />


      {/* --- BACKGROUND GLOWS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* UPDATED: Glow colors using variables */}
        <div className="absolute top-0 left-[-20%] w-[50vw] h-[50vw] bg-[var(--primary)]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-20%] w-[50vw] h-[50vw] bg-[var(--secondary)]/20 rounded-full blur-[120px]" />
      </div>

      <Footer />
    </div>
  );
};

export default AISolutions;