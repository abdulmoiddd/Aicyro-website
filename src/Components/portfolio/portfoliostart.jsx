import React from "react";
// Assuming the Navbar component is in this relative path
import Navbar from "../Essntials/Navbar";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

// Create a motion-enabled Link
const MotionLink = motion(Link);

// Renamed to PascalCase (React requirement)
const PortfolioStart = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const breadcrumbVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };
  // --------------------------

  return (
    // UPDATED: Background and text colors use variables
    <div className="bg-[var(--background)] text-[var(--foreground)] pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* --- Header/Navbar Section --- */}
      <header className="absolute top-0 inset-x-0 z-50">
        <Navbar />
      </header>

      {/* --- Hero/Services Content Section --- */}
      {/* We use motion.main to orchestrate the stagger effect */}
      <motion.main
        className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
        >
          Our Projects
        </motion.h1>

        {/* Subtitle/Description */}
        <motion.p
          variants={itemVariants}
          // UPDATED: Text color uses foreground with opacity or muted variable
          className="text-sm sm:text-lg text-[var(--foreground)]/90 max-w-4xl px-3"
        >
          Aicyro Solutions delivers secure, scalable, and AI-powered digital
          solutions to help businesses innovate faster and operate smarter. Our
          expertise spans SaaS, cybersecurity, and cloud technologies tailored
          to your growth.
        </motion.p>
      </motion.main>

      {/* --- Breadcrumb Section --- */}
      <motion.div
        className="text-center pt-8 sm:pt-10"
        variants={breadcrumbVariants}
        initial="hidden"
        animate="visible"
      >
        {/* UPDATED: Inactive text uses muted variable */}
        <p className="text-sm text-[var(--foreground)]/70 flex items-center justify-center gap-2">
          <MotionLink
            href="/"
            // UPDATED: Link color uses accent-blue variable
            className="text-[var(--accent-blue)]"
            whileHover={{ scale: 1.1, color: "#8ea2ff" }} // Interactive Hover
            whileTap={{ scale: 0.95 }}
          >
            Home
          </MotionLink>
          {/* UPDATED: Separator uses accent-blue */}
          <span className="text-[var(--accent-blue)]">»</span>
          {/* UPDATED: Current page text uses muted foreground */}
          <span className="text-[var(--foreground-muted)]">Portfolio</span>
        </p>
      </motion.div>
    </div>
  );
};

export default PortfolioStart;
