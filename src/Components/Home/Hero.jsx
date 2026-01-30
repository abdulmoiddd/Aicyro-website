
// import React, { useState, useEffect } from "react";
// import Navbar from "../Essntials/Navbar";
// import { motion } from "framer-motion";

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";

// const HeroPage = () => {
//   const [heroData, setHeroData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Typing state
//   const [rotatingWords, setRotatingWords] = useState(["Loading..."]);
//   const [wordIndex, setWordIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);

//   const TYPING_SPEED = 150;
//   const DELETING_SPEED = 75;
//   const PAUSE_TIME = 1500;

//   const currentWord = rotatingWords[wordIndex];

//   // 2. FIREBASE DATA FETCHING
//   useEffect(() => {
//     const heroRef = ref(database, "heroSection");
//     const unsubscribe = onValue(
//       heroRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           setHeroData(fetchedData);
//           setRotatingWords(
//             fetchedData.rotatingWords || [
//               "Innovation",
//               "Intelligence",
//               "Security",
//             ]
//           );
//           setLoading(false);
//         } else {
//           console.log("No Hero section data found.");
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );
//     return () => unsubscribe();
//   }, []);

//   // 3. TYPING EFFECT
//   useEffect(() => {
//     let timer;
//     if (loading) return;

//     if (isTyping) {
//       if (displayedText.length < currentWord.length) {
//         timer = setTimeout(() => {
//           setDisplayedText(currentWord.slice(0, displayedText.length + 1));
//         }, TYPING_SPEED);
//       } else {
//         timer = setTimeout(() => setIsTyping(false), PAUSE_TIME);
//       }
//     } else {
//       if (displayedText.length > 0) {
//         timer = setTimeout(() => {
//           setDisplayedText(currentWord.slice(0, displayedText.length - 1));
//         }, DELETING_SPEED);
//       } else {
//         setIsTyping(true);
//         setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
//       }
//     }
//     return () => clearTimeout(timer);
//   }, [
//     displayedText,
//     isTyping,
//     wordIndex,
//     currentWord,
//     rotatingWords.length,
//     loading,
//   ]);

//   // 4. ANIMATION VARIANTS
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 50, damping: 20 },
//     },
//   };

//   // 5. LOADING STATE
//   if (loading || !heroData) {
//     return (
//       <div className="flex items-center justify-center min-h-screen w-full bg-[var(--background)]">
//         <motion.div
//           className="w-16 h-16 border-4 border-[var(--foreground)]/20 border-t-[var(--primary)] rounded-full"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//         />
//       </div>
//     );
//   }

//   const { welcomeText, headingPrefix, paragraph } = heroData;

//   // 6. RENDER
//   return (
//     // Updated: min-h-[100dvh] handles mobile browser bars better than min-h-screen
//     <div className="bg-[var(--background)] relative w-full max-w-[100vw] min-h-[100dvh] overflow-x-hidden flex flex-col transition-colors duration-300">
//       <Navbar />

//       {/* --- BACKGROUND DESIGN --- */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
//         {/* Layer 1: Animated Orb 1 (Top Left) */}
//         {/* Updated: Smaller size and less blur on mobile to prevent "muddy" background */}
//         <motion.div
//           animate={{
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-[5%] -left-[15%] sm:-top-[10%] sm:-left-[10%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-[var(--primary)] blur-[60px] sm:blur-[100px] opacity-20 pointer-events-none"
//         />

//         {/* Layer 2: Animated Orb 2 (Bottom Right) */}
//         {/* Updated: Smaller size and better positioning for mobile */}
//         <motion.div
//           animate={{
//             x: [0, -50, 0],
//             y: [0, -30, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//           className="absolute top-[30%] -right-[15%] sm:top-[40%] sm:-right-[10%] w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] rounded-full bg-[var(--secondary)] blur-[70px] sm:blur-[120px] opacity-15 pointer-events-none"
//         />

//         {/* Layer 3: Dot Matrix Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.3] sm:opacity-[0.4]"
//           style={{
//             backgroundImage: `radial-gradient(var(--grid-line) 1.5px, transparent 1.5px)`,
//             backgroundSize: "30px 30px",
//           }}
//         />

//         {/* Layer 4: Vignette */}
//         <div className="absolute inset-0 bg-[var(--background)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] opacity-60 pointer-events-none" />
//       </div>

//       {/* --- MAIN CONTENT --- */}
//       <motion.div
//         // Updated: flex-grow ensures vertical centering, tweaked padding (pt-28) for mobile
//         className="relative z-10 flex flex-col items-center justify-center flex-grow pt-28 sm:pt-32 pb-20 sm:pb-32 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-24"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* WELCOME BANNER */}
//         <motion.div
//           variants={itemVariants}
//           className="bg-[var(--secondary)]/10 border border-[var(--secondary)]/50 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium tracking-widest text-[var(--primary)] mb-6 sm:mb-8 shadow-lg backdrop-blur-sm"
//         >
//           {welcomeText}
//         </motion.div>

//         {/* MAIN HEADING */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight break-words w-full"
//         >
//           <span className="text-[var(--foreground)]/95">{headingPrefix}</span>
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] block mt-1 sm:mt-2 min-h-[1.2em]">
//             {displayedText}
//           </span>
//         </motion.h1>

