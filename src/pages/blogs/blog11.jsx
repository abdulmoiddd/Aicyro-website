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
  AlertTriangle,
  Cpu,
  Briefcase,
  MessageSquare,
  DollarSign,
  Users,
  Zap,
  TrendingUp,
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

const BlogBusinessTools = () => {
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
            <Cpu size={14} /> 2025 Business Efficiency Guide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            5 Must-Have Tools to Streamline Your Business Tasks in 2025
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            The hard truth: Most businesses waste hours every day on repetitive
            tasks — here’s how to fix it.
          </motion.p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--foreground-muted)]/70">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]"></div>{" "}
              AICYRO Team
            </span>
            <span>•</span>
            <span>Jan 8, 2026</span>
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
                { id: "project-management", label: "Project Management" },
                { id: "communication", label: "Communication" },
                { id: "accounting", label: "Finance & Accounting" },
                { id: "crm-sales", label: "CRM & Sales" },
                { id: "workflow", label: "Workflow Automation" },
                { id: "cta", label: "Next Steps" },
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
              Running a business today isn’t about doing more work — it’s about
              doing the right work efficiently.
            </p>

            <div className="my-8">
              <p className="mb-4">The pain founders feel:</p>
              <ul className="space-y-3 not-prose">
                {[
                  "Teams spend too much time on repetitive tasks",
                  "Projects get delayed because of miscommunication",
                  "Finance and sales processes are slow and error-prone",
                  "Operations don’t scale without adding headcount",
                ].map((pain, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle
                      className="text-amber-500 mt-1 shrink-0"
                      size={18}
                    />
                    <span className="text-[var(--foreground-muted)]">
                      {pain}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              The solution? A stack of intelligent tools designed to automate,
              optimize, and streamline business operations. Here’s a deep dive
              into the 5 must-have tools every founder should use in 2025.
            </p>

            {/* SECTION 1: Project Management */}
            <SectionHeading id="project-management">
              1. AI-Powered Project Management
            </SectionHeading>
            <p>
              <strong className="text-[var(--foreground)]">Hook:</strong>{" "}
              Projects fail when tasks slip through the cracks — AI ensures they
              don’t.
            </p>
            <p>
              Traditional project management tools track tasks but don’t predict
              delays or optimize workflows. Teams spend hours in meetings just
              to stay aligned.
            </p>

            <HighlightBox title="Real-World Impact" icon={TrendingUp}>
              <p className="mb-2">
                At high-growth startups, founders reported that shifting to
                AI-driven PM tools{" "}
                <strong className="text-[var(--foreground)]">
                  reduced project delays by 35–40%
                </strong>{" "}
                in just 3 months.
              </p>
            </HighlightBox>

            <div className="bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--border-color)] my-6">
              <div className="flex items-center gap-3 mb-4 text-[var(--primary)]">
                <Briefcase size={20} />
                <h4 className="font-bold uppercase text-sm tracking-wide">
                  Top Tools
                </h4>
              </div>
              <p className="text-[var(--foreground)] font-medium mb-2">
                ClickUp AI, Monday.com Work OS, Asana AI
              </p>
              <p className="text-sm">
                Features: Predictive task prioritization, resource allocation,
                risk alerts, dashboards.
              </p>
            </div>

            <p>
              <strong className="text-[var(--foreground)]">Takeaway:</strong>{" "}
              Replace manual planning with AI-assisted scheduling and watch your
              team deliver faster.
            </p>

            {/* SECTION 2: Communication */}
            <SectionHeading id="communication">
              2. Intelligent Communication
            </SectionHeading>
            <p>
              <strong className="text-[var(--foreground)]">Hook:</strong>{" "}
              Miscommunication is the silent killer of productivity.
            </p>
            <p>
              Founders see teams drowning in chat threads, emails, and meetings
              — losing hours daily.
            </p>

            <HighlightBox title="Efficiency Gain" icon={MessageSquare}>
              <p>
                Companies using AI-enhanced collaboration tools{" "}
                <strong className="text-[var(--foreground)]">
                  reduced meeting time by 25–30%
                </strong>{" "}
                while increasing task completion rates.
              </p>
            </HighlightBox>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {[
                "Slack GPT",
                "Microsoft Teams Copilot",
                "Notion AI",
                "AI Meeting Summaries",
              ].map((item, i) => (
                <li
                  key={i}
                  className="bg-[var(--card-bg)] p-3 rounded-lg border border-[var(--border-color)] text-sm text-[var(--foreground-muted)] flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></div>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              <strong className="text-[var(--foreground)]">Takeaway:</strong> AI
              keeps your team aligned without manual follow-ups.
            </p>

            {/* SECTION 3: Accounting */}
            <SectionHeading id="accounting">
              3. Automated Accounting & Finance
            </SectionHeading>
            <p>
              <strong className="text-[var(--foreground)]">Hook:</strong>{" "}
              Financial errors can sink a business before growth starts.
            </p>
            <p>
              Manual bookkeeping, reconciliations, and expense tracking waste
              time and create mistakes.
            </p>

            <HighlightBox title="Cost Savings" icon={DollarSign}>
              <p>
                Startups using AI-powered accounting platforms cut month-end
                closing time by{" "}
                <strong className="text-[var(--foreground)]">50%</strong> and
                eliminated over 90% of recurring errors.
              </p>
            </HighlightBox>

            <p>
              <strong className="text-[var(--foreground)]">
                Tools to Watch:
              </strong>{" "}
              QuickBooks AI, Xero AI, Zoho Books AI. These automate invoicing,
              cash flow forecasting, and fraud detection.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Takeaway:</strong>{" "}
              Automate finance operations to free your team for strategy, not
              manual entry.
            </p>

            {/* SECTION 4: CRM */}
            <SectionHeading id="crm-sales">
              4. CRM & Sales Automation
            </SectionHeading>
            <p>
              <strong className="text-[var(--foreground)]">Hook:</strong> Leads
              don’t wait — your follow-ups can’t lag.
            </p>
            <p>
              Sales teams struggle to prioritize leads and nurture them
              efficiently, costing missed revenue opportunities.
            </p>

            <HighlightBox title="Revenue Boost" icon={Users}>
              <p>
                Companies integrating AI-driven CRMs increased conversion rates
                by{" "}
                <strong className="text-[var(--foreground)]">20–35%</strong>,
                using predictive lead scoring and automated workflows.
              </p>
            </HighlightBox>

            <p>
              Using tools like HubSpot AI, Salesforce Einstein, or Pipedrive AI
              allows for pipeline forecasting and automated follow-ups.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Takeaway:</strong>{" "}
              Use AI to make your sales team smarter, faster, and more precise.
            </p>

            {/* SECTION 5: Workflow Automation */}
            <SectionHeading id="workflow">
              5. Workflow Automation & Integration
            </SectionHeading>
            <p>
              <strong className="text-[var(--foreground)]">Hook:</strong> Manual
              integration kills efficiency — AI automates it.
            </p>
            <p>
              Companies lose hours moving data between tools, repeating
              processes, and monitoring workflows manually.
            </p>

            <HighlightBox title="Operational Scale" icon={Zap}>
              <p>
                Businesses using Zapier or Make.com automated{" "}
                <strong className="text-[var(--foreground)]">80–90%</strong> of
                cross-app workflows, reducing operational delays and human
                error.
              </p>
            </HighlightBox>

            <p>
              <strong className="text-[var(--foreground)]">Takeaway:</strong>{" "}
              Connect your apps, automate repetitive workflows, and focus on
              high-value tasks.
            </p>

            {/* CTA SECTION */}
            <div
              id="cta"
              className="not-prose mt-16 p-8 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-blue-900/20 border border-[var(--primary)]/30 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                  Next Steps for Founders
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  Modern businesses don’t have time for inefficiency. The right
                  tool stack makes operations faster, smarter, and scalable.
                </p>

                <div className="flex flex-col gap-4 max-w-lg mx-auto mb-8 text-left">
                  <div className="flex gap-3 items-center bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--primary)]/20">
                    <CheckCircle
                      className="text-[var(--primary)] shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-[var(--foreground)]">
                      <strong>Free AI Operations Readiness Audit:</strong>{" "}
                      Identify automation opportunities.
                    </span>
                  </div>
                  <div className="flex gap-3 items-center bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--primary)]/20">
                    <CheckCircle
                      className="text-[var(--primary)] shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-[var(--foreground)]">
                      <strong>Download:</strong> “2025 Business Automation
                      Playbook”
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                  <button onClick={() => window.location.href = "/contact"}
                                      className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                    Book a Strategy Call <ArrowRight size={18} />
                  </button>
                </div>

                <p className="mt-6 text-xs text-[var(--foreground-muted)] uppercase tracking-widest">
                  Your business doesn’t have to work harder — it has to work
                  smarter.
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
                      Business Analysts
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

export default BlogBusinessTools;