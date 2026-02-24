"use client";


import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Clock, 
  Users, 
  Activity, 
  ShieldAlert, 
  BrainCircuit, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const problems = [
  {
    icon: <Clock size={28} />,
    title: "Projects going over budget or deadline",
    desc: "Missed milestones and creeping costs killing your momentum."
  },
  {
    icon: <Users size={28} />,
    title: "Difficulty finding the right technical team",
    desc: "Sifting through freelancers who don't understand your vision."
  },
  {
    icon: <Activity size={28} />,
    title: "Poor performance & scalability issues",
    desc: "Apps that crash or lag when your user base starts to grow."
  },
  {
    icon: <ShieldAlert size={28} />,
    title: "Security and compliance concerns",
    desc: "Vulnerabilities that put your user data and business at risk."
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "Lack of AI expertise in execution",
    desc: "Falling behind competitors who are leveraging AI effectively."
  }
];

const ProblemSection = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[var(--background)] overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--secondary)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADING (Centered) --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] mb-6 shadow-sm"
          >
            <AlertCircle size={14} className="text-[var(--accent-blue)]" />
            <span className="text-[var(--foreground-muted)] text-xs font-bold tracking-widest uppercase">
              The Reality Check
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[var(--foreground)] leading-tight"
          >
            Struggling to Build Reliable Software That Actually Drives <span className="text-[var(--accent-blue)]">Business Growth?</span>
          </motion.h2>
        </div>

        {/* --- PAIN POINTS (Centered Layout) --- */}
        {/* Changed from 'grid' to 'flex justify-center' to perfectly center the last row */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Fixed width constraints for responsive layout (Full width mobile, 45% tablet, 30% desktop)
              className="group relative w-full md:w-[45%] lg:w-[30%] p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/5 flex flex-col items-center text-center"
            >
              {/* Icon Centered */}
              <div className="mb-6 p-4 rounded-xl bg-[var(--background)] w-fit text-[var(--foreground-muted)] group-hover:text-[var(--primary)] group-hover:bg-[var(--primary)]/10 transition-colors duration-300 border border-[var(--border-color)] shadow-sm">
                {item.icon}
              </div>
              
              {/* Text Centered */}
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- THE SOLUTION (Centered) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 md:p-14 overflow-hidden text-center border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl shadow-[var(--background)]/50"
        >
          {/* Subtle Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--card-gradient-start)] to-[var(--card-gradient-end)] z-0" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0" />
          
          {/* Inner Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="bg-[var(--primary)]/10 p-4 rounded-full border border-[var(--primary)]/20 shadow-[0_0_20px_-5px_var(--primary)]">
              <CheckCircle2 size={32} className="text-[var(--primary)]" />
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-[var(--foreground)]">
              That’s where <span className="text-[var(--primary)]">Aicyro</span> comes in.
            </h3>
            
            <p className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl leading-relaxed">
              We don't just write code. We build <span className="text-[var(--foreground)] font-semibold border-b border-[var(--primary)]/50 pb-0.5">future-proof software</span> designed specifically for your growth stage.
            </p>

            {/* <motion.button 
              
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-10 py-4 rounded-full bg-[var(--primary)] text-white font-semibold text-lg shadow-xl shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/40 transition-all duration-300"
            >
              Start Building with Aicyro
            </motion.button> */}

            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-10 py-4 rounded-full bg-[var(--primary)] text-white font-semibold text-lg shadow-xl shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/40 transition-all duration-300"
              >
                Start Building with Aicyro
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;