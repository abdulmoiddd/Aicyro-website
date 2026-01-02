// import React from "react";
// import Head from "next/head";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Navbar from "../Components/Essntials/Navbar";
// import Footer from "../Components/Essntials/footer";
// import Favicon from "../assets/favicon.png";

// const NotFoundPage = () => {
//   // Animation variants
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

//   const numberVariants = {
//     hidden: { opacity: 0, scale: 0.5 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const floatingAnimation = {
//     y: [0, -20, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   };

//   return (
//     <div className="bg-[#0B0219] min-h-screen flex flex-col">
//       <Head>
//         <title>404 - Page Not Found | Aicyro Solutions</title>
//         <meta
//           name="description"
//           content="The page you are looking for does not exist."
//         />
//         <link rel="icon" href={Favicon.src} />
//       </Head>

//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <motion.main
//         className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="max-w-4xl mx-auto text-center">
//           {/* 404 Number */}
//           <motion.div className="relative mb-8" variants={numberVariants}>
//             <motion.h1
//               className="text-9xl sm:text-[12rem] md:text-[14rem] lg:text-[16rem] font-bold leading-none"
//               animate={floatingAnimation}
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] via-[#7B71DB] to-[#6A5ACD]">
//                 4
//               </span>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B71DB] via-[#6A5ACD] to-[#8A2BE2]">
//                 0
//               </span>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6A5ACD] via-[#8A2BE2] to-[#7B71DB]">
//                 4
//               </span>
//             </motion.h1>

//             {/* Decorative circles */}
//             <motion.div
//               className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#7B71DB] rounded-full opacity-60"
//               animate={{
//                 scale: [1, 1.5, 1],
//                 opacity: [0.6, 0.3, 0.6],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             <motion.div
//               className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-[#8A2BE2] rounded-full opacity-60"
//               animate={{
//                 scale: [1, 1.5, 1],
//                 opacity: [0.6, 0.3, 0.6],
//               }}
//               transition={{
//                 duration: 2.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 0.5,
//               }}
//             />
//           </motion.div>

//           {/* Error Message */}
//           <motion.div variants={itemVariants} className="mb-8">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
//               Page Not Found
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-300/80 max-w-2xl mx-auto">
//               Oops! The page you&apos;re looking for seems to have wandered off
//               into the digital void. Let&apos;s get you back on track.
//             </p>
//           </motion.div>

//           {/* Action Buttons */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
//           >
//             <Link href="/">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 text-sm font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[180px]"
//               >
//                 Go to Homepage
//               </motion.button>
//             </Link>

//             <Link href="/contact">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 text-sm font-bold text-white transition duration-300 rounded-full shadow-lg border-2 border-[#7B71DB] hover:bg-[#7B71DB]/10 min-w-[180px]"
//               >
//                 Contact Us
//               </motion.button>
//             </Link>
//           </motion.div>

//           {/* Helpful Links */}
//           <motion.div
//             variants={itemVariants}
//             className="pt-8 border-t border-white/10"
//           >
//             <p className="text-sm text-gray-400 mb-4">Or visit these pages:</p>
//             <div className="flex flex-wrap justify-center gap-6 text-sm">
//               <Link
//                 href="/services"
//                 className="text-[#8F8BF9] hover:text-[#7B71DB] transition duration-300"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/portfolio"
//                 className="text-[#8F8BF9] hover:text-[#7B71DB] transition duration-300"
//               >
//                 Portfolio
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-[#8F8BF9] hover:text-[#7B71DB] transition duration-300"
//               >
//                 About Us
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </motion.main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default NotFoundPage;

// import React from "react";
// import Head from "next/head";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Navbar from "../Components/Essntials/Navbar";
// import Footer from "../Components/Essntials/footer";
// import Favicon from "../assets/favicon.png";

// const NotFoundPage = () => {
//   // Animation variants
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
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1], // Custom bezier for smooth snapping
//       },
//     },
//   };

//   const numberVariants = {
//     hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       filter: "blur(0px)",
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//       },
//     },
//   };

//   const floatingAnimation = {
//     y: [-10, 10],
//     rotate: [-1, 1],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       repeatType: "mirror",
//       ease: "easeInOut",
//     },
//   };

//   return (
//     <div className="relative bg-[#0B0219] min-h-screen flex flex-col overflow-hidden selection:bg-[#8A2BE2] selection:text-white">
//       <Head>
//         <title>404 - Page Not Found | Aicyro Solutions</title>
//         <meta
//           name="description"
//           content="The page you are looking for does not exist."
//         />
//         <link rel="icon" href={Favicon.src} />
//       </Head>

//       {/* Background Atmosphere Effects */}
//       {/* <div className="absolute inset-0 overflow-hidden pointer-events-none"> */}
//       {/* Top Left Glow */}
//       {/* <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7B71DB] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" /> */}
//       {/* Bottom Right Glow */}
//       {/* <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8A2BE2] rounded-full mix-blend-screen filter blur-[130px] opacity-20" /> */}
//       {/* </div> */}

//       {/* Navbar */}
//       <div className="relative z-50">
//         <Navbar />
//       </div>

//       {/* Main Content */}
//       <motion.main
//         className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="max-w-4xl mx-auto text-center w-full">
//           {/* Glass Card Container */}
//           <div className="relative backdrop-blur-sm bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
//             {/* Background geometric decoration inside card */}
//             <motion.div
//               className="absolute top-10 right-10 w-24 h-24 border-4 border-[#7B71DB]/20 rounded-full"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             />
//             <motion.div
//               className="absolute bottom-10 left-10 w-16 h-16 border-2 border-[#8A2BE2]/20 rounded-full"
//               animate={{ rotate: -360 }}
//               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//             />

//             {/* 404 Number */}
//             <motion.div className="relative mb-6" variants={numberVariants}>
//               <motion.h1
//                 className="text-9xl sm:text-[10rem] md:text-[13rem] font-black leading-none tracking-tighter"
//                 animate={floatingAnimation}
//               >
//                 {/* Neon Glow Effect Layer */}
//                 <span
//                   className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-[#8A2BE2] to-transparent blur-lg opacity-50 select-none"
//                   aria-hidden="true"
//                 >
//                   404
//                 </span>

//                 {/* Main Text */}
//                 <span className="relative bg-clip-text text-transparent bg-gradient-to-br from-white via-[#7B71DB] to-[#8A2BE2] drop-shadow-[0_0_15px_rgba(138,43,226,0.3)]">
//                   404
//                 </span>
//               </motion.h1>
//             </motion.div>

//             {/* Error Message */}
//             <motion.div variants={itemVariants} className="mb-10 relative z-10">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
//                 Lost in Space?
//               </h2>
//               <p className="text-base sm:text-lg text-gray-300/80 max-w-lg mx-auto leading-relaxed">
//                 The page you're looking for seems to have drifted into a black
//                 hole. Don't worry, we can teleport you back to safety.
//               </p>
//             </motion.div>

//             {/* Action Buttons */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10"
//             >
//               <Link href="/">
//                 <motion.button
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 0 20px rgba(123, 113, 219, 0.5)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#5B86D3] hover:to-[#7973DB] min-w-[160px] shadow-lg shadow-[#8A2BE2]/30"
//                 >
//                   Return Home
//                 </motion.button>
//               </Link>

//               <Link href="/contact">
//                 <motion.button
//                   whileHover={{
//                     scale: 1.05,
//                     backgroundColor: "rgba(255,255,255,0.1)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-md min-w-[160px]"
//                 >
//                   Contact Support
//                 </motion.button>
//               </Link>
//             </motion.div>

//             {/* Helpful Links */}
//             <motion.div
//               variants={itemVariants}
//               className="pt-8 border-t border-white/5"
//             >
//               <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">
//                 Popular Destinations
//               </p>
//               <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium">
//                 {["Services", "Portfolio", "About"].map((item) => (
//                   <Link
//                     key={item}
//                     href={`/${item.toLowerCase()}`}
//                     className="group relative text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     <span>{item}</span>
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8A2BE2] transition-all duration-300 group-hover:w-full" />
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.main>

//       {/* Footer */}
//       <div className="relative z-50">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default NotFoundPage;

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../Components/Essntials/Navbar";
import Footer from "../Components/Essntials/footer";
import Favicon from "../assets/favicon.png";

const NotFoundPage = () => {
  // Animation: Smooth, subtle fade-in upward
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation: Slow, "breathing" gradient pulse instead of bouncing
  const gradientAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <div className="relative bg-[#0B0219] min-h-screen flex flex-col font-sans selection:bg-[#7B71DB]/30 selection:text-white">
      <Head>
        <title>Page Not Found | Aicyro Solutions</title>
        <meta
          name="description"
          content="The page you are looking for might have been removed or is temporarily unavailable."
        />
        <link rel="icon" href={Favicon.src} />
      </Head>

      {/* Professional Background: Grid & Subtle Spotlight */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Central Spotlight - Controlled and subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7B71DB] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <motion.main
        className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto text-center w-full">
          {/* Main 404 Display */}
          <motion.div
            className="relative mb-8 inline-block"
            variants={itemVariants}
          >
            <motion.h1
              className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-[#9d96e6] to-[#4c449d] opacity-90"
              animate={gradientAnimation}
              style={{ backgroundSize: "200% auto" }}
            >
              404
            </motion.h1>
          </motion.div>

          {/* Professional Copy */}
          <motion.div variants={itemVariants} className="mb-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Page not found
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed font-light">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </motion.div>

          {/* Action Area */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-[#5B4BC4] hover:bg-[#4c3eb0] shadow-lg shadow-[#5B4BC4]/20 border border-transparent min-w-[160px]"
              >
                Go to Homepage
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 text-sm font-medium text-gray-300 transition-all duration-200 rounded-lg border border-white/10 hover:border-white/20 hover:text-white min-w-[160px]"
              >
                Contact Support
              </motion.button>
            </Link>
          </motion.div>

          {/* Clean Divider */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/[0.08] max-w-sm mx-auto"
          />

          {/* Quick Links - Clean list format */}
          <motion.div variants={itemVariants} className="pt-8">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-semibold">
              Helpful Links
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              {["Services", "Portfolio", "About Us"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
};

export default NotFoundPage;
