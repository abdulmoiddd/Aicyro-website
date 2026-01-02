import React from "react";
import Navbar from "../Essntials/Navbar";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

// Create a motion-enabled Link for the breadcrumb
const MotionLink = motion(Link);

const Start = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Fast stagger for snappy feel
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const breadcrumbVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4, // Wait for main content to finish
        duration: 0.5,
      },
    },
  };
  // --------------------------

  return (
    <div className="bg-[#0A0118] text-white pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* --- Header/Navbar Section --- */}
      <header className="absolute top-0 inset-x-0 z-50">
        <Navbar />
      </header>

      {/* --- Hero/Services Content Section --- */}
      {/* Converted to motion.main to handle the stagger effect */}
      <motion.main
        className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 'EXPERT SERVICES' Label */}
        <motion.div
          variants={itemVariants}
          className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[#677ED6] px-4 py-1.5 rounded-full mb-6 text-white"
        >
          EXPERT SERVICES
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
        >
          Our Services
        </motion.h1>

        {/* Subtitle/Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-lg text-white/90 max-w-3xl px-3"
        >
          Aicyro Solutions delivers end-to-end services that help startups and
          enterprises scale.
        </motion.p>
      </motion.main>

      {/* --- Breadcrumb Section --- */}
      <motion.div
        className="text-center pt-8 sm:pt-10"
        variants={breadcrumbVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-sm text-white/70 flex items-center justify-center gap-2">
          <MotionLink
            href="/"
            className="text-[#677ED6] font-medium"
            whileHover={{ scale: 1.05, color: "#8ea2ff" }} // Interactive hover
            whileTap={{ scale: 0.95 }}
          >
            Home
          </MotionLink>
          <span className="text-[#677ED6]">»</span>
          <span className="text-gray-400">Services</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Start;
