// import React from "react";
// // Adjust the path if your Navbar is in a different folder (e.g., ../Components/Essntials/Navbar)
// import Navbar from "../Essntials/Navbar";
// import Link from "next/link";
// import { motion } from "framer-motion";

// // Create a motion-enabled Link for the breadcrumb
// const MotionLink = motion(Link);

// const BlogHero = () => {
//   // --- ANIMATION VARIANTS (Same as Aboutstart) ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
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
//       <motion.main
//         className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* 'Blog' Label - Using the same border color #677ED6 */}
//         <motion.div
//           variants={itemVariants}
//           className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[#677ED6] px-4 py-1.5 rounded-full mb-6 text-white"
//         >
//           Our Knowledge Hub
//         </motion.div>

//         {/* Main Title */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
//         >
//           Insights & Updates
//         </motion.h1>

//         {/* Subtitle/Description */}
//         <motion.p
//           variants={itemVariants}
//           className="text-sm sm:text-lg text-white/90 max-w-3xl px-3"
//         >
//           Explore expert articles on SaaS development, AI integration, and
//           cybersecurity strategies from the Aicyro Solutions team.
//         </motion.p>

//         {/* Breadcrumb Section */}
//         <motion.div className="text-center pt-8" variants={itemVariants}>
//           <p className="text-sm text-white/70">
//             <MotionLink
//               href="/"
//               className="text-[#677ED6]"
//               whileHover={{ scale: 1.1, color: "#8ea2ff" }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Home
//             </MotionLink>
//             <span className="mx-2 text-[#677ED6]">»</span>
//             <span className="text-gray-400">Blog</span>
//           </p>
//         </motion.div>
//       </motion.main>
//     </div>
//   );
// };

// export default BlogHero;

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
// Adjust the path if your Navbar is in a different folder (e.g., ../Components/Essntials/Navbar)
import Navbar from "../Essntials/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

// Create a motion-enabled Link for the breadcrumb
const MotionLink = motion(Link);

const BlogHero = () => {
  // --- ANIMATION VARIANTS (Same as Aboutstart) ---
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
  // --------------------------

  return (
    // UPDATED: Background uses variable
    <div className="bg-[var(--background)] text-[var(--foreground)] pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* --- Header/Navbar Section --- */}
      <header className="absolute top-0 inset-x-0 z-50">
        <Navbar />
      </header>

      {/* --- Hero/Content Section --- */}
      <motion.main
        className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 'Blog' Label - Using the same border color accent-blue */}
        <motion.div
          variants={itemVariants}
          // UPDATED: Border uses accent-blue variable, text uses foreground
          className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[var(--accent-blue)] px-4 py-1.5 rounded-full mb-6 text-[var(--foreground)]"
        >
          Our Knowledge Hub
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
        >
          Insights & Updates
        </motion.h1>

        {/* Subtitle/Description */}
        <motion.p
          variants={itemVariants}
          // UPDATED: Text color to foreground/90 or muted
          className="text-sm sm:text-lg text-[var(--foreground)]/90 max-w-3xl px-3"
        >
          Explore expert articles on SaaS development, AI integration, and
          cybersecurity strategies from the Aicyro Solutions team.
        </motion.p>

        {/* Breadcrumb Section */}
        <motion.div className="text-center pt-8" variants={itemVariants}>
          {/* UPDATED: Container text color */}
          <p className="text-sm text-[var(--foreground)]/70">
            <MotionLink
              href="/"
              // UPDATED: Link color uses accent-blue variable
              className="text-[var(--accent-blue)]"
              whileHover={{ scale: 1.1, color: "#8ea2ff" }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </MotionLink>
            {/* UPDATED: Separator uses accent-blue */}
            <span className="mx-2 text-[var(--accent-blue)]">»</span>
            {/* UPDATED: Current page text uses muted foreground */}
            <span className="text-[var(--foreground-muted)]">Blog</span>
          </p>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default BlogHero;
