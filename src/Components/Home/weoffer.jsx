import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
import {
  Code,
  GlobeLock,
  FileCheck,
  ChartColumnIncreasing,
  Bot,
  LayoutGrid,
  LayoutTemplate,
  CloudUpload,
  CircleCheckBig,
  Zap,
  Info,
  ArrowRight,
} from "lucide-react";

// --- OPTIMIZATION 1: ICON MAPPING OBJECT ---
const ICON_MAP = {
  code: Code,
  lock_globe: GlobeLock,
  CloudUpload: CloudUpload,
  CircleCheckBig: CircleCheckBig,
  Bot: Bot,
  LayoutTemplate: LayoutTemplate,
  LayoutGrid: LayoutGrid,
  ChartColumnIncreasing: ChartColumnIncreasing,
  document_check: FileCheck,
  lightning: Zap,
  default: Info,
  arrow: ArrowRight,
};

// --- OPTIMIZATION 2: REDUCED IMAGE SIZE ---
const getSmartImage = (title) => {
  const normalizedTitle = title?.toLowerCase() || "";
  const params = "?q=80&w=800&auto=format&fit=crop";

  if (normalizedTitle.includes("saas"))
    return `https://images.unsplash.com/photo-1555066931-4365d14bab8c${params}`;
  if (normalizedTitle.includes("cyber") || normalizedTitle.includes("security"))
    return `https://images.unsplash.com/photo-1563986768609-322da13575f3${params}`;
  if (
    normalizedTitle.includes("ai") ||
    normalizedTitle.includes("intelligence")
  )
    return `https://images.unsplash.com/photo-1677442136019-21780ecad995${params}`;
  if (normalizedTitle.includes("qa") || normalizedTitle.includes("automation"))
    return `https://images.unsplash.com/photo-1518770660439-4636190af475${params}`;
  if (normalizedTitle.includes("cloud") || normalizedTitle.includes("devops"))
    return `https://images.unsplash.com/photo-1451187580459-43490279c0fa${params}`;
  if (normalizedTitle.includes("web"))
    return `https://images.unsplash.com/photo-1547658719-da2b51169166${params}`;
  if (normalizedTitle.includes("app"))
    return `https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c${params}`;
  if (normalizedTitle.includes("block") || normalizedTitle.includes("chain"))
    return `https://images.unsplash.com/photo-1639762681485-074b7f938ba0${params}`;

  return `https://images.unsplash.com/photo-1550751827-4bd374c3f58b${params}`;
};

const FeatureCard = ({ feature, itemVariants }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoize image src
  const imageSrc = useMemo(
    () => feature.image || getSmartImage(feature.title),
    [feature]
  );

  // Dynamic Icon Renderer
  const IconComponent = ICON_MAP[feature.icon] || ICON_MAP.default;
  const ButtonIconComponent = ICON_MAP[feature.button.icon] || ICON_MAP.arrow;

  // --- OPTIMIZATION 3: SMOOTH PHYSICS CONFIG ---
  const smoothTransition = { type: "spring", stiffness: 45, damping: 20 };

  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      // UPDATED: Colors use CSS variables
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
          // UPDATED: Default state uses var(--background) and border variable
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
          // UPDATED: Text color logic -> If hovered, WHITE (on dark image), else var(--foreground)
          className={`text-2xl font-bold mb-4 ${
            isHovered ? "text-white" : "text-[var(--foreground)]"
          }`}
        >
          {feature.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          layout="position"
          // UPDATED: Text color logic -> If hovered, Gray-200 (on dark image), else var(--foreground-muted)
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
            onClick={() => window.open(feature.button.link, "_blank")}
            className={`
              relative flex items-center justify-center space-x-2 rounded-full text-sm font-semibold 
              transition-all duration-300
              ${
                isHovered
                  ? "bg-indigo-600 text-white px-8 py-3 shadow-lg shadow-indigo-500/50"
                  : "bg-transparent text-indigo-400 px-0 py-2"
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
const WeOffer = () => {
  const [featureData, setFeatureData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const offerRef = ref(database, "weOfferSection");
    const unsubscribe = onValue(
      offerRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          const featuresArray = Object.values(fetchedData.features || {});
          setFeatureData({ ...fetchedData, features: featuresArray });
        } else {
          console.log("No data found.");
        }
        setLoading(false);
      },
      (error) => {
        console.error("Firebase error:", error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

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

  if (loading) {
    return (
      // UPDATED: Background variable
      <section className="bg-[var(--background)] py-24 flex justify-center items-center min-h-[50vh]">
        <motion.div
          className="w-16 h-16 border-4 border-[var(--foreground)]/20 border-t-[#8A2BE2] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </section>
    );
  }

  if (!featureData) return null;

  const { tagline, mainHeading, description, features } = featureData;

  return (
    <motion.section
      // UPDATED: Background and text color variables
      className="bg-[var(--background)] text-[var(--foreground)] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            variants={itemVariants}
            // UPDATED: Tagline colors mapped to vars
            className="inline-block border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 text-[var(--secondary)] text-xs sm:text-sm tracking-widest uppercase px-5 py-2 mb-6 rounded-full font-semibold"
          >
            {tagline}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            // UPDATED: Heading color
            className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[var(--foreground)]"
          >
            {mainHeading}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            // UPDATED: Description color
            className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              itemVariants={itemVariants}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WeOffer;
