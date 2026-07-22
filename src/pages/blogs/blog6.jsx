// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "@/Components/Essntials/Navbar";
// import Footer from "@/Components/Essntials/footer";
// import {
//   Bot,
//   Layers,
//   BrainCircuit,
//   Workflow,
//   Users,
//   CheckCircle,
//   ArrowRight,
//   TrendingUp,
//   Zap,
//   BarChart3,
//   Cpu,
// } from "lucide-react";

// // --- REUSABLE COMPONENTS (Consistent with Blog 4 & 5) ---

// const SectionHeading = ({ children, id }) => (
//   <h2
//     id={id}
//     className="text-3xl font-bold text-white mt-16 mb-6 flex items-center gap-3 scroll-mt-28"
//   >
//     <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
//     {children}
//   </h2>
// );

// const HighlightBox = ({ title, children, icon: Icon, color = "purple" }) => {
//   const styles = {
//     purple: {
//       bg: "bg-purple-500/20",
//       text: "text-purple-400",
//       border: "hover:border-purple-500/30",
//     },
//     blue: {
//       bg: "bg-blue-500/20",
//       text: "text-blue-400",
//       border: "hover:border-blue-500/30",
//     },
//     cyan: {
//       bg: "bg-cyan-500/20",
//       text: "text-cyan-400",
//       border: "hover:border-cyan-500/30",
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

// const Blog6 = () => {
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
//             <Bot size={14} /> 2025 Automation Report
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
//           >
//             <span className="text-[#7746D5]">The Future of AI Automation:</span>
//             <span> How It’s Reshaping Business Operations in 2025</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-400 mb-8"
//           >
//             In 2025, AI automation will no longer be a “feature.” It has become
//             the{" "}
//             <span className="text-white font-bold">operational backbone</span>{" "}
//             of modern companies.
//           </motion.p>

//           <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
//             <span className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>{" "}
//               AICYRO Team
//             </span>
//             <span>•</span>
//             <span>Jan 22, 2026</span>
//             <span>•</span>
//             <span>7 min read</span>
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
//                 { id: "shift-autonomous", label: "1. The Shift to Autonomous" },
//                 { id: "core-functions", label: "2. Rewriting Operations" },
//                 { id: "orchestrators", label: "3. AI Orchestrators" },
//                 { id: "predictive-intel", label: "4. Predictive Intelligence" },
//                 { id: "human-role", label: "5. The Human Role" },
//                 { id: "implementation", label: "6. 2025 Implementation" },
//                 { id: "cta", label: "Get Automated" },
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
//               Businesses that adopt automation early are growing 3–5× faster.
//               Those that delay are already seeing rising costs and slower
//               delivery.
//             </p>

//             {/* SECTION 1: The Shift */}
//             <SectionHeading id="shift-autonomous">
//               1. The Shift from Manual Operations to Autonomous Systems
//             </SectionHeading>
//             <p>
//               For years, companies used automation only for simple tasks. But in
//               2025, AI now handles <strong>entire operational layers</strong>{" "}
//               across the business.
//             </p>
//             <p>Modern AI automation can:</p>
//             <ul className="space-y-1">
//               <li>Understand business logic</li>
//               <li>Execute workflows end-to-end</li>
//               <li>Monitor systems 24/7</li>
//               <li>Predict issues before they occur</li>
//             </ul>

//             <HighlightBox
//               title="The Operational Shift"
//               icon={Layers}
//               color="purple"
//             >
//               <p>
//                 This shift moves organizations from{" "}
//                 <strong>operator-led</strong> to{" "}
//                 <strong>AI-orchestrated</strong>. The result? Faster output,
//                 fewer errors, and operations that scale without hiring 10 extra
//                 people.
//               </p>
//             </HighlightBox>

