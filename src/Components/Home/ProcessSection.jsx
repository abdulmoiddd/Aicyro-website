"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  PenTool, 
  Cpu, 
  Rocket 
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    desc: "We don't just start coding. We dive deep into your business goals, user personas, and technical requirements to build a roadmap that ensures success from Day 1.",
    icon: <Search size={28} />,
  },
  {
    id: "02",
    title: "Design & Architecture",
    desc: "Our architects design scalable cloud systems while our designers create intuitive, high-converting UI/UX prototypes. This serves as the unshakeable blueprint for your product.",
    icon: <PenTool size={28} />,
  },
  {
    id: "03",
    title: "Agile Development & QA",
    desc: "We execute in rapid 2-week sprints. Continuous Integration (CI/CD) and automated testing mean you get bug-free features delivered faster, keeping you ahead of the market.",
    icon: <Cpu size={28} />,
  },
  {
    id: "04",
    title: "Launch & Long-Term Scale",
    desc: "Deployment is just the beginning. We monitor performance 24/7, optimize infrastructure costs, and provide ongoing support to scale your user base securely.",
    icon: <Rocket size={28} />,
  }
];

const ProcessSection = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[var(--background)] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-[var(--primary)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-6"
          >
            The <span className="text-[var(--primary)]">Aicyro</span> Blueprint
          </motion.h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
            A battle-tested workflow designed to eliminate risk and deliver high-performance software on time and on budget.
          </p>
        </div>

        {/* --- Vertical Circuit Layout --- */}
        <div className="relative flex flex-col gap-12">
          
          {/* The Vertical Connecting Line (Absolute Left) */}
          <div className="absolute left-[28px] md:left-[50%] top-4 bottom-4 w-[2px] bg-[var(--border-color)] -translate-x-1/2 z-0">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent opacity-50" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative z-10 flex flex-col md:flex-row items-center gap-8 ${
                // Alternate alignment for desktop zig-zag effect
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              
              {/* 1. The Step Marker (Center Node) */}
              {/* On Mobile: Left aligned. On Desktop: Centered. */}
              <div className="absolute left-[28px] md:left-[50%] -translate-x-1/2 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[var(--card-bg)] border-2 border-[var(--border-color)] flex items-center justify-center shadow-[0_0_20px_-5px_var(--background)] z-20 group-hover:border-[var(--primary)] transition-colors duration-500">
                   <div className="text-[var(--primary)]">{step.icon}</div>
                </div>
              </div>

              {/* 2. The Content Card (Left or Right) */}
              <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${
                 // Text alignment based on side
                 index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
              }`}>
                <div className="group relative p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/5 overflow-hidden">
                   
                   {/* Background Gradient on Hover */}
                   <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   {/* Big Number Background */}
                   <span className="absolute -bottom-4 -right-4 text-9xl font-bold text-[var(--foreground)] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300 select-none pointer-events-none">
                     {step.id}
                   </span>

                   <div className="relative z-10">
                     <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                       {step.title}
                     </h3>
                     <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                       {step.desc}
                     </p>
                   </div>
                </div>
              </div>

              {/* 3. Empty Spacer for the other side (Desktop only) */}
              <div className="hidden md:block w-[45%]" />

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProcessSection;