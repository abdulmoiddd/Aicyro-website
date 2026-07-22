// import React from "react";
// // Assuming the Navbar component is in this relative path
// import Navbar from "../Essntials/Navbar";
// import Link from "next/link";
// import { motion } from "framer-motion"; // Import Framer Motion

// // Create a motion-enabled Link for the breadcrumb
// const MotionLink = motion(Link);

// const Aboutstart = () => {
//   // --- ANIMATION VARIANTS ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // Delay between each child element appearing
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };
//   // --------------------------

//   return (
//     // Main container with dark background.
//     <div className="bg-[#0A0118] text-white pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* --- Header/Navbar Section --- */}
//       <header className="absolute top-0 inset-x-0 z-50">
//         <Navbar />
//       </header>

//       {/* --- Hero/Content Section --- */}
//       {/* We turn the main container into a motion component to orchestrate the stagger effect */}
//       <motion.main
//         className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* 'Our Story' Label */}
//         <motion.div
//           variants={itemVariants}
//           className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[#677ED6] px-4 py-1.5 rounded-full mb-6 text-white"
//         >
//           Our Story
//         </motion.div>

//         {/* Main Title */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
//         >
//           About Us
//         </motion.h1>

//         {/* Subtitle/Description */}
//         <motion.p
//           variants={itemVariants}
//           className="text-sm sm:text-lg text-white/90 max-w-3xl px-3"
//         >
//           Aicyro Solutions was founded to design and secure technology that
//           makes businesses stronger.
//         </motion.p>

//         {/* Breadcrumb Section */}
//         <motion.div className="text-center pt-8" variants={itemVariants}>
//           <p className="text-sm text-white/70">
//             <MotionLink
//               href="/"
//               className="text-[#677ED6]"
//               whileHover={{ scale: 1.1, color: "#8ea2ff" }} // Interactive Hover
//               whileTap={{ scale: 0.95 }}
//             >
//               Home
//             </MotionLink>
//             <span className="mx-2 text-[#677ED6]">»</span>
//             <span className="text-gray-400">About</span>
//           </p>
//         </motion.div>
//       </motion.main>
//     </div>
//   );
// };

// export default Aboutstart;

//
//
//
//
//
//
//
//
//
//
//
//
//
import React from "react";
// Assuming the Navbar component is in this relative path
import Navbar from "../Essntials/Navbar";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

// Create a motion-enabled Link for the breadcrumb
const MotionLink = motion(Link);

const Aboutstart = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child element appearing
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
  // --------------------------

  return (
    // UPDATED: Background and text colors use variables
    <div className="bg-[var(--background)] text-[var(--foreground)] pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* --- Header/Navbar Section --- */}
      <header className="absolute top-0 inset-x-0 z-50">
        <Navbar />
      </header>

      {/* --- Hero/Content Section --- */}
      {/* We turn the main container into a motion component to orchestrate the stagger effect */}
      <motion.main
        className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 'Our Story' Label */}
        <motion.div
          variants={itemVariants}
          // UPDATED: Border uses accent-blue, text uses foreground
          className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[var(--accent-blue)] px-4 py-1.5 rounded-full mb-6 text-[var(--foreground)]"
        >
          Our Story
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
        >
          About Us
        </motion.h1>

        {/* Subtitle/Description */}
        <motion.p
          variants={itemVariants}
          // UPDATED: Text color with opacity using foreground variable
          className="text-sm sm:text-lg text-[var(--foreground)]/90 max-w-3xl px-3"
        >
          Aicyro Solutions was founded to design and secure technology that
          makes businesses stronger.
        </motion.p>

        {/* Breadcrumb Section */}
        <motion.div className="text-center pt-8" variants={itemVariants}>
          {/* UPDATED: Wrapper text color */}
          <p className="text-sm text-[var(--foreground)]/70">
            <MotionLink
              href="/"
              // UPDATED: Link color uses accent-blue variable, hover uses primary variable
              className="text-[var(--accent-blue)] hover:text-[var(--primary)] transition-colors"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
            >
              Home
            </MotionLink>
            {/* UPDATED: Separator color */}
            <span className="mx-2 text-[var(--accent-blue)]">»</span>
            {/* UPDATED: Current page text uses muted variable */}
            <span className="text-[var(--foreground-muted)]">About</span>
          </p>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Aboutstart;
