// "use client";

// import React from "react";
// import Head from "next/head";
// import Link from "next/link";

// import {
//   ShieldCheck,
//   AlertTriangle,
//   Lock,
//   Server,
//   Users,
//   ArrowRight,
//   CheckCircle,
//   Download,
//   Calendar,
// } from "lucide-react";

// const Blog3 = () => {
//   return (
//     <div className="min-h-screen bg-[#0B1121] text-slate-300 font-sans selection:bg-purple-500 selection:text-white">
//       <Head>
//         <title>
//           Protect Your Business From Financial Loss | Aicyro Solutions
//         </title>
//         <meta
//           name="description"
//           content="The 2025 Human-Centered Cyber Defense Playbook by AICYRO."
//         />
//       </Head>

//       {/* --- HERO SECTION --- */}
//       <header className="relative w-full py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
//         {/* Background Gradients for Aicyro Feel */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

//         <div className="max-w-4xl mx-auto relative z-10 text-center">
//           <span className="inline-block py-1 px-3 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-sm font-semibold tracking-wide mb-6">
//             CYBERSECURITY INSIGHTS
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
//             How to Protect Your Business From{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
//               Financial Loss
//             </span>{" "}
//             Through Cybersecurity
//           </h1>
//           <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
//             The 2025 Human-Centered Cyber Defense Playbook. Cybersecurity is no
//             longer just IT work—it's brand protection and business survival.
//           </p>

//           <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
//                 AS
//               </div>
//               <span>Aicyro Solutions Team</span>
//             </div>
//             <span>•</span>
//             <span>January 7, 2026</span>
//             <span>•</span>
//             <span>5 Min Read</span>
//           </div>
//         </div>
//       </header>

//       {/* --- MAIN CONTENT --- */}
//       <main className="max-w-3xl mx-auto px-6 pb-24">
//         {/* Introduction */}
//         <div className="prose prose-invert prose-lg max-w-none mb-16">
//           <p className="lead text-xl text-slate-200">
//             Companies today aren’t losing money because of slow sales. They’re
//             losing it because of one weak password, one phishing email, or one
//             unpatched laptop.
//           </p>
//           <p>
//             To protect your revenue, your people, and your customers, your
//             cybersecurity must evolve fast. Before a cyberattack makes
//             headlines, money is often already leaking quietly in the background.
//           </p>
//         </div>

//         {/* SECTION 1: Financial Risks */}
//         <section className="mb-16">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
//               <AlertTriangle size={24} />
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-white">
//               Financial Risks: The Hidden Costs
//             </h2>
//           </div>

//           <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8 hover:border-purple-500/30 transition-colors">
//             <h3 className="text-xl font-semibold text-white mb-4">
//               💸 Ransomware — The #1 Financial Threat in 2025
//             </h3>
//             <p className="mb-4">
//               One ransomware attack can freeze every system you own: POS,
//               payroll, logistics, CRM, and ERP. When the systems stop,{" "}
//               <strong>cashflow stops.</strong>
//             </p>
//             <div className="bg-[#0B1121] p-6 rounded-xl border border-slate-800">
//               <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-4">
//                 Smart Companies Now Use:
//               </h4>
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle
//                     className="text-green-400 shrink-0 mt-1"
//                     size={18}
//                   />
//                   <span>
//                     <strong>Immutable backups</strong> (cannot be modified by
//                     hackers)
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle
//                     className="text-green-400 shrink-0 mt-1"
//                     size={18}
//                   />
//                   <span>
//                     <strong>Backup isolation</strong> (offline or air-gapped
//                     backups)
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle
//                     className="text-green-400 shrink-0 mt-1"
//                     size={18}
//                   />
//                   <span>
//                     <strong>Continuous backup integrity checks</strong> to
//                     prevent total shutdowns.
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* SECTION 2: Human Risks */}
//         <section className="mb-16">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
//               <Users size={24} />
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-white">
//               Human Risks: 95% of Breaches Start Here
//             </h2>
//           </div>

//           <p className="mb-6">
//             Let’s be honest — cybersecurity isn't a technology problem. It’s a{" "}
//             <strong>human behavior problem</strong>.
//           </p>

//           {/* Real World Story Card */}
//           <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 to-slate-900 border border-purple-500/30 p-8 mb-8">
//             <div className="absolute top-0 right-0 p-4 opacity-10">
//               <AlertTriangle size={120} />
//             </div>
//             <h3 className="text-lg font-bold text-white mb-2 relative z-10">
//               Real-World Story (That Could Happen to Anyone)
//             </h3>
//             <p className="text-slate-300 mb-4 relative z-10">
//               A mid-size logistics company in Europe lost{" "}
//               <span className="text-red-400 font-bold">$240,000</span> in 48
//               hours. Why?
//             </p>
//             <p className="text-sm text-slate-400 italic border-l-4 border-purple-500 pl-4 relative z-10">
//               "One employee clicked a phishing email that imitated Microsoft
//               365. Hackers accessed their invoice system, changed account
//               numbers, and customers paid the attacker — not the company."
//             </p>
//           </div>

//           <p className="mb-4">
//             No firewall could save them. But <strong>awareness training</strong>{" "}
//             could have. Aicyro recommends:
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[
//               "Monthly phishing simulations",
//               "Password + MFA enforcement",
//               "Cyber hygiene coaching",
//               "Zero-trust access for employees",
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700"
//               >
//                 <ShieldCheck className="text-purple-400" size={18} />
//                 <span className="text-sm">{item}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* SECTION 3: Technical Controls */}
//         <section className="mb-16">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
//               <Server size={24} />
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-white">
//               Technical Controls: Your Digital Armor
//             </h2>
//           </div>

//           <p className="mb-6">
//             This is where businesses either stay safe… or lose millions.
//           </p>

//           <div className="space-y-6">
//             <div className="group p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500 transition-all">
//               <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
//                 <Lock size={18} className="text-purple-400" /> Zero-Trust
//                 Architecture
//               </h3>
//               <p className="text-slate-400 text-sm">
//                 No one is trusted by default — not employees, not apps, not
//                 devices.
//               </p>
//             </div>

//             <div className="group p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500 transition-all">
//               <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
//                 <ShieldCheck size={18} className="text-purple-400" /> Endpoint
//                 Detection & Response (EDR)
//               </h3>
//               <p className="text-slate-400 text-sm">
//                 Detects ransomware, malware, and intrusion attempts in real
//                 time.
//               </p>
//             </div>

//             <div className="group p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500 transition-all">
//               <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
//                 <Server size={18} className="text-purple-400" /> Cloud Security
//                 & Automation
//               </h3>
//               <p className="text-slate-400 text-sm mb-3">
//                 Humans forget updates. Automation doesn’t. We automate patch
//                 updates, log monitoring, and backup checks.
//               </p>
//               <span className="inline-block text-xs font-mono text-purple-300 bg-purple-900/30 px-2 py-1 rounded">
//                 Automation = Fewer Mistakes = Fewer Losses
//               </span>
//             </div>
//           </div>
//         </section>

//         {/* SECTION 4: Business Continuity */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-bold text-white mb-4">
//             Business Continuity
//           </h2>
//           <p className="mb-4">
//             A cyberattack shouldn’t stop your business. It should slow it down —{" "}
//             <strong>never shut it down</strong>. Smart companies prepare by
//             distributing revenue channels, using backup payment systems, and
//             running quarterly recovery drills.
//           </p>
//         </section>

//         {/* --- CTA SECTION --- */}
//         <div className="relative rounded-3xl bg-gradient-to-r from-purple-900 to-[#0B1121] border border-purple-500/50 p-8 md:p-12 text-center overflow-hidden">
//           {/* Decorative circles */}
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

//           <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
//             Ready to Secure Your Revenue?
//           </h2>
//           <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10">
//             When an attack happens, confusion is expensive — clarity saves
//             money. To help companies stay protected, AICYRO is offering:
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10">
//             <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
//               <ShieldCheck className="mx-auto text-purple-400 mb-2" />
//               <h4 className="font-bold text-white text-sm">
//                 FREE Risk Assessment
//               </h4>
//             </div>
//             <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
//               <Download className="mx-auto text-purple-400 mb-2" />
//               <h4 className="font-bold text-white text-sm">
//                 2025 Safety Checklist
//               </h4>
//             </div>
//             <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
//               <Calendar className="mx-auto text-purple-400 mb-2" />
//               <h4 className="font-bold text-white text-sm">
//                 Expert Consultation
//               </h4>
//             </div>
//           </div>

//           <Link
//             href="/contact"
//             className="relative z-10 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.5)]"
//           >
//             Get Your Tailored Roadmap <ArrowRight size={20} />
//           </Link>
//           <p className="mt-4 text-sm text-slate-500 relative z-10">
//             Your next step starts here.
//           </p>
//         </div>
//       </main>
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
//
//
// import React from "react";
// // Assuming Navbar and Footer are in this relative path
// import Navbar from "@/Components/Essntials/Navbar";
// import Footer from "@/Components/Essntials/footer";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   AlertTriangle,
//   Lock,
//   Server,
//   Users,
//   ArrowRight,
//   Download,
//   Calendar,
// } from "lucide-react";

// // Create a motion-enabled Link
// const MotionLink = motion(Link);

// const Blog3 = () => {
//   // --- ANIMATION VARIANTS (Matches Aboutstart) ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15, // Slightly faster stagger for long content
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };
//   // --------------------------

//   return (
//     // Main container with Aicyro Navy background
//     <div className="bg-[#0B1121] min-h-screen flex flex-col relative overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
//       {/* --- Header/Navbar Section --- */}
//       <div className="z-50">
//         <Navbar />
//       </div>

//       {/* --- Main Content Section --- */}
//       <motion.main
//         className="flex-grow flex flex-col items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Decorative Background Glows (Same as Aboutstart) */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
//         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

//         {/* --- HERO SECTION (Centered like Aboutstart) --- */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           {/* Category Badge */}
//           <motion.div
//             variants={itemVariants}
//             className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm"
//           >
//             <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
//             <span className="text-xs sm:text-sm tracking-widest uppercase font-bold text-purple-300">
//               Cybersecurity Insights
//             </span>
//           </motion.div>

//           {/* Main Title */}
//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white tracking-tight"
//           >
//             Protect Your Business From{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-400">
//               Financial Loss
//             </span>
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             variants={itemVariants}
//             className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
//           >
//             The 2025 Human-Centered Cyber Defense Playbook. Cybersecurity is no
//             longer just "IT work"—it is brand protection and business
//             survival[cite: 2, 3].
//           </motion.p>

//           {/* Breadcrumb */}
//           <motion.div
//             className="mt-8 flex justify-center items-center gap-2 text-sm sm:text-base"
//             variants={itemVariants}
//           >
//             <MotionLink
//               href="/"
//               className="text-slate-400 hover:text-purple-400 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Home
//             </MotionLink>
//             <span className="text-slate-600">/</span>
//             <MotionLink
//               href="/blog"
//               className="text-slate-400 hover:text-purple-400 transition-colors"
//             >
//               Blog
//             </MotionLink>
//             <span className="text-slate-600">/</span>
//             <span className="text-white font-medium">Financial Protection</span>
//           </motion.div>
//         </div>

//         {/* --- BLOG CONTENT BODY (Left aligned for reading) --- */}
//         <div className="max-w-3xl w-full text-slate-300 space-y-12">
//           {/* Introduction */}
//           <motion.div
//             variants={itemVariants}
//             className="prose prose-invert prose-lg max-w-none border-l-4 border-purple-500 pl-6"
//           >
//             <p className="text-xl text-white font-light italic">
//               "Companies today aren’t losing money because of slow sales.
//               They’re losing it because of one weak password, one phishing
//               email, one unpatched laptop." [cite: 4]
//             </p>
//           </motion.div>

