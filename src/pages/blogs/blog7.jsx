// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "@/Components/Essntials/Navbar";
// import Footer from "@/Components/Essntials/footer";
// import {
//   Workflow,
//   Zap,
//   BrainCircuit,
//   Link,
//   RefreshCw,
//   Clock,
//   AlertTriangle,
//   CheckCircle,
//   ArrowRight,
//   TrendingUp,
//   Layers,
// } from "lucide-react";

// // --- REUSABLE COMPONENTS ---

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
//     emerald: {
//       bg: "bg-emerald-500/20",
//       text: "text-emerald-400",
//       border: "hover:border-emerald-500/30",
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

// const Blog7 = () => {
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
//             <Workflow size={14} /> 2025 Workflow Report
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
//           >
//             <span className="text-[#7746D5]">AI-Powered Workflows:</span>
//             <span> How Automation is Transforming Business in 2025</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-400 mb-8"
//           >
//             The hard truth: Companies that don’t adapt AI in their workflows
//             risk falling behind — fast. In 2025, workflow automation is the{" "}
//             <span className="text-white font-bold">operational backbone</span>{" "}
//             of modern businesses.
//           </motion.p>

//           <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
//             <span className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>{" "}
//               AICYRO Team
//             </span>
//             <span>•</span>
//             <span>Jan 29, 2026</span>
//             <span>•</span>
//             <span>6 min read</span>
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
//                 { id: "predictive-auto", label: "1. Predictive Automation" },
//                 { id: "orchestrators", label: "2. AI Orchestrators" },
//                 { id: "smarter-decisions", label: "3. Smarter Decisions" },
//                 { id: "integration", label: "4. Tool Integration" },
//                 { id: "optimization", label: "5. Continuous Learning" },
//                 { id: "cta", label: "Workflow Audit" },
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
//               Founders today face a painful reality: teams waste hours on
//               repetitive tasks, manual workflows slow decision-making, and
//               processes break when scaling.
//             </p>
//             <p>
//               The solution is AI-powered workflow automation — a system that
//               doesn’t just execute tasks, but predicts, optimizes, and scales
//               business operations.
//             </p>

//             {/* SECTION 1: Predictive Automation */}
//             <SectionHeading id="predictive-auto">
//               1. From Manual Tasks to Predictive Automation
//             </SectionHeading>
//             <p>
//               What took humans days, AI can do in minutes — with precision. Most
//               workflow automation today is rule-based and rigid.
//             </p>
//             <p>
//               Forward-thinking startups are integrating AI that predicts
//               bottlenecks and adjusts schedules in real time — reducing
//               operational delays by <strong>30–50%</strong>.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 <BrainCircuit className="text-purple-400 mb-2" size={20} />
//                 <h4 className="font-bold text-white text-sm">
//                   Analyze Patterns
//                 </h4>
//                 <p className="text-xs text-gray-400">
//                   AI systems analyze patterns and prioritize tasks.
//                 </p>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 <Zap className="text-blue-400 mb-2" size={20} />
//                 <h4 className="font-bold text-white text-sm">
//                   Predictive Triggers
//                 </h4>
//                 <p className="text-xs text-gray-400">
//                   Adjust workflows before issues arise.
//                 </p>
//               </div>
//             </div>

//             {/* SECTION 2: AI Orchestrators */}
//             <SectionHeading id="orchestrators">
//               2. AI Orchestrators: The New Digital Workforce
//             </SectionHeading>
//             <p>
//               AI doesn’t just assist — it coordinates like a team of experts.
//               Businesses often juggle multiple tools that rarely communicate.
//             </p>

//             <HighlightBox
//               title="Autonomous Coordination"
//               icon={Layers}
//               color="blue"
//             >
//               <p>
//                 Companies using AI orchestration platforms coordinate multiple
//                 bots with zero human intervention, saving hundreds of hours
//                 monthly. Orchestrators create an autonomous operational layer —
//                 like having a full team that never sleeps.
//               </p>
//             </HighlightBox>

//             {/* SECTION 3: Smarter Decisions */}
//             <SectionHeading id="smarter-decisions">
//               3. Predictive Analytics + Automation = Smarter Decisions
//             </SectionHeading>
//             <p>
//               Automating tasks is good. Predicting outcomes is game-changing.
//               Businesses still react to problems instead of anticipating them.
//             </p>
//             <p>
//               AI-powered tools now flag inventory shortages or delayed approvals
//               before they happen. Startups using predictive automation reported
//               <strong> 25–35% faster decision-making</strong>.
//             </p>

//             {/* SECTION 4: Integration */}
//             <SectionHeading id="integration">
//               4. Integration Across Tools & Platforms
//             </SectionHeading>
//             <p>
//               Siloed apps kill efficiency — AI connects everything. Businesses
//               integrating AI across CRM, finance, and HR reduced manual
//               hand-offs by 40–50%.
//             </p>
//             <ul className="space-y-2 not-prose mb-6">
//               <li className="flex items-start gap-2">
//                 <Link className="text-purple-500 mt-1 shrink-0" size={16} />
//                 <span>AI links cross-platform tools.</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Link className="text-purple-500 mt-1 shrink-0" size={16} />
//                 <span>Ensures seamless data flow and real-time updates.</span>
//               </li>
//             </ul>

//             {/* SECTION 5: Optimization */}
//             <SectionHeading id="optimization">
//               5. Continuous Learning & Optimization
//             </SectionHeading>
//             <p>
//               AI doesn’t just execute — it learns and improves. Traditional
//               automation is static, but adaptive AI workflows track results and
//               refine processes dynamically.
//             </p>

//             <HighlightBox
//               title="Dynamic Efficiency"
//               icon={RefreshCw}
//               color="emerald"
//             >
//               <p>
//                 Companies leveraging adaptive AI workflows saw{" "}
//                 <strong>20–30% efficiency gains</strong> over 6 months.
//                 Workflows that learn over time make your business smarter,
//                 faster, and scalable.
//               </p>
//             </HighlightBox>

//             {/* CTA SECTION */}
//             <div
//               id="cta"
//               className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 text-center relative overflow-hidden"
//             >
//               <div className="relative z-10">
//                 <h2 className="text-3xl font-bold text-white mb-4">
//                   Accelerate Growth with AI Workflows
//                 </h2>
//                 <p className="text-gray-300 mb-8 max-w-xl mx-auto">
//                   Your workflows can either slow you down or accelerate growth.
//                   AI gives you the advantage.
//                 </p>

//                 <div className="grid gap-4 max-w-lg mx-auto text-left mb-8">
//                   <div className="bg-black/20 p-4 rounded-lg flex gap-3">
//                     <Clock className="text-purple-400 shrink-0" />
//                     <div>
//                       <p className="text-white font-bold text-sm">
//                         Free AI Workflow Audit
//                       </p>
//                       <p className="text-xs text-gray-400">
//                         Identify tasks to automate now.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="bg-black/20 p-4 rounded-lg flex gap-3">
//                     <TrendingUp className="text-blue-400 shrink-0" />
//                     <div>
//                       <p className="text-white font-bold text-sm">
//                         Download: “2025 AI Workflow Playbook”
//                       </p>
//                       <p className="text-xs text-gray-400">
//                         A 1-page guide for adaptive workflows.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                   <button className="flex items-center justify-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/50">
//                     Book Consultation <ArrowRight size={18} />
//                   </button>
//                 </div>
//                 <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest">
//                   Tailored roadmap for scalability
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
//                     <p className="text-xs text-gray-400">Workflow Experts</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-4 rounded-xl bg-purple-900/10 border border-purple-500/20">
//                 <h4 className="text-white font-bold text-xs uppercase mb-2">
//                   Key Takeaway
//                 </h4>
//                 <p className="text-xs text-gray-400 flex items-start gap-2">
//                   <AlertTriangle
//                     className="text-yellow-500 shrink-0"
//                     size={12}
//                   />
//                   <span>
//                     Don’t just automate tasks — let AI orchestrate
//                     intelligently.
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Blog7;

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
"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/Components/Essntials/Navbar";
import Footer from "@/Components/Essntials/footer";
import {
  Workflow,
  Zap,
  BrainCircuit,
  Link,
  RefreshCw,
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Layers,
} from "lucide-react";

// --- REUSABLE COMPONENTS ---

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
    // Mapped emerald to secondary to keep consistent palette
    emerald: {
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

const Blog7 = () => {
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
            <Workflow size={14} /> 2025 Workflow Report
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            {/* UPDATED: Span uses secondary variable */}
            <span className="text-[var(--secondary)]">
              AI-Powered Workflows:
            </span>
            <span> How Automation is Transforming Business in 2025</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            The hard truth: Companies that don’t adapt AI in their workflows
            risk falling behind — fast. In 2025, workflow automation is the{" "}
            <span className="text-[var(--foreground)] font-bold">
              operational backbone
            </span>{" "}
            of modern businesses.
          </motion.p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--foreground-muted)]/70">
            <span className="flex items-center gap-2">
              {/* UPDATED: Gradient uses accent/primary variables */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]"></div>{" "}
              AICYRO Team
            </span>
            <span>•</span>
            <span>Jan 29, 2026</span>
            <span>•</span>
            <span>6 min read</span>
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
                { id: "predictive-auto", label: "1. Predictive Automation" },
                { id: "orchestrators", label: "2. AI Orchestrators" },
                { id: "smarter-decisions", label: "3. Smarter Decisions" },
                { id: "integration", label: "4. Tool Integration" },
                { id: "optimization", label: "5. Continuous Learning" },
                { id: "cta", label: "Workflow Audit" },
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
              Founders today face a painful reality: teams waste hours on
              repetitive tasks, manual workflows slow decision-making, and
              processes break when scaling.
            </p>
            <p>
              The solution is AI-powered workflow automation — a system that
              doesn’t just execute tasks, but predicts, optimizes, and scales
              business operations.
            </p>

            {/* SECTION 1: Predictive Automation */}
            <SectionHeading id="predictive-auto">
              1. From Manual Tasks to Predictive Automation
            </SectionHeading>
            <p>
              What took humans days, AI can do in minutes — with precision. Most
              workflow automation today is rule-based and rigid.
            </p>
            <p>
              Forward-thinking startups are integrating AI that predicts
              bottlenecks and adjusts schedules in real time — reducing
              operational delays by{" "}
              <strong className="text-[var(--foreground)]">30–50%</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {/* UPDATED: Cards use card-bg and border-color */}
              <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)]">
                {/* Changed to purple/blue tones using variables where applicable */}
                <BrainCircuit
                  className="text-[var(--primary)] mb-2"
                  size={20}
                />
                <h4 className="font-bold text-[var(--foreground)] text-sm">
                  Analyze Patterns
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  AI systems analyze patterns and prioritize tasks.
                </p>
              </div>
              <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)]">
                <Zap className="text-[var(--accent-blue)] mb-2" size={20} />
                <h4 className="font-bold text-[var(--foreground)] text-sm">
                  Predictive Triggers
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  Adjust workflows before issues arise.
                </p>
              </div>
            </div>

            {/* SECTION 2: AI Orchestrators */}
            <SectionHeading id="orchestrators">
              2. AI Orchestrators: The New Digital Workforce
            </SectionHeading>
            <p>
              AI doesn’t just assist — it coordinates like a team of experts.
              Businesses often juggle multiple tools that rarely communicate.
            </p>

            <HighlightBox
              title="Autonomous Coordination"
              icon={Layers}
              color="blue"
            >
              <p>
                Companies using AI orchestration platforms coordinate multiple
                bots with zero human intervention, saving hundreds of hours
                monthly. Orchestrators create an autonomous operational layer —
                like having a full team that never sleeps.
              </p>
            </HighlightBox>

            {/* SECTION 3: Smarter Decisions */}
            <SectionHeading id="smarter-decisions">
              3. Predictive Analytics + Automation = Smarter Decisions
            </SectionHeading>
            <p>
              Automating tasks is good. Predicting outcomes is game-changing.
              Businesses still react to problems instead of anticipating them.
            </p>
            <p>
              AI-powered tools now flag inventory shortages or delayed approvals
              before they happen. Startups using predictive automation reported
              <strong className="text-[var(--foreground)]">
                {" "}
                25–35% faster decision-making
              </strong>
              .
            </p>

            {/* SECTION 4: Integration */}
            <SectionHeading id="integration">
              4. Integration Across Tools & Platforms
            </SectionHeading>
            <p>
              Siloed apps kill efficiency — AI connects everything. Businesses
              integrating AI across CRM, finance, and HR reduced manual
              hand-offs by 40–50%.
            </p>
            <ul className="space-y-2 not-prose mb-6">
              <li className="flex items-start gap-2">
                <Link
                  className="text-[var(--primary)] mt-1 shrink-0"
                  size={16}
                />
                <span>AI links cross-platform tools.</span>
              </li>
              <li className="flex items-start gap-2">
                <Link
                  className="text-[var(--primary)] mt-1 shrink-0"
                  size={16}
                />
                <span>Ensures seamless data flow and real-time updates.</span>
              </li>
            </ul>

            {/* SECTION 5: Optimization */}
            <SectionHeading id="optimization">
              5. Continuous Learning & Optimization
            </SectionHeading>
            <p>
              AI doesn’t just execute — it learns and improves. Traditional
              automation is static, but adaptive AI workflows track results and
              refine processes dynamically.
            </p>

            <HighlightBox
              title="Dynamic Efficiency"
              icon={RefreshCw}
              color="emerald"
            >
              <p>
                Companies leveraging adaptive AI workflows saw{" "}
                <strong className="text-[var(--foreground)]">
                  20–30% efficiency gains
                </strong>{" "}
                over 6 months. Workflows that learn over time make your business
                smarter, faster, and scalable.
              </p>
            </HighlightBox>

            {/* CTA SECTION */}
            <div
              id="cta"
              // UPDATED: CTA Gradient using primary/secondary vars (hardcoded hex fallback for gradient simplicity, or you can use `from-[var(--primary)]` etc.)
              className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-blue-900/20 border border-[var(--primary)]/30 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                  Accelerate Growth with AI Workflows
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  Your workflows can either slow you down or accelerate growth.
                  AI gives you the advantage.
                </p>

                <div className="grid gap-4 max-w-lg mx-auto text-left mb-8">
                  {/* UPDATED: Info boxes */}
                  <div className="bg-[var(--background)]/20 p-4 rounded-lg flex gap-3 border border-[var(--border-color)]">
                    <Clock className="text-[var(--primary)] shrink-0" />
                    <div>
                      <p className="text-[var(--foreground)] font-bold text-sm">
                        Free AI Workflow Audit
                      </p>
                      <p className="text-xs text-[var(--foreground-muted)]">
                        Identify tasks to automate now.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[var(--background)]/20 p-4 rounded-lg flex gap-3 border border-[var(--border-color)]">
                    <TrendingUp className="text-[var(--accent-blue)] shrink-0" />
                    <div>
                      <p className="text-[var(--foreground)] font-bold text-sm">
                        Download: “2025 AI Workflow Playbook”
                      </p>
                      <p className="text-xs text-[var(--foreground-muted)]">
                        A 1-page guide for adaptive workflows.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                   onClick={() => window.location.href = "/contact"}
                    className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-colors shadow-lg">
                    Book Consultation <ArrowRight size={18} />
                  </button>
                </div>
                <p className="mt-6 text-xs text-[var(--foreground-muted)] uppercase tracking-widest">
                  Tailored roadmap for scalability
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
                      Workflow Experts
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                <h4 className="text-[var(--foreground)] font-bold text-xs uppercase mb-2">
                  Key Takeaway
                </h4>
                <p className="text-xs text-[var(--foreground-muted)] flex items-start gap-2">
                  <AlertTriangle
                    className="text-yellow-500 shrink-0"
                    size={12}
                  />
                  <span>
                    Don’t just automate tasks — let AI orchestrate
                    intelligently.
                  </span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog7;
