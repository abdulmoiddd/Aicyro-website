import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Target } from "lucide-react";

const WHY_POINTS = [
  {
    icon: ShieldCheck,
    title: "Security-First Mindset",
    description: "We don't treat security as an afterthought. From architecture to deployment, every line of code is written with rigorous compliance and data protection protocols baked in."
  },
  {
    icon: Cpu,
    title: "AI-Native Solutions",
    description: "We leverage cutting-edge Large Language Models and automation agents to build intelligent systems that adapt, learn, and optimize themselves over time."
  },
  {
    icon: Target,
    title: "Business-Aligned Delivery",
    description: "We speak code, but we think in ROI. Every technical decision we make is directly mapped to your specific business KPIs, ensuring tangible value from day one."
  }
];

const WhyAicyro = () => {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
          >
            Why Aicyro?
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--primary)] mx-auto rounded-full" />
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_POINTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                {item.title}
              </h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyAicyro;