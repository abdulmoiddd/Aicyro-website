// // import React from "react";
// // // Assuming the Navbar component is in this relative path
// // import Navbar from "../Essntials/Navbar";
// // import Link from "next/link";
// // import { motion } from "framer-motion"; // Import Framer Motion

// // // Create a motion-enabled Link for the breadcrumb
// // const MotionLink = motion(Link);

// // const Contactstart = () => {
// //   // --- ANIMATION VARIANTS ---
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.2, // Delay between each child element appearing
// //         delayChildren: 0.1,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //         ease: "easeOut",
// //       },
// //     },
// //   };
// //   // --------------------------

// //   return (
// //     // Main container with dark background.
// //     <div className="bg-[#0A0118] text-white pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
// //       {/* --- Header/Navbar Section --- */}
// //       <header className="absolute top-0 inset-x-0 z-50">
// //         <Navbar />
// //       </header>

// //       {/* --- Hero/Content Section --- */}
// //       {/* Turned main into motion.main to orchestrate the entrance animations */}
// //       <motion.main
// //         className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
// //         variants={containerVariants}
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         {/* 'Contact us' Label */}
// //         <motion.div
// //           variants={itemVariants}
// //           className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[#677ED6] px-4 py-1.5 rounded-full mb-6 text-white"
// //         >
// //           Contact us
// //         </motion.div>

// //         {/* Main Title */}
// //         <motion.h1
// //           variants={itemVariants}
// //           className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
// //         >
// //           Get in touch
// //         </motion.h1>

// //         {/* Subtitle/Description */}
// //         <motion.p
// //           variants={itemVariants}
// //           className="text-sm sm:text-lg text-white/90 max-w-3xl px-3"
// //         >
// //           Start the conversation to build a strong relationship and a successful
// //           business.
// //         </motion.p>

// //         {/* Breadcrumb Section */}
// //         <motion.div className="text-center pt-8" variants={itemVariants}>
// //           <p className="text-sm text-white/70 flex items-center justify-center gap-2">
// //             <MotionLink
// //               href="/"
// //               className="text-[#677ED6]"
// //               whileHover={{ scale: 1.1, color: "#8ea2ff" }} // Interactive Hover
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               Home
// //             </MotionLink>
// //             <span className="text-[#677ED6]"> » </span>
// //             <span className="text-gray-400">Contact</span>
// //           </p>
// //         </motion.div>
// //       </motion.main>
// //     </div>
// //   );
// // };

// // export default Contactstart;

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// import React from "react";
// // Assuming the Navbar component is in this relative path
// import Navbar from "../Essntials/Navbar";
// import Link from "next/link";
// import { motion } from "framer-motion";

// // Create a motion-enabled Link for the breadcrumb
// const MotionLink = motion(Link);

// const Contactstart = () => {
//   // --- ANIMATION VARIANTS ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth "Apple-like" easing
//       },
//     },
//   };
//   // --------------------------

//   return (
//     // Main container: Added a subtle gradient at the bottom for depth
//     <div className="bg-[#0A0118] text-white pt-24 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[60vh] flex flex-col items-center">
//       {/* Background Glow Effect - Adds a tech feel behind the text */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#5B86D3] opacity-20 rounded-full blur-[120px] pointer-events-none" />

//       {/* --- Header/Navbar Section --- */}
//       <header className="absolute top-0 inset-x-0 z-50">
//         <Navbar />
//       </header>

//       {/* --- Hero/Content Section --- */}
//       <motion.main
//         className="relative z-10 flex flex-col items-center justify-center text-center max-w-6xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* 'Contact us' Label - Glassmorphism style */}
//         <motion.div
//           variants={itemVariants}
//           className="inline-flex items-center justify-center px-5 py-1.5 mb-8 text-xs font-bold tracking-widest text-[#Aebdfc] uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-sm shadow-[0_0_15px_rgba(103,126,214,0.2)]"
//         >
//           Contact us
//         </motion.div>

//         {/* Main Title - Split into logic segments for the 2-line effect */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl lg:text-6xl/tight font-bold mb-8 tracking-tight text-white"
//         >
//           {/* Line 1 */}
//           <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
//             We’re the Ones Powering Supply Chain With Tech —
//           </span>

