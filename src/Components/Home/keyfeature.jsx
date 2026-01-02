import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
// ---------------------------------

const KeyFeature = () => {
  const [featureData, setFeatureData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2. FIREBASE DATA FETCHING EFFECT
  useEffect(() => {
    const featureRef = ref(database, "keyFeatureSection");

    const unsubscribe = onValue(
      featureRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          setFeatureData(fetchedData);
          setLoading(false);
        } else {
          console.log(
            "No Key Feature section data found at 'keyFeatureSection' path."
          );
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

  const columnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    hiddenRight: { opacity: 0, x: 50 },
    visibleRight: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1,
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

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
  };
  // --------------------------

  // 3. Handle Loading State
  if (loading) {
    return (
      <section className="bg-[#0B0219] text-white py-20 sm:py-24 px-4 flex justify-center items-center min-h-[50vh]">
        <motion.div
          className="w-16 h-16 border-4 border-white/20 border-t-[#8A2BE2] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </section>
    );
  }

  if (!featureData) {
    return (
      <section className="bg-[#0B0219] text-white py-20 sm:py-24 px-4 flex justify-center items-center">
        Error loading data or no features configured.
      </section>
    );
  }

  const {
    introTag,
    introHeading,
    introText,
    introButton,
    whyUsTag,
    whyUsHeading,
    whyUsSubtext,
    principlesList,
  } = featureData;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "clarity":
        return (
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L1 21h22L12 2zm0 3.99L18.82 19H5.18L12 5.99zM12 11l-3 5h6l-3-5z" />
          </svg>
        );
      case "perfection":
        return (
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v2m0 16v2m-7.64-16l1.41 1.41m12.72 12.72l1.41 1.41M2 12h2m16 0h2m-7.64 7.64l1.41-1.41M4.93 4.93l1.41-1.41" />
            <path d="M12 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            <path d="M12 18s-4 0-4-4 4-4 4-4 4 0 4 4-4 4-4 4z" />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
          </svg>
        );
    }
  };

  // 4. RENDER THE COMPONENT
  return (
    <motion.section
      // UPDATED: Added overflow-hidden to prevent animation scrollbars
      // UPDATED: Added w-full to ensure it takes full width of parent
      className="bg-[#0B0219] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* UPDATED: Added w-full here to constrain the max-width container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* === Left Column: Key Feature Introduction === */}
        <motion.div
          className="border border-gray-800 rounded-xl p-6 sm:p-8 md:p-12 shadow-lg relative bg-[#0B0219]/50 backdrop-blur-sm"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={itemVariants}
            className="inline-block border border-[#7B71DB]/50 rounded-full text-xs sm:text-sm tracking-widest uppercase px-4 py-1.5 font-bold text-white mb-6"
          >
            {introTag}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 lg:mb-8 break-words"
          >
            {introHeading}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-8 sm:mb-10 break-words"
            dangerouslySetInnerHTML={{ __html: introText }}
          />

          <motion.button
            onClick={() => window.open(introButton.link, "_blank")}
            className="bg-gradient-to-r from-[#7973DB] to-[#5B86D3] text-white font-semibold py-3 px-8 rounded-full shadow-lg w-full sm:w-auto"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(121, 115, 219, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {introButton.text}
          </motion.button>
        </motion.div>

        {/* === Right Column: Why Us & Principles === */}
        <motion.div
          className="md:col-span-1 w-full"
          variants={columnVariants}
          initial="hiddenRight"
          whileInView="visibleRight"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={itemVariants}
            className="inline-block border border-[#7B71DB] text-xs sm:text-sm tracking-widest font-bold uppercase px-4 py-1.5 text-white mb-6 rounded-full"
          >
            {whyUsTag}
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 sm:mb-6 break-words"
            dangerouslySetInnerHTML={{ __html: whyUsHeading }}
          />

          <motion.div
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-10 sm:mb-12 break-words"
            dangerouslySetInnerHTML={{ __html: whyUsSubtext }}
          />

          {/* --- Principles List --- */}
          <div className="space-y-8 w-full">
            {principlesList.map((principle, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 w-full"
                variants={featureItemVariants}
              >
                <div className="flex-shrink-0 bg-gradient-to-r from-[#7973DB] to-[#5B86D3] p-3 rounded-full border border-indigo-700 flex items-center justify-center">
                  {renderIcon(principle.icon)}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 break-words">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 break-words">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default KeyFeature;
