// import React, { useState } from "react";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Calculator, Check, ArrowRight, ArrowLeft,
//   Smartphone, Monitor, Globe, Database, Lock, Zap
// } from "lucide-react";
// import Navbar from "../../Components/Essntials/Navbar";
// import Footer from "../../Components/Essntials/footer";

// // Firebase
// import { ref, push, serverTimestamp } from "firebase/database";
// import { database } from "../../lib/firebase";

// const ProjectEstimate = () => {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // Form State
//   const [formData, setFormData] = useState({
//     projectType: [], // e.g., Web, Mobile
//     features: [],    // e.g., Auth, Payments, AI
//     timeline: "3-6 months",
//     budget: "$10k - $25k",
//     name: "",
//     email: "",
//     details: ""
//   });

//   // Toggle Selection Helper
//   const toggleSelection = (category, value) => {
//     setFormData(prev => {
//       const list = prev[category];
//       if (list.includes(value)) {
//         return { ...prev, [category]: list.filter(item => item !== value) };
//       } else {
//         return { ...prev, [category]: [...list, value] };
//       }
//     });
//   };

//   // Cost Logic (Simplified for Lead Magnet)
//   const calculateEstimate = () => {
//     let min = 5000;
//     let max = 10000;

//     // Platform Multipliers
//     if (formData.projectType.includes("Web App")) { min += 5000; max += 10000; }
//     if (formData.projectType.includes("Mobile App")) { min += 8000; max += 15000; }
//     if (formData.projectType.includes("E-commerce")) { min += 4000; max += 8000; }

//     // Feature Add-ons
//     if (formData.features.includes("AI / Chatbot")) { min += 5000; max += 12000; }
//     if (formData.features.includes("Payments")) { min += 2000; max += 4000; }
//     if (formData.features.includes("User Auth")) { min += 1000; max += 2000; }
//     if (formData.features.includes("Admin Panel")) { min += 3000; max += 6000; }

//     return { min, max };
//   };

//   const handleNext = () => setStep(prev => prev + 1);
//   const handleBack = () => setStep(prev => prev - 1);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const estimate = calculateEstimate();

//     try {
//       // 1. Save Lead
//       const leadsRef = ref(database, "leadMagnets/projectEstimator");
//       await push(leadsRef, {
//         ...formData,
//         estimatedMin: estimate.min,
//         estimatedMax: estimate.max,
//         timestamp: serverTimestamp(),
//         source: "estimator-tool",
//         status: "new",
//       });

//       // 2. Email Notification
//       fetch("/api/send-estimate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, estimate }),
//       });

//       // 3. Redirect with Estimate
//       router.push(`/thank-you-estimate?min=${estimate.min}&max=${estimate.max}`);
//     } catch (error) {
//       console.error("Error:", error);
//       setLoading(false);
//     }
//   };

//   // --- STEPS RENDERER ---
//   return (
//     <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-white">
//       <Head>
//         <title>Project Cost Estimator | Aicyro Solutions</title>
//       </Head>

//       <Navbar />

//       <main className="pt-32 pb-20 px-4">
//         <div className="max-w-3xl mx-auto">
          
//           {/* Progress Bar */}
//           <div className="mb-10">
//             <div className="h-1 w-full bg-[var(--border-color)] rounded-full overflow-hidden">
//               <motion.div
//                 className="h-full bg-[var(--primary)]"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${(step / 4) * 100}%` }}
//               />
//             </div>
//             <p className="text-right text-xs text-[var(--foreground-muted)] mt-2">Step {step} of 4</p>
//           </div>

//           <form onSubmit={handleSubmit} className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 md:p-12 shadow-2xl min-h-[500px] flex flex-col justify-between">
            
//             <AnimatePresence mode="wait">
              
