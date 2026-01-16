import React, { useState, useEffect } from "react";
import Navbar from "../Essntials/Navbar";
import { motion } from "framer-motion";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";

const HeroPage = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Typing state
  const [rotatingWords, setRotatingWords] = useState(["Loading..."]);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const TYPING_SPEED = 150;
  const DELETING_SPEED = 75;
  const PAUSE_TIME = 1500;

  const currentWord = rotatingWords[wordIndex];

  // 2. FIREBASE DATA FETCHING
  useEffect(() => {
    const heroRef = ref(database, "heroSection");
    const unsubscribe = onValue(
      heroRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          setHeroData(fetchedData);
          setRotatingWords(
            fetchedData.rotatingWords || [
              "Innovation",
              "Intelligence",
              "Security",
            ]
          );
          setLoading(false);
        } else {
          console.log("No Hero section data found.");
          setLoading(false);
        }
      },
      (error) => {
        console.error("Firebase read error:", error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // 3. TYPING EFFECT
  useEffect(() => {
    let timer;
    if (loading) return;

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        timer = setTimeout(() => setIsTyping(false), PAUSE_TIME);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, DELETING_SPEED);
      } else {
        setIsTyping(true);
        setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
      }
    }
    return () => clearTimeout(timer);
  }, [
    displayedText,
    isTyping,
    wordIndex,
    currentWord,
    rotatingWords.length,
    loading,
  ]);

  // 4. ANIMATION VARIANTS
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  // 5. LOADING STATE
  if (loading || !heroData) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-[var(--background)]">
        <motion.div
          className="w-16 h-16 border-4 border-[var(--foreground)]/20 border-t-[var(--primary)] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  const { welcomeText, headingPrefix, paragraph } = heroData;

  // 6. RENDER
  return (
    // Updated: min-h-[100dvh] handles mobile browser bars better than min-h-screen
    <div className="bg-[var(--background)] relative w-full max-w-[100vw] min-h-[100dvh] overflow-x-hidden flex flex-col transition-colors duration-300">
      <Navbar />

      {/* --- BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Layer 1: Animated Orb 1 (Top Left) */}
        {/* Updated: Smaller size and less blur on mobile to prevent "muddy" background */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[5%] -left-[15%] sm:-top-[10%] sm:-left-[10%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-[var(--primary)] blur-[60px] sm:blur-[100px] opacity-20 pointer-events-none"
        />

        {/* Layer 2: Animated Orb 2 (Bottom Right) */}
        {/* Updated: Smaller size and better positioning for mobile */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[30%] -right-[15%] sm:top-[40%] sm:-right-[10%] w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] rounded-full bg-[var(--secondary)] blur-[70px] sm:blur-[120px] opacity-15 pointer-events-none"
        />

        {/* Layer 3: Dot Matrix Pattern */}
        <div
          className="absolute inset-0 opacity-[0.3] sm:opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(var(--grid-line) 1.5px, transparent 1.5px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Layer 4: Vignette */}
        <div className="absolute inset-0 bg-[var(--background)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] opacity-60 pointer-events-none" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <motion.div
        // Updated: flex-grow ensures vertical centering, tweaked padding (pt-28) for mobile
        className="relative z-10 flex flex-col items-center justify-center flex-grow pt-28 sm:pt-32 pb-20 sm:pb-32 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* WELCOME BANNER */}
        <motion.div
          variants={itemVariants}
          className="bg-[var(--secondary)]/10 border border-[var(--secondary)]/50 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium tracking-widest text-[var(--primary)] mb-6 sm:mb-8 shadow-lg backdrop-blur-sm"
        >
          {welcomeText}
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight break-words w-full"
        >
          <span className="text-[var(--foreground)]/95">{headingPrefix}</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] block mt-1 sm:mt-2 min-h-[1.2em]">
            {displayedText}
          </span>
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-lg text-[var(--foreground)]/80 mb-10 sm:mb-12 max-w-4xl px-2 mx-auto leading-relaxed"
        >
          {paragraph}
        </motion.p>
      </motion.div>

      <div className="w-full overflow-hidden">
        {/* <Principle /> */}
        {/* <ProcessSection /> */}
      </div>
    </div>
  );
};

export default HeroPage;
