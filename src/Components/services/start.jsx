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
    // UPDATED: Background uses variable
    <div className="bg-[var(--background)] text-[var(--foreground)] pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
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
          // UPDATED: Border uses accent-blue variable, Text uses foreground
          className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[var(--accent-blue)] px-4 py-1.5 rounded-full mb-6 text-[var(--foreground)]"
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
          // UPDATED: Text color to foreground/90 or muted
          className="text-sm sm:text-lg text-[var(--foreground)]/90 max-w-3xl px-3"
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
        {/* UPDATED: Text colors use variables */}
        <p className="text-sm text-[var(--foreground)]/70 flex items-center justify-center gap-2">
          <MotionLink
            href="/"
            // UPDATED: Link color uses accent-blue variable
            className="text-[var(--accent-blue)] font-medium hover:text-[var(--primary)] transition-colors"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Home
          </MotionLink>
          {/* UPDATED: Separator color */}
          <span className="text-[var(--accent-blue)]">»</span>
          {/* UPDATED: Inactive text color */}
          <span className="text-[var(--foreground-muted)]">Services</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Start;