//               {/* STEP 1: PLATFORM */}
//               {step === 1 && (
//                 <motion.div
//                   key="step1"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   className="space-y-6"
//                 >
//                   <h2 className="text-3xl font-bold">What are we building?</h2>
//                   <p className="text-[var(--foreground-muted)]">Select all that apply.</p>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {[
//                       { id: "Web App", icon: <Monitor />, desc: "SaaS, Dashboard, Portal" },
//                       { id: "Mobile App", icon: <Smartphone />, desc: "iOS & Android" },
//                       { id: "E-commerce", icon: <Globe />, desc: "Online Store, Marketplace" },
//                       { id: "Internal Tool", icon: <Database />, desc: "CRM, ERP, Workflow" },
//                     ].map((item) => (
//                       <div
//                         key={item.id}
//                         onClick={() => toggleSelection("projectType", item.id)}
//                         className={`cursor-pointer p-6 rounded-xl border transition-all flex items-center gap-4 ${formData.projectType.includes(item.id) ? "border-[var(--primary)] bg-[var(--primary)]/10" : "border-[var(--border-color)] hover:border-[var(--foreground-muted)]"}`}
//                       >
//                         <div className={`${formData.projectType.includes(item.id) ? "text-[var(--primary)]" : "text-[var(--foreground-muted)]"}`}>
//                           {item.icon}
//                         </div>
//                         <div>
//                           <h3 className="font-bold">{item.id}</h3>
//                           <p className="text-xs text-[var(--foreground-muted)]">{item.desc}</p>
//                         </div>
//                         {formData.projectType.includes(item.id) && <Check size={18} className="ml-auto text-[var(--primary)]" />}
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {/* STEP 2: FEATURES */}
//               {step === 2 && (
//                 <motion.div
//                   key="step2"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   className="space-y-6"
//                 >
//                   <h2 className="text-3xl font-bold">Key Features?</h2>
//                   <p className="text-[var(--foreground-muted)]">What powers your application?</p>
                  
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                     {[
//                       "User Auth", "Payments", "Admin Panel",
//                       "AI / Chatbot", "Search / Filter", "Real-time Chat",
//                       "File Uploads", "Analytics", "3rd Party API"
//                     ].map((feature) => (
//                       <div
//                         key={feature}
//                         onClick={() => toggleSelection("features", feature)}
//                         className={`cursor-pointer p-4 rounded-lg border text-sm font-medium transition-all text-center ${formData.features.includes(feature) ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]" : "border-[var(--border-color)] text-[var(--foreground-muted)] hover:border-[var(--foreground)]"}`}
//                       >
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {/* STEP 3: TIMELINE & BUDGET */}
//               {step === 3 && (
//                 <motion.div
//                   key="step3"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   className="space-y-8"
//                 >
//                   <div>
//                     <h2 className="text-3xl font-bold mb-6">Timeline & Budget</h2>
                    
//                     <label className="block text-sm font-medium mb-3 text-[var(--foreground-muted)]">Ideal Timeline</label>
//                     <div className="grid grid-cols-2 gap-3 mb-8">
//                       {["< 2 months", "3-6 months", "6+ months", "ASAP"].map(opt => (
//                          <div
//                           key={opt}
//                           onClick={() => setFormData({...formData, timeline: opt})}
//                           className={`cursor-pointer p-3 rounded-lg border text-sm text-center ${formData.timeline === opt ? "border-[var(--primary)] bg-[var(--primary)]/10" : "border-[var(--border-color)]"}`}
//                          >
//                            {opt}
//                          </div>
//                       ))}
//                     </div>

//                     <label className="block text-sm font-medium mb-3 text-[var(--foreground-muted)]">Rough Budget Range</label>
//                     <select
//                       className="w-full p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)] outline-none"
//                       value={formData.budget}
//                       onChange={(e) => setFormData({...formData, budget: e.target.value})}
//                     >
//                       <option value="$5k - $10k">$5k - $10k (MVP)</option>
//                       <option value="$10k - $25k">$10k - $25k (Standard)</option>
//                       <option value="$25k - $50k">$25k - $50k (Advanced)</option>
//                       <option value="$50k+">$50k+ (Enterprise)</option>
//                     </select>
//                   </div>
//                 </motion.div>
//               )}

//               {/* STEP 4: CONTACT */}
//               {step === 4 && (
//                 <motion.div
//                   key="step4"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   className="space-y-6"
//                 >
//                   <h2 className="text-3xl font-bold">Where should we send the estimate?</h2>
//                   <p className="text-[var(--foreground-muted)]">We'll also include a PDF breakdown of the scope.</p>

//                   <div className="space-y-4">
//                     <input
//                       required
//                       type="text"
//                       placeholder="Your Name"
//                       className="w-full p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)] outline-none focus:border-[var(--primary)]"
//                       onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     />
//                     <input
//                       required
//                       type="email"
//                       placeholder="Work Email"
//                       className="w-full p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)] outline-none focus:border-[var(--primary)]"
//                       onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     />
//                     <textarea
//                       placeholder="Any specific details? (Optional)"
//                       className="w-full p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)] outline-none focus:border-[var(--primary)] h-32 resize-none"
//                       onChange={(e) => setFormData({...formData, details: e.target.value})}
//                     />
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* NAVIGATION BUTTONS */}
//             <div className="flex justify-between pt-8 border-t border-[var(--border-color)] mt-4">
//               {step > 1 ? (
//                 <button type="button" onClick={handleBack} className="px-6 py-3 rounded-xl border border-[var(--border-color)] hover:bg-[var(--foreground)]/5 flex items-center gap-2">
//                   <ArrowLeft size={18} /> Back
//                 </button>
//               ) : (
//                 <div /> // Spacer
//               )}

//               {step < 4 ? (
//                 <button type="button" onClick={handleNext} className="px-8 py-3 rounded-xl bg-[var(--primary)] text-white font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-[var(--primary)]/30">
//                   Next Step <ArrowRight size={18} />
//                 </button>
//               ) : (
//                 <button type="submit" disabled={loading} className={`px-8 py-3 rounded-xl bg-green-600 text-white font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-green-600/30 ${loading ? "opacity-70" : ""}`}>
//                   {loading ? "Calculating..." : "Get My Estimate"} <Calculator size={18} />
//                 </button>
//               )}
//             </div>

//           </form>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ProjectEstimate;

//
//
//
//
///
//
////
///
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
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, Check, ArrowRight, ArrowLeft, 
  Smartphone, Monitor, Globe, Database 
} from "lucide-react";
import Navbar from "../../Components/Essntials/Navbar";
import Footer from "../../Components/Essntials/footer";

