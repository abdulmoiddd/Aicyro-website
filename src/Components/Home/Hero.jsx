import React, { useState, useEffect } from "react";
import Principle from "./principle";
import Navbar from "../Essntials/Navbar";
import { motion } from "framer-motion";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
//----------------------------------------------

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
      <div className="flex items-center justify-center min-h-screen w-full bg-[#0B0219]">
        <motion.div
          className="w-16 h-16 border-4 border-white/20 border-t-[#8A2BE2] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  const { welcomeText, headingPrefix, paragraph } = heroData;

  // 6. RENDER
  return (
    // FIX APPLIED: Added 'max-w-[100vw]' and 'flex-col' to strictly constrain width and stack children
    <div className="bg-[#0B0219] relative w-full max-w-[100vw] min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />
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

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center pt-24 sm:pt-32 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-24 pb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* WELCOME BANNER */}
        <motion.div
          variants={itemVariants}
          className="bg-[#7B71DB]/10 border border-[#7B71DB]/50 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium tracking-widest text-[#BDB5FF] mb-6 sm:mb-8 shadow-lg"
        >
          {welcomeText}
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight break-words w-full"
        >
          <span className="text-white/95">{headingPrefix}</span>
          {/* Changed to 'block' to ensure it always starts on the next line */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#6A5ACD] block mt-2 min-h-[1.2em]">
            {displayedText}
          </span>
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-lg text-gray-300/80 mb-12 max-w-4xl px-2 mx-auto"
        >
          {paragraph}
        </motion.p>

        {/* BUTTONS REMOVED HERE */}
      </motion.div>

      {/* FIX APPLIED: Wrapped Principle in a container that hides overflow specifically for this section */}
      <div className="w-full overflow-hidden">
        <Principle />
      </div>
    </div>
  );
};

export default HeroPage;