//             {/* SECTION 2: Core Functions */}
//             <SectionHeading id="core-functions">
//               2. AI Automation Is Rewriting Core Business Functions
//             </SectionHeading>
//             <p>
//               Across industries, AI isn’t replacing jobs — it’s replacing
//               <em>tasks</em>.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 <Users className="text-blue-400 mb-2" size={20} />
//                 <h4 className="font-bold text-white text-sm">
//                   Customer Support
//                 </h4>
//                 <p className="text-xs text-gray-400">
//                   AI agents resolve 60–75% of issues automatically.
//                 </p>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 <BarChart3 className="text-purple-400 mb-2" size={20} />
//                 <h4 className="font-bold text-white text-sm">
//                   Finance & Accounting
//                 </h4>
//                 <p className="text-xs text-gray-400">
//                   Real-time reconciliation and anomaly detection.
//                 </p>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 <Workflow className="text-cyan-400 mb-2" size={20} />
//                 <h4 className="font-bold text-white text-sm">
//                   Ops & Scheduling
//                 </h4>
//                 <p className="text-xs text-gray-400">
//                   Systems predict demand and assign resources.
//                 </p>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 <Zap className="text-yellow-400 mb-2" size={20} />
//                 <h4 className="font-bold text-white text-sm">
//                   Marketing & Sales
//                 </h4>
//                 <p className="text-xs text-gray-400">
//                   Automated content generation and lead qualification.
//                 </p>
//               </div>
//             </div>

//             {/* SECTION 3: Orchestrators */}
//             <SectionHeading id="orchestrators">
//               3. The Rise of AI Orchestrators (The New Digital Workforce)
//             </SectionHeading>
//             <p>
//               The next major leap is <strong>AI Orchestrators</strong> — systems
//               that coordinate multiple AI agents like a team.
//             </p>
//             <p>
//               Instead of "one AI bot," companies now use a full AI workforce:
//               one agent analyzes behavior, another writes emails, and another
//               updates the CRM.
//             </p>

//             <blockquote className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-900/10 text-white font-medium my-8">
//               "AI isn’t a tool anymore. It’s becoming an autonomous operational
//               layer."
//             </blockquote>

//             {/* SECTION 4: Predictive Intelligence */}
//             <SectionHeading id="predictive-intel">
//               4. Predictive Intelligence: The Real Competitive Advantage
//             </SectionHeading>
//             <p>
//               2025 automation isn’t about doing tasks faster — it’s about
//               predicting what will happen next. AI can now forecast inventory
//               demand, customer churn, and system failures.
//             </p>

//             <HighlightBox
//               title="The Prevention Cycle"
//               icon={BrainCircuit}
//               color="blue"
//             >
//               <p>
//                 Prediction → Prevention → Optimization. This cycle reduces cost
//                 and increases revenue — before problems even appear. Founders
//                 love automation that <em>thinks</em>, not just automates.
//               </p>
//             </HighlightBox>

//             {/* SECTION 5: Human Role */}
//             <SectionHeading id="human-role">
//               5. How AI Automation Changes the Role of Human Teams
//             </SectionHeading>
//             <p>
//               High-performing companies are reorganizing around AI automation.
//               Humans are shifting to{" "}
//               <strong>Strategy, Creative Thinking, and Decision Making</strong>.
//             </p>
//             <p>
//               Meanwhile, AI handles the repetition, monitoring, reporting, and
//               execution. This hybrid model is the future of work.
//             </p>

//             {/* SECTION 6: Implementation */}
//             <SectionHeading id="implementation">
//               6. What Businesses Must Implement in 2025
//             </SectionHeading>
//             <p>
//               Companies that implement AI automation now will outperform
//               competitors for the next decade. A modern strategy requires:
//             </p>

//             <div className="space-y-4 not-prose my-8">
//               {[
//                 "Clean, structured data",
//                 "AI-first workflows",
//                 "API-ready tools",
//                 "Security policies (Zero Trust)",
//                 "Automated reporting & dashboards",
//                 "AI agents for each business unit",
//               ].map((item, i) => (
//                 <div
//                   key={i}
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
//                   Automate Intelligently with AICYRO
//                 </h2>
//                 <p className="text-gray-300 mb-8 max-w-xl mx-auto">
//                   Get the tools and strategy you need to build an autonomous
//                   business.
//                 </p>

//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                   <button className="flex items-center justify-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/50">
//                     Book Consultation <ArrowRight size={18} />
//                   </button>
//                 </div>
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
//                     <p className="text-xs text-gray-400">Automation Experts</p>
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