//         {/* PARAGRAPH */}
//         <motion.p
//           variants={itemVariants}
//           className="text-sm md:text-lg text-[var(--foreground)]/80 mb-10 sm:mb-12 max-w-4xl px-2 mx-auto leading-relaxed"
//         >
//           {paragraph}
//         </motion.p>
//       </motion.div>

//       <div className="w-full overflow-hidden">
//         {/* <Principle /> */}
//         {/* <ProcessSection /> */}
//       </div>
//     </div>
//   );
// };

// export default HeroPage;

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
//
//
// import React, { useState, useEffect } from "react";
// import Navbar from "../Essntials/Navbar";
// import { motion } from "framer-motion";

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";

// const HeroPage = () => {
//   const [heroData, setHeroData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Typing state
//   const [rotatingWords, setRotatingWords] = useState(["Loading..."]);
//   const [wordIndex, setWordIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);

//   const TYPING_SPEED = 150;
//   const DELETING_SPEED = 75;
//   const PAUSE_TIME = 1500;

//   const currentWord = rotatingWords[wordIndex];

//   // 2. FIREBASE DATA FETCHING
//   useEffect(() => {
//     const heroRef = ref(database, "heroSection");
//     const unsubscribe = onValue(
//       heroRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           setHeroData(fetchedData);
//           setRotatingWords(
//             fetchedData.rotatingWords || [
//               "Innovation",
//               "Intelligence",
//               "Security",
//             ]
//           );
//           setLoading(false);
//         } else {
//           console.log("No Hero section data found.");
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );
//     return () => unsubscribe();
//   }, []);

//   // 3. TYPING EFFECT
//   useEffect(() => {
//     let timer;
//     if (loading) return;

//     if (isTyping) {
//       if (displayedText.length < currentWord.length) {
//         timer = setTimeout(() => {
//           setDisplayedText(currentWord.slice(0, displayedText.length + 1));
//         }, TYPING_SPEED);
//       } else {
//         timer = setTimeout(() => setIsTyping(false), PAUSE_TIME);
//       }
//     } else {
//       if (displayedText.length > 0) {
//         timer = setTimeout(() => {
//           setDisplayedText(currentWord.slice(0, displayedText.length - 1));
//         }, DELETING_SPEED);
//       } else {
//         setIsTyping(true);
//         setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
//       }
//     }
//     return () => clearTimeout(timer);
//   }, [
//     displayedText,
//     isTyping,
//     wordIndex,
//     currentWord,
//     rotatingWords.length,
//     loading,
//   ]);

//   // 4. ANIMATION VARIANTS
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 50, damping: 20 },
//     },
//   };

//   // 5. LOADING STATE
//   if (loading || !heroData) {
//     return (
//       <div className="flex items-center justify-center min-h-screen w-full bg-[var(--background)]">
//         <motion.div
//           className="w-16 h-16 border-4 border-[var(--foreground)]/20 border-t-[var(--primary)] rounded-full"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//         />
//       </div>
//     );
//   }

//   const { welcomeText, headingPrefix, paragraph } = heroData;

//   // 6. RENDER
//   return (
//     // Updated: min-h-[100dvh] handles mobile browser bars better than min-h-screen
//     <div className="bg-[var(--background)] relative w-full max-w-[100vw] min-h-[100dvh] overflow-x-hidden flex flex-col transition-colors duration-300">
//       <Navbar />

