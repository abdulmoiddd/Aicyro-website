import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";

const Principle = () => {
  const [principleData, setPrincipleData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. FIREBASE DATA FETCHING EFFECT
  useEffect(() => {
    const principlesRef = ref(database, "principlesSection");

    const unsubscribe = onValue(
      principlesRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          setPrincipleData(fetchedData);
          setLoading(false);
        } else {
          console.log("No principles section data found.");
          setLoading(false);
        }
      },
      (error) => {
        console.error("Firebase read error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // --- ANIMATION VARIANTS ---
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 2. Handle Loading State
  if (loading) {
    return (
      <section className="bg-[#0B0219] text-white py-20 px-4 flex justify-center items-center min-h-[40vh]">
        <motion.div
          className="w-12 h-12 border-4 border-white/20 border-t-[#8A2BE2] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </section>
    );
  }

  if (!principleData) return null;

  const {
    tagline,
    mainHeading,
    subtext,
    stats,
    principlesList,
    imageAlt,
    imageUrl,
  } = principleData;

  return (
    <motion.section
      // FIXED: w-full and overflow-hidden prevent this section from breaking mobile width
      className="bg-[#0B0219] text-white py-16 md:py-32 px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">
        {/* === Column 1: Left Content === */}
        <motion.div className="md:col-span-1 space-y-6">
          <motion.p
            variants={itemVariants}
            className="inline-block border border-[#7B71DB]/50 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 text-[#BDB5FF]"
          >
            {tagline}
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold leading-tight text-white/95"
          >
            {mainHeading}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-400 font-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: subtext }}
          />

          <motion.div variants={itemVariants} className="flex space-x-8 pt-4">
            {stats &&
              stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-[#7B71DB]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-[#7B71DB]/80 mt-1 font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
          </motion.div>
        </motion.div>

        {/* === Column 2: Image === */}
        <motion.div
          // FIXED: Added aspect ratio and relative to ensure the image doesn't overflow container width
          className="md:col-span-1 rounded-2xl overflow-hidden mt-6 md:mt-0 relative aspect-[4/5] md:aspect-auto md:h-[500px] shadow-2xl border border-white/5"
          variants={imageVariants}
        >
          <Image
            src={imageUrl || "/fallback-image.jpg"}
            alt={imageAlt || "Core Principles"}
            fill
            className="object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out scale-105 hover:scale-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Subtle overlay to match theme */}
          <div className="absolute inset-0 bg-[#0B0219]/20 pointer-events-none" />
        </motion.div>

        {/* === Column 3: Right Content === */}
        <motion.div className="md:col-span-1 space-y-10 mt-10 md:mt-0">
          {principlesList &&
            principlesList.map((principle, index) => (
              <motion.div key={index} className="group" variants={itemVariants}>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-[#8F8BF9] bg-[#8F8BF9]/10 p-2 rounded-lg group-hover:bg-[#8F8BF9] group-hover:text-white transition-colors duration-300">
                    {index === 0 ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 20l-7-7 7-7 7 7-7 7z"
                        />
                        <path d="M16.5 10.5l-9 9" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="3" strokeWidth="2" />
                        <path
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#8F8BF9] transition-colors">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-400 pl-14 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Principle;