//           {/* Line 2 - Slightly distinct color or weight if desired, currently matching */}
//           <span className="block mt-2 md:mt-4 text-[#E0E7FF]">
//             And We Don’t Charge for Conversations.
//           </span>
//         </motion.h1>

//         {/* Subtitle/Description */}
//         <motion.p
//           variants={itemVariants}
//           className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
//         >
//           Let's discuss how our technology can streamline your operations. No
//           hidden fees, just honest solutions.
//         </motion.p>

//         {/* Breadcrumb Section */}
//         <motion.div variants={itemVariants}>
//           <nav className="flex items-center justify-center gap-2 text-sm font-medium">
//             <MotionLink
//               href="/"
//               className="text-[#677ED6] transition-colors hover:text-[#8ea2ff]"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Home
//             </MotionLink>

//             <span className="text-white/20">/</span>

//             <span className="text-white/90">Contact</span>
//           </nav>
//         </motion.div>
//       </motion.main>
//     </div>
//   );
// };

// export default Contactstart;

//
//
//
//
//
//
//
// import React from "react";
// // Assuming the Navbar component is in this relative path
// import Navbar from "../Essntials/Navbar";
// import Link from "next/link";
// import { motion } from "framer-motion";

// // Create a motion-enabled Link for the breadcrumb
// const MotionLink = motion(Link);

// const Contactstart = () => {
//   // --- ANIMATION VARIANTS ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };
//   // --------------------------

//   return (
//     // UPDATED BACKGROUND: Radial gradient for a "spotlight" effect
//     <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b4b] via-[#0A0118] to-[#000000] text-white pt-24 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[60vh] flex flex-col items-center">
//       {/* Background decoration (Stars/Dust effect optional) */}
//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

//       {/* --- Header/Navbar Section --- */}
//       <header className="absolute top-0 inset-x-0 z-50">
//         <Navbar />
//       </header>

//       {/* --- Hero/Content Section --- */}
//       <motion.main
//         className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* 'Contact us' Label */}
//         <motion.div
//           variants={itemVariants}
//           className="inline-flex items-center justify-center px-5 py-1.5 mb-8 text-xs font-bold tracking-widest text-[#Aebdfc] uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
//         >
//           Contact us
//         </motion.div>

//         {/* Main Title - FORCED 2 LINES */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 tracking-tight text-white leading-[1.15]"
//         >
//           We’re the Ones Powering Supply Chain With Tech,
//           {/* This BR forces the line break on tablets/desktops to ensure exactly 2 lines */}
//           <br className="hidden md:block" />
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#6A5ACD] pt-2 ">
//             And We Don’t Charge for Conversations
//           </span>
//         </motion.h1>

//         {/* Subtitle/Description */}
//         <motion.p
//           variants={itemVariants}
//           className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
//         >
//           Let’s Build the Advantage That Moves You Ahead.
//         </motion.p>
//       </motion.main>
//     </div>
//   );
// };

// export default Contactstart;

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
//
//
//
//
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
    // UPDATED BACKGROUND: Radial gradient for a "spotlight" effect
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1e1b4b] via-[#0A0118] to-[#0B0219] text-white pt-24 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[60vh] flex flex-col items-center">
      {/* Background decoration (Stars/Dust effect optional) */}
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
          className="inline-flex items-center justify-center px-5 py-1.5 mb-8 text-xs font-bold tracking-widest text-[#Aebdfc] uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
        >
          Contact us
        </motion.div>

        {/* Main Title - FORCED 2 LINES */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 tracking-tight text-white leading-[1.15]"
        >
          We’re the Ones Powering Supply Chain With Tech,
          {/* This BR forces the line break on tablets/desktops to ensure exactly 2 lines */}
          <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#6A5ACD] pt-2 ">
            And We Don’t Charge for Conversations
          </span>
        </motion.h1>

        {/* Subtitle/Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Let’s Build the Advantage That Moves You Ahead.
        </motion.p>

        {/* --- NEW CTA BUTTON: Book a demo --- */}
        <motion.div variants={itemVariants}>
          <MotionLink
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0RhC80jLUhQlXUJt_BzXMRJrr6HuzRmIFuIDST0NaT9QhT_s8NyPGHGNWTRXiaUjOQ7nYWnu3K" // Update this path to your actual demo page
            className="inline-block px-8 py-4 text-sm font-bold text-white uppercase tracking-wider rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition-all"
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
