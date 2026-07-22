// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import Navbar from "@/Components/Essntials/Navbar";
// import Footer from "@/Components/Essntials/footer";
// import {
//   ShieldCheck,
//   Lock,
//   Server,
//   ArrowRight,
//   Twitter,
//   Linkedin,
//   CheckCircle,
//   AlertTriangle,
//   Download,
// } from "lucide-react";

// // --- COMPONENTS ---

// const SectionHeading = ({ children, id }) => (
//   <h2
//     id={id}
//     className="text-3xl font-bold text-white mt-16 mb-6 flex items-center gap-3 scroll-mt-28"
//   >
//     <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
//     {children}
//   </h2>
// );

// const HighlightBox = ({ title, children, icon: Icon }) => (
//   <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
//     <div className="flex items-start gap-4">
//       <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
//         <Icon size={24} />
//       </div>
//       <div>
//         <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
//         <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
//       </div>
//     </div>
//   </div>
// );

// const Blog3 = () => {
//   return (
//     <div className="min-h-screen bg-[#0B0219] text-slate-300 font-sans selection:bg-purple-500 selection:text-white">
//       <Navbar />

//       <main className="pt-32 pb-20">
//         {/* Hero Section */}
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
//           >
//             <ShieldCheck size={14} /> 2025 Cyber Defense Playbook
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
//           >
//             How to Protect Your Business From Financial Loss Through
//             Cybersecurity
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-400 mb-8"
//           >
//             Cybersecurity is no longer just "IT work." It’s financial
//             protection, brand protection, and business survival.
//           </motion.p>

//           <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
//             <span className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>{" "}
//               AICYRO Team
//             </span>
//             <span>•</span>
//             <span>Jan 7, 2026</span>
//             <span>•</span>
//             <span>8 min read</span>
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
//                 { id: "financial-risks", label: "Financial Risks" },
//                 { id: "human-risks", label: "Human Risks" },
//                 { id: "technical-controls", label: "Technical Controls" },
//                 { id: "business-continuity", label: "Business Continuity" },
//                 { id: "cta", label: "Get Protected" },
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
//               Companies today aren’t losing money because of slow sales. They’re
//               losing it because of one weak password, one phishing email, or one
//               unpatched laptop.
//             </p>
//             <p>
//               To protect your revenue, your people, and your customers, your
//               cybersecurity must evolve fast. Before a cyberattack makes
//               headlines, money is often already leaking quietly in the
//               background.
//             </p>

//             {/* SECTION 1: Financial Risks */}
//             <SectionHeading id="financial-risks">
//               Financial Risks: The Hidden Costs
//             </SectionHeading>
//             <p>
//               Ransomware is the #1 Financial Threat in 2025. One ransomware
//               attack can freeze every system you own: POS, payroll, logistics,
//               CRM, and ERP.
//             </p>
//             <div className="bg-red-500/10 border-l-4 border-red-500 p-4 my-6 text-red-200 italic">
//               "When the systems stop, cashflow stops."
//             </div>
//             <p>Smart companies prevent total shutdowns by using:</p>
//             <ul className="space-y-2">
//               <li className="flex items-start gap-2">
//                 <CheckCircle
//                   className="text-green-500 mt-1 shrink-0"
//                   size={18}
//                 />{" "}
//                 <span>
//                   <strong>Immutable backups:</strong> Data that cannot be
//                   modified by hackers.
//                 </span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <CheckCircle
//                   className="text-green-500 mt-1 shrink-0"
//                   size={18}
//                 />{" "}
//                 <span>
//                   <strong>Backup isolation:</strong> Keeping offline or
//                   air-gapped backups.
//                 </span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <CheckCircle
//                   className="text-green-500 mt-1 shrink-0"
//                   size={18}
//                 />{" "}
//                 <span>
//                   <strong>Continuous integrity checks:</strong> Ensuring backups
//                   actually work when needed.
//                 </span>
//               </li>
//             </ul>

//             {/* SECTION 2: Human Risks */}
//             <SectionHeading id="human-risks">
//               Human Risks: 95% of Breaches
//             </SectionHeading>
//             <p>
//               Let’s be honest — cybersecurity isn't a technology problem. It’s a{" "}
//               <strong>human behavior problem</strong>.
//             </p>

