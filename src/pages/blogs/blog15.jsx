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
  Coins,
  FileText,
  Lock,
  Globe,
  Scale,
  Database,
  Briefcase,
  Layers,
  Key,
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

const BlogRWA = () => {
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
            <Coins size={14} /> 2026 Blockchain Trends
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            Tokenization of Real-World Assets in 2026: The Blockchain Trend
            Quietly Reshaping Finance & Enterprise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            The AICYRO Deep Dive Into Real-World Asset (RWA) Tokenization.
          </motion.p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--foreground-muted)]/70">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]"></div>{" "}
              AICYRO Team
            </span>
            <span>•</span>
            <span>Jan 12, 2026</span>
            <span>•</span>
            <span>9 min read</span>
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
                { id: "the-problem", label: "The Liquidity Problem" },
                { id: "case-study", label: "Case Study: Settlement" },
                { id: "framework", label: "The AICYRO Framework" },
                { id: "truths", label: "Tokenization Truths" },
                { id: "takeaways", label: "Actionable Takeaways" },
                { id: "cta", label: "Tokenize Assets" },
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
              Here’s a hard truth founders and CTOs are starting to accept:{" "}
              <strong className="text-[var(--primary)]">
                Speculation didn’t unlock the blockchain's value. Utility did.
              </strong>
            </p>

            <p>
              In 2026, the fastest-growing blockchain use case isn’t NFTs or
              meme tokens — it’s tokenization of real-world assets (RWAs).
            </p>

            {/* SECTION 1: The Problem */}
            <SectionHeading id="the-problem">
              The Problem: Traditional Assets Are Slow, Locked, and Inefficient
            </SectionHeading>
            <p>
              Real-world assets like Real estate, Private equity, Invoices, and
              IP are trapped in systems that are paper-heavy, slow to settle,
              and hard to audit.
            </p>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 my-6">
              <h4 className="font-bold text-red-400 flex items-center gap-2 mb-2">
                <AlertOctagon size={18} /> Friction Points
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-[var(--foreground-muted)]">
                <li>Liquidity constraints</li>
                <li>High legal overhead</li>
                <li>Long settlement cycles</li>
                <li>Limited investor access</li>
              </ul>
            </div>

            {/* SECTION 2: Case Study */}
            <SectionHeading id="case-study">
              A Real Story: When Capital Was Locked for Months
            </SectionHeading>
            <p>
              A mid-market investment firm struggled to liquidate fractional
              real estate holdings. They faced 30–90 day settlement cycles and
              manual reconciliation disputes.
            </p>

            <HighlightBox title="The Solution" icon={Globe}>
              <p className="mb-4">
                We helped design a blockchain-based tokenization layer.
              </p>
              <div className="space-y-2 mt-4 pt-4 border-t border-[var(--border-color)]">
                <p className="text-[var(--foreground)] font-bold text-sm">
                  Results within 120 days:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Asset settlement reduced to
                    minutes
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Fractional ownership automated
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Real-time, immutable audit trails
                  </div>
                </div>
              </div>
            </HighlightBox>
            <p className="italic text-sm">
              Blockchain didn’t replace finance — it removed friction.
            </p>

            {/* SECTION 3: The Framework */}
            <SectionHeading id="framework">
              Behind the Scenes: The AICYRO RWA Framework
            </SectionHeading>
            <p>
              To turn real assets into programmable value, we use this 5-step
              framework:
            </p>

            <div className="space-y-8 not-prose my-8">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <FileText />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    1. Asset-Backed Smart Contracts
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Each asset is represented by legally mapped digital tokens.
                    Ownership rules and transfer conditions are embedded
                    directly into the code.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Database />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    2. Hybrid On-Chain / Off-Chain Architecture
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Critical data (ownership, transfers) lives on-chain.
                    Compliance data and documents live off-chain. This balances
                    performance with regulatory needs.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Scale />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    3. Built-In Compliance & Governance
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Tokenized assets include automated KYC/AML enforcement and
                    jurisdiction controls. Decentralization without chaos.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Layers />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    4. Liquidity & Fractionalization
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Assets can be fractionalized and traded programmatically.
                    Liquidity becomes a standard feature, not a privilege.
                  </p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Lock />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    5. Enterprise-Grade Security
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Security covers smart contract audits, key management, and
                    transaction monitoring. Trust is engineered, not assumed.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 4: Truths */}
            <SectionHeading id="truths">
              What No One Tells You About Asset Tokenization
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Tokenization is not just “minting tokens”
                  </span>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Public blockchains alone don’t solve compliance
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Legal + technical alignment matters
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Hybrid models win in enterprise adoption
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
                "Start with assets that suffer from liquidity friction",
                "Design legal mapping before writing smart contracts",
                "Use hybrid architectures for compliance and speed",
                "Automate governance rules inside tokens",
                "Measure success by settlement time, not hype",
              ].map((item, i) => (
                <li
                  key={i}
                  className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)] text-sm text-[var(--foreground-muted)] flex items-start gap-3"
                >
                  <Key
                    className="text-[var(--primary)] shrink-0 mt-0.5"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-[var(--primary)]/5 rounded-lg border border-[var(--primary)]/10">
              <h4 className="font-bold text-[var(--foreground)] mb-2">
                Why RWA Tokenization Is a Strategic Advantage
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-[var(--foreground-muted)]">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Faster capital movement
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Reduced intermediaries
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Real-time auditability
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Global investor access
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
                  Turn Real Assets Into Programmable Value
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  In 2026, tokenization is becoming financial infrastructure.
                  Let AICYRO help you tokenize securely and legally.
                </p>

                <div className="flex flex-col gap-4 max-w-lg mx-auto mb-8 text-left">
                  <div className="flex gap-3 items-center bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--primary)]/20">
                    <Briefcase
                      className="text-[var(--primary)] shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-[var(--foreground)]">
                      <strong>Free RWA Use-Case Assessment:</strong> Is your
                      asset ready?
                    </span>
                  </div>
                  <div className="flex gap-3 items-center bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--primary)]/20">
                    <FileText
                      className="text-[var(--primary)] shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-[var(--foreground)]">
                      <strong>Tokenization Readiness Checklist:</strong> The
                      2026 Edition.
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                  <button onClick={() => window.location.href = "/contact"}
                                      className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                    Book Blockchain Consultation <ArrowRight size={18} />
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
                      Blockchain Architects
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

export default BlogRWA;