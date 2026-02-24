// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "@/Components/Essntials/Navbar";
// import Footer from "@/Components/Essntials/footer";
// import {
//   Rocket,
//   Search,
//   Globe,
//   PenTool,
//   Cpu,
//   CheckCircle,
//   ArrowRight,
//   TrendingUp,
//   BarChart3,
//   Zap,
// } from "lucide-react";

// // --- REUSABLE COMPONENTS (Matched to Blog 4 Style) ---

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
//     green: {
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

// const Blog5 = () => {
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
//             <TrendingUp size={14} /> 2025 Growth Report
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
//           >
//             <span className="text-[#7746D5]">AI-Powered Growth:</span>
//             <span>
//               {" "}
//               Why Modern Businesses Need Intelligent Platforms in 2025
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-400 mb-8"
//           >
//             In 2025, businesses don’t want “websites” anymore — they want{" "}
//             <span className="text-white font-bold">growth engines</span>. The
//             era of "build it and hope" is over.
//           </motion.p>

//           <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
//             <span className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>{" "}
//               AICYRO Team
//             </span>
//             <span>•</span>
//             <span>Jan 15, 2026</span>
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
//                 {
//                   id: "intelligent-platforms",
//                   label: "1. Intelligent Platforms",
//                 },
//                 { id: "seo-matters", label: "2. Why SEO Still Matters" },
//                 { id: "inbound-trust", label: "3. The Trust Engine" },
//                 { id: "geo-gpt", label: "4. GEO-GPT Strategy" },
//                 {
//                   id: "content-infrastructure",
//                   label: "5. Content Infrastructure",
//                 },
//                 { id: "cta", label: "Get Your Audit" },
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
//               A high-performing website today must do three things at once:
//               deliver a high-converting UI/UX, rank on Google with strong SEO,
//               and turn visitors into leads with clarity and trust.
//             </p>
//             {/* SECTION 1: Intelligent Platforms */}
//             <SectionHeading id="intelligent-platforms">
//               1. The Shift: From Websites to Intelligent Digital Platforms
//             </SectionHeading>
//             <p>
//               Most websites fail because they are designed for aesthetics, not
//               performance. But modern customers expect lightning-fast loading,
//               personalized experiences, and mobile-first design.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 <Zap className="text-purple-400 mb-2" size={20} />
//                 <h4 className="font-bold text-white text-sm">Predictive UX</h4>
//                 <p className="text-xs text-gray-400">
//                   Improve conversions by adapting to user behavior.
//                 </p>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg border border-white/10">
//                 <Cpu className="text-blue-400 mb-2" size={20} />
//                 <h4 className="font-bold text-white text-sm">
//                   Dynamic Content
//                 </h4>
//                 <p className="text-xs text-gray-400">
//                   Personalize content automatically for every visitor.
//                 </p>
//               </div>
//             </div>
//             <HighlightBox
//               title="The AI Advantage"
//               icon={TrendingUp}
//               color="purple"
//             >
//               <p>
//                 AI-driven websites see <strong>40–60% higher engagement</strong>{" "}
//                 because they adapt to users in real time. This is no longer web
//                 development; this is{" "}
//                 <strong>intelligent experience architecture</strong>.
//               </p>
//             </HighlightBox>
//             {/* SECTION 2: SEO */}
//             <SectionHeading id="seo-matters">
//               2. Why SEO Still Matters (Even in the Age of AI)
//             </SectionHeading>
//             <p>
//               AI didn’t kill SEO — it made it smarter, more intent-driven, and
//               more competitive. If you don’t rank for your money keywords, you
//               lose market share to competitors who do.
//             </p>

