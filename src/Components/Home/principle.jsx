import React from "react";
import { motion } from "framer-motion";
import { Award, Zap, Anchor } from "lucide-react";

const PrinciplesSection = () => {
  const principles = [
    {
      title: "Quality Above All",
      description:
        "We follow rigorous quality standards to deliver high-performance, reliable software that businesses can depend on with confidence.",
      icon: <Award className="w-8 h-8 text-[var(--foreground)]" />,
      color: "from-pink-500 to-rose-500", // Custom gradient for this card
    },
    {
      title: "Innovation at Heart",
      description:
        "We leverage AI, automation, and emerging technologies to build forward-thinking solutions that keep clients ahead of the curve.",
      icon: <Zap className="w-8 h-8 text-[var(--foreground)]" />,
      color: "from-cyan-400 to-blue-600",
    },
    {
      title: "Built to Last",
      description:
        "Our solutions are engineered for long-term scalability, stability, and retention — ensuring lasting value and sustained growth.",
      icon: <Anchor className="w-8 h-8 text-[var(--foreground)]" />,
      color: "from-purple-500 to-indigo-600",
    },
  ];

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    // UPDATED: Background uses variable
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)] overflow-hidden flex flex-col items-center justify-center transition-colors duration-300">
      {/* ==============================
          LIVE BACKGROUND: Digital Horizon
         ============================== */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* 1. Moving Grid Floor (Perspective) */}
        <div className="absolute bottom-0 w-full h-[60%] opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]">
          <motion.div
            animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            // UPDATED: Border uses variable
            className="w-full h-full border-t border-[var(--border-color)]"
            style={{
              // UPDATED: Grid lines use variable
              backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
                                      linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              transform: "perspective(500px) rotateX(60deg)",
              transformOrigin: "bottom center",
            }}
          />
        </div>

        {/* 2. Floating "Data" Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            // UPDATED: Particle color uses foreground (so it's dark on light mode, white on dark mode)
            className="absolute bg-[var(--foreground)] rounded-full opacity-0"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: "100%",
            }}
            animate={{
              y: -1000,
              opacity: [0, 0.3, 0], // Reduced opacity slightly for subtle effect
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}

        {/* 3. Ambient Glows */}
        {/* UPDATED: Uses primary/secondary vars with low opacity */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px]" />
      </div>

      {/* ==============================
          CONTENT
         ============================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* UPDATED: Text Color */}
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6 tracking-tight">
              Our Core {/* UPDATED: Gradient mapped to variables */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]">
                Principles
              </span>
            </h2>
            {/* UPDATED: Description Text Color */}
            <p className="max-w-2xl mx-auto text-[var(--foreground-muted)] text-lg font-light">
              The foundational pillars that ensure every line of code we write
              drives your business forward.
            </p>
          </motion.div>
        </div>

        {/* Unique Cards UI */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {principles.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col justify-between h-full"
            >
              {/* Card Background & Border Effect */}
              {/* UPDATED: Uses card-bg and border-color variables */}
              <div className="absolute inset-0 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xl transition-all duration-500 group-hover:border-[var(--primary)]/30" />

              {/* The "Glow" Gradient appearing on hover at the bottom */}
              <div
                className={`absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
              />

              {/* Card Content */}
              <div className="relative p-8 z-10 flex flex-col items-start h-full">
                {/* Unique Icon "Socket" Design */}
                <div className="mb-8 relative">
                  {/* Glowing ring behind icon */}
                  <div
                    className={`absolute -inset-2 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500`}
                  />
                  {/* UPDATED: Socket background matches main background to create cutout effect */}
                  <div className="relative w-16 h-16 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {/* Icon inherits color from declaration above */}
                    {React.cloneElement(item.icon, {
                      className: "w-8 h-8 transition-all duration-300",
                    })}
                  </div>
                </div>

                {/* UPDATED: Title Text */}
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--foreground)] group-hover:to-[var(--foreground-muted)] transition-all">
                  {item.title}
                </h3>

                {/* UPDATED: Description Text */}
                <p className="text-[var(--foreground-muted)] leading-relaxed group-hover:text-[var(--foreground)] transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Decorative Corner lines  */}
              {/* UPDATED: Border color variable */}
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[var(--border-color)] rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[var(--border-color)] rounded-bl-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