//             <HighlightBox title="Real-World Story" icon={AlertTriangle}>
//               <p className="mb-2">
//                 A mid-size logistics company in Europe lost{" "}
//                 <strong>$240,000 in 48 hours</strong>.
//               </p>
//               <p className="text-sm opacity-80">
//                 <strong>Why?</strong> One employee clicked a phishing email
//                 mimicking Microsoft 365. Hackers accessed invoices, changed
//                 account numbers, and customers paid the attacker — not the
//                 company. No firewall could save them, but awareness training
//                 could have.
//               </p>
//             </HighlightBox>

//             <p>Human-focused protection must include:</p>
//             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
//               {[
//                 "Monthly phishing simulations",
//                 "Password + MFA enforcement",
//                 "Cyber hygiene coaching",
//                 "Zero-trust access",
//               ].map((item, i) => (
//                 <li
//                   key={i}
//                   className="bg-white/5 p-3 rounded-lg border border-white/5 text-sm text-gray-300"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             <p className="mt-4">
//               Your people are your weakest link but also your{" "}
//               <strong>strongest shield</strong>, if trained right.
//             </p>

//             {/* SECTION 3: Technical Controls */}
//             <SectionHeading id="technical-controls">
//               Technical Controls: Digital Armor
//             </SectionHeading>
//             <p>This is where businesses either stay safe… or lose millions.</p>

//             <div className="space-y-6 not-prose my-8">
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
//                   <Lock />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold">
//                     Zero-Trust Architecture
//                   </h4>
//                   <p className="text-sm text-gray-400">
//                     No one is trusted by default — not employees, not apps, not
//                     devices.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 shrink-0">
//                   <ShieldCheck />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold">
//                     Endpoint Detection & Response (EDR)
//                   </h4>
//                   <p className="text-sm text-gray-400">
//                     Detects ransomware, malware, and intrusion attempts in real
//                     time.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-400 shrink-0">
//                   <Server />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold">Cloud Security</h4>
//                   <p className="text-sm text-gray-400">
//                     Essential for AWS/Azure. Includes API monitoring, identity
//                     permissions, and secure configurations.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <p>
//               <strong>Automation:</strong> Humans forget updates. Automation
//               doesn’t. Automating patch updates, log monitoring, and password
//               rotation results in fewer mistakes and fewer losses.
//             </p>

//             {/* SECTION 4: Business Continuity */}
//             <SectionHeading id="business-continuity">
//               Business Continuity
//             </SectionHeading>
//             <p>
//               A cyberattack is not just a “security issue.” It can shut down
//               operations. Smart companies prepare by distributing revenue
//               channels and creating offline operational plans.
//             </p>
//             <blockquote className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-900/10 text-white font-medium my-8">
//               "A cyberattack shouldn’t stop your business. It should slow it
//               down — never shut it down."
//             </blockquote>

//             {/* CTA SECTION */}
//             <div
//               id="cta"
//               className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 text-center relative overflow-hidden"
//             >
//               <div className="relative z-10">
//                 <h2 className="text-3xl font-bold text-white mb-4">
//                   Ready to Secure Your Revenue?
//                 </h2>
//                 <p className="text-gray-300 mb-8 max-w-xl mx-auto">
//                   Understand your vulnerabilities before hackers do. AICYRO is
//                   offering a tailored roadmap for your business.
//                 </p>

//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                   <button className="flex items-center justify-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/50">
//                     Free Risk Assessment <ArrowRight size={18} />
//                   </button>
//                 </div>

//                 <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest">
//                   One page is enough to start
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
//                     <p className="text-xs text-gray-400">Security Analysts</p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
//                   Share
//                 </h4>
//                 <div className="flex gap-2">
//                   <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
//                     <Twitter size={18} />
//                   </button>
//                   <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
//                     <Linkedin size={18} />
//                   </button>
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

// export default Blog3;

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

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/Components/Essntials/Navbar";
import Footer from "@/Components/Essntials/footer";
import {
  ShieldCheck,
  Lock,
  Server,
  ArrowRight,
  Twitter,
  Linkedin,
  CheckCircle,
  AlertTriangle,
  Download,
} from "lucide-react";

// --- COMPONENTS ---

const SectionHeading = ({ children, id }) => (
  // UPDATED: Text color uses foreground variable
  <h2
    id={id}
    className="text-3xl font-bold text-[var(--foreground)] mt-16 mb-6 flex items-center gap-3 scroll-mt-28"
  >
    {/* UPDATED: Bar color uses primary variable */}
    <div className="w-1 h-8 bg-[var(--primary)] rounded-full"></div>
    {children}
  </h2>
);

const HighlightBox = ({ title, children, icon: Icon }) => (
  // UPDATED: Background, Border, Text colors use variables
  <div className="bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-xl p-6 my-8 backdrop-blur-sm hover:border-[var(--primary)]/30 transition-colors">
    <div className="flex items-start gap-4">
      {/* UPDATED: Icon background uses primary variable */}
      <div className="p-3 bg-[var(--primary)]/20 rounded-lg text-[var(--primary)]">
        <Icon size={24} />
      </div>
      <div>
        {/* UPDATED: Title text uses foreground */}
        <h4 className="text-lg font-bold text-[var(--foreground)] mb-2">
          {title}
        </h4>
        {/* UPDATED: Body text uses foreground-muted */}
        <div className="text-[var(--foreground-muted)] text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const Blog3 = () => {
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
            // UPDATED: Badge colors use primary/accent variables
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-medium mb-6"
          >
            <ShieldCheck size={14} /> 2025 Cyber Defense Playbook
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            // UPDATED: Heading text uses foreground
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            How to Protect Your Business From Financial Loss Through
            Cybersecurity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            // UPDATED: Subtext uses foreground-muted
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            Cybersecurity is no longer just "IT work." It’s financial
            protection, brand protection, and business survival.
          </motion.p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--foreground-muted)]/70">
            <span className="flex items-center gap-2">
              {/* UPDATED: Avatar gradient uses variables */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]"></div>{" "}
              AICYRO Team
            </span>
            <span>•</span>
            <span>Jan 7, 2026</span>
            <span>•</span>
            <span>8 min read</span>
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
                { id: "financial-risks", label: "Financial Risks" },
                { id: "human-risks", label: "Human Risks" },
                { id: "technical-controls", label: "Technical Controls" },
                { id: "business-continuity", label: "Business Continuity" },
                { id: "cta", label: "Get Protected" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  // UPDATED: Link hover color uses primary variable
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
              Companies today aren’t losing money because of slow sales. They’re
              losing it because of one weak password, one phishing email, or one
              unpatched laptop.
            </p>
            <p>
              To protect your revenue, your people, and your customers, your
              cybersecurity must evolve fast. Before a cyberattack makes
              headlines, money is often already leaking quietly in the
              background.
            </p>

            {/* SECTION 1: Financial Risks */}
            <SectionHeading id="financial-risks">
              Financial Risks: The Hidden Costs
            </SectionHeading>
            <p>
              Ransomware is the #1 Financial Threat in 2025. One ransomware
              attack can freeze every system you own: POS, payroll, logistics,
              CRM, and ERP.
            </p>
            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 my-6 text-red-400 italic">
              "When the systems stop, cashflow stops."
            </div>
            <p>Smart companies prevent total shutdowns by using:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle
                  className="text-green-500 mt-1 shrink-0"
                  size={18}
                />{" "}
                <span>
                  <strong className="text-[var(--foreground)]">
                    Immutable backups:
                  </strong>{" "}
                  Data that cannot be modified by hackers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  className="text-green-500 mt-1 shrink-0"
                  size={18}
                />{" "}
                <span>
                  <strong className="text-[var(--foreground)]">
                    Backup isolation:
                  </strong>{" "}
                  Keeping offline or air-gapped backups.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  className="text-green-500 mt-1 shrink-0"
                  size={18}
                />{" "}
                <span>
                  <strong className="text-[var(--foreground)]">
                    Continuous integrity checks:
                  </strong>{" "}
                  Ensuring backups actually work when needed.
                </span>
              </li>
            </ul>

            {/* SECTION 2: Human Risks */}
            <SectionHeading id="human-risks">
              Human Risks: 95% of Breaches
            </SectionHeading>
            <p>
              Let’s be honest — cybersecurity isn't a technology problem. It’s a{" "}
              <strong className="text-[var(--foreground)]">
                human behavior problem
              </strong>
              .
            </p>

            <HighlightBox title="Real-World Story" icon={AlertTriangle}>
              <p className="mb-2">
                A mid-size logistics company in Europe lost{" "}
                <strong className="text-[var(--foreground)]">
                  $240,000 in 48 hours
                </strong>
                .
              </p>
              <p className="text-sm opacity-80">
                <strong className="text-[var(--foreground)]">Why?</strong> One
                employee clicked a phishing email mimicking Microsoft 365.
                Hackers accessed invoices, changed account numbers, and
                customers paid the attacker — not the company. No firewall could
                save them, but awareness training could have.
              </p>
            </HighlightBox>

            <p>Human-focused protection must include:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              {[
                "Monthly phishing simulations",
                "Password + MFA enforcement",
                "Cyber hygiene coaching",
                "Zero-trust access",
              ].map((item, i) => (
                <li
                  key={i}
                  // UPDATED: List item styles
                  className="bg-[var(--card-bg)] p-3 rounded-lg border border-[var(--border-color)] text-sm text-[var(--foreground-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Your people are your weakest link but also your{" "}
              <strong className="text-[var(--foreground)]">
                strongest shield
              </strong>
              , if trained right.
            </p>

            {/* SECTION 3: Technical Controls */}
            <SectionHeading id="technical-controls">
              Technical Controls: Digital Armor
            </SectionHeading>
            <p>This is where businesses either stay safe… or lose millions.</p>

            <div className="space-y-6 not-prose my-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Lock />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    Zero-Trust Architecture
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    No one is trusted by default — not employees, not apps, not
                    devices.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                {/* UPDATED: Icon bg/text uses primary variable */}
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <ShieldCheck />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    Endpoint Detection & Response (EDR)
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Detects ransomware, malware, and intrusion attempts in real
                    time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-400 shrink-0">
                  <Server />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    Cloud Security
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Essential for AWS/Azure. Includes API monitoring, identity
                    permissions, and secure configurations.
                  </p>
                </div>
              </div>
            </div>

            <p>
              <strong className="text-[var(--foreground)]">Automation:</strong>{" "}
              Humans forget updates. Automation doesn’t. Automating patch
              updates, log monitoring, and password rotation results in fewer
              mistakes and fewer losses.
            </p>

            {/* SECTION 4: Business Continuity */}
            <SectionHeading id="business-continuity">
              Business Continuity
            </SectionHeading>
            <p>
              A cyberattack is not just a “security issue.” It can shut down
              operations. Smart companies prepare by distributing revenue
              channels and creating offline operational plans.
            </p>
            {/* UPDATED: Blockquote style */}
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 py-2 bg-[var(--primary)]/10 text-[var(--foreground)] font-medium my-8">
              "A cyberattack shouldn’t stop your business. It should slow it
              down — never shut it down."
            </blockquote>

            {/* CTA SECTION */}
            <div
              id="cta"
              // UPDATED: CTA Gradient using primary/secondary vars (hardcoded hex fallback for gradient simplicity, or you can use `from-[var(--primary)]` etc.)
              className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-blue-900/20 border border-[var(--primary)]/30 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                  Ready to Secure Your Revenue?
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  Understand your vulnerabilities before hackers do. AICYRO is
                  offering a tailored roadmap for your business.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {/* UPDATED: Button uses primary var */}
                  <button  onClick={() => window.location.href = "/contact"} className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                    Free Risk Assessment <ArrowRight size={18} />
                  </button>
                </div>

                <p className="mt-6 text-xs text-[var(--foreground-muted)] uppercase tracking-widest">
                  One page is enough to start
                </p>
              </div>
            </div>
          </article>

          {/* Right Sidebar (Author/Related) */}
          {/* UPDATED: Border color */}
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
                      Security Analysts
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

export default Blog3;
