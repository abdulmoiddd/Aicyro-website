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
  AlertTriangle,
  CloudLightning,
  Server,
  Code,
  GitMerge,
  Activity,
  DollarSign,
  ShieldCheck,
  Terminal,
  Layers,
  Rocket,
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

const BlogCloudDevOps = () => {
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
            <CloudLightning size={14} /> 2026 Operations Playbook
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            Cloud & DevOps in 2026: The Architecture That Separates Fast-Scaling
            Companies From Stalled Ones
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            The AICYRO Deep Dive Into Modern Cloud Operations.
          </motion.p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--foreground-muted)]/70">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]"></div>{" "}
              AICYRO Team
            </span>
            <span>•</span>
            <span>Jan 10, 2026</span>
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
                { id: "the-problem", label: "Growth vs Infrastructure" },
                { id: "case-study", label: "Case Study: Scaling" },
                { id: "framework", label: "The AICYRO Framework" },
                { id: "truths", label: "DevOps Truths" },
                { id: "takeaways", label: "Actionable Takeaways" },
                { id: "cta", label: "Scale Safely" },
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
              Here’s the hard truth founders discover under pressure:{" "}
              <strong className="text-[var(--primary)]">
                Speed without stability is risk. Stability without speed is
                death.
              </strong>
            </p>

            <p>
              Cloud and DevOps are no longer engineering choices — they are
              business survival systems.
            </p>

            {/* SECTION 1: The Problem */}
            <SectionHeading id="the-problem">
              The Problem: Growth Breaks Traditional Infrastructure
            </SectionHeading>
            <p>
              Most teams move to the cloud… and stop there. What happens next is
              a predictable cycle of friction.
            </p>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 my-6">
              <h4 className="font-bold text-amber-500 flex items-center gap-2 mb-2">
                <AlertTriangle size={18} /> The Scaling Trap
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-[var(--foreground-muted)]">
                <li>Manual deployments slow releases</li>
                <li>Downtime increases during traffic spikes</li>
                <li>Cloud costs spiral out of control</li>
                <li>Engineers become on-call firefighters</li>
              </ul>
            </div>
            <p>
              Founders experience this as missed SLAs, customer churn, and
              rising burn rate.
            </p>

            {/* SECTION 2: Case Study */}
            <SectionHeading id="case-study">
              A Real Story: When Scaling Exposed the Cracks
            </SectionHeading>
            <p>
              A SaaS company we worked with doubled users in six months. What
              broke first? Deployments took hours, rollbacks were manual and
              risky, and one bad release caused a 3-hour outage.
            </p>

            <HighlightBox title="The Rebuild" icon={Layers}>
              <p className="mb-4">
                We rebuilt their stack using cloud-native DevOps principles. We
                moved from manual ops to fully automated pipelines.
              </p>
              <div className="space-y-2 mt-4 pt-4 border-t border-[var(--border-color)]">
                <p className="text-[var(--foreground)] font-bold text-sm">
                  Results within 90 days:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Deployment time: Hours → Minutes
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Downtime reduced by 70%
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Costs stabilized despite growth
                  </div>
                </div>
              </div>
            </HighlightBox>
            <p className="italic text-sm">
              The cloud didn’t fail them — how they used it did.
            </p>

            {/* SECTION 3: The Framework */}
            <SectionHeading id="framework">
              Behind the Scenes: The AICYRO Cloud & DevOps Framework
            </SectionHeading>
            <p>
              To separate fast-scaling companies from stalled ones, we implement
              this 5-point architecture:
            </p>

            <div className="space-y-8 not-prose my-8">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Code />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    1. Infrastructure as Code (IaC)
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Cloud resources defined as code mean predictable
                    environments, no manual configuration drift, and fast
                    recovery.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <GitMerge />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    2. CI/CD Pipelines That Don’t Break Production
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Every change goes through automated testing and security
                    checks. Controlled deployments make shipping routine, not
                    risky.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Activity />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    3. Observability Over Guesswork
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Modern DevOps monitors Logs, Metrics, and Traces. Issues are
                    detected before customers even notice.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <DollarSign />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    4. Cloud Cost Intelligence
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    AI-driven cost controls right-size resources and eliminate
                    waste. Growth should increase revenue — not surprises on the
                    bill.
                  </p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <ShieldCheck />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    5. Built-In Security (DevSecOps)
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Security is automated via secrets management and
                    vulnerability scanning. Security becomes continuous, not
                    reactive.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 4: Truths */}
            <SectionHeading id="truths">
              What No One Tells You About Cloud & DevOps
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Moving to the cloud does not make you scalable
                  </span>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    DevOps tools alone don’t create DevOps culture
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Automation creates scalability
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Ownership creates culture
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Observability creates reliability
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
                "Treat infrastructure as code, not configuration",
                "Automate deployments before scaling teams",
                "Measure downtime and deployment frequency",
                "Build security into pipelines, not after incidents",
                "Track cloud cost as a first-class metric",
              ].map((item, i) => (
                <li
                  key={i}
                  className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)] text-sm text-[var(--foreground-muted)] flex items-start gap-3"
                >
                  <Terminal
                    className="text-[var(--primary)] shrink-0 mt-0.5"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-[var(--primary)]/5 rounded-lg border border-[var(--primary)]/10">
              <h4 className="font-bold text-[var(--foreground)] mb-2">
                Why Cloud & DevOps Is a Competitive Advantage
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-[var(--foreground-muted)]">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Faster product launches
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Higher reliability
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Predictable costs
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Happier engineering teams
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
                  Build Fast. Scale Safely.
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  To help companies scale without chaos, AICYRO helps you
                  operate intelligently. In 2026, Cloud & DevOps is your
                  operating system.
                </p>

                <div className="flex flex-col gap-4 max-w-lg mx-auto mb-8 text-left">
                  <div className="flex gap-3 items-center bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--primary)]/20">
                    <Rocket
                      className="text-[var(--primary)] shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-[var(--foreground)]">
                      <strong>Free Cloud & DevOps Assessment:</strong> See where
                      you stand.
                    </span>
                  </div>
                  <div className="flex gap-3 items-center bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--primary)]/20">
                    <Rocket
                      className="text-[var(--primary)] shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-[var(--foreground)]">
                      <strong>2026 Cloud Readiness Checklist:</strong> Prepare
                      for growth.
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                  <button  onClick={() => window.location.href = "/contact"}
                                      className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                    Book Architecture Consultation <ArrowRight size={18} />
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
                      Cloud Architects
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

export default BlogCloudDevOps;