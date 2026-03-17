// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles, ClipboardCheck } from "lucide-react";

// const LeadMagnetAIReadiness = () => {
//   return (
//     <section className="relative w-full py-24 overflow-hidden">
//       {/* --- BACKGROUND LAYER --- */}
//       {/* Using the same gradient variables for consistency, or you can swap them for specific AI-themed colors like purple/cyan */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: `linear-gradient(135deg, var(--lead-from), var(--lead-via), var(--lead-to))`,
//         }}
//       />

//       {/* --- ANIMATED GLOW --- */}
//       <motion.div
//         animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] blur-[120px] z-0 pointer-events-none"
//         style={{ backgroundColor: "var(--lead-glow)" }}
//       />

//       {/* --- CONTENT --- */}
//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* BADGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border border-[var(--border-color)] bg-[var(--primary)]/10 backdrop-blur-md"
//         >
//           <Sparkles className="w-4 h-4 text-[var(--primary)]" />
//           <span className="text-sm font-bold tracking-wide uppercase text-[var(--primary)]">
//             For SMBs & Operations Leaders
//           </span>
//         </motion.div>

//         {/* HEADING */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-[var(--foreground)]"
//         >
//           Discover Your AI Advantage
//         </motion.h2>

//         {/* SUPPORTING TEXT */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-[var(--foreground-muted)]"
//         >
//           Not sure where to start? Take our 3-minute readiness assessment to uncover hidden automation opportunities, calculate potential ROI, and get a roadmap tailored to your tech stack.
//         </motion.p>

//         {/* CTA BUTTON */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//         >
//           {/* Link points to the quiz/assessment page */}
//           <a href="/resources/ai-readiness">
//             <button className="group relative inline-flex items-center justify-center text-lg font-bold px-10 py-4 rounded-full shadow-xl shadow-[var(--primary)]/30 bg-[var(--primary)] text-white transition-all duration-300 hover:scale-105">
//               <ClipboardCheck className="mr-2 w-5 h-5 opacity-90" />
//               <span>Get Your Score</span>
//               <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />

//               {/* Inner highlight ring */}
//               <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
//             </button>
//           </a>
//         </motion.div>

//         {/* SUB-TEXT */}
//         <motion.p
//            initial={{ opacity: 0 }}
//            whileInView={{ opacity: 1 }}
//            viewport={{ once: true }}
//            transition={{ delay: 0.5 }}
//            className="mt-6 text-sm text-[var(--foreground-muted)] opacity-70"
//         >
//            Includes a free 15-min consultation based on your results
//         </motion.p>

//       </div>
//     </section>
//   );
// };

// export default LeadMagnetAIReadiness;

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
//
//
//
///

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Bot, BarChart3, ArrowRight, BrainCircuit } from "lucide-react";

// const AIReadinessTeaser = () => {
//   return (
//     <section className="relative w-full py-20 overflow-hidden my-12 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]">
//       {/* Background Elements */}
//        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-8 md:px-12 max-w-7xl mx-auto">
        
//         {/* Left: Content */}
//         <div className="md:w-3/5">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase mb-6">
//             <BrainCircuit size={14} />
//             <span>Free Assessment Tool</span>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
//             Is Your Business Ready for AI?
//           </h2>
//           <p className="text-lg text-[var(--foreground-muted)] mb-8 leading-relaxed">
//             Don't invest in AI until you know your "Readiness Score." Take our 2-minute assessment to uncover hidden opportunities, data gaps, and your estimated ROI.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link href="/resources/ai-readiness">
//               <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--primary)] text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105">
//                 <BarChart3 size={20} />
//                 <span>Calculate My Score</span>
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Right: Visual */}
//         <div className="md:w-2/5 flex justify-center">
//           <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-[var(--background)] to-[var(--card-bg)] rounded-2xl border border-[var(--border-color)] shadow-2xl flex flex-col items-center justify-center p-8">
//              {/* Simulated Score Gauge */}
//              <div className="relative w-32 h-32 mb-4">
//                 <svg className="w-full h-full transform -rotate-90">
//                    <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-[var(--border-color)]" />
//                    <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-purple-500" strokeDasharray="377" strokeDashoffset="100" />
//                 </svg>
//                 <div className="absolute inset-0 flex items-center justify-center flex-col">
//                    <span className="text-3xl font-bold text-[var(--foreground)]">72%</span>
//                    <span className="text-xs text-[var(--foreground-muted)]">Readiness</span>
//                 </div>
//              </div>
//              <div className="space-y-2 w-full">
//                 <div className="flex justify-between text-xs text-[var(--foreground-muted)]">
//                    <span>Data Infrastructure</span>
//                    <span className="text-green-400">Strong</span>
//                 </div>
//                 <div className="w-full h-1.5 bg-[var(--border-color)] rounded-full overflow-hidden">
//                    <div className="w-[80%] h-full bg-green-500" />
//                 </div>
//              </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AIReadinessTeaser;

//
//
//
//
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
///
//
//
import React from "react";
import Link from "next/link";
import { Bot, BarChart3, ArrowRight, BrainCircuit } from "lucide-react";

const AIReadinessTeaser = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden my-12 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]">
      {/* Background Elements - Adjusted opacity for visibility in light mode */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-8 md:px-12 max-w-7xl mx-auto">
        
        {/* Left: Content */}
        <div className="md:w-3/5">
          {/* FIX 1: Updated Badge Colors for Light/Dark contrast */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-bold uppercase mb-6">
            <BrainCircuit size={14} />
            <span>Free Assessment Tool</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
            Is Your Business Ready for AI?
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] mb-8 leading-relaxed">
            Don't invest in AI until you know your "Readiness Score." Take our 2-minute assessment to uncover hidden opportunities, data gaps, and your estimated ROI.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/resources/ai-readiness">
              <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--primary)] text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105">
                <BarChart3 size={20} />
                <span>Calculate My Score</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-[var(--background)] to-[var(--card-bg)] rounded-2xl border border-[var(--border-color)] shadow-2xl flex flex-col items-center justify-center p-8">
             {/* Simulated Score Gauge */}
             <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                   <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-[var(--border-color)]" />
                   {/* FIX 2: Gauge color darker in light mode */}
                   <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-purple-600 dark:text-purple-500" strokeDasharray="377" strokeDashoffset="100" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                   <span className="text-3xl font-bold text-[var(--foreground)]">72%</span>
                   <span className="text-xs text-[var(--foreground-muted)]">Readiness</span>
                </div>
             </div>
             <div className="space-y-2 w-full">
                <div className="flex justify-between text-xs text-[var(--foreground-muted)]">
                   <span>Data Infrastructure</span>
                   {/* FIX 3: Text color darker in light mode */}
                   <span className="text-green-600 dark:text-green-400 font-medium">Strong</span>
                </div>
                <div className="w-full h-1.5 bg-[var(--border-color)] rounded-full overflow-hidden">
                   <div className="w-[80%] h-full bg-green-500" />
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIReadinessTeaser;