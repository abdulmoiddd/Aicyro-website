import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, Maximize, Handshake } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      title: "Security-First Software Development",
      description:
        "Cybersecurity is embedded into every layer of our solutions to protect systems, data, and users.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
    {
      title: "AI as a Core Foundation",
      description:
        "We integrate intelligence at the architectural level — enhancing automation, insights, and efficiency.",
      icon: <BrainCircuit className="w-6 h-6 text-white" />,
    },
    {
      title: "Scalable by Design",
      description:
        "Our platforms are built to grow without re-engineering, downtime, or performance loss.",
      icon: <Maximize className="w-6 h-6 text-white" />,
    },
    {
      title: "Long-Term Technology Partner",
      description:
        "We focus on retention, reliability, and continuous improvement — not one-off projects.",
      icon: <Handshake className="w-6 h-6 text-white" />,
    },
  ];

  // --- ANIMATION VARIANTS ---
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      className="bg-[#0B0219] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* === Header === */}
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Why Businesses Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7973DB] to-[#5B86D3]">
              Aicyro Solutions
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light"
          >
            Empowering your digital future with stability, intelligence, and
            security.
          </motion.p>
        </div>

        {/* === 2x2 Grid Layout === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start p-8 rounded-2xl border border-gray-800 bg-[#0B0219]/50 backdrop-blur-sm hover:border-[#7B71DB] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(123,113,219,0.1)]"
            >
              {/* Icon Container - Fixed size and shrink prevention */}
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7973DB] to-[#5B86D3] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7B71DB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseSection;
