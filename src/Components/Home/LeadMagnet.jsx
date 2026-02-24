
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const LeadMagnet = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* --- BACKGROUND LAYER: Uses specific Lead Magnet variables --- */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, var(--lead-from), var(--lead-via), var(--lead-to))`,
        }}
      />

      {/* --- ANIMATED GLOW --- */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] blur-[120px] z-0 pointer-events-none"
        // UPDATED: Uses specific glow variable for better light mode control
        style={{ backgroundColor: "var(--lead-glow)" }}
      />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border border-[var(--border-color)] bg-[var(--primary)]/10 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-[var(--primary)]" />
          <span className="text-sm font-bold tracking-wide uppercase text-[var(--primary)]">
            Limited Availability
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-[var(--foreground)]"
        >
          Get a Free AI & Cybersecurity Audit
        </motion.h2>

        {/* SUPPORTING TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-[var(--foreground-muted)]"
        >
          We review your current systems and provide actionable insights to
          improve security, performance, and automation.
        </motion.p>

        {/* DIAGRAM TRIGGER: Visualizing the audit process to encourage sign-ups */}
        

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <a href="/contact">
            <button className="group relative inline-flex items-center justify-center text-lg font-bold px-10 py-4 rounded-full shadow-xl shadow-[var(--primary)]/30 bg-[var(--primary)] text-white transition-all duration-300 hover:scale-105">
              <span>Claim Free Audit</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />

              {/* Inner highlight ring */}
              <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;