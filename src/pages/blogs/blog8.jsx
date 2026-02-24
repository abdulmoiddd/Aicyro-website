
"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/Components/Essntials/Navbar";
import Footer from "@/Components/Essntials/footer";
import LeadMagnet from "@/Components/Home/AIReadinessTeaser";

import {
  Clock,
  Target,
  TrendingUp,
  Globe,
  Brain,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  DollarSign,
  BarChart3,
  Zap,
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
    // Mapped Green/Emerald to Secondary to ensure visibility in both themes
    green: {
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

const Blog8 = () => {
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
            <Zap size={14} /> 2025 Efficiency Report
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            {/* UPDATED: Span uses secondary variable */}
            <span className="text-[var(--secondary)]">AI vs Manual Work:</span>
            <span> The Hard Truth About Time and Money in 2025</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            In 2025, founders face a tough reality: manual work is expensive,
            slow, and error-prone. AI isn’t just a tool anymore — it’s an{" "}
            <span className="text-[var(--foreground)] font-bold">
              operational multiplier
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
            <span>Feb 5, 2026</span>
            <span>•</span>
            <span>5 min read</span>
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
                { id: "time-efficiency", label: "1. Time Efficiency" },
                { id: "accuracy", label: "2. Accuracy & Errors" },
                { id: "cost-scaling", label: "3. Cost Scaling" },
                { id: "flexibility", label: "4. Global Flexibility" },
                { id: "strategic-focus", label: "5. Strategic Focus" },
                { id: "cta", label: "Get The Roadmap" },
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
              Businesses that rely on manual processes are losing hours and
              dollars every day. Here’s why adopting AI for business processes
              is no longer optional.
            </p>

            {/* SECTION 1: Time */}
            <SectionHeading id="time-efficiency">
              1. Time: AI Works Faster, 24/7
            </SectionHeading>
            <p>
              What takes humans hours, AI can do in minutes — and it never
              sleeps. Teams spend countless hours on repetitive tasks like data
              entry, report generation, email follow-ups, and inventory updates.
            </p>

            <HighlightBox title="Operational Speed" icon={Clock} color="purple">
              <p>
                At a fast-growing startup, switching from manual workflows to AI
                automation{" "}
                <strong className="text-[var(--foreground)]">
                  cut operational time by 40%
                </strong>
                , allowing employees to focus on strategy.
              </p>
            </HighlightBox>

            <p>
              <strong className="text-[var(--foreground)]">
                The Solution:
              </strong>
            </p>
            <ul className="space-y-1 not-prose mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[var(--primary)]" /> AI
                can process hundreds of tasks simultaneously.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[var(--primary)]" />{" "}
                Implement AI workflow tools (Zapier AI, Make.com AI, Aicyro AI
                Orchestrator).
              </li>
            </ul>

            {/* SECTION 2: Accuracy */}
            <SectionHeading id="accuracy">
              2. Accuracy: Fewer Errors, Less Waste
            </SectionHeading>
            <p>
              Manual work makes mistakes. AI makes data-driven decisions. Human
              error costs businesses money: misentries, duplicated efforts, and
              delayed approvals add up.
            </p>

            <div className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)] flex items-start gap-3 my-6 not-prose">
              {/* Changed blue-400 to accent-blue variable */}
              <Target
                className="text-[var(--accent-blue)] shrink-0"
                size={24}
              />
              <div>
                <h4 className="font-bold text-[var(--foreground)] text-sm mb-1">
                  Zero-Error Accounting
                </h4>
                <p className="text-xs text-[var(--foreground-muted)]">
                  Companies using AI in accounting reduced reconciliation errors
                  by{" "}
                  <strong className="text-[var(--foreground)]">over 90%</strong>
                  , saving thousands in manual corrections.
                </p>
              </div>
            </div>

            {/* SECTION 3: Cost Efficiency */}
            <SectionHeading id="cost-scaling">
              3. Cost Efficiency: Scale Without Hiring
            </SectionHeading>
            <p>
              Scaling human teams is expensive. Scaling AI is efficient. Hiring
              more staff to handle growing workloads increases salaries,
              benefits, and onboarding costs.
            </p>

            <HighlightBox
              title="The ROI of Automation"
              icon={DollarSign}
              color="green" // Mapped to secondary variable inside component
            >
              <p>
                An enterprise integrated AI into its workflow automation and{" "}
                <strong className="text-[var(--foreground)]">
                  reduced operational costs by 30%
                </strong>
                , handling the same workload with fewer employees.
              </p>
            </HighlightBox>

            <p>
              This allows businesses to scale operations without proportional
              headcount and reinvest saved costs into growth initiatives.
            </p>

            {/* SECTION 4: Flexibility */}
            <SectionHeading id="flexibility">
              4. Flexibility: AI Works Around the Clock
            </SectionHeading>
            <p>
              Humans need sleep; AI doesn’t. Manual teams are limited by office
              hours, time zones, and fatigue.
            </p>
            <p>
              AI-powered automation allowed a SaaS company to process global
              support tickets 24/7, increasing customer satisfaction while
              reducing delays.
            </p>

            {/* SECTION 5: Strategic Focus */}
            <SectionHeading id="strategic-focus">
              5. Strategic Focus: Let Humans Solve Problems
            </SectionHeading>
            <p>
              Manual work distracts humans from building the business. Employees
              spend too much time on repetitive, low-value tasks.
            </p>
            <p>
              Startups using AI for workflow automation freed teams to focus on
              product innovation and strategic growth, increasing output by{" "}
              <strong className="text-[var(--foreground)]">25–35%</strong>.
            </p>

            {/* CTA SECTION */}
            <div
              id="cta"
              // UPDATED: CTA Gradient using primary/secondary vars (hardcoded hex fallback for gradient simplicity, or you can use `from-[var(--primary)]` etc.)
              className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-blue-900/20 border border-[var(--primary)]/30 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                  Save Time and Money While Scaling Smarter
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  Don’t waste time and money manually — let AI transform your
                  business.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                   onClick={() => window.location.href = "/contact"}
                    className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-colors shadow-lg">
                    Book Consultation <ArrowRight size={18} />
                  </button>
                </div>
                <p className="mt-6 text-xs text-[var(--foreground-muted)] uppercase tracking-widest">
                  Get a roadmap for AI-driven operations
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
                      Ops Intelligence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
<LeadMagnet/>
      <Footer />
    </div>
  );
};

export default Blog8;