//           {/* Section 1: Financial Risks */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
//                 <AlertTriangle size={24} />
//               </div>
//               <h2 className="text-2xl font-bold text-white">
//                 Financial Risks: The Hidden Costs
//               </h2>
//             </div>
//             <h3 className="text-lg font-semibold text-white mb-3">
//               Ransomware — The #1 Financial Threat [cite: 9]
//             </h3>
//             <p className="mb-4 text-slate-400">
//               One ransomware attack can freeze every system you own: POS,
//               payroll, logistics, CRM, ERP. When the systems stop,{" "}
//               <strong className="text-white">cashflow stops</strong>[cite: 10,
//               11].
//             </p>
//             <div className="bg-[#0B1121] p-5 rounded-xl border border-slate-800">
//               <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">
//                 Smart Companies Use:
//               </h4>
//               <ul className="space-y-2 text-sm">
//                 <li className="flex gap-2">
//                   <ShieldCheck size={16} className="text-green-400 mt-1" />{" "}
//                   Immutable backups (cannot be modified by hackers) [cite: 13]
//                 </li>
//                 <li className="flex gap-2">
//                   <ShieldCheck size={16} className="text-green-400 mt-1" />{" "}
//                   Backup isolation (offline/air-gapped) [cite: 14]
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* Section 2: Human Risks */}
//           <motion.div variants={itemVariants}>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
//                 <Users size={24} />
//               </div>
//               <h2 className="text-2xl font-bold text-white">
//                 Human Risks: 95% of Breaches Start Here [cite: 17]
//               </h2>
//             </div>
//             <p className="mb-6">
//               Cybersecurity isn't a technology problem. It’s a{" "}
//               <strong>human behavior problem</strong>[cite: 18].
//             </p>

//             {/* Case Study Card */}
//             <div className="rounded-xl bg-gradient-to-br from-purple-900/20 to-slate-900 border border-purple-500/20 p-6 relative overflow-hidden">
//               <div className="relative z-10">
//                 <h3 className="text-white font-bold mb-2">Real-World Story</h3>
//                 <p className="text-sm text-slate-300 mb-3">
//                   A mid-size logistics company in Europe lost{" "}
//                   <span className="text-red-400 font-bold">$240,000</span> in 48
//                   hours. One employee clicked a phishing email, and customers
//                   paid the attacker instead of the company[cite: 20, 21].
//                 </p>
//                 <p className="text-xs text-purple-300 font-semibold">
//                   Solution: Monthly phishing simulations & Cyber hygiene
//                   coaching[cite: 23, 25].
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Section 3: Technical Controls */}
//           <motion.div variants={itemVariants}>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
//                 <Server size={24} />
//               </div>
//               <h2 className="text-2xl font-bold text-white">
//                 Technical Controls: Your Digital Armor
//               </h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
//                 <h3 className="font-bold text-white flex items-center gap-2 mb-2">
//                   <Lock size={16} className="text-purple-400" /> Zero-Trust
//                 </h3>
//                 <p className="text-sm text-slate-400">
//                   No one is trusted by default — not employees, not apps, not
//                   devices[cite: 29].
//                 </p>
//               </div>
//               <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
//                 <h3 className="font-bold text-white flex items-center gap-2 mb-2">
//                   <Server size={16} className="text-purple-400" /> Cloud
//                   Security
//                 </h3>
//                 <p className="text-sm text-slate-400">
//                   Includes API monitoring, Identity-based permissions, and
//                   Secure configurations[cite: 33, 34].
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* CTA Section */}
//           <motion.div
//             variants={itemVariants}
//             className="rounded-2xl bg-gradient-to-r from-purple-900/40 to-[#0B1121] border border-purple-500/40 p-8 text-center mt-8"
//           >
//             <h2 className="text-2xl font-bold text-white mb-4">
//               Ready to Secure Your Revenue?
//             </h2>
//             <p className="text-slate-300 mb-6 text-sm">
//               When an attack happens, confusion is expensive — clarity saves
//               money. To help companies stay protected, AICYRO is offering[cite:
//               38, 43]:
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//               <div className="flex items-center gap-2 text-xs font-bold text-white bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700">
//                 <ShieldCheck size={14} className="text-purple-400" /> FREE Risk
//                 Assessment
//               </div>
//               <div className="flex items-center gap-2 text-xs font-bold text-white bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700">
//                 <Download size={14} className="text-purple-400" /> 2025 Safety
//                 Checklist
//               </div>
//             </div>

//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.4)]"
//             >
//               Book Consultation <ArrowRight size={18} />
//             </Link>
//           </motion.div>
//         </div>
//       </motion.main>

//       {/* --- Footer Section --- */}
//       <Footer />
//     </div>
//   );
// };

// export default Blog3;

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
import { motion } from "framer-motion";
import Navbar from "@/Components/Essntials/Navbar";
import Footer from "@/Components/Essntials/footer";
import {
  ArrowRight,
  Search,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Calendar,
  Clock,
} from "lucide-react";

// --- MOCK DATA ---
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Web Development: Beyond Next.js 14",
    excerpt:
      "Exploring the new frontiers of server components, partial prerendering, and what it means for the developer experience in 2026.",
    category: "Development",
    date: "Jan 05, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS Architectures",
    excerpt:
      "How to organize your styles for large scale applications without losing your mind.",
    category: "Design",
    date: "Jan 02, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "The Psychology of UI Animation",
    excerpt:
      "Why micro-interactions matter more than you think for user retention.",
    category: "UX/UI",
    date: "Dec 28, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Serverless Databases: A Comprehensive Guide",
    excerpt:
      "Comparing the top players in the market and which one suits your startup.",
    category: "Backend",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "AI Integration in React Apps",
    excerpt:
      "Building a custom chatbot using the OpenAI API and React streams.",
    category: "AI",
    date: "Dec 10, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    featured: false,
  },
];

const CATEGORIES = ["All", "Development", "Design", "UX/UI", "Backend", "AI"];

// --- COMPONENTS ---

const Blog3 = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS.filter((post) => !post.featured)
      : BLOG_POSTS.filter(
          (post) => post.category === activeCategory && !post.featured
        );

  const featuredPost = BLOG_POSTS.find((post) => post.featured);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
            >
              Insights & <br />{" "}
              <span className="text-gray-400">Perspectives.</span>
            </motion.h1>
            <p className="text-lg text-gray-600">
              Deep dives into technology, design, and the future of digital
              products.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="relative group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full md:w-80 bg-white border border-gray-200 rounded-full py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Featured Post (Bento Large) */}
        {activeCategory === "All" && featuredPost && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16 group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-200 grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="h-64 lg:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6 text-sm font-medium">
                <span className="bg-black text-white px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <div className="flex items-center gap-1 text-gray-500">
                  <Calendar size={14} /> {featuredPost.date}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock size={14} /> {featuredPost.readTime}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-600 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 text-lg mb-8 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <button className="flex items-center gap-2 text-black font-bold group/btn">
                Read Full Story
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover/btn:translate-x-2"
                />
              </button>
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-3 no-scrollbar">
          {CATEGORIES.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-black text-white shadow-lg shadow-black/20"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1.5 rounded-full border border-gray-100">
                    {post.category}
                  </span>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src="https://ui-avatars.com/api/?name=Admin&background=random"
                        alt="Author"
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-700">
                      Aicyro Team
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-300 group-hover:text-black -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section (Visual Break) */}
        <div className="mt-20 rounded-3xl bg-black text-white p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-500 via-black to-black"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join our monthly digest
            </h2>
            <p className="text-gray-400 mb-8">
              Get the latest articles, tutorials, and free resources delivered
              straight to your inbox. No spam, we promise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:bg-white/20 transition-all"
              />
              <button className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog3;
