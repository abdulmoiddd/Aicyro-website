import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Code,
  GlobeLock,
  Bot,
  ArrowRight,
  Cpu,
  ShieldCheck,
  Terminal,
} from "lucide-react";

// --- CONFIGURATION: ICON MAPPING ---
// Mapped specifically for the 3 core services requested
const ICON_MAP = {
  ai: Bot,
  security: ShieldCheck,
  dev: Terminal,
  default: Code,
  arrow: ArrowRight,
};

// --- DATA: STATIC CONTENT (As requested) ---
const CORE_SERVICES_DATA = {
  tagline: "What We Do", // Optional tagline for layout balance
  mainHeading: "Our Core Services",
  description:
    "We design, build, and secure intelligent systems that help businesses operate safely and scale with confidence.",
  features: [
    {
      id: 1,
      title: "AI Solutions & Automation",
      description:
        "Automate workflows and improve decision-making using AI systems built for your business.",
      icon: "ai",
      // Image keywords for the smart image generator
      imageKeyword: "artificial intelligence", 
      button: { text: "Learn More", link: "/services" },
    },
    {
      id: 2,
      title: "Cybersecurity Services",
      description:
        "Protect your applications, infrastructure, and data with security-first solutions.",
      icon: "security",
      imageKeyword: "cyber security lock",
      button: { text: "Learn More", link: "/services" },
    },
    {
      id: 3,
      title: "Custom Software Development",
      description:
        "Build scalable, secure software tailored to your product and business needs.",
      icon: "dev",
      imageKeyword: "software coding",
      button: { text: "Learn More", link: "/services" },
    },
  ],
};

// --- OPTIMIZATION: IMAGE GENERATOR ---
const getSmartImage = (keyword) => {
  const params = "?q=80&w=800&auto=format&fit=crop";
  const normalized = keyword?.toLowerCase() || "";

  if (normalized.includes("ai") || normalized.includes("intelligence"))
    return `https://images.unsplash.com/photo-1677442136019-21780ecad995${params}`;
  if (normalized.includes("security") || normalized.includes("cyber"))
    return `https://images.unsplash.com/photo-1550751827-4bd374c3f58b${params}`;
  if (normalized.includes("software") || normalized.includes("coding"))
    return `https://images.unsplash.com/photo-1555066931-4365d14bab8c${params}`;

  // Fallback
  return `https://images.unsplash.com/photo-1451187580459-43490279c0fa${params}`;
};

const FeatureCard = ({ feature, itemVariants }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoize image src
  const imageSrc = useMemo(
    () => getSmartImage(feature.imageKeyword),
    [feature.imageKeyword]
  );

  // Dynamic Icon Renderer
  const IconComponent = ICON_MAP[feature.icon] || ICON_MAP.default;
  const ButtonIconComponent = ICON_MAP.arrow;

  // Smooth Physics
  const smoothTransition = { type: "spring", stiffness: 45, damping: 20 };

  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] p-8 sm:p-10 h-full transition-shadow duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 group"
    >
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={imageSrc}
          alt={feature.title}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-[2000ms] ease-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {/* Dark overlay ensures text readability on hover */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <motion.div
        layout
        transition={smoothTransition}
        className={`relative z-10 flex flex-col h-full w-full ${
          isHovered ? "items-center text-center" : "items-start text-left"
        }`}
      >
        {/* Icon */}
        <motion.div
          layout
          className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border transition-colors duration-500 ${
            isHovered
              ? "bg-indigo-600 text-white border-indigo-500 scale-110"
              : "bg-[var(--background)] text-indigo-400 border-[var(--border-color)]"
          }`}
        >
          <IconComponent className="w-7 h-7" />
        </motion.div>

        {/* Title */}
        <motion.h3
          layout="position"
          className={`text-2xl font-bold mb-4 ${
            isHovered ? "text-white" : "text-[var(--foreground)]"
          }`}
        >
          {feature.title}
        </motion.h3>

        {/* Description (Restricted to one sentence per requirements) */}
        <motion.p
          layout="position"
          className={`mb-8 leading-relaxed transition-colors duration-300 ${
            isHovered ? "text-gray-200" : "text-[var(--foreground-muted)]"
          }`}
        >
          {feature.description}
        </motion.p>

        {/* Button */}
        <div className="mt-auto pt-2">
          <motion.button
            layout
            onClick={() => window.location.href = feature.button.link}
            className={`
              relative flex items-center justify-center space-x-2 rounded-full text-sm font-semibold 
              transition-all duration-300
              ${
                isHovered
                  ? "bg-indigo-600 text-white px-8 py-3 shadow-lg shadow-indigo-500/50"
                  : "bg-transparent text-indigo-400 px-0 py-2 hover:text-indigo-500"
              }
            `}
          >
            <motion.span layout="position">{feature.button.text}</motion.span>
            <motion.div layout="position">
              <ButtonIconComponent className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN SECTION ---
const CoreServices = () => {
  const { tagline, mainHeading, description, features } = CORE_SERVICES_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  return (
    <motion.section
      className="bg-[var(--background)] text-[var(--foreground)] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.p
            variants={itemVariants}
            className="inline-block border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 text-[var(--secondary)] text-xs sm:text-sm tracking-widest uppercase px-5 py-2 mb-6 rounded-full font-semibold"
          >
            {tagline}
          </motion.p>
          <motion.h2 // Changed to H2 as per requirements
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[var(--foreground)]"
          >
            {mainHeading}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Grid - Set to 3 Columns specifically for the 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              itemVariants={itemVariants}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreServices;