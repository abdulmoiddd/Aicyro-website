import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, ArrowRight, Download } from "lucide-react";
import Navbar from "../Components/Essntials/Navbar";
import Footer from "../Components/Essntials/footer";

const ThankYouEstimate = () => {
  const router = useRouter();
  const { min, max } = router.query; 

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(val);
  };

  return (
    <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)]">
      <Head>
        <title>Your Project Estimate | Aicyro Solutions</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Navbar />

      <main className="pt-32 pb-24 px-4 flex items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="mb-8"
          >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-bold mb-6">
                <CheckCircle size={16} />
                <span>Calculation Complete</span>
             </div>
             
             <h1 className="text-3xl md:text-4xl font-bold mb-2">
               Your Estimated Budget Range
             </h1>
             <p className="text-[var(--foreground-muted)]">Based on the features and platform selected.</p>
          </motion.div>

          {/* PRICE CARD */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-10 mb-10 max-w-xl mx-auto shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-[60px]" />
             
             <div className="py-8">
                <span className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-500">
                    {min ? formatCurrency(min) : "$..."} - {max ? formatCurrency(max) : "$..."}
                </span>
             </div>
             
             <div className="bg-[var(--background)]/50 p-4 rounded-xl text-sm text-[var(--foreground-muted)] border border-[var(--border-color)]">
                *This is a preliminary estimate. Final costs may vary based on specific design requirements and third-party integrations.
             </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
             {/* OPTION 1: Book Call */}
             <div className="p-6 rounded-2xl bg-[var(--primary)] text-white text-left flex flex-col justify-between">
                <div>
                    <h3 className="font-bold text-xl mb-2">Validate this Quote</h3>
                    <p className="opacity-90 text-sm mb-6">Talk to an engineer to firm up this number and get a technical proposal.</p>
                </div>
                <Link href="/contact" className="w-full py-3 rounded-xl bg-white text-[var(--primary)] font-bold text-center hover:shadow-lg transition-all">
                    Book Feasibility Call
                </Link>
             </div>

             {/* OPTION 2: Download */}
             <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] text-left flex flex-col justify-between">
                <div>
                    <h3 className="font-bold text-xl mb-2">Check your Email</h3>
                    <p className="text-[var(--foreground-muted)] text-sm mb-6">We sent a PDF summary of your selected features and timeline.</p>
                </div>
                <button disabled className="w-full py-3 rounded-xl border border-[var(--border-color)] text-[var(--foreground-muted)] font-medium text-center cursor-default">
                    Sent to Inbox
                </button>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouEstimate;