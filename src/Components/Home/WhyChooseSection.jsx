"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  TrendingUp, 
  ShieldCheck, 
  MessageSquare, 
  Trophy 
} from "lucide-react";

const reasons = [
  {
    title: "Expert Engineers",
    subtitle: "AI + Cloud Native",
    desc: "We don't outsource. Our team combines deep AI expertise with modern cloud engineering to build systems that are smarter and faster.",
    icon: <BrainCircuit size={32} />,
  },
  {
    title: "Business-First Approach",
    subtitle: "ROI > Code",
    desc: "We solve business problems, not just technical ones. Every line of code is written with your revenue and growth goals in mind.",
    icon: <TrendingUp size={32} />,
  },
  {
    title: "Secure & Scalable",
    subtitle: "Enterprise Grade",
    desc: "Architecture built to handle millions of users. We embed security best practices from Day 1 to protect your data and reputation.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "Transparent Communication",
    subtitle: "No Black Boxes",
    desc: "You are a partner, not just a client. expect clear timelines, honest updates, and direct access to your project lead.",
    icon: <MessageSquare size={32} />,
  },
  {
    title: "Proven Results",
    subtitle: "Across Industries",
    desc: "From FinTech to Healthcare, we have a track record of delivering complex software that drives tangible business outcomes.",
    icon: <Trophy size={32} />,
  }
];

const WhyChooseSection = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[var(--background)] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--secondary)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 mb-6"
          >
            <span className="text-[var(--primary)] text-xs font-bold tracking-widest uppercase">
              The Aicyro Difference
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[var(--foreground)] leading-tight"
          >
            Why Leading Brands <br/> Choose <span className="text-[var(--primary)]">Aicyro</span>
          </motion.h2>
        </div>

        {/* --- Feature Grid --- */}
        <div className="flex flex-wrap justify-center gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Responsive Widths: Full on mobile, 1/2 on tablet, 1/3 on desktop (for top row)
              className={`group relative w-full md:w-[45%] lg:w-[30%] p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden hover:border-[var(--primary)]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--primary)]/10 flex flex-col`}
            >
              
              {/* Hover Gradient Overlay */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--primary)] opacity-[0.05] blur-[50px] rounded-full group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="mb-6 p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)] w-fit text-[var(--foreground-muted)] group-hover:text-[var(--primary)] group-hover:scale-110 transition-all duration-300 shadow-sm">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <div className="flex flex-col mb-3">
                    <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider mb-1 opacity-80">
                        {item.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--foreground)]">
                        {item.title}
                    </h3>
                </div>
                
                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;