//             <p className="mb-4">
//               Strong SEO in 2025 drives three critical outcomes:
//             </p>
//             <ul className="space-y-2 not-prose mb-8">
//               <li className="flex items-start gap-3">
//                 <CheckCircle
//                   className="text-purple-500 mt-1 shrink-0"
//                   size={18}
//                 />
//                 <span>
//                   <strong>Brand Visibility:</strong> Google trust equals
//                   customer trust.
//                 </span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <CheckCircle
//                   className="text-purple-500 mt-1 shrink-0"
//                   size={18}
//                 />
//                 <span>
//                   <strong>Inbound Traffic:</strong> Capturing people who already
//                   have intent.
//                 </span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <CheckCircle
//                   className="text-purple-500 mt-1 shrink-0"
//                   size={18}
//                 />
//                 <span>
//                   <strong>Lower Acquisition Cost:</strong> Organic leads are
//                   70–80% cheaper than ads.
//                 </span>
//               </li>
//             </ul>
//             <blockquote className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-900/10 text-white font-medium my-8">
//               "The new growth formula is: AI automation + SEO = unfair
//               competitive advantage."
//             </blockquote>
//             {/* SECTION 3: Inbound Marketing */}
//             <SectionHeading id="inbound-trust">
//               3. The Power of Inbound Marketing (The Trust Engine)
//             </SectionHeading>
//             <p>
//               Most companies rely entirely on ads. But founders know one truth:
//               <strong> People trust education, not promotion.</strong>
//             </p>
//             <p>
//               Inbound works because it builds authority before the sales
//               conversation even begins. It turns brands into advisors — not
//               vendors. High-impact channels like SEO-optimized blogs and
//               educational posts remain essential.
//             </p>
//             {/* SECTION 4: GEO-GPT */}
//             <SectionHeading id="geo-gpt">
//               4. GEO-GPT: The Future of Search + AI Strategy
//             </SectionHeading>
//             <p>
//               2025 introduces the next digital evolution:{" "}
//               <strong>GEO-GPT</strong>. This fuses industry-trained AI with
//               location-based search intelligence.
//             </p>
//             <HighlightBox
//               title="Hyper-Local Precision"
//               icon={Globe}
//               color="blue"
//             >
//               <p>
//                 Instead of placing content <em>everywhere</em>, GEO-GPT places
//                 it
//                 <strong>exactly where the customer is searching</strong>. This
//                 creates higher local visibility and faster ranking.
//               </p>
//             </HighlightBox>
//             {/* SECTION 5: Content */}
//             <SectionHeading id="content-infrastructure">
//               5. Content: The Heart of All Growth in 2025
//             </SectionHeading>
//             <p>
//               Content isn’t a marketing activity anymore — it is your{" "}
//               <strong>digital trust infrastructure</strong>. It decides whether
//               Google ranks your website and whether a buyer trusts you enough to
//               book a call.
//             </p>
//             <p>
//               A winning strategy answers: "What problem is the user trying to
//               solve?" and "What convinces them to take action?"
//             </p>
//             {/* CTA SECTION */}
//             <div
//               id="cta"
//               className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 text-center relative overflow-hidden"
//             >
//               <div className="relative z-10">
//                 <h2 className="text-3xl font-bold text-white mb-4">
//                   Build Your AI-Powered Growth Engine
//                 </h2>
//                 <p className="text-gray-300 mb-8 max-w-xl mx-auto">
//                   AICYRO provides the tools you need to modernize your digital
//                   presence.
//                 </p>

//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                   <button className="flex items-center justify-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/50">
//                     Book Strategy Call <ArrowRight size={18} />{" "}
//                   </button>
//                 </div>

//                 <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest">
//                   Intelligence starts with AI
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
//                     <p className="text-xs text-gray-400">Growth Strategy</p>
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

// export default Blog5;

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
//
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/Components/Essntials/Navbar";
import Footer from "@/Components/Essntials/footer";
import {
  Rocket,
  Search,
  Globe,
  PenTool,
  Cpu,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Zap,
} from "lucide-react";

// --- REUSABLE COMPONENTS (Matched to Blog 4 Style) ---

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
  // UPDATED: Mapped 'purple' style to use CSS variables for theming
  const styles = {
    purple: {
      bg: "bg-[var(--primary)]/20",
      text: "text-[var(--primary)]",
      border: "hover:border-[var(--primary)]/30",
    },
    // Blue mapped to accent-blue for consistency
    blue: {
      bg: "bg-[var(--accent-blue)]/20",
      text: "text-[var(--accent-blue)]",
      border: "hover:border-[var(--accent-blue)]/30",
    },
    green: {
      bg: "bg-emerald-500/20",
      text: "text-emerald-400",
      border: "hover:border-emerald-500/30",
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

const Blog5 = () => {
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
            <TrendingUp size={14} /> 2025 Growth Report
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            {/* UPDATED: Span uses secondary variable */}
            <span className="text-[var(--secondary)]">AI-Powered Growth:</span>
            <span>
              {" "}
              Why Modern Businesses Need Intelligent Platforms in 2025
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            In 2025, businesses don’t want “websites” anymore — they want{" "}
            <span className="text-[var(--foreground)] font-bold">
              growth engines
            </span>
            . The era of "build it and hope" is over.
          </motion.p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--foreground-muted)]/70">
            <span className="flex items-center gap-2">
              {/* UPDATED: Gradient uses accent/primary variables */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]"></div>{" "}
              AICYRO Team
            </span>
            <span>•</span>
            <span>Jan 15, 2026</span>
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
                {
                  id: "intelligent-platforms",
                  label: "1. Intelligent Platforms",
                },
                { id: "seo-matters", label: "2. Why SEO Still Matters" },
                { id: "inbound-trust", label: "3. The Trust Engine" },
                { id: "geo-gpt", label: "4. GEO-GPT Strategy" },
                {
                  id: "content-infrastructure",
                  label: "5. Content Infrastructure",
                },
                { id: "cta", label: "Get Your Audit" },
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
              A high-performing website today must do three things at once:
              deliver a high-converting UI/UX, rank on Google with strong SEO,
              and turn visitors into leads with clarity and trust.
            </p>
            {/* SECTION 1: Intelligent Platforms */}
            <SectionHeading id="intelligent-platforms">
              1. The Shift: From Websites to Intelligent Digital Platforms
            </SectionHeading>
            <p>
              Most websites fail because they are designed for aesthetics, not
              performance. But modern customers expect lightning-fast loading,
              personalized experiences, and mobile-first design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {/* UPDATED: Cards use card-bg and border-color */}
              <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)]">
                {/* Changed to purple/blue tones using variables where applicable */}
                <Zap className="text-[var(--primary)] mb-2" size={20} />
                <h4 className="font-bold text-[var(--foreground)] text-sm">
                  Predictive UX
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  Improve conversions by adapting to user behavior.
                </p>
              </div>
              <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)]">
                <Cpu className="text-[var(--accent-blue)] mb-2" size={20} />
                <h4 className="font-bold text-[var(--foreground)] text-sm">
                  Dynamic Content
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  Personalize content automatically for every visitor.
                </p>
              </div>
            </div>
            <HighlightBox
              title="The AI Advantage"
              icon={TrendingUp}
              color="purple"
            >
              <p>
                AI-driven websites see{" "}
                <strong className="text-[var(--foreground)]">
                  40–60% higher engagement
                </strong>{" "}
                because they adapt to users in real time. This is no longer web
                development; this is{" "}
                <strong className="text-[var(--foreground)]">
                  intelligent experience architecture
                </strong>
                .
              </p>
            </HighlightBox>
            {/* SECTION 2: SEO */}
            <SectionHeading id="seo-matters">
              2. Why SEO Still Matters (Even in the Age of AI)
            </SectionHeading>
            <p>
              AI didn’t kill SEO — it made it smarter, more intent-driven, and
              more competitive. If you don’t rank for your money keywords, you
              lose market share to competitors who do.
            </p>

            <p className="mb-4">
              Strong SEO in 2025 drives three critical outcomes:
            </p>
            <ul className="space-y-2 not-prose mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-[var(--primary)] mt-1 shrink-0"
                  size={18}
                />
                <span>
                  <strong className="text-[var(--foreground)]">
                    Brand Visibility:
                  </strong>{" "}
                  Google trust equals customer trust.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-[var(--primary)] mt-1 shrink-0"
                  size={18}
                />
                <span>
                  <strong className="text-[var(--foreground)]">
                    Inbound Traffic:
                  </strong>{" "}
                  Capturing people who already have intent.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-[var(--primary)] mt-1 shrink-0"
                  size={18}
                />
                <span>
                  <strong className="text-[var(--foreground)]">
                    Lower Acquisition Cost:
                  </strong>{" "}
                  Organic leads are 70–80% cheaper than ads.
                </span>
              </li>
            </ul>
            <blockquote className="border-l-4 border-[var(--primary)] pl-4 py-2 bg-[var(--primary)]/10 text-[var(--foreground)] font-medium my-8">
              "The new growth formula is: AI automation + SEO = unfair
              competitive advantage."
            </blockquote>
            {/* SECTION 3: Inbound Marketing */}
            <SectionHeading id="inbound-trust">
              3. The Power of Inbound Marketing (The Trust Engine)
            </SectionHeading>
            <p>
              Most companies rely entirely on ads. But founders know one truth:
              <strong className="text-[var(--foreground)]">
                {" "}
                People trust education, not promotion.
              </strong>
            </p>
            <p>
              Inbound works because it builds authority before the sales
              conversation even begins. It turns brands into advisors — not
              vendors. High-impact channels like SEO-optimized blogs and
              educational posts remain essential.
            </p>
            {/* SECTION 4: GEO-GPT */}
            <SectionHeading id="geo-gpt">
              4. GEO-GPT: The Future of Search + AI Strategy
            </SectionHeading>
            <p>
              2025 introduces the next digital evolution:{" "}
              <strong className="text-[var(--foreground)]">GEO-GPT</strong>.
              This fuses industry-trained AI with location-based search
              intelligence.
            </p>
            <HighlightBox
              title="Hyper-Local Precision"
              icon={Globe}
              color="blue"
            >
              <p>
                Instead of placing content <em>everywhere</em>, GEO-GPT places
                it
                <strong className="text-[var(--foreground)]">
                  {" "}
                  exactly where the customer is searching
                </strong>
                . This creates higher local visibility and faster ranking.
              </p>
            </HighlightBox>
            {/* SECTION 5: Content */}
            <SectionHeading id="content-infrastructure">
              5. Content: The Heart of All Growth in 2025
            </SectionHeading>
            <p>
              Content isn’t a marketing activity anymore — it is your{" "}
              <strong className="text-[var(--foreground)]">
                digital trust infrastructure
              </strong>
              . It decides whether Google ranks your website and whether a buyer
              trusts you enough to book a call.
            </p>
            <p>
              A winning strategy answers: "What problem is the user trying to
              solve?" and "What convinces them to take action?"
            </p>
            {/* CTA SECTION */}
            <div
              id="cta"
              // UPDATED: CTA Gradient using primary/secondary vars (hardcoded hex fallback for gradient simplicity, or you can use `from-[var(--primary)]` etc.)
              className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-blue-900/20 border border-[var(--primary)]/30 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                  Build Your AI-Powered Growth Engine
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  AICYRO provides the tools you need to modernize your digital
                  presence.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                     onClick={() => window.location.href = "/contact"}
                    className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-colors shadow-lg">
                    Book Strategy Call <ArrowRight size={18} />{" "}
                  </button>
                </div>

                <p className="mt-6 text-xs text-[var(--foreground-muted)] uppercase tracking-widest">
                  Intelligence starts with AI
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
                      Growth Strategy
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

export default Blog5;
