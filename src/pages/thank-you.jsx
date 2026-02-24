import React from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Home, FileText } from "lucide-react";
import Navbar from "../Components/Essntials/Navbar";
import Footer from "../Components/Essntials/footer";

const ThankYou = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 200, damping: 15 } 
    },
  };

  return (
    <div className="bg-[var(--background)] min-h-screen flex flex-col relative overflow-hidden selection:bg-[var(--primary)] selection:text-white">
      
      {/* --- SEO: NoIndex is important for Thank You pages to avoid analytics skew --- */}
      <Head>
        <title>Thank You | Aicyro Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Navbar />

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-[var(--primary)] rounded-full blur-[120px] opacity-20"
        />
        <div 
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" 
          style={{ maskImage: 'radial-gradient(circle at center, black, transparent 70%)' }}
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow flex items-center justify-center relative z-10 px-4 pt-32 pb-20">
        <motion.div 
          className="max-w-2xl w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* 1. Animated Success Icon */}
          <motion.div variants={scaleVariants} className="mb-8 flex justify-center">
            <div className="relative">
              {/* Glowing Pulse behind checkmark */}
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
              
              <div className="relative bg-[var(--card-bg)] border border-green-500/30 p-6 rounded-full shadow-2xl shadow-green-500/20">
                <CheckCircle className="w-16 h-16 text-green-500" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* 2. Main Headings */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)] tracking-tight"
          >
            Message Received!
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-[var(--foreground-muted)] mb-10 leading-relaxed max-w-lg mx-auto"
          >
            Thanks for reaching out. Our team is reviewing your inquiry and will get back to you within <strong>24 hours</strong>.
          </motion.p>

          {/* 3. Next Steps / Calls to Action */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/" className="w-full sm:w-auto">
              <button className="w-full group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--primary)] text-white font-semibold text-lg hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all duration-300 hover:scale-105">
                <Home size={18} />
                <span>Return Home</span>
              </button>
            </Link>

            <Link href="/blogs" className="w-full sm:w-auto">
              <button className="w-full group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground)] font-medium text-lg hover:bg-[var(--foreground)]/5 transition-all duration-300">
                <FileText size={18} />
                <span>Read Our Blog</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;