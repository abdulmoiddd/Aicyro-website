"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/Components/Essntials/Navbar";
import Footer from "@/Components/Essntials/footer";
import {
  ArrowRight,
  Twitter,
  Linkedin,
  CheckCircle,
  XCircle,
  AlertOctagon,
  Bug,
  GitMerge,
  Zap,
  Gauge,
  Bot,
  Search,
  Server,
  RefreshCw,
} from "lucide-react";

// --- COMPONENTS ---

const SectionHeading = ({ children, id }) => (
  <h2
    id={id}
    className="text-3xl font-bold text-[var(--foreground)] mt-16 mb-6 flex items-center gap-3 scroll-mt-28"
  >
    <div className="w-1 h-8 bg-[var(--primary)] rounded-full"></div>
    {children}
  </h2>
);

const HighlightBox = ({ title, children, icon: Icon }) => (
  <div className="bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-xl p-6 my-8 backdrop-blur-sm hover:border-[var(--primary)]/30 transition-colors">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-[var(--primary)]/20 rounded-lg text-[var(--primary)]">
        <Icon size={24} />
      </div>
      <div>
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

const BlogQAAutomation = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground-muted)] font-sans selection:bg-[var(--primary)] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-medium mb-6"
          >
            <Bug size={14} /> The AICYRO Playbook
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            QA & Automation in 2026: Why Manual Testing Is Quietly Killing
            Product Velocity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            Building Reliable, Scalable Software without sacrificing speed.
          </motion.p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--foreground-muted)]/70">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]"></div>{" "}
              AICYRO Team
            </span>
            <span>•</span>
            <span>Jan 9, 2026</span>
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
                { id: "the-problem", label: "The Scale Problem" },
                { id: "case-study", label: "Case Study: Velocity" },
                { id: "framework", label: "The AICYRO Framework" },
                { id: "truths", label: "Automation Truths" },
                { id: "takeaways", label: "Actionable Takeaways" },
                { id: "cta", label: "Get Started" },
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
              Here’s a hard truth most founders learn too late:{" "}
              <strong className="text-[var(--primary)]">
                Bugs don’t kill products. Slow releases do.
              </strong>
            </p>

            <p>
              In 2026, speed is everything. But speed without quality is chaos.
              And quality without automation is impossible at scale. QA is no
              longer a “final step.” It’s a business-critical system that
              protects revenue, brand trust, and customer retention.
            </p>

            {/* SECTION 1: The Problem */}
            <SectionHeading id="the-problem">
              The Problem: Manual QA Doesn’t Scale
            </SectionHeading>
            <p>
              Most teams still rely on manual regression testing, last-minute
              test cycles before release, and human testers repeating the same
              flows.
            </p>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 my-6">
              <h4 className="font-bold text-red-400 flex items-center gap-2 mb-2">
                <AlertOctagon size={18} /> Predictable Failures
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-[var(--foreground-muted)]">
                <li>Releases get delayed repeatedly</li>
                <li>Bugs escape into production</li>
                <li>Teams lose confidence in deployments</li>
                <li>Engineering velocity drops significantly</li>
              </ul>
            </div>
            <p>
              Founders feel this as missed deadlines, churned customers, and
              rising costs.
            </p>

            {/* SECTION 2: Case Study */}
            <SectionHeading id="case-study">
              A Real Story: When QA Became the Bottleneck
            </SectionHeading>
            <p>
              A SaaS startup we worked with shipped weekly updates — but
              production bugs were increasing. The reality on the ground was
              grim: The QA team spent{" "}
              <strong className="text-[var(--foreground)]">
                70% of their time
              </strong>{" "}
              on repetitive tests, missing critical edge cases. Hotfixes became
              normal.
            </p>

            <HighlightBox title="The Turnaround" icon={RefreshCw}>
              <p className="mb-4">
                We introduced test automation across core workflows: Automated
                regression tests, API test coverage, and CI/CD-integrated test
                pipelines.
              </p>
              <div className="space-y-2 mt-4 pt-4 border-t border-[var(--border-color)]">
                <p className="text-[var(--foreground)] font-bold text-sm">
                  Results after 60 days:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Production bugs dropped by 65%
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Deployment frequency doubled
                  </div>
                </div>
              </div>
            </HighlightBox>
            <p className="italic text-sm">
              Automation didn’t remove QA — it freed QA to think.
            </p>

            {/* SECTION 3: The Framework */}
            <SectionHeading id="framework">
              Behind the Scenes: The AICYRO QA Framework
            </SectionHeading>
            <p>
              To build reliable, scalable software, we implement these five
              pillars:
            </p>

            <div className="space-y-8 not-prose my-8">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <GitMerge />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    1. Shift-Left Testing
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Testing starts early. Unit tests during development and API
                    tests before UI ensure bugs are caught before they become
                    expensive.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <RefreshCw />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    2. Automated Regression Testing
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Every critical flow (Login, Payments, User permissions) is
                    protected. If it worked yesterday, automation ensures it
                    works today.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Server />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    3. CI/CD Integrated QA
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Every deployment triggers automated test suites, smoke
                    tests, and performance checks. No manual approvals. No
                    guesswork.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Gauge />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    4. Performance & Load Testing
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Founders rarely test this until it’s too late. Automation
                    simulates peak traffic and payment spikes to prevent outages
                    during growth moments.
                  </p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Bot />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    5. AI-Assisted Test Intelligence
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    AI helps identify high-risk areas, suggest missing test
                    cases, and reduce flaky tests. Less noise. More signal.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 4: Truths */}
            <SectionHeading id="truths">
              What No One Tells You About QA Automation
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    It’s not about “automating everything”
                  </span>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    It’s not about replacing testers
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    It’s about automating repetition
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Letting humans focus on edge cases
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Protecting velocity as the product scales
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 5: Takeaways */}
            <SectionHeading id="takeaways">
              Actionable Takeaways for Founders
            </SectionHeading>
            <ul className="space-y-4 not-prose">
              {[
                "Automate your most critical user journeys first",
                "Integrate QA into CI/CD — not after deployment",
                "Measure quality with metrics, not feelings",
                "Combine manual exploratory testing with automation",
                "Treat QA as infrastructure, not a checkbox",
              ].map((item, i) => (
                <li
                  key={i}
                  className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)] text-sm text-[var(--foreground-muted)] flex items-start gap-3"
                >
                  <Search
                    className="text-[var(--primary)] shrink-0 mt-0.5"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-[var(--primary)]/5 rounded-lg border border-[var(--primary)]/10">
              <h4 className="font-bold text-[var(--foreground)] mb-2">
                Why QA Automation Is a Business Advantage
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-[var(--foreground-muted)]">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Faster releases
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Fewer production incidents
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Lower support costs
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Higher customer trust
                </span>
              </div>
            </div>

            {/* CTA SECTION */}
            <div
              id="cta"
              className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-blue-900/20 border border-[var(--primary)]/30 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                  Ship Faster Without Breaking Things
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  Your product should move fast — without breaking trust. Let us
                  help you build a test framework that scales.
                </p>

                <div className="flex flex-col gap-4 max-w-lg mx-auto mb-8 text-left">
                  <div className="flex gap-3 items-center bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--primary)]/20">
                    <CheckCircle
                      className="text-[var(--primary)] shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-[var(--foreground)]">
                      <strong>Free QA Maturity Assessment:</strong> Identify
                      gaps in your pipeline.
                    </span>
                  </div>
                  <div className="flex gap-3 items-center bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--primary)]/20">
                    <CheckCircle
                      className="text-[var(--primary)] shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-[var(--foreground)]">
                      <strong>Automation Readiness Checklist:</strong> The 2026
                      Edition.
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                  <button
                                      onClick={() => window.location.href = "/contact"}

                                      className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                    Book QA Strategy Consultation <ArrowRight size={18} />
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
                      QA Engineers
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

export default BlogQAAutomation;