// export default Blog6;

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
//
///
//
//

"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/Components/Essntials/Navbar";
import Footer from "@/Components/Essntials/footer";
import {
  Bot,
  Layers,
  BrainCircuit,
  Workflow,
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Zap,
  BarChart3,
  Cpu,
} from "lucide-react";

// --- REUSABLE COMPONENTS (Consistent with Blog 4 & 5) ---

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

const HighlightBox = ({ title, children, icon: Icon, color = "purple" }) => {
  // UPDATED: Mapped styles to use CSS variables for theming
  const styles = {
    purple: {
      bg: "bg-[var(--primary)]/20",
      text: "text-[var(--primary)]",
      border: "hover:border-[var(--primary)]/30",
    },
    blue: {
      bg: "bg-[var(--accent-blue)]/20",
      text: "text-[var(--accent-blue)]",
      border: "hover:border-[var(--accent-blue)]/30",
    },
    // Mapped cyan to secondary variable for consistency
    cyan: {
      bg: "bg-[var(--secondary)]/20",
      text: "text-[var(--secondary)]",
      border: "hover:border-[var(--secondary)]/30",
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

const Blog6 = () => {
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
            <Bot size={14} /> 2025 Automation Report
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            {/* UPDATED: Span uses secondary variable */}
            <span className="text-[var(--secondary)]">
              The Future of AI Automation:
            </span>
            <span> How It’s Reshaping Business Operations in 2025</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            In 2025, AI automation will no longer be a “feature.” It has become
            the{" "}
            <span className="text-[var(--foreground)] font-bold">
              operational backbone
            </span>{" "}
            of modern companies.
          </motion.p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--foreground-muted)]/70">
            <span className="flex items-center gap-2">
              {/* UPDATED: Gradient uses accent/primary variables */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]"></div>{" "}
              AICYRO Team
            </span>
            <span>•</span>
            <span>Jan 22, 2026</span>
            <span>•</span>
            <span>7 min read</span>
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
                { id: "shift-autonomous", label: "1. The Shift to Autonomous" },
                { id: "core-functions", label: "2. Rewriting Operations" },
                { id: "orchestrators", label: "3. AI Orchestrators" },
                { id: "predictive-intel", label: "4. Predictive Intelligence" },
                { id: "human-role", label: "5. The Human Role" },
                { id: "implementation", label: "6. 2025 Implementation" },
                { id: "cta", label: "Get Automated" },
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
              Businesses that adopt automation early are growing 3–5× faster.
              Those that delay are already seeing rising costs and slower
              delivery.
            </p>

            {/* SECTION 1: The Shift */}
            <SectionHeading id="shift-autonomous">
              1. The Shift from Manual Operations to Autonomous Systems
            </SectionHeading>
            <p>
              For years, companies used automation only for simple tasks. But in
              2025, AI now handles{" "}
              <strong className="text-[var(--foreground)]">
                entire operational layers
              </strong>{" "}
              across the business.
            </p>
            <p>Modern AI automation can:</p>
            <ul className="space-y-1">
              <li>Understand business logic</li>
              <li>Execute workflows end-to-end</li>
              <li>Monitor systems 24/7</li>
              <li>Predict issues before they occur</li>
            </ul>

            <HighlightBox
              title="The Operational Shift"
              icon={Layers}
              color="purple"
            >
              <p>
                This shift moves organizations from{" "}
                <strong className="text-[var(--foreground)]">
                  operator-led
                </strong>{" "}
                to{" "}
                <strong className="text-[var(--foreground)]">
                  AI-orchestrated
                </strong>
                . The result? Faster output, fewer errors, and operations that
                scale without hiring 10 extra people.
              </p>
            </HighlightBox>

            {/* SECTION 2: Core Functions */}
            <SectionHeading id="core-functions">
              2. AI Automation Is Rewriting Core Business Functions
            </SectionHeading>
            <p>
              Across industries, AI isn’t replacing jobs — it’s replacing
              <em> tasks</em>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {/* UPDATED: Cards use card-bg, border-color, and mapped text vars */}
              <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)]">
                <Users className="text-[var(--accent-blue)] mb-2" size={20} />
                <h4 className="font-bold text-[var(--foreground)] text-sm">
                  Customer Support
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  AI agents resolve 60–75% of issues automatically.
                </p>
              </div>
              <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)]">
                <BarChart3 className="text-[var(--primary)] mb-2" size={20} />
                <h4 className="font-bold text-[var(--foreground)] text-sm">
                  Finance & Accounting
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  Real-time reconciliation and anomaly detection.
                </p>
              </div>
              <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)]">
                <Workflow className="text-[var(--secondary)] mb-2" size={20} />
                <h4 className="font-bold text-[var(--foreground)] text-sm">
                  Ops & Scheduling
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  Systems predict demand and assign resources.
                </p>
              </div>
              <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)]">
                <Zap className="text-yellow-400 mb-2" size={20} />
                <h4 className="font-bold text-[var(--foreground)] text-sm">
                  Marketing & Sales
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  Automated content generation and lead qualification.
                </p>
              </div>
            </div>

            {/* SECTION 3: Orchestrators */}
            <SectionHeading id="orchestrators">
              3. The Rise of AI Orchestrators (The New Digital Workforce)
            </SectionHeading>
            <p>
              The next major leap is{" "}
              <strong className="text-[var(--foreground)]">
                AI Orchestrators
              </strong>{" "}
              — systems that coordinate multiple AI agents like a team.
            </p>
            <p>
              Instead of "one AI bot," companies now use a full AI workforce:
              one agent analyzes behavior, another writes emails, and another
              updates the CRM.
            </p>

            <blockquote className="border-l-4 border-[var(--primary)] pl-4 py-2 bg-[var(--primary)]/10 text-[var(--foreground)] font-medium my-8">
              "AI isn’t a tool anymore. It’s becoming an autonomous operational
              layer."
            </blockquote>

            {/* SECTION 4: Predictive Intelligence */}
            <SectionHeading id="predictive-intel">
              4. Predictive Intelligence: The Real Competitive Advantage
            </SectionHeading>
            <p>
              2025 automation isn’t about doing tasks faster — it’s about
              predicting what will happen next. AI can now forecast inventory
              demand, customer churn, and system failures.
            </p>

            <HighlightBox
              title="The Prevention Cycle"
              icon={BrainCircuit}
              color="blue"
            >
              <p>
                Prediction → Prevention → Optimization. This cycle reduces cost
                and increases revenue — before problems even appear. Founders
                love automation that <em>thinks</em>, not just automates.
              </p>
            </HighlightBox>

            {/* SECTION 5: Human Role */}
            <SectionHeading id="human-role">
              5. How AI Automation Changes the Role of Human Teams
            </SectionHeading>
            <p>
              High-performing companies are reorganizing around AI automation.
              Humans are shifting to{" "}
              <strong className="text-[var(--foreground)]">
                Strategy, Creative Thinking, and Decision Making
              </strong>
              .
            </p>
            <p>
              Meanwhile, AI handles the repetition, monitoring, reporting, and
              execution. This hybrid model is the future of work.
            </p>

            {/* SECTION 6: Implementation */}
            <SectionHeading id="implementation">
              6. What Businesses Must Implement in 2025
            </SectionHeading>
            <p>
              Companies that implement AI automation now will outperform
              competitors for the next decade. A modern strategy requires:
            </p>

            <div className="space-y-4 not-prose my-8">
              {[
                "Clean, structured data",
                "AI-first workflows",
                "API-ready tools",
                "Security policies (Zero Trust)",
                "Automated reporting & dashboards",
                "AI agents for each business unit",
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
                  <span className="text-sm text-[var(--foreground-muted)] font-medium">
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
                  Automate Intelligently with AICYRO
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  Get the tools and strategy you need to build an autonomous
                  business.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                     onClick={() => window.location.href = "/contact"}
                    className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-colors shadow-lg">
                    Book Consultation <ArrowRight size={18} />
                  </button>
                </div>
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
                      Automation Experts
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

export default Blog6;
