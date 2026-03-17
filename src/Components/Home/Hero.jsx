// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../Essntials/Navbar";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// import ClientLogos from "./clienlogos";

// const HeroPage = () => {
//   const router = useRouter();
  
//   // Default SEO-friendly content (Fixes Weak Value Proposition & Layout Shift)
//   const defaultData = {
//     welcomeText: "TRUSTED BY STARTUPS & ENTERPRISES",
//     headingPrefix: "Build Secure, Scalable",
//     rotatingWords: ["SaaS Platforms", "AI Solutions", "Cloud Systems"],
//     paragraph: "We engineer custom software that drives revenue. From MVP to Enterprise—launch faster with our battle-tested development & cybersecurity workflows."
//   };

//   const [heroData, setHeroData] = useState(defaultData);
//   const [displayedText, setDisplayedText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);
//   const [wordIndex, setWordIndex] = useState(0);

//   // Fetch overrides from Firebase, but fallback to strong default instantly
//   useEffect(() => {
//     const heroRef = ref(database, "heroSection");
//     onValue(heroRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         setHeroData({
//             ...defaultData,
//             ...data, // Only override if data exists
//             rotatingWords: data.rotatingWords || defaultData.rotatingWords
//         });
//       }
//     });
//   }, []);

//   // Typing Effect Logic
//   useEffect(() => {
//     const currentWord = heroData.rotatingWords[wordIndex];
//     let timer;
    
//     if (isTyping) {
//       if (displayedText.length < currentWord.length) {
//         timer = setTimeout(() => {
//           setDisplayedText(currentWord.slice(0, displayedText.length + 1));
//         }, 150);
//       } else {
//         timer = setTimeout(() => setIsTyping(false), 2000);
//       }
//     } else {
//       if (displayedText.length > 0) {
//         timer = setTimeout(() => {
//           setDisplayedText(currentWord.slice(0, displayedText.length - 1));
//         }, 75);
//       } else {
//         setIsTyping(true);
//         setWordIndex((prev) => (prev + 1) % heroData.rotatingWords.length);
//       }
//     }
//     return () => clearTimeout(timer);
//   }, [displayedText, isTyping, wordIndex, heroData.rotatingWords]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <div className="bg-[var(--background)] relative w-full min-h-[100dvh] flex flex-col overflow-hidden">
//       <Navbar />

//       {/* Background Elements */}
//       <div className="absolute inset-0 z-0">
//         <motion.div
//             animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
//             transition={{ duration: 8, repeat: Infinity }}
//             className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-[var(--primary)] rounded-full blur-[120px] opacity-20"
//         />
//         <motion.div
//             animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
//             transition={{ duration: 10, repeat: Infinity, delay: 1 }}
//             className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-[var(--secondary)] rounded-full blur-[140px] opacity-15"
//         />
//         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
//       </div>

//       <motion.div
//         className="relative z-10 flex flex-col items-center justify-center flex-grow pt-32 pb-20 px-4 text-center max-w-6xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Trust Signal / Welcome Banner */}
//         <motion.div variants={itemVariants} className="mb-8">
//            <span className="px-5 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-semibold tracking-wide uppercase">
//              {heroData.welcomeText}
//            </span>
//         </motion.div>

//         {/* H1 for SEO - Split static and dynamic for stability */}
//         <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[var(--foreground)]">
//           {heroData.headingPrefix} <br className="hidden md:block" />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
//              {displayedText}<span className="animate-pulse">|</span>
//           </span>
//         </motion.h1>

//         <motion.p variants={itemVariants} className="text-lg md:text-xl text-[var(--foreground)]/70 mb-10 max-w-3xl leading-relaxed">
//           {heroData.paragraph}
//         </motion.p>

//         {/* Conversion Focused CTAs */}
//         <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
//           <button
//             onClick={() => router.push('/contact')}
//             className="px-8 py-4 rounded-full bg-[var(--primary)] text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[200px]"
//           >
//             Book Strategy Call
//           </button>
//           <button
//             onClick={() => router.push('/portfolio')}
//             className="px-8 py-4 rounded-full border border-[var(--foreground)]/20 text-[var(--foreground)] font-semibold text-lg hover:bg-[var(--foreground)]/5 transition-all duration-300 min-w-[200px]"
//           >
//             View Case Studies
//           </button>
//         </motion.div>
//       </motion.div>

//       {/* Trust Signals / Logos */}
//       <div className="w-full border-t border-[var(--foreground)]/5 bg-[var(--background)]/50 backdrop-blur-sm">
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
//
//
//
//
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../Essntials/Navbar";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// import ClientLogos from "./extra/clienlogos"; // Ensure this path is correct
// import { ArrowRight, Sparkles } from "lucide-react";
// import Teckstack from "./teckstack"

// const HeroPage = () => {
//   const router = useRouter();

//   const defaultData = {
//     welcomeText: "TRUSTED BY STARTUPS & ENTERPRISES",
//     headingLine1: "Custom AI-Driven Software Solutions",
//     headingLine2: "That Help Businesses Scale Faster",
//     subheading: "Aicyro builds secure, scalable web, mobile, and AI-powered applications for startups, SMBs, and enterprises worldwide.",
//     primaryCta: "Get a Free Strategy Call",
//     secondaryCta: "View Case Studies"
//   };

//   const [heroData, setHeroData] = useState(defaultData);

//   useEffect(() => {
//     const heroRef = ref(database, "heroSection");
//     onValue(heroRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         setHeroData({ ...defaultData, ...data });
//       }
//     });
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
//     visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   return (
//     <div className="bg-[var(--background)] relative w-full min-h-[100dvh] flex flex-col overflow-hidden selection:bg-[var(--primary)] selection:text-white">
//       <Navbar />

//       {/* --- ENHANCED BACKGROUND --- */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Animated Blobs */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.15, 0.25, 0.15],
//             rotate: [0, 45, 0]
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//           className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-[var(--primary)] rounded-full blur-[120px] opacity-20 will-change-transform"
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.1, 0.2, 0.1],
//             x: [0, -50, 0]
//           }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//           className="absolute top-[10%] -right-[15%] w-[600px] h-[600px] bg-[var(--secondary)] rounded-full blur-[140px] opacity-15 will-change-transform"
//         />

//         {/* Technical Grid with Radial Fade */}
//         <div
//           className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.08]"
//           style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}
//         />
//       </div>

//       {/* --- MAIN CONTENT --- */}
//       <motion.div
//         className="relative z-10 flex flex-col items-center justify-center flex-grow pt-32 pb-16 px-4 text-center max-w-5xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Badge / Pill */}
//         <motion.div variants={itemVariants} className="mb-6">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 border border-[var(--primary)]/20 shadow-[0_0_15px_-5px_var(--primary)] backdrop-blur-md">
//             <Sparkles size={14} className="text-[var(--primary)]" />
//             <span className="text-[var(--primary)] text-xs font-bold tracking-widest uppercase">
//               {heroData.welcomeText}
//             </span>
//           </div>
//         </motion.div>

//         {/* H1 Headline */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-[var(--foreground)] leading-[1.15]"
//         >
//           {heroData.headingLine1} <br />
//           {/* Animated Gradient Text */}
//           <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
//             {heroData.headingLine2}
//           </span>
//         </motion.h1>

//         {/* Subheading */}
//         <motion.p
//           variants={itemVariants}
//           className="text-lg md:text-xl text-[var(--foreground)]/70 mb-10 max-w-2xl leading-relaxed mx-auto"
//         >
//           {heroData.subheading}
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
//         >
//           {/* Primary Button: Glowing & Bold */}
//           <button
//             onClick={() => router.push('/contact')}
//             className="group relative px-8 py-4 rounded-full bg-[var(--primary)] text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_var(--primary)]"
//           >
//             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
//             <span className="relative z-10">{heroData.primaryCta}</span>
//           </button>

