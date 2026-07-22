import React from "react";
import { motion } from "framer-motion";

const ServicesIntro = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden bg-[var(--background)]">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Gradient Overlay using Global Theme Variables */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, var(--hero-from), transparent 70%)`
        }}
      />
      
      {/* 2. Grid Pattern for Technical Feel */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* ANIMATED BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full border backdrop-blur-md"
          style={{
            borderColor: "rgba(138, 43, 226, 0.3)", // Primary with low opacity
            backgroundColor: "rgba(138, 43, 226, 0.05)",
          }}
        >
          <span 
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--primary)" }}
          >
            Our Expertise
          </span>
        </motion.div>

        {/* MAIN HEADING (H1) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight"
          style={{ color: "var(--foreground)" }}
        >
          Engineering <span style={{ color: "var(--primary)" }}>Intelligence</span> for <br className="hidden sm:block" />
          Complex Business Problems.
        </motion.h1>

        {/* SUPPORTING TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          style={{ color: "var(--foreground-muted)" }}
        >
          We build for ambitious startups and enterprises who need more than just code. 
          Whether you need to <span className="text-[var(--foreground)] font-semibold">secure your infrastructure</span>, <span className="text-[var(--foreground)] font-semibold">automate operations</span>, or <span className="text-[var(--foreground)] font-semibold">scale your product</span>, 
          we provide the technical foundation to make it happen.
        </motion.p>

      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
};

export default ServicesIntro;