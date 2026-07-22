// "use client";

// import React, { useState } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import Navbar from "@/Components/Essntials/Navbar";
// import Footer from "@/Components/Essntials/footer";
// import {
//   Bot,
//   CloudLightning,
//   UserX,
//   CheckCircle,
//   ArrowRight,
//   AlertTriangle,
//   Terminal,
// } from "lucide-react";

// // --- COMPONENTS ---

// const SectionHeading = ({ children, id }) => (
//   <h2
//     id={id}
//     className="text-3xl font-bold text-white mt-16 mb-6 flex items-center gap-3 scroll-mt-28"
//   >
//     {/* Changed from red-500 to purple-500 to match Blog 3 */}
//     <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
//     {children}
//   </h2>
// );

// // --- FIXED HighlightBox COMPONENT ---
// const HighlightBox = ({ title, children, icon: Icon, color = "purple" }) => {
//   const styles = {
//     purple: {
//       bg: "bg-purple-500/20",
//       text: "text-purple-400",
//       border: "hover:border-purple-500/30",
//     },
//     red: {
//       bg: "bg-red-500/20",
//       text: "text-red-400",
//       border: "hover:border-red-500/30",
//     },
//     blue: {
//       bg: "bg-blue-500/20",
//       text: "text-blue-400",
//       border: "hover:border-blue-500/30",
//     },
//   };

//   const currentStyle = styles[color] || styles.purple;

//   return (
//     <div
//       className={`bg-white/5 border border-white/10 rounded-xl p-6 my-8 backdrop-blur-sm transition-colors ${currentStyle.border}`}
//     >
//       <div className="flex items-start gap-4">
//         <div
//           className={`p-3 rounded-lg ${currentStyle.bg} ${currentStyle.text}`}
//         >
//           <Icon size={24} />
//         </div>
//         <div>
//           <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
//           <div className="text-gray-300 text-sm leading-relaxed">
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Blog4 = () => {
//   return (
//     // Changed background to #0B0219 to match Blog 3
//     <div className="min-h-screen bg-[#0B0219] text-slate-300 font-sans selection:bg-purple-500 selection:text-white">
//       <Navbar />

//       <main className="pt-32 pb-20">
//         {/* Hero Section */}
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             // Changed from red-900/30 to purple-900/30
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
//           >
//             <Bot size={14} /> 2025 Threat Report
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
//           >
//             <span className="text-[#7746D5]"> AI-Powered Cyber Attacks:</span>
//             <span>
//               {" "}
//               The Hard Truth Every Business Leader Must Face in 2025{" "}
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-400 mb-8"
//           >
//             Behind the scenes of the fastest-growing threat category no one is
//             prepared for. In 2025, cyber attacks aren’t just faster — they’re{" "}
//             <span className="text-white font-bold">autonomous</span>.
//           </motion.p>

//           <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
//             <span className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>{" "}
//               AICYRO Team
//             </span>
//             <span>•</span>
//             <span>Jan 8, 2026</span>
//             <span>•</span>
//             <span>10 min read</span>
//           </div>
//         </div>

//         {/* Content Layout */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
//           {/* Sidebar / Table of Contents */}
//           <aside className="lg:col-span-3 hidden lg:block">
//             <div className="sticky top-32 space-y-2">
//               <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-wider opacity-50">
//                 On this page
//               </h3>
//               {[
//                 { id: "ai-automation", label: "1. AI Automation" },
//                 { id: "deepfake-social", label: "2. Deepfake Engineering" },
//                 { id: "ai-ransomware", label: "3. AI Ransomware" },
//                 { id: "cloud-misconfig", label: "4. Cloud Exploits" },
//                 { id: "must-implement", label: "5. Mandatory Defense" },
//                 { id: "cta", label: "Get Prepared" },
//               ].map((link) => (
//                 <a
//                   key={link.id}
//                   href={`#${link.id}`}
//                   className="block text-gray-400 hover:text-purple-400 hover:pl-2 transition-all text-sm py-1"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </aside>

//           {/* Main Article Content */}
//           <article className="lg:col-span-7 prose prose-invert prose-lg max-w-none">
//             <p className="lead text-xl text-gray-200">
//               AI has become the attacker’s strongest weapon, enabling threat
//               actors to launch precision-level attacks at a scale humans could
//               never achieve manually. This is the deep-dive breakdown every
//               founder, CTO, and security leader needs to understand.
//             </p>

//             {/* SECTION 1: AI Automation */}
//             <SectionHeading id="ai-automation">
//               1. AI Has Automated the Entire Attack Chain
//             </SectionHeading>
//             <p>
//               The new threat landscape looks nothing like 2021–2023. Modern
//               threat actors now deploy <strong>AI-driven agents</strong> that
//               can map full infrastructures within minutes and auto-generate
//               fresh malware variants.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 {/* Changed to purple/blue tones */}
//                 <Terminal className="text-purple-400 mb-2" size={20} />
//                 <h4 className="font-bold text-white text-sm">
//                   Rewrite Payloads
//                 </h4>
//                 <p className="text-xs text-gray-400">
//                   Bypassing EDR/XDR on the fly
//                 </p>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 <CloudLightning className="text-blue-400 mb-2" size={20} />
//                 <h4 className="font-bold text-white text-sm">
//                   Parallel Attacks
//                 </h4>
//                 <p className="text-xs text-gray-400">
//                   Launching sequences without human input
//                 </p>
//               </div>
//             </div>

//             <HighlightBox
//               title="Reality Check"
//               icon={AlertTriangle}
//               color="purple" // Changed from red to purple
//             >
//               <p>
//                 What used to take attackers <strong>weeks</strong> now takes{" "}
//                 <strong>minutes</strong> — especially in cloud-native
//                 environments.
//               </p>
//             </HighlightBox>

//             {/* SECTION 2: Deepfake Social Engineering */}
//             <SectionHeading id="deepfake-social">
//               2. Deepfake Social Engineering is the New "Initial Access"
//             </SectionHeading>
//             <p>
//               The #1 entry point in 2025 is no longer phishing emails — it’s{" "}
//               <strong>AI-generated humans</strong>.
//             </p>
//             <p>Attackers now use:</p>
//             <ul className="space-y-2">
//               <li className="flex items-start gap-2">
//                 <UserX className="text-purple-500 mt-1 shrink-0" size={18} />{" "}
//                 <span>
//                   <strong>Realistic AI voice clones</strong> of CEOs/CFOs
//                 </span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <UserX className="text-purple-500 mt-1 shrink-0" size={18} />{" "}
//                 <span>
//                   <strong>Deepfake Zoom calls</strong> for urgent approvals
//                 </span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <UserX className="text-purple-500 mt-1 shrink-0" size={18} />{" "}
//                 <span>
//                   <strong>WhatsApp messages</strong> that sound exactly like
//                   executives
//                 </span>
//               </li>
//             </ul>

//             <blockquote className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-900/10 text-white font-medium my-8">
//               "Even trained employees cannot distinguish real executives from
//               AI-generated imposters."
//             </blockquote>

//             {/* SECTION 3: Ransomware */}
//             <SectionHeading id="ai-ransomware">
//               3. Ransomware Has Become Fully AI-Driven
//             </SectionHeading>
//             <p>
//               Ransomware gangs now run operations like automated startups. AI
//               increases their efficiency through autonomous lateral movement and
//               adaptive evasion against EDR tools.
//             </p>
//             <p>
//               The result? Breaches spread faster, cost more, and hit more
//               systems simultaneously. Companies without{" "}
//               <strong>immutable, isolated backups</strong> face catastrophic
//               financial risk.
//             </p>

//             {/* SECTION 4: Cloud Misconfigurations */}
//             <SectionHeading id="cloud-misconfig">
//               4. Cloud Misconfigurations Are the Easiest Target
//             </SectionHeading>
//             <p>
//               As AWS, Azure, and GCP dominate enterprise stacks, attackers are
//               using AI to scan cloud surfaces at massive scale.
//             </p>
//             <p>
//               AI tools can instantly detect exposed S3 buckets, weak IAM roles,
//               and misconfigured SaaS integrations. This is why cloud-first
//               companies need <strong>cloud-first security</strong> — traditional
//               tools can’t catch these issues.
//             </p>

//             {/* SECTION 5: Mandatory Implementations */}
//             <SectionHeading id="must-implement">
//               5. What Businesses MUST Implement in 2025
//             </SectionHeading>
//             <p>
//               These aren’t "best practices" anymore — they are survival
//               requirements.
//             </p>

//             <div className="space-y-4 not-prose my-8">
//               {[
//                 "Zero Trust enforced across all access points",
//                 "MFA everywhere (internal + remote)",
//                 "Immutable, offline backups",
//                 "24/7 SOC or MDR monitoring",
//                 "Continuous cloud configuration scanning",
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   // Changed from green to purple/white mix to match Blog 3 style better
//                   className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg"
//                 >
//                   <CheckCircle className="text-purple-500 shrink-0" size={20} />
//                   <span className="text-sm text-gray-200 font-medium">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA SECTION */}
//             <div
//               id="cta"
//               className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 text-center relative overflow-hidden"
//             >
//               <div className="relative z-10">
//                 <h2 className="text-3xl font-bold text-white mb-4">
//                   What Smart Companies Are Doing Next
//                 </h2>
//                 <p className="text-gray-300 mb-8 max-w-xl mx-auto">
//                   Identify your real vulnerabilities before attackers automate
//                   against you. AICYRO provides a free risk assessment and
//                   tailored roadmap.
//                 </p>

//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                   <button className="flex items-center justify-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/50">
//                     Book Consultation <ArrowRight size={18} />
//                   </button>
//                 </div>

//                 <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest">
//                   Your next step starts now
//                 </p>
//               </div>
//             </div>
//           </article>

//           {/* Right Sidebar (Author/Related) */}
//           <aside className="lg:col-span-2 hidden lg:block border-l border-white/5 pl-8">
//             <div className="sticky top-32">
//               <div className="mb-8">
//                 <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
//                   Author
//                 </h4>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
//                   <div>
//                     <p className="text-sm font-bold text-white">Aicyro Team</p>
//                     <p className="text-xs text-gray-400">Cyber Intelligence</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Blog4;

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
"use client";

import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/Components/Essntials/Navbar";
import Footer from "@/Components/Essntials/footer";
import {
  Bot,
  CloudLightning,
  UserX,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Terminal,
} from "lucide-react";

// --- COMPONENTS ---

const SectionHeading = ({ children, id }) => (
  // UPDATED: Text color uses foreground variable
  <h2
    id={id}
    className="text-3xl font-bold text-[var(--foreground)] mt-16 mb-6 flex items-center gap-3 scroll-mt-28"
  >
    {/* Changed from hardcoded purple to primary variable */}
    <div className="w-1 h-8 bg-[var(--primary)] rounded-full"></div>
    {children}
  </h2>
);

// --- FIXED HighlightBox COMPONENT ---
const HighlightBox = ({ title, children, icon: Icon, color = "purple" }) => {
  // UPDATED: Mapped 'purple' style to use CSS variables for theming
  const styles = {
    purple: {
      bg: "bg-[var(--primary)]/20",
      text: "text-[var(--primary)]",
      border: "hover:border-[var(--primary)]/30",
    },
    // Red/Blue kept as semantic utility classes but could be mapped if variables existed
    red: {
      bg: "bg-red-500/20",
      text: "text-red-400",
      border: "hover:border-red-500/30",
    },
    blue: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      border: "hover:border-blue-500/30",
    },
  };

  const currentStyle = styles[color] || styles.purple;

  return (
    // UPDATED: Background and Border use variables
    <div
      className={`bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-xl p-6 my-8 backdrop-blur-sm transition-colors ${currentStyle.border}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-lg ${currentStyle.bg} ${currentStyle.text}`}
        >
          <Icon size={24} />
        </div>
        <div>
          {/* UPDATED: Text colors */}
          <h4 className="text-lg font-bold text-[var(--foreground)] mb-2">
            {title}
          </h4>
          <div className="text-[var(--foreground-muted)] text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog4 = () => {
  return (
    // UPDATED: Main background uses variable
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground-muted)] font-sans selection:bg-[var(--primary)] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Changed from purple-900 to primary variable
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-medium mb-6"
          >
            <Bot size={14} /> 2025 Threat Report
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            {/* UPDATED: Span uses secondary variable */}
            <span className="text-[var(--secondary)]">
              {" "}
              AI-Powered Cyber Attacks:
            </span>
            <span>
              {" "}
              The Hard Truth Every Business Leader Must Face in 2025{" "}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            Behind the scenes of the fastest-growing threat category no one is
            prepared for. In 2025, cyber attacks aren’t just faster — they’re{" "}
            <span className="text-[var(--foreground)] font-bold">
              autonomous
            </span>
            .
          </motion.p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--foreground-muted)]/70">
            <span className="flex items-center gap-2">
              {/* UPDATED: Gradient uses accent/primary variables */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]"></div>{" "}
              AICYRO Team
            </span>
            <span>•</span>
            <span>Jan 8, 2026</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / Table of Contents */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-2">
              <h3 className="text-[var(--foreground)] font-bold mb-4 uppercase text-xs tracking-wider opacity-50">
                On this page
              </h3>
              {[
                { id: "ai-automation", label: "1. AI Automation" },
                { id: "deepfake-social", label: "2. Deepfake Engineering" },
                { id: "ai-ransomware", label: "3. AI Ransomware" },
                { id: "cloud-misconfig", label: "4. Cloud Exploits" },
                { id: "must-implement", label: "5. Mandatory Defense" },
                { id: "cta", label: "Get Prepared" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:pl-2 transition-all text-sm py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="lg:col-span-7 prose prose-invert prose-lg max-w-none text-[var(--foreground-muted)]">
            <p className="lead text-xl text-[var(--foreground)]">
              AI has become the attacker’s strongest weapon, enabling threat
              actors to launch precision-level attacks at a scale humans could
              never achieve manually. This is the deep-dive breakdown every
              founder, CTO, and security leader needs to understand.
            </p>
            {/* SECTION 1: AI Automation */}
            <SectionHeading id="ai-automation">
              1. AI Has Automated the Entire Attack Chain
            </SectionHeading>
            <p>
              The new threat landscape looks nothing like 2021–2023. Modern
              threat actors now deploy{" "}
              <strong className="text-[var(--foreground)]">
                AI-driven agents
              </strong>{" "}
              that can map full infrastructures within minutes and auto-generate
              fresh malware variants.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {/* UPDATED: Cards use card-bg and border-color */}
              <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)]">
                {/* Changed to purple/blue tones using variables where applicable */}
                <Terminal className="text-purple-400 mb-2" size={20} />
                <h4 className="font-bold text-[var(--foreground)] text-sm">
                  Rewrite Payloads
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  Bypassing EDR/XDR on the fly
                </p>
              </div>
              <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)]">
                <CloudLightning className="text-blue-400 mb-2" size={20} />
                <h4 className="font-bold text-[var(--foreground)] text-sm">
                  Parallel Attacks
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  Launching sequences without human input
                </p>
              </div>
            </div>
            <HighlightBox
              title="Reality Check"
              icon={AlertTriangle}
              color="purple"
            >
              <p>
                What used to take attackers{" "}
                <strong className="text-[var(--foreground)]">weeks</strong> now
                takes{" "}
                <strong className="text-[var(--foreground)]">minutes</strong> —
                especially in cloud-native environments.
              </p>
            </HighlightBox>
            {/* SECTION 2: Deepfake Social Engineering */}
            <SectionHeading id="deepfake-social">
              2. Deepfake Social Engineering is the New "Initial Access"
            </SectionHeading>
            <p>
              The #1 entry point in 2025 is no longer phishing emails — it’s{" "}
              <strong className="text-[var(--foreground)]">
                AI-generated humans
              </strong>
              .
            </p>
            <p>Attackers now use:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <UserX
                  className="text-[var(--primary)] mt-1 shrink-0"
                  size={18}
                />{" "}
                <span>
                  <strong className="text-[var(--foreground)]">
                    Realistic AI voice clones
                  </strong>{" "}
                  of CEOs/CFOs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <UserX
                  className="text-[var(--primary)] mt-1 shrink-0"
                  size={18}
                />{" "}
                <span>
                  <strong className="text-[var(--foreground)]">
                    Deepfake Zoom calls
                  </strong>{" "}
                  for urgent approvals
                </span>
              </li>
              <li className="flex items-start gap-2">
                <UserX
                  className="text-[var(--primary)] mt-1 shrink-0"
                  size={18}
                />{" "}
                <span>
                  <strong className="text-[var(--foreground)]">
                    WhatsApp messages
                  </strong>{" "}
                  that sound exactly like executives
                </span>
              </li>
            </ul>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 py-2 bg-[var(--primary)]/10 text-[var(--foreground)] font-medium my-8">
              "Even trained employees cannot distinguish real executives from
              AI-generated imposters."
            </blockquote>
            {/* SECTION 3: Ransomware */}
            <SectionHeading id="ai-ransomware">
              3. Ransomware Has Become Fully AI-Driven
            </SectionHeading>
            <p>
              Ransomware gangs now run operations like automated startups. AI
              increases their efficiency through autonomous lateral movement and
              adaptive evasion against EDR tools.
            </p>
            <p>
              The result? Breaches spread faster, cost more, and hit more
              systems simultaneously. Companies without{" "}
              <strong className="text-[var(--foreground)]">
                immutable, isolated backups
              </strong>{" "}
              face catastrophic financial risk.
            </p>
            {/* SECTION 4: Cloud Misconfigurations */}
            <SectionHeading id="cloud-misconfig">
              4. Cloud Misconfigurations Are the Easiest Target
            </SectionHeading>
            <p>
              As AWS, Azure, and GCP dominate enterprise stacks, attackers are
              using AI to scan cloud surfaces at massive scale.
            </p>
            <p>
              AI tools can instantly detect exposed S3 buckets, weak IAM roles,
              and misconfigured SaaS integrations. This is why cloud-first
              companies need{" "}
              <strong className="text-[var(--foreground)]">
                cloud-first security
              </strong>{" "}
              — traditional tools can’t catch these issues.
            </p>
            {/* SECTION 5: Mandatory Implementations */}
            <SectionHeading id="must-implement">
              5. What Businesses MUST Implement in 2025
            </SectionHeading>
            <p>
              These aren’t "best practices" anymore — they are survival
              requirements.
            </p>
            [Image of Zero Trust Architecture diagram]
            <div className="space-y-4 not-prose my-8">
              {[
                "Zero Trust enforced across all access points",
                "MFA everywhere (internal + remote)",
                "Immutable, offline backups",
                "24/7 SOC or MDR monitoring",
                "Continuous cloud configuration scanning",
              ].map((item, i) => (
                <div
                  key={i}
                  // UPDATED: List items use card-bg
                  className="flex items-center gap-3 p-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg"
                >
                  <CheckCircle
                    className="text-[var(--primary)] shrink-0"
                    size={20}
                  />
                  <span className="text-sm text-[var(--foreground)] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            {/* CTA SECTION */}
            <div
              id="cta"
              // UPDATED: CTA Gradient uses primary variable
              className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent-blue)]/20 border border-[var(--primary)]/30 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                  What Smart Companies Are Doing Next
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  Identify your real vulnerabilities before attackers automate
                  against you. AICYRO provides a free risk assessment and
                  tailored roadmap.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                   onClick={() => window.location.href = "/contact"}  className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-colors shadow-lg">
                    Book Consultation <ArrowRight size={18} />
                  </button>
                </div>

                <p className="mt-6 text-xs text-[var(--foreground-muted)] uppercase tracking-widest">
                  Your next step starts now
                </p>
              </div>
            </div>
          </article>

          {/* Right Sidebar (Author/Related) */}
          <aside className="lg:col-span-2 hidden lg:block border-l border-[var(--border-color)] pl-8">
            <div className="sticky top-32">
              <div className="mb-8">
                <h4 className="text-[var(--foreground)] font-bold text-sm uppercase tracking-wider mb-4">
                  Author
                </h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--accent-blue)] to-[var(--primary)]"></div>
                  <div>
                    <p className="text-sm font-bold text-[var(--foreground)]">
                      Aicyro Team
                    </p>
                    <p className="text-xs text-[var(--foreground-muted)]">
                      Cyber Intelligence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog4;
