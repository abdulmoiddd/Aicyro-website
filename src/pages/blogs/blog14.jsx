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
  Globe,
  Zap,
  Layout,
  Search,
  MousePointer,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  BarChart,
  Target,
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

const BlogWebDev = () => {
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
            <Globe size={14} /> 2026 Web Strategy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6"
          >
            Web Development in 2026: Why “Just a Website” Is No Longer a
            Business Strategy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--foreground-muted)] mb-8"
          >
            The AICYRO Framework for High-Performance, Conversion-Driven Web
            Platforms.
          </motion.p>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--foreground-muted)]/70">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--primary)]"></div>{" "}
              AICYRO Team
            </span>
            <span>•</span>
            <span>Jan 11, 2026</span>
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
                { id: "the-problem", label: "The Brochure Problem" },
                { id: "case-study", label: "Case Study: Conversion" },
                { id: "framework", label: "The AICYRO Framework" },
                { id: "truths", label: "Web Dev Truths" },
                { id: "takeaways", label: "Actionable Takeaways" },
                { id: "cta", label: "Build Smarter" },
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
              Here’s a hard truth founders don’t hear often:{" "}
              <strong className="text-[var(--primary)]">
                Websites don’t fail because they look bad. They fail because
                they don’t convert.
              </strong>
            </p>

            <p>
              In 2026, your website is not a brochure. It’s your sales engine,
              trust layer, and growth platform.
            </p>

            {/* SECTION 1: The Problem */}
            <SectionHeading id="the-problem">
              The Problem: Traditional Websites Don’t Drive Growth
            </SectionHeading>
            <p>
              Most companies still build websites that focus on visuals over
              performance, ignore user behavior data, and fail to guide visitors
              toward action.
            </p>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 my-6">
              <h4 className="font-bold text-amber-500 flex items-center gap-2 mb-2">
                <AlertTriangle size={18} /> The Founder's Pain
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-[var(--foreground-muted)]">
                <li>High traffic, low conversions</li>
                <li>Expensive paid ads with poor ROI</li>
                <li>Leads that don’t qualify</li>
                <li>Slow loading times on mobile</li>
              </ul>
            </div>

            {/* SECTION 2: Case Study */}
            <SectionHeading id="case-study">
              A Real Story: When Traffic Didn’t Turn Into Revenue
            </SectionHeading>
            <p>
              A B2B SaaS company came to us with strong SEO traffic but weak
              lead flow. We found no clear user journey, long load times, and
              generic messaging.
            </p>

            <HighlightBox title="The Rebuild" icon={TrendingUp}>
              <p className="mb-4">
                We rebuilt their platform using AI-powered, conversion-first web
                development principles.
              </p>
              <div className="space-y-2 mt-4 pt-4 border-t border-[var(--border-color)]">
                <p className="text-[var(--foreground)] font-bold text-sm">
                  Results in 90 days:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Bounce rate reduced by 48%
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Lead conversion increased by 2.6×
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Page load time under 2 seconds
                  </div>
                </div>
              </div>
            </HighlightBox>
            <p className="italic text-sm">
              The difference wasn’t design — it was intent.
            </p>

            {/* SECTION 3: The Framework */}
            <SectionHeading id="framework">
              Behind the Scenes: The AICYRO Web Development Framework
            </SectionHeading>
            <p>
              To build high-performance platforms, we focus on these 5 pillars:
            </p>

            <div className="space-y-8 not-prose my-8">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Zap />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    1. Performance-First Architecture
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    We build for speed using lightweight frameworks and
                    server-side rendering. Fast sites rank better and convert
                    more.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Sparkles />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    2. AI-Driven UX Personalization
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    AI adapts content based on visitor behavior and traffic
                    source. Every visitor sees the most relevant experience.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Search />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    3. SEO Built Into the Code
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    SEO is not an afterthought. We use clean semantic HTML and
                    structured data. Search engines reward technically sound
                    sites.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <MousePointer />
                </div>
                <div>
                  <h4 className="text-[var(--foreground)] font-bold">
                    4. Conversion-Focused Design
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Every page answers: Who is this for? What problem do we
                    solve? Design serves business goals — not ego.
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
                    5. Secure & Scalable Foundations
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    Websites must be secure by default and cloud-ready. Growth
                    should never break your platform.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 4: Truths */}
            <SectionHeading id="truths">
              What No One Tells You About Web Development
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Fancy animations don’t equal engagement
                  </span>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    More pages don’t mean more leads
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Clarity converts
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Speed builds trust
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-[var(--foreground-muted)]">
                    Structure drives action
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
                "Treat your website as a growth system, not a project",
                "Optimize performance before adding features",
                "Build SEO into architecture, not content only",
                "Use AI to personalize user journeys",
                "Design every page around one clear action",
              ].map((item, i) => (
                <li
                  key={i}
                  className="bg-[var(--card-bg)] p-4 rounded-lg border border-[var(--border-color)] text-sm text-[var(--foreground-muted)] flex items-start gap-3"
                >
                  <Target
                    className="text-[var(--primary)] shrink-0 mt-0.5"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-[var(--primary)]/5 rounded-lg border border-[var(--primary)]/10">
              <h4 className="font-bold text-[var(--foreground)] mb-2">
                Why Modern Web Dev Is a Competitive Advantage
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-[var(--foreground-muted)]">
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Higher conversions
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Lower acquisition costs
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Stronger brand credibility
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-[var(--primary)]" />{" "}
                  Scalable growth
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
                  Turn Your Website Into a Growth Engine
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  In 2026, your website is your best salesperson. Let AICYRO
                  help you build smarter and convert faster.
                </p>

                <div className="flex flex-col gap-4 max-w-lg mx-auto mb-8 text-left">
                  <div className="flex gap-3 items-center bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--primary)]/20">
                    <BarChart
                      className="text-[var(--primary)] shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-[var(--foreground)]">
                      <strong>Free Website Performance Audit:</strong> Check
                      your speed & SEO.
                    </span>
                  </div>
                  <div className="flex gap-3 items-center bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--primary)]/20">
                    <Layout
                      className="text-[var(--primary)] shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-[var(--foreground)]">
                      <strong>Conversion Optimization Checklist:</strong> The
                      2026 Edition.
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                  <button onClick={() => window.location.href = "/contact"}
                                      className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                    Book Web Strategy Consultation <ArrowRight size={18} />
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
                      Web Strategies
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

export default BlogWebDev;