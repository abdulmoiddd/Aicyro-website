import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Bot, CheckCircle, ArrowRight, Server, Database, TrendingUp, Lock } from "lucide-react";
import Navbar from "../../Components/Essntials/Navbar";
import Footer from "../../Components/Essntials/footer";

// Firebase
import { ref, push, serverTimestamp } from "firebase/database";
import { database } from "../../lib/firebase";

const AIReadiness = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // Assessment State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "SaaS / Tech",
    teamSize: "1-10",
    dataState: "spreadsheets", // spreadsheets, cloud, mixed, chaotic
    primaryGoal: "automation", // automation, insights, customer-service
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateScore = () => {
    // Simple mock logic to generate a score for the Thank You page
    let score = 40; // Base score
    if (formData.dataState === "cloud") score += 30;
    if (formData.dataState === "mixed") score += 15;
    if (formData.primaryGoal === "automation") score += 10;
    if (formData.teamSize !== "1-10") score += 10; // Larger teams often have more data
    return Math.min(score, 98);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const score = calculateScore();

    try {
      // 1. Save to Firebase
      const leadsRef = ref(database, "leadMagnets/aiReadiness");
      await push(leadsRef, {
        ...formData,
        score: score,
        timestamp: serverTimestamp(),
        source: "ai-assessment-page",
        status: "new",
      });

      // 2. Trigger Email API
      fetch("/api/send-ai-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, score }),
      });

      // 3. Redirect with Score as Query Param
      router.push(`/thank-you-ai?score=${score}`);
    } catch (error) {
      console.error("Error submitting assessment:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)] selection:bg-purple-500 selection:text-white">
      <Head>
        <title>AI Readiness Assessment | Aicyro Solutions</title>
        <meta name="description" content="Take our free assessment to see if your business is ready for AI automation." />
      </Head>

      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-bold uppercase mb-6 bg-purple-500/10">
              <Bot size={14} />
              <span>Assessment Tool</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Your AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Opportunity Score
              </span>
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Answer 5 simple questions to get a personalized report on your infrastructure, potential ROI, and implementation roadmap.
            </p>
          </div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* SECTION 1: BUSINESS INFO */}
              <div className="space-y-5">
                <h3 className="text-lg font-bold flex items-center gap-2 text-[var(--foreground)]">
                  <TrendingUp size={18} className="text-purple-500" /> Business Context
                </h3>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--foreground-muted)]">Company Name</label>
                  <input type="text" name="company" required className="input-field" placeholder="Acme Inc." onChange={handleChange} />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--foreground-muted)]">Industry</label>
                  <select name="industry" className="input-field" onChange={handleChange}>
                    <option value="SaaS / Tech">SaaS / Technology</option>
                    <option value="Ecommerce">Ecommerce / Retail</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance / Fintech</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                 <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--foreground-muted)]">Team Size</label>
                  <select name="teamSize" className="input-field" onChange={handleChange}>
                    <option value="1-10">1-10 Employees</option>
                    <option value="11-50">11-50 Employees</option>
                    <option value="51-200">51-200 Employees</option>
                    <option value="200+">200+ Employees</option>
                  </select>
                </div>
              </div>

              {/* SECTION 2: TECH STATE */}
              <div className="space-y-5">
                 <h3 className="text-lg font-bold flex items-center gap-2 text-[var(--foreground)]">
                  <Database size={18} className="text-blue-500" /> Data & Goals
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--foreground-muted)]">Where does your data is stored ?</label>
                  <select name="dataState" className="input-field" onChange={handleChange}>
                    <option value="spreadsheets">Mostly Spreadsheets / Manual</option>
                    <option value="cloud">Centralized Cloud (AWS/Azure/GCP)</option>
                    <option value="mixed">Mixed (SaaS tools + Spreadsheets)</option>
                    <option value="chaotic">Scattered / Unsure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--foreground-muted)]">Primary Goal for AI?</label>
                  <select name="primaryGoal" className="input-field" onChange={handleChange}>
                    <option value="automation">Automate Repetitive Tasks</option>
                    <option value="insights">Better Data Insights / Reporting</option>
                    <option value="customer-service">Customer Support (Chatbots)</option>
                    <option value="product">Enhance Product Features</option>
                  </select>
                </div>
              </div>

              {/* SECTION 3: CONTACT (Full Width) */}
              <div className="md:col-span-2 pt-6 border-t border-[var(--border-color)]">
                 <h3 className="text-lg font-bold mb-4 text-[var(--foreground)]">Where should we send the report?</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[var(--foreground-muted)]">Your Name</label>
                      <input type="text" name="name" required className="input-field" placeholder="Name" onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[var(--foreground-muted)]">Work Email</label>
                      <input type="email" name="email" required className="input-field" placeholder="Email" onChange={handleChange} />
                    </div>
                 </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.01]"}`}
                >
                  {loading ? "Analyzing..." : "Generate My Score"}
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-[var(--foreground-muted)] mt-4">
                    <Lock size={12} />
                    <span>We respect your privacy. No spam.</span>
                </div>
              </div>

            </form>
          </motion.div>
        </div>
      </main>

      {/* Internal CSS for Inputs to keep JSX clean */}
      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          background-color: var(--background);
          border: 1px solid var(--border-color);
          color: var(--foreground);
          outline: none;
          transition: all 0.2s;
        }
        .input-field:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
        }
      `}</style>
      
      <Footer />
    </div>
  );
};

export default AIReadiness;