//       {/* --- BACKGROUND DESIGN --- */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
//         {/* Layer 1: Animated Orb 1 (Top Left) */}
//         <motion.div
//           animate={{
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-[5%] -left-[15%] sm:-top-[10%] sm:-left-[10%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-[var(--primary)] blur-[60px] sm:blur-[100px] opacity-20 pointer-events-none"
//         />

//         {/* Layer 2: Animated Orb 2 (Bottom Right) */}
//         <motion.div
//           animate={{
//             x: [0, -50, 0],
//             y: [0, -30, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//           className="absolute top-[30%] -right-[15%] sm:top-[40%] sm:-right-[10%] w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] rounded-full bg-[var(--secondary)] blur-[70px] sm:blur-[120px] opacity-15 pointer-events-none"
//         />

//         {/* Layer 3: Dot Matrix Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.3] sm:opacity-[0.4]"
//           style={{
//             backgroundImage: `radial-gradient(var(--grid-line) 1.5px, transparent 1.5px)`,
//             backgroundSize: "30px 30px",
//           }}
//         />

//         {/* Layer 4: Vignette */}
//         <div className="absolute inset-0 bg-[var(--background)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] opacity-60 pointer-events-none" />
//       </div>

//       {/* --- MAIN CONTENT --- */}
//       <motion.div
//         // Updated: flex-grow ensures vertical centering, tweaked padding (pt-28) for mobile
//         className="relative z-10 flex flex-col items-center justify-center flex-grow pt-28 sm:pt-32 pb-20 sm:pb-32 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-24"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* WELCOME BANNER */}
//         <motion.div
//           variants={itemVariants}
//           className="bg-[var(--secondary)]/10 border border-[var(--secondary)]/50 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium tracking-widest text-[var(--primary)] mb-6 sm:mb-8 shadow-lg backdrop-blur-sm"
//         >
//           {welcomeText}
//         </motion.div>

//         {/* MAIN HEADING */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight break-words w-full"
//         >
//           <span className="text-[var(--foreground)]/95">{headingPrefix}</span>
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] block mt-1 sm:mt-2 min-h-[1.2em]">
//             {displayedText}
//           </span>
//         </motion.h1>

//         {/* PARAGRAPH */}
//         <motion.p
//           variants={itemVariants}
//           className="text-sm md:text-lg text-[var(--foreground)]/80 mb-10 sm:mb-12 max-w-4xl px-2 mx-auto leading-relaxed"
//         >
//           {paragraph}
//         </motion.p>

//         {/* --- NEW: CTA BUTTONS SECTION --- */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
//         >
//           {/* Primary Button */}
//           <button className="relative px-8 py-3.5 rounded-full bg-[var(--primary)] text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
//             Get Started
//           </button>

//           {/* Secondary Button */}
//           <button
            
//             className="px-8 py-3.5 rounded-full border border-[var(--foreground)]/20 text-[var(--foreground)] font-semibold text-base sm:text-lg hover:bg-[var(--foreground)]/5 hover:border-[var(--foreground)]/40 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm">
//             Learn More
//           </button>
//         </motion.div>
//       </motion.div>

//       <div className="w-full overflow-hidden">
//         {/* <Principle /> */}
//         {/* <ProcessSection /> */}
//       </div>
//     </div>
//   );
// };

// export default HeroPage;
//
///
///
//
////
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
// "use client"; // 1. REQUIRED for Next.js App Router components

// import React, { useState, useEffect } from "react";
// import Navbar from "../Essntials/Navbar";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation"; // 2. Use Next.js Router

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// import ClientLogos from "./clienlogos";

// const HeroPage = () => {
//   const [heroData, setHeroData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 3. Initialize Next.js Router
//   const router = useRouter();

//   // Typing state
//   const [rotatingWords, setRotatingWords] = useState(["Loading..."]);
//   const [wordIndex, setWordIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);

//   const TYPING_SPEED = 150;
//   const DELETING_SPEED = 75;
//   const PAUSE_TIME = 1500;

//   const currentWord = rotatingWords[wordIndex];

