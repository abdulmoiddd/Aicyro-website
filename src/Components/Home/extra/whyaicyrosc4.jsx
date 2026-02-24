import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WHY_AICYRO_DATA = [
  { id: 1, text: "AI-first security approach" },
  { id: 2, text: "Business-driven solutions (not generic tech delivery)" },
  { id: 3, text: "Secure-by-design architecture" },
  { id: 4, text: "Fast execution with long-term support mindset" },
];

const WhyAicyro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[var(--background)] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]"
          >
            Why Aicyro
          </motion.h2>
        </div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
        >
          {WHY_AICYRO_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex items-start space-x-4 p-4 rounded-xl transition-colors duration-300 hover:bg-[var(--card-bg)]/50"
            >
              <div className="flex-shrink-0 mt-1">
                {/* Minimal Icon: Using a subtle checkmark color to keep it clean */}
                <CheckCircle2 className="w-6 h-6 text-indigo-500" />
              </div>
              <p className="text-lg font-medium text-[var(--foreground-muted)]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAicyro;