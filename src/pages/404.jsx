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
    // UPDATED: Background and Text variables
    <div className="relative bg-[var(--background)] min-h-screen flex flex-col font-sans selection:bg-[var(--secondary)]/30 selection:text-white transition-colors duration-300">
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
        {/* UPDATED: Uses foreground variable for grid lines with low opacity */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Central Spotlight - Controlled and subtle */}
        {/* UPDATED: Uses secondary variable */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--secondary)] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
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
              // UPDATED: Gradient uses Foreground -> Secondary -> Primary
              className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[var(--foreground)] via-[var(--secondary)] to-[var(--primary)] opacity-90"
              animate={gradientAnimation}
              style={{ backgroundSize: "200% auto" }}
            >
              404
            </motion.h1>
          </motion.div>

          {/* Professional Copy */}
          <motion.div variants={itemVariants} className="mb-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--foreground)] tracking-tight">
              Page not found
            </h2>
            <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-lg mx-auto leading-relaxed font-light">
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
                // UPDATED: Background uses Primary, Shadow uses Primary
                className="px-8 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-[var(--primary)] hover:opacity-90 shadow-lg shadow-[var(--primary)]/20 border border-transparent min-w-[160px]"
              >
                Go to Homepage
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                // UPDATED: Border uses border-color, Text uses muted/foreground
                className="px-8 py-3 text-sm font-medium text-[var(--foreground-muted)] transition-all duration-200 rounded-lg border border-[var(--border-color)] hover:border-[var(--foreground)]/20 hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 min-w-[160px]"
              >
                Contact Support
              </motion.button>
            </Link>
          </motion.div>

          {/* Clean Divider */}
          <motion.div
            variants={itemVariants}
            // UPDATED: Border color
            className="border-t border-[var(--border-color)] max-w-sm mx-auto"
          />

          {/* Quick Links - Clean list format */}
          <motion.div variants={itemVariants} className="pt-8">
            <p className="text-xs uppercase tracking-widest text-[var(--foreground-muted)] mb-5 font-semibold">
              Helpful Links
            </p>
            


            <div className="flex flex-wrap justify-center gap-8 text-sm text-[var(--foreground-muted)]">
              {["Services", "Portfolio", "About Us"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  // UPDATED: Hover text color
                  className="hover:text-[var(--foreground)] transition-colors duration-200"
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