//   // FIREBASE DATA FETCHING
//   useEffect(() => {
//     const heroRef = ref(database, "heroSection");
//     const unsubscribe = onValue(
//       heroRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           setHeroData(fetchedData);
//           setRotatingWords(
//             fetchedData.rotatingWords || [
//               "Innovation",
//               "Intelligence",
//               "Security",
//             ]
//           );
//           setLoading(false);
//         } else {
//           console.log("No Hero section data found.");
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );
//     return () => unsubscribe();
//   }, []);

//   // TYPING EFFECT
//   useEffect(() => {
//     let timer;
//     if (loading) return;

//     if (isTyping) {
//       if (displayedText.length < currentWord.length) {
//         timer = setTimeout(() => {
//           setDisplayedText(currentWord.slice(0, displayedText.length + 1));
//         }, TYPING_SPEED);
//       } else {
//         timer = setTimeout(() => setIsTyping(false), PAUSE_TIME);
//       }
//     } else {
//       if (displayedText.length > 0) {
//         timer = setTimeout(() => {
//           setDisplayedText(currentWord.slice(0, displayedText.length - 1));
//         }, DELETING_SPEED);
//       } else {
//         setIsTyping(true);
//         setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
//       }
//     }
//     return () => clearTimeout(timer);
//   }, [
//     displayedText,
//     isTyping,
//     wordIndex,
//     currentWord,
//     rotatingWords.length,
//     loading,
//   ]);

//   // ANIMATION VARIANTS
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 50, damping: 20 },
//     },
//   };

//   // LOADING STATE
//   if (loading || !heroData) {
//     return (
//       <div className="flex items-center justify-center min-h-screen w-full bg-[var(--background)]">
//         <motion.div
//           className="w-16 h-16 border-4 border-[var(--foreground)]/20 border-t-[var(--primary)] rounded-full"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//         />
//       </div>
//     );
//   }

//   const { welcomeText, headingPrefix, paragraph } = heroData;

//   return (
//     <div className="bg-[var(--background)] relative w-full max-w-[100vw] min-h-[100dvh] overflow-x-hidden flex flex-col transition-colors duration-300">
//       <Navbar />

//       {/* --- BACKGROUND DESIGN --- */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
//         {/* Layer 1: Animated Orb 1 */}
//         <motion.div
//           animate={{
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-[5%] -left-[15%] sm:-top-[10%] sm:-left-[10%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-[var(--primary)] blur-[60px] sm:blur-[100px] opacity-20 pointer-events-none"
//         />

//         {/* Layer 2: Animated Orb 2 */}
//         <motion.div
//           animate={{
//             x: [0, -50, 0],
//             y: [0, -30, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//           className="absolute top-[30%] -right-[15%] sm:top-[40%] sm:-right-[10%] w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] rounded-full bg-[var(--secondary)] blur-[70px] sm:blur-[120px] opacity-15 pointer-events-none"
//         />

//         {/* Layer 3: Dot Matrix Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.3] sm:opacity-[0.4]"
//           style={{
//             backgroundImage: `radial-gradient(var(--grid-line) 1.5px, transparent 1.5px)`,
//             backgroundSize: "30px 30px",
//           }}
//         />

//         {/* Layer 4: Vignette */}
//         <div className="absolute inset-0 bg-[var(--background)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] opacity-60 pointer-events-none" />
//       </div>

//       {/* --- MAIN CONTENT --- */}
//       <motion.div
//         className="relative z-10 flex flex-col items-center justify-center flex-grow pt-28 sm:pt-32 pb-20 sm:pb-32 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-24"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* WELCOME BANNER */}
//         <motion.div
//           variants={itemVariants}
//           className="bg-[var(--secondary)]/10 border border-[var(--secondary)]/50 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium tracking-widest text-[var(--primary)] mb-6 sm:mb-8 shadow-lg backdrop-blur-sm"
//         >
//           {welcomeText}
//         </motion.div>

//         {/* MAIN HEADING */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight break-words w-full"
//         >
//           <span className="text-[var(--foreground)]/95">{headingPrefix}</span>
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] block mt-1 sm:mt-2 min-h-[1.2em]">
//             {displayedText}
//           </span>
//         </motion.h1>

//         {/* PARAGRAPH */}
//         <motion.p
//           variants={itemVariants}
//           className="text-sm md:text-lg text-[var(--foreground)]/80 mb-10 sm:mb-12 max-w-4xl px-2 mx-auto leading-relaxed"
//         >
//           {paragraph}
//         </motion.p>

//         {/* --- CTA BUTTONS SECTION --- */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
//         >
//           {/* 4. Primary Button -> router.push */}
//           <button
//             onClick={() => router.push('/contact')}
//             className="relative px-8 py-3.5 rounded-full bg-[var(--primary)] text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
//           >
//             Get Started
//           </button>

//           {/* 5. Secondary Button -> router.push */}
//           <button
//             onClick={() => router.push('/portfolio')}
//             className="px-8 py-3.5 rounded-full border border-[var(--foreground)]/20 text-[var(--foreground)] font-semibold text-base sm:text-lg hover:bg-[var(--foreground)]/5 hover:border-[var(--foreground)]/40 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
//           >
//             View Portfolio
//           </button>
//         </motion.div>
//       </motion.div>

//       <div className="w-full overflow-hidden">
//         {/* <Principle /> */}
//         {/* <ProcessSection /> */}
//         <ClientLogos />
//       </div>
//     </div>
//   );
// };

// export default HeroPage;

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
// //
// "use client"; // 1. REQUIRED for Next.js App Router components

// import React, { useState, useEffect } from "react";
// import Navbar from "../Essntials/Navbar";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation"; // 2. Use Next.js Router

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// import ClientLogos from "./clienlogos";

// const HeroPage = () => {
//   const [heroData, setHeroData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 3. Initialize Next.js Router
//   const router = useRouter();

//   // Typing state
//   const [rotatingWords, setRotatingWords] = useState(["Loading..."]);
//   const [wordIndex, setWordIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);

//   const TYPING_SPEED = 150;
//   const DELETING_SPEED = 75;
//   const PAUSE_TIME = 1500;

//   const currentWord = rotatingWords[wordIndex];

//   // FIREBASE DATA FETCHING
//   useEffect(() => {
//     const heroRef = ref(database, "heroSection");
//     const unsubscribe = onValue(
//       heroRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           setHeroData(fetchedData);
//           setRotatingWords(
//             fetchedData.rotatingWords || [
//               "Innovation",
//               "Intelligence",
//               "Security",
//             ]
//           );
//           setLoading(false);
//         } else {
//           console.log("No Hero section data found.");
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );
//     return () => unsubscribe();
//   }, []);

//   // TYPING EFFECT
//   useEffect(() => {
//     let timer;
//     if (loading) return;

//     if (isTyping) {
//       if (displayedText.length < currentWord.length) {
//         timer = setTimeout(() => {
//           setDisplayedText(currentWord.slice(0, displayedText.length + 1));
//         }, TYPING_SPEED);
//       } else {
//         timer = setTimeout(() => setIsTyping(false), PAUSE_TIME);
//       }
//     } else {
//       if (displayedText.length > 0) {
//         timer = setTimeout(() => {
//           setDisplayedText(currentWord.slice(0, displayedText.length - 1));
//         }, DELETING_SPEED);
//       } else {
//         setIsTyping(true);
//         setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
//       }
//     }
//     return () => clearTimeout(timer);
//   }, [
//     displayedText,
//     isTyping,
//     wordIndex,
//     currentWord,
//     rotatingWords.length,
//     loading,
//   ]);

//   // ANIMATION VARIANTS
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 50, damping: 20 },
//     },
//   };

//   // LOADING STATE
//   if (loading || !heroData) {
//     return (
//       <div className="flex items-center justify-center min-h-screen w-full bg-[var(--background)]">
//         <motion.div
//           className="w-16 h-16 border-4 border-[var(--foreground)]/20 border-t-[var(--primary)] rounded-full"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//         />
//       </div>
//     );
//   }

//   const { welcomeText, headingPrefix, paragraph } = heroData;

//   return (
//     <div className="bg-[var(--background)] relative w-full max-w-[100vw] min-h-[100dvh] overflow-x-hidden flex flex-col transition-colors duration-300">
//       <Navbar />

