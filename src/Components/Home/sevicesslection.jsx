"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Bot, 
  Rocket, 
  MonitorSmartphone, 
  CloudCog, 
  ShieldCheck, 
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    desc: "Tailor-made platforms designed to improve operations and customer experience.",
    icon: <Code2 size={28} />,
  },
  {
    id: 2,
    title: "AI & Machine Learning Solutions",
    desc: "Intelligent systems that automate workflows and unlock growth.",
    icon: <Bot size={28} />,
  },
  {
    id: 3,
    title: "SaaS Product Development",
    desc: "Launch and scale your SaaS product faster with modern architecture.",
    icon: <Rocket size={28} />,
  },
  {
    id: 4,
    title: "Web & Mobile App Development",
    desc: "High-performance apps built for speed, usability, and cross-platform compatibility.",
    icon: <MonitorSmartphone size={28} />,
  },
  {
    id: 5,
    title: "Cloud & DevOps Engineering",
    desc: "Secure infrastructure and deployment pipelines for 99.9% uptime.",
    icon: <CloudCog size={28} />,
  },
  {
    id: 6,
    title: "Cybersecurity Services",
    desc: "Protect your systems, users, and data with enterprise-grade security protocols.",
    icon: <ShieldCheck size={28} />,
  }
];

const ServicesSection = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-[var(--background)] overflow-hidden transition-colors duration-300">
      
      {/* --- Background Decor --- */}
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--primary)] text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            What We Deliver
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[var(--foreground)]"
          >
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Technical Expertise</span>
          </motion.h2>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Sub-Component: Service Card ---
const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--primary)]/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/5"
    >
      {/* Card Gradient Background (Subtle) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--card-gradient-start)] to-[var(--card-gradient-end)] opacity-100 z-0" />
      
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon + Arrow */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] group-hover:text-[var(--primary)] group-hover:border-[var(--primary)]/30 transition-colors duration-300 shadow-sm">
            {service.icon}
          </div>
          
          
        </div>

        {/* Text Content */}
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4 flex-grow">
          {service.desc}
        </p>

        {/* Decorative Bottom Line (Progress Bar style) */}
        <div className="w-full h-[2px] bg-[var(--border-color)] mt-auto rounded-full overflow-hidden">
            <div className="w-0 h-full bg-[var(--primary)] group-hover:w-full transition-all duration-700 ease-out" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;