import React from "react";
// Assuming the Navbar component is in this relative path
import Navbar from "../Essntials/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

// Create a motion-enabled Link for smooth animations
const MotionLink = motion(Link);

const Contactstart = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  // --------------------------

  return (
    // UPDATED BACKGROUND: Uses CSS variables for the spotlight effect
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)] text-[var(--foreground)] pt-24 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[60vh] flex flex-col items-center transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      {/* --- Header/Navbar Section --- */}
      <header className="absolute top-0 inset-x-0 z-50">
        <Navbar />
      </header>

      {/* --- Hero/Content Section --- */}
      <motion.main
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 'Contact us' Label */}
        <motion.div
          variants={itemVariants}
          // UPDATED: Replaced #Aebdfc and hardcoded borders/bg with variables
          className="inline-flex items-center justify-center px-5 py-1.5 mb-8 text-xs font-bold tracking-widest text-[var(--accent-blue)] uppercase bg-[var(--card-bg)]/30 border border-[var(--border-color)] rounded-full backdrop-blur-md"
        >
          Contact us
        </motion.div>

        {/* Main Title - FORCED 2 LINES */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 tracking-tight text-[var(--foreground)] leading-[1.15]"
        >
          We’re the Ones Powering Supply Chain With Tech,
          {/* This BR forces the line break on tablets/desktops to ensure exactly 2 lines */}
          <br className="hidden md:block" />
          {/* UPDATED: Replaced hex gradient with primary/secondary variables */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] pt-2 ">
            And We Don’t Charge for Conversations
          </span>
        </motion.h1>

        {/* Subtitle/Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Let’s Build the Advantage That Moves You Ahead.
        </motion.p>

        {/* --- NEW CTA BUTTON: Book a demo --- */}
        <motion.div variants={itemVariants}>
          <MotionLink
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0RhC80jLUhQlXUJt_BzXMRJrr6HuzRmIFuIDST0NaT9QhT_s8NyPGHGNWTRXiaUjOQ7nYWnu3K" // Update this path to your actual demo page
            // UPDATED: Replaced hex gradient and specific shadow color with variables
            className="inline-block px-8 py-4 text-sm font-bold text-white uppercase tracking-wider rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(138,43,226,0.6)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a demo now
          </MotionLink>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Contactstart;