//       {/* --- BACKGROUND DESIGN --- */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
//         {/* Layer 1: Animated Orb 1 - SCALED FOR XL/2XL */}
//         <motion.div
//           animate={{
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute
//             -top-[5%] -left-[15%]
//             sm:-top-[10%] sm:-left-[10%]
//             2xl:-top-[15%] 2xl:-left-[5%]
//             w-[250px] h-[250px]
//             sm:w-[500px] sm:h-[500px]
//             2xl:w-[800px] 2xl:h-[800px]
//             rounded-full bg-[var(--primary)]
//             blur-[60px] sm:blur-[100px] 2xl:blur-[140px]
//             opacity-20 pointer-events-none"
//         />

//         {/* Layer 2: Animated Orb 2 - SCALED FOR XL/2XL */}
//         <motion.div
//           animate={{
//             x: [0, -50, 0],
//             y: [0, -30, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//           className="absolute
//             top-[30%] -right-[15%]
//             sm:top-[40%] sm:-right-[10%]
//             2xl:top-[25%] 2xl:-right-[5%]
//             w-[280px] h-[280px]
//             sm:w-[600px] sm:h-[600px]
//             2xl:w-[900px] 2xl:h-[900px]
//             rounded-full bg-[var(--secondary)]
//             blur-[70px] sm:blur-[120px] 2xl:blur-[160px]
//             opacity-15 pointer-events-none"
//         />

//         {/* Layer 3: Dot Matrix Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.3] sm:opacity-[0.4]"
//           style={{
//             backgroundImage: `radial-gradient(var(--grid-line) 1.5px, transparent 1.5px)`,
//             backgroundSize: "30px 30px",
//           }}
//         />

//         {/* Layer 4: Vignette */}
//         <div className="absolute inset-0 bg-[var(--background)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] opacity-60 pointer-events-none" />
//       </div>

//       {/* --- MAIN CONTENT --- */}
//       <motion.div
//         // UPDATED: Added 2xl: classes for width and spacing
//         className="relative z-10 flex flex-col items-center justify-center flex-grow
//           pt-28 sm:pt-32 2xl:pt-48
//           pb-20 sm:pb-32 2xl:pb-40
//           text-center w-full
//           max-w-5xl xl:max-w-6xl 2xl:max-w-7xl
//           mx-auto px-4 sm:px-6 md:px-8 lg:px-24"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* WELCOME BANNER */}
//         <motion.div
//           variants={itemVariants}
//           // UPDATED: Added 2xl:text-base
//           className="bg-[var(--secondary)]/10 border border-[var(--secondary)]/50 rounded-full
//             px-4 py-1.5 sm:px-5 sm:py-2 2xl:px-7 2xl:py-2.5
//             text-xs sm:text-sm 2xl:text-base
//             font-medium tracking-widest text-[var(--primary)] mb-6 sm:mb-8 2xl:mb-10 shadow-lg backdrop-blur-sm"
//         >
//           {welcomeText}
//         </motion.div>

//         {/* MAIN HEADING */}
//         <motion.h1
//           variants={itemVariants}
//           // UPDATED: Added xl:text-7xl and 2xl:text-8xl/9xl for huge screens
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl
//             font-bold mb-6 sm:mb-8 2xl:mb-10 leading-tight tracking-tight break-words w-full"
//         >
//           <span className="text-[var(--foreground)]/95">{headingPrefix}</span>
//           {/* UPDATED: Adjusted min-height to prevent layout shifts on large fonts */}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] block mt-1 sm:mt-2 min-h-[1.2em]">
//             {displayedText}
//           </span>
//         </motion.h1>

//         {/* PARAGRAPH */}
//         <motion.p
//           variants={itemVariants}
//           // UPDATED: Added xl:text-xl and 2xl:text-2xl, increased max-width for 2xl
//           className="text-sm md:text-lg xl:text-xl 2xl:text-2xl
//             text-[var(--foreground)]/80
//             mb-10 sm:mb-12 2xl:mb-16
//             max-w-4xl 2xl:max-w-5xl
//             px-2 mx-auto leading-relaxed"
//         >
//           {paragraph}
//         </motion.p>

//         {/* --- CTA BUTTONS SECTION --- */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 2xl:gap-8 w-full"
//         >
//           {/* 4. Primary Button */}
//           <button
//             onClick={() => router.push('/contact')}
//             // UPDATED: Added 2xl padding and text size
//             className="relative px-8 py-3.5 2xl:px-10 2xl:py-5
//               rounded-full bg-[var(--primary)] text-white
//               font-semibold text-base sm:text-lg 2xl:text-xl
//               shadow-lg hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
//           >
//             Get Started
//           </button>

//           {/* 5. Secondary Button */}
//           <button
//             onClick={() => router.push('/portfolio')}
//             // UPDATED: Added 2xl padding and text size
//             className="px-8 py-3.5 2xl:px-10 2xl:py-5
//               rounded-full border border-[var(--foreground)]/20 text-[var(--foreground)]
//               font-semibold text-base sm:text-lg 2xl:text-xl
//               hover:bg-[var(--foreground)]/5 hover:border-[var(--foreground)]/40 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
//           >
//             View Portfolio
//           </button>
//         </motion.div>
//       </motion.div>

//       <div className="w-full overflow-hidden">
//         {/* <Principle /> */}
//         {/* <ProcessSection /> */}
//         <ClientLogos />
//       </div>
//     </div>
//   );
// };

// export default HeroPage;
//*://*:*:
//*:
//
//
//

//


//
//*:
//
//
//
"use client"; 

import React, { useState, useEffect } from "react";
import Navbar from "../Essntials/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
import ClientLogos from "./clienlogos";

const HeroPage = () => {
  const router = useRouter();
  
  // Default SEO-friendly content (Fixes Weak Value Proposition & Layout Shift)
  const defaultData = {
    welcomeText: "TRUSTED BY STARTUPS & ENTERPRISES",
    headingPrefix: "Build Secure, Scalable",
    rotatingWords: ["SaaS Platforms", "AI Solutions", "Cloud Systems"],
    paragraph: "We engineer custom software that drives revenue. From MVP to Enterprise—launch faster with our battle-tested development & cybersecurity workflows."
  };

  const [heroData, setHeroData] = useState(defaultData);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  // Fetch overrides from Firebase, but fallback to strong default instantly
  useEffect(() => {
    const heroRef = ref(database, "heroSection");
    onValue(heroRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setHeroData({
            ...defaultData,
            ...data, // Only override if data exists
            rotatingWords: data.rotatingWords || defaultData.rotatingWords
        });
      }
    });
  }, []);

  // Typing Effect Logic
  useEffect(() => {
    const currentWord = heroData.rotatingWords[wordIndex];
    let timer;
    
    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 150);
      } else {
        timer = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, 75);
      } else {
        setIsTyping(true);
        setWordIndex((prev) => (prev + 1) % heroData.rotatingWords.length);
      }
    }
    return () => clearTimeout(timer);
  }, [displayedText, isTyping, wordIndex, heroData.rotatingWords]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[var(--background)] relative w-full min-h-[100dvh] flex flex-col overflow-hidden">
      <Navbar />

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-[var(--primary)] rounded-full blur-[120px] opacity-20" 
        />
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-[var(--secondary)] rounded-full blur-[140px] opacity-15" 
        />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center flex-grow pt-32 pb-20 px-4 text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trust Signal / Welcome Banner */}
        <motion.div variants={itemVariants} className="mb-8">
           <span className="px-5 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-semibold tracking-wide uppercase">
             {heroData.welcomeText}
           </span>
        </motion.div>

        {/* H1 for SEO - Split static and dynamic for stability */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[var(--foreground)]">
          {heroData.headingPrefix} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
             {displayedText}<span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-[var(--foreground)]/70 mb-10 max-w-3xl leading-relaxed">
          {heroData.paragraph}
        </motion.p>

        {/* Conversion Focused CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={() => router.push('/contact')}
            className="px-8 py-4 rounded-full bg-[var(--primary)] text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[200px]"
          >
            Book Strategy Call
          </button>
          <button 
            onClick={() => router.push('/portfolio')}
            className="px-8 py-4 rounded-full border border-[var(--foreground)]/20 text-[var(--foreground)] font-semibold text-lg hover:bg-[var(--foreground)]/5 transition-all duration-300 min-w-[200px]"
          >
            View Case Studies
          </button>
        </motion.div>
      </motion.div>

      {/* Trust Signals / Logos */}
      <div className="w-full border-t border-[var(--foreground)]/5 bg-[var(--background)]/50 backdrop-blur-sm">
        <ClientLogos />
      </div>
    </div>
  );
};

export default HeroPage;