//           {/* Secondary Button: Glass & Minimal */}
//           <button
//             onClick={() => router.push('/portfolio')}
//             className="group flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--foreground)]/10 bg-[var(--background)]/30 backdrop-blur-sm text-[var(--foreground)] font-medium text-lg hover:bg-[var(--foreground)]/5 hover:border-[var(--foreground)]/20 transition-all duration-300"
//           >
//             {heroData.secondaryCta}
//             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//           </button>
//         </motion.div>
//       </motion.div>

//       {/* --- FOOTER / LOGOS --- */}
//       {/* Added a gradient fade-in top border for better separation */}
//       <div className="relative w-full z-10 mt-auto">
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--foreground)]/10 to-transparent" />
//         <div className="bg-[var(--background)]/40 backdrop-blur-xl py-6">
//           {/* <ClientLogos /> */}
//           <Teckstack />
//         </div>
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
//
//
//
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
import { ArrowRight,FileText , Sparkles } from "lucide-react";
import Teckstack from "./teckstack"

const HeroPage = () => {
  const router = useRouter();

  const defaultData = {
    welcomeText: "TRUSTED BY STARTUPS & ENTERPRISES",
    headingLine1: "Custom AI-Driven Software Solutions",
    headingLine2: "That Help Businesses Scale Faster",
    subheading: "Aicyro builds secure, scalable web, mobile, and AI-powered applications for startups, SMBs, and enterprises worldwide.",
    primaryCta: "Get a Free Strategy Call",
    // secondaryCta: "View Case Studies"
    secondaryCta: "Get MVP Blueprint"
  };

  const [heroData, setHeroData] = useState(defaultData);

  useEffect(() => {
    const heroRef = ref(database, "heroSection");
    onValue(heroRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setHeroData({ ...defaultData, ...data });
      }
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  // --- UPDATED: Removed 'filter: blur' for a crisp entrance ---
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-[var(--background)] relative w-full min-h-[100dvh] flex flex-col overflow-hidden selection:bg-[var(--primary)] selection:text-white">
      <Navbar />

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-[var(--primary)] rounded-full blur-[120px] opacity-20 will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] -right-[15%] w-[600px] h-[600px] bg-[var(--secondary)] rounded-full blur-[140px] opacity-15 will-change-transform"
        />

        {/* Technical Grid with Radial Fade */}
        <div 
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.08]" 
          style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center flex-grow pt-32 pb-16 px-4 text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge / Pill */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 border border-[var(--primary)]/20 shadow-[0_0_15px_-5px_var(--primary)] backdrop-blur-md">
            <Sparkles size={14} className="text-[var(--primary)]" />
            <span className="text-[var(--primary)] text-xs font-bold tracking-widest uppercase">
              {heroData.welcomeText}
            </span>
          </div>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-[var(--foreground)] leading-[1.15]"
        >
          {heroData.headingLine1} <br />
          {/* Animated Gradient Text */}
          <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
            {heroData.headingLine2}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-[var(--foreground)]/70 mb-10 max-w-2xl leading-relaxed mx-auto"
        >
          {heroData.subheading}
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Button: Glowing & Bold */}
          <button
            onClick={() => router.push('/contact')}
            className="group relative px-8 py-4 rounded-full bg-[var(--primary)] text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_var(--primary)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">{heroData.primaryCta}</span>
          </button>

          {/* Secondary Button: Glass & Minimal */}
         <button
            // CHANGED: Redirects to the MVP Blueprint page
            onClick={() => router.push('/resources/mvp-blueprint')} 
            className="group flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--foreground)]/10 bg-[var(--background)]/30 backdrop-blur-sm text-[var(--foreground)] font-medium text-lg hover:bg-[var(--foreground)]/5 hover:border-[var(--foreground)]/20 transition-all duration-300"
          >
            {heroData.secondaryCta}
            {/* Changed Icon to FileText to represent the Blueprint/PDF */}
            <FileText size={18} className="group-hover:translate-x-1 transition-transform duration-300 opacity-80" />
          </button>
        </motion.div>
      </motion.div>

      {/* --- FOOTER / LOGOS --- */}
      <div className="relative w-full z-10 mt-auto">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--foreground)]/10 to-transparent" />
        <div className="bg-[var(--background)]/40 backdrop-blur-xl py-6">
          <Teckstack />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;