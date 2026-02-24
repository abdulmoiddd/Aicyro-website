import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const PortfolioCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        
        {/* CARD CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl"
        >
          {/* Decorative Gradient Blob */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 p-10 md:p-16">
            
            {/* TEXT SIDE */}
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3" />
                Start your transformation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                Have a complex challenge?
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg leading-relaxed">
                We specialize in solving the problems that others can't. Let's discuss your architecture, bottlenecks, and growth goals.
              </p>
            </div>

            {/* BUTTON SIDE */}
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[var(--foreground)] text-[var(--background)] text-lg font-bold rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Let’s Build Your Solution
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                
                {/* Button Hover Fill */}
                <div className="absolute inset-0 bg-[var(--primary)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PortfolioCTA;