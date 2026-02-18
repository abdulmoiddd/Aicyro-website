// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, ShieldCheck, Lock } from "lucide-react";

// const LeadMagnetSaaSSecurity = () => {
//   return (
//     <section className="relative w-full py-24 overflow-hidden">
//       {/* --- BACKGROUND LAYER --- */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: `linear-gradient(135deg, var(--lead-from), var(--lead-via), var(--lead-to))`,
//         }}
//       />

//       {/* --- ANIMATED GLOW --- */}
//       <motion.div
//         animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
//           <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
//           <span className="text-sm font-bold tracking-wide uppercase text-[var(--primary)]">
//             For FinTech & HealthTech CTOs
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
//           Is Your SaaS Actually Secure?
//         </motion.h2>

//         {/* SUPPORTING TEXT */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-[var(--foreground-muted)]"
//         >
//           Don't wait for a breach to find out. Download the ultimate 50-point security checklist covering SOC2 readiness, API vulnerabilities, and data encryption standards.
//         </motion.p>

//         {/* CTA BUTTON */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//         >
//           <a href="/resources/saas-security-checklist">
//             <button className="group relative inline-flex items-center justify-center text-lg font-bold px-10 py-4 rounded-full shadow-xl shadow-[var(--primary)]/30 bg-[var(--primary)] text-white transition-all duration-300 hover:scale-105">
//               <Lock className="mr-2 w-5 h-5 opacity-90" />
//               <span>Download Checklist</span>
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
//            Updated for 2025 Compliance Standards
//         </motion.p>

//       </div>
//     </section>
//   );
// };

// export default LeadMagnetSaaSSecurity;

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
//
//
//
//
//
//
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileText, AlertTriangle } from "lucide-react";

const SecurityChecklistTeaser = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden my-12 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-8 md:px-12 max-w-7xl mx-auto">
        
        {/* Left: Content */}
        <div className="md:w-3/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full  text-xs font-bold uppercase mb-6">
            <ShieldCheck size={14} />
            <span>For CTOs & Dev Teams</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
            Is Your SaaS Secure?
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] mb-8 leading-relaxed">
            70% of breaches happen due to missed configuration steps. Download our **Ultimate SaaS Security Checklist** to audit your infrastructure, compliance (SOC2/HIPAA), and data protection before you launch.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/resources/security-checklist">
              <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold hover:bg-[var(--primary)] hover:text-white transition-all hover:scale-105">
                <FileText size={20} />
                <span>Get the Checklist</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-full max-w-sm bg-[var(--background)] rounded-xl border border-[var(--border-color)] shadow-2xl p-6 rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="flex items-center gap-3 mb-6 border-b border-[var(--border-color)] pb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Lock size={20} className="text-green-500" />
                </div>
                <div>
                    <h4 className="font-bold text-sm">Security Audit</h4>
                    <span className="text-xs text-[var(--foreground-muted)]">Status: Pending Review</span>
                </div>
             </div>
             
             <div className="space-y-3">
                {[
                    { label: "Data Encryption (AES-256)", status: true },
                    { label: "Role-Based Access (RBAC)", status: true },
                    { label: "API Rate Limiting", status: true },
                    { label: "Vulnerability Scan", status: false },
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-[var(--card-bg)]">
                        <span className="text-sm font-medium">{item.label}</span>
                        {item.status ? (
                            <ShieldCheck size={16} className="text-green-500" />
                        ) : (
                            <AlertTriangle size={16} className="text-red-400 animate-pulse" />
                        )}
                    </div>
                ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecurityChecklistTeaser;