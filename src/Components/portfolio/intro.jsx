import React from "react";
import { motion } from "framer-motion";

const PortfolioIntro = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Label Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-6"
        >
          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20">
            Proof of Execution
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6  text-[var(--foreground)]"
        >
          We don't just ship code. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
            We deliver outcomes.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed"
        >
          Real metrics, tangible ROI, and engineering aimed directly at your business goals.
        </motion.p>

      </div>
    </section>
  );
};

export default PortfolioIntro;