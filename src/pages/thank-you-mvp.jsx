import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "../Components/Essntials/Navbar";
import Footer from "../Components/Essntials/footer";

const ThankYouMVP = () => {
  return (
    <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)]">
      <Head>
        <title>Here is your Blueprint | Aicyro Solutions</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Navbar />

      <main className="pt-32 pb-24 px-4 flex items-center justify-center">
        <div className="max-w-3xl w-full text-center">
          
          {/* Success Animation */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20"
          >
            <CheckCircle className="w-10 h-10 text-green-500" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            You're In!
          </h1>
          <p className="text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto">
            The <strong>MVP Launch Blueprint</strong> has been sent to your email. 
            <br />
            (Check your spam folder just in case!)
          </p>

          {/* Download Button (Direct) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-8 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl mb-12"
          >
            <h3 className="text-xl font-semibold mb-4">Don't want to wait?</h3>
            <a 
              href="/assets/Aicyro_MVP_Blueprint.pdf" // Ensure this file exists in /public/assets/
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              <Download size={18} />
              Download PDF Now
            </a>
          </motion.div>

          {/* NEXT STEP CTA: The "Backend" Strategy */}
          <div className="border-t border-[var(--border-color)] pt-12">
            <p className="text-sm font-bold text-[var(--primary)] uppercase tracking-widest mb-4">
              What's Next?
            </p>
            <h2 className="text-3xl font-bold mb-4">
              Need help executing this blueprint?
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
              Our engineering team specializes in turning these blueprints into live, scalable SaaS products in 30-45 days.
            </p>
            
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--primary)] text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-[var(--primary)]/30">
              <Calendar size={18} />
              Book a Free Feasibility Call
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouMVP;