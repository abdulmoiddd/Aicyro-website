import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router"; // Using 'next/router' for Pages router
import { motion } from "framer-motion";
import { FileText, CheckCircle, ArrowRight, Download, Lock } from "lucide-react";
import Navbar from "../../Components/Essntials/Navbar";
import Footer from "../../Components/Essntials/footer";

// Firebase
import { ref, push, serverTimestamp } from "firebase/database";
import { database } from "../../lib/firebase";

const MVPBlueprint = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Founder", // Default
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Save to Firebase (Realtime Database)
      const leadsRef = ref(database, "leadMagnets/mvpBlueprint");
      await push(leadsRef, {
        ...formData,
        timestamp: serverTimestamp(),
        source: "mvp-blueprint-page",
        status: "new",
      });

      // 2. Call Backend API to trigger Email (Optional but recommended)
      // We don't await this to keep the UI snappy, or we can if strictly needed.
      fetch("/api/send-blueprint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 3. Redirect to Delivery Page
      router.push("/thank-you-mvp");
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const checklistItems = [
    "MVP Validation Checklist",
    "Feature Prioritization Framework",
    "Tech Stack Selection Guide",
    "Timeline & Budget Estimator",
  ];

  return (
    <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-white">
      <Head>
        <title>Download the MVP Launch Blueprint | Aicyro Solutions</title>
        <meta name="description" content="The step-by-step roadmap to validate, build, and launch your SaaS MVP." />
      </Head>

      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT: COPY & VALUE --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent-blue)] text-[var(--accent-blue)] text-xs font-bold uppercase mb-6 bg-[var(--accent-blue)]/10">
              <FileText size={14} />
              <span>Free Resource for Founders</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Guessing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                Start Shipping.
              </span>
            </h1>
            
            <p className="text-lg text-[var(--foreground-muted)] mb-8 leading-relaxed">
              Get the ultimate <strong>MVP Launch Blueprint</strong> used by top startups to validate ideas, prioritize features, and launch in weeks, not months.
            </p>

            <ul className="space-y-4 mb-10">
              {checklistItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-[var(--foreground)] font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Visual preview of the PDF (Placeholder) */}
            <div className="relative w-full h-64 bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)] flex items-center justify-center overflow-hidden opacity-80">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent" />
                <FileText className="w-20 h-20 text-[var(--foreground-muted)] opacity-50" />
                <span className="absolute bottom-4 text-sm text-[var(--foreground-muted)]">PDF Preview</span>
            </div>
          </motion.div>

          {/* --- RIGHT: FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
            
            <h3 className="text-2xl font-bold mb-2">Get Instant Access</h3>
            <p className="text-[var(--foreground-muted)] mb-8 text-sm">
              Enter your details below to receive the PDF directly to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--foreground)]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--foreground)]">Work Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--foreground)]">I am a...</label>
                <select
                  name="role"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border-color)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="Founder">Founder / Co-Founder</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="Developer">Developer</option>
                  <option value="Investor">Investor</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-[var(--primary)] text-white font-bold text-lg hover:shadow-lg transition-all ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"}`}
              >
                {loading ? "Processing..." : "Send Me the Blueprint"}
                {!loading && <Download size={20} />}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[var(--foreground-muted)] mt-4">
                <Lock size={12} />
                <span>Your data is secure. No spam, ever.</span>
              </div>
            </form>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MVPBlueprint;