// Firebase
import { ref, push, serverTimestamp } from "firebase/database";
import { database } from "../../lib/firebase";

const ProjectEstimate = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // State for validation errors

  // Form State
  const [formData, setFormData] = useState({
    projectType: [], 
    features: [],    
    timeline: "3-6 months",
    budget: "$10k - $25k",
    name: "",
    email: "",
    details: ""
  });

  // Toggle Selection Helper
  const toggleSelection = (category, value) => {
    setFormData(prev => {
      const list = prev[category];
      if (list.includes(value)) {
        return { ...prev, [category]: list.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...list, value] };
      }
    });
    setError(""); // Clear error on selection
  };

  // Cost Logic
  const calculateEstimate = () => {
    let min = 5000;
    let max = 10000;

    // Platform Multipliers
    if (formData.projectType.includes("Web App")) { min += 5000; max += 10000; }
    if (formData.projectType.includes("Mobile App")) { min += 8000; max += 15000; }
    if (formData.projectType.includes("E-commerce")) { min += 4000; max += 8000; }

    // Feature Add-ons
    if (formData.features.includes("AI / Chatbot")) { min += 5000; max += 12000; }
    if (formData.features.includes("Payments")) { min += 2000; max += 4000; }
    if (formData.features.includes("User Auth")) { min += 1000; max += 2000; }
    if (formData.features.includes("Admin Panel")) { min += 3000; max += 6000; }

    return { min, max };
  };

  // Get current estimate for display
  const currentEstimate = calculateEstimate();

  // --- UPDATED: Validation Logic ---
  const handleNext = () => {
    // Validate Step 1
    if (step === 1 && formData.projectType.length === 0) {
      setError("Please select at least one project type to continue.");
      return;
    }
    
    // Validate Step 2
    if (step === 2 && formData.features.length === 0) {
      setError("Please select at least one feature.");
      return;
    }

    setError("");
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setError("");
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const estimate = calculateEstimate();

    try {
      const leadsRef = ref(database, "leadMagnets/projectEstimator");
      await push(leadsRef, {
        ...formData,
        estimatedMin: estimate.min,
        estimatedMax: estimate.max,
        timestamp: serverTimestamp(),
        source: "estimator-tool",
        status: "new",
      });

      fetch("/api/send-estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, estimate }),
      });

      router.push(`/thank-you-estimate?min=${estimate.min}&max=${estimate.max}`);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-white">
      <Head>
        <title>Project Cost Estimator | Aicyro Solutions</title>
      </Head>

      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          
          {/* --- UPDATED: Header with Progress & Live Price --- */}
          <div className="flex flex-col-reverse sm:flex-row items-end sm:items-center justify-between gap-4 mb-8">
            {/* Progress Bar */}
            <div className="w-full sm:w-2/3">
              <div className="h-2 w-full bg-[var(--border-color)] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[var(--primary)]" 
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
              <p className="text-xs text-[var(--foreground-muted)] mt-2">Step {step} of 4</p>
            </div>

            {/* Live Price Tag */}
            <div className="w-full sm:w-auto text-left sm:text-right bg-[var(--card-bg)] border border-[var(--primary)]/30 p-3 rounded-lg">
                <p className="text-[10px] text-[var(--foreground-muted)] uppercase font-bold tracking-wider">
                    Estimated Range
                </p>
                <p className="text-lg font-bold text-[var(--primary)]">
                    ${currentEstimate.min.toLocaleString()} - ${currentEstimate.max.toLocaleString()}
                </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 md:p-12 shadow-2xl min-h-[500px] flex flex-col justify-between relative">
            
            {/* Error Message Toast */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-full text-sm font-medium"
              >
                {error}
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              
              {/* STEP 1: PLATFORM */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">What are we building?</h2>
                  <p className="text-[var(--foreground-muted)]">Select at least one option.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "Web App", icon: <Monitor />, desc: "SaaS, Dashboard, Portal" },
                      { id: "Mobile App", icon: <Smartphone />, desc: "iOS & Android" },
                      { id: "E-commerce", icon: <Globe />, desc: "Online Store, Marketplace" },
                      { id: "Internal Tool", icon: <Database />, desc: "CRM, ERP, Workflow" },
                    ].map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => toggleSelection("projectType", item.id)}
                        className={`cursor-pointer p-6 rounded-xl border transition-all flex items-center gap-4 ${formData.projectType.includes(item.id) ? "border-[var(--primary)] bg-[var(--primary)]/10" : "border-[var(--border-color)] hover:border-[var(--foreground-muted)]"}`}
                      >
                        <div className={`${formData.projectType.includes(item.id) ? "text-[var(--primary)]" : "text-[var(--foreground-muted)]"}`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold">{item.id}</h3>
                          <p className="text-xs text-[var(--foreground-muted)]">{item.desc}</p>
                        </div>
                        {formData.projectType.includes(item.id) && <Check size={18} className="ml-auto text-[var(--primary)]" />}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: FEATURES */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Key Features?</h2>
                  <p className="text-[var(--foreground-muted)]">Select the functionalities you need.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "User Auth", "Payments", "Admin Panel", 
                      "AI / Chatbot", "Search / Filter", "Real-time Chat", 
                      "File Uploads", "Analytics", "3rd Party API"
                    ].map((feature) => (
                      <div 
                        key={feature}
                        onClick={() => toggleSelection("features", feature)}
                        className={`cursor-pointer p-4 rounded-lg border text-sm font-medium transition-all text-center ${formData.features.includes(feature) ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]" : "border-[var(--border-color)] text-[var(--foreground-muted)] hover:border-[var(--foreground)]"}`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: TIMELINE & BUDGET */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Timeline & Budget</h2>
                    
                    <label className="block text-sm font-medium mb-3 text-[var(--foreground-muted)]">Ideal Timeline</label>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {["< 2 months", "3-6 months", "6+ months", "ASAP"].map(opt => (
                          <div 
                           key={opt}
                           onClick={() => setFormData({...formData, timeline: opt})}
                           className={`cursor-pointer p-3 rounded-lg border text-sm text-center ${formData.timeline === opt ? "border-[var(--primary)] bg-[var(--primary)]/10" : "border-[var(--border-color)]"}`}
                          >
                            {opt}
                          </div>
                      ))}
                    </div>

                    <label className="block text-sm font-medium mb-3 text-[var(--foreground-muted)]">Rough Budget Range</label>
                    <select 
                      className="w-full p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)] outline-none"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="$5k - $10k">$5k - $10k (MVP)</option>
                      <option value="$10k - $25k">$10k - $25k (Standard)</option>
                      <option value="$25k - $50k">$25k - $50k (Advanced)</option>
                      <option value="$50k+">$50k+ (Enterprise)</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: CONTACT */}
              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Final Step</h2>
                  <p className="text-[var(--foreground-muted)]">Where should we send the estimate?</p>

                  <div className="space-y-4">
                    <input 
                      required 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)] outline-none focus:border-[var(--primary)]"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      required 
                      type="email" 
                      placeholder="Work Email" 
                      className="w-full p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)] outline-none focus:border-[var(--primary)]"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <textarea 
                      placeholder="Any specific details? (Optional)" 
                      className="w-full p-4 rounded-xl bg-[var(--background)] border border-[var(--border-color)] outline-none focus:border-[var(--primary)] h-32 resize-none"
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-between pt-8 border-t border-[var(--border-color)] mt-4">
              {step > 1 ? (
                <button type="button" onClick={handleBack} className="px-6 py-3 rounded-xl border border-[var(--border-color)] hover:bg-[var(--foreground)]/5 flex items-center gap-2">
                  <ArrowLeft size={18} /> Back
                </button>
              ) : (
                <div /> // Spacer
              )}

              {step < 4 ? (
                <button type="button" onClick={handleNext} className="px-8 py-3 rounded-xl bg-[var(--primary)] text-white font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-[var(--primary)]/30">
                  Next Step <ArrowRight size={18} />
                </button>
              ) : (
                <button type="submit" disabled={loading} className={`px-8 py-3 rounded-xl bg-green-600 text-white font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-green-600/30 ${loading ? "opacity-70" : ""}`}>
                  {loading ? "Calculating..." : "Get My Estimate"} <Calculator size={18} />
                </button>
              )}
            </div>

          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectEstimate;