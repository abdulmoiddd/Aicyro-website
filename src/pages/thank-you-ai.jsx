import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, BarChart3, Mail } from "lucide-react";
import Navbar from "../Components/Essntials/Navbar";
import Footer from "../Components/Essntials/footer";

const ThankYouAI = () => {
  const router = useRouter();
  const { score } = router.query; // Get score from URL
  
  // Default to a middle score if accessed directly
  const finalScore = score || 65; 

  // Determine readiness level text
  let readinessLevel = "Moderate Potential";
  let readinessColor = "text-yellow-400";
  if (finalScore > 80) {
      readinessLevel = "High Readiness";
      readinessColor = "text-green-400";
  } else if (finalScore < 50) {
      readinessLevel = "Foundational Stage";
      readinessColor = "text-orange-400";
  }

  return (
    <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)]">
      <Head>
        <title>Your AI Score | Aicyro Solutions</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Navbar />

      <main className="pt-32 pb-24 px-4 flex items-center justify-center">
        <div className="max-w-3xl w-full text-center">
          
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="mb-8"
          >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-bold mb-6">
                <CheckCircle size={16} />
                <span>Assessment Complete</span>
             </div>
             
             <h1 className="text-3xl md:text-5xl font-bold mb-4">
               Your AI Readiness Score
             </h1>
          </motion.div>

          {/* SCORE CARD */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-10 mb-10 max-w-lg mx-auto shadow-2xl relative"
          >
             {/* Circular Score Visual (CSS only) */}
             <div className="w-40 h-40 mx-auto mb-6 rounded-full border-8 border-[var(--border-color)] flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-8 border-purple-500 border-t-transparent animate-spin-slow" style={{ animationDuration: '3s' }}></div>
                <div className="text-center">
                    <span className="text-5xl font-bold block">{finalScore}</span>
                    <span className="text-xs text-[var(--foreground-muted)]">out of 100</span>
                </div>
             </div>

             <h2 className={`text-2xl font-bold ${readinessColor} mb-2`}>{readinessLevel}</h2>
             <p className="text-[var(--foreground-muted)]">
                Based on your infrastructure and goals, your business shows {readinessLevel.toLowerCase()} for AI adoption.
             </p>
          </motion.div>

          <div className="max-w-xl mx-auto space-y-6">
             <div className="flex items-start gap-4 text-left p-4 bg-[var(--card-bg)]/50 rounded-xl border border-[var(--border-color)]">
                <Mail className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                   <h3 className="font-bold text-[var(--foreground)]">Full Report Sent</h3>
                   <p className="text-sm text-[var(--foreground-muted)]">
                      We've emailed you a detailed breakdown of your score, including suggested use cases and a risk mitigation checklist.
                   </p>
                </div>
             </div>

             <div className="pt-8">
                <p className="mb-4 font-medium">Ready to discuss your score?</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--primary)] text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-[var(--primary)]/30">
                  <BarChart3 size={18} />
                  Book Strategy Session
                  <ArrowRight size={18} />
                </Link>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouAI;