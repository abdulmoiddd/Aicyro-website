import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../Components/Essntials/Navbar";
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";

const SitemapPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Page structure data
  const pages = {
    main: [
      { name: "Home", url: "/", description: "Aicyro Solutions homepage" },
      { name: "About", url: "/about", description: "Learn about Aicyro Solutions" },
      { name: "Services", url: "/services", description: "Our service offerings" },
      { name: "Portfolio", url: "/portfolio", description: "Our project portfolio" },
      { name: "Blogs", url: "/blogs", description: "Latest insights and articles" },
      { name: "Contact", url: "/contact", description: "Get in touch with us" },
    ],
    services: [
      {
        name: "SaaS Development",
        url: "/services/saas-development",
        description: "Scalable SaaS products with security built-in.",
      },
      {
        name: "Cybersecurity & Data Protection",
        url: "/services/cybersecurity-data-protection",
        description: "Cyber security experts for data protection and compliance.",
      },
      {
        name: "AI Solutions",
        url: "/services/ai-solutions",
        description: "Artificial Intelligence and Machine Learning solutions.",
      },
      {
        name: "Cloud & DevOps",
        url: "/services/cloud-devops",
        description: "Cloud infrastructure, CI/CD, and platform reliability.",
      },
      {
        name: "App Development",
        url: "/services/app-development",
        description: "Mobile application design and development.",
      },
      {
        name: "Web Development",
        url: "/services/web-development",
        description: "Modern web applications with secure architectures.",
      },
      {
        name: "Blockchain",
        url: "/services/blockchain",
        description: "Decentralized solutions and smart contracts.",
      },
      {
        name: "QA & Automation",
        url: "/services/qa-automation",
        description: "Automated testing and quality engineering.",
      },
    ],
    portfolio: [
      { name: "AI Tutor", url: "/portfolio/aitutor", description: "AI-powered educational platform." },
      { name: "AutoScholar", url: "/portfolio/autoscholor", description: "Scholarship management automation." },
      { name: "Body Language", url: "/portfolio/bodylanguage", description: "Behavioral analysis system." },
      { name: "Cove.ai", url: "/portfolio/cove", description: "Visual AI collaboration workspace." },
      { name: "Go Grocer", url: "/portfolio/go", description: "On-demand grocery and delivery." },
      { name: "Health Analyser", url: "/portfolio/healthanalyser", description: "Medical data analysis tool." },
      { name: "HPL Games", url: "/portfolio/hpl", description: "Gaming and engagement platform." },
      { name: "JBB & Associates", url: "/portfolio/jbb", description: "CPA & business advisory platform." },
      { name: "Kaira", url: "/portfolio/kaira", description: "AI financial wellness coach." },
      { name: "NYC Tourism", url: "/portfolio/nyctourism", description: "Tourism experience platform." },
      { name: "POLITICO Pro", url: "/portfolio/politico", description: "Policy intelligence platform." },
      { name: "Robotics", url: "/portfolio/robotics", description: "Robotics and automation showcase." },
      { name: "Sale Automation", url: "/portfolio/saleautomation", description: "Sales workflow automation." },
      { name: "Shady Rays", url: "/portfolio/shady", description: "High-performance eyewear ecommerce." },
      { name: "ZipZap", url: "/portfolio/zipzap", description: "Payments and finance experience." },
    ],
    blogs: [
      { name: "Blog 1", url: "/blogs/aivsmanual", description: "Comparing automated AI versus manual processes." },
      { name: "Blog 2", url: "/blogs/blog", description: "General updates and news." },
      { name: "Blog 3", url: "/blogs/blog3", description: "Insights on technology trends." },
      { name: "Blog 4", url: "/blogs/blog4", description: "Development best practices." },
      { name: "Blog 5", url: "/blogs/blog5", description: "Cybersecurity tips." },
      { name: "Blog 6", url: "/blogs/blog6", description: "Industry case studies." },
      { name: "Blog 7", url: "/blogs/blog7", description: "Digital transformation strategies." },
      { name: "Blog 8", url: "/blogs/blog8", description: "Cloud computing advances." },
      { name: "Blog 9", url: "/blogs/blog11", description: "Future of SaaS." },
      { name: "Blog 10", url: "/blogs/blog12", description: "Data privacy essentials." },
      { name: "Blog 11", url: "/blogs/blog13", description: "Tech stack comparisons." },
      { name: "Blog 12", url: "/blogs/blog14", description: "Agile methodologies." },
      { name: "Blog 13", url: "/blogs/blog15", description: "Startup growth hacks." },
      { name: "Blog 14", url: "/blogs/blog16", description: "Latest company announcements." },
    ],
    legal: [
      { name: "Privacy Policy", url: "/privacy", description: "How we handle your data." },
      { name: "Terms of Service", url: "/terms", description: "Rules for using our services." },
    ]
  };

  return (
    // UPDATED: Background and text color variables
    <div className="bg-[var(--background)] min-h-screen flex flex-col transition-colors duration-300">
      <Seo
        title="Sitemap | Aicyro Solutions"
        description="Complete HTML sitemap of Aicyro Solutions. SaaS development, cybersecurity, AI solutions, portfolio, and contact pages at aicyro.com."
        url="/sitemap"
        keywords="SaaS development company sitemap, cyber security experts sitemap, Aicyro Solutions sitemap"
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.main
        className="flex-grow pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            {/* UPDATED: Text color */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[var(--foreground)]">
              Sitemap
            </h1>
            {/* UPDATED: Muted Text and Accent color */}
            <p className="text-lg sm:text-xl text-[var(--foreground-muted)]/80 max-w-2xl mx-auto">
              Aicyro Solutions · <span className="text-[var(--secondary)]">aicyro.com</span>
            </p>
          </motion.div>

          {/* Main Pages Section */}
          <motion.section variants={itemVariants} className="mb-12">
            {/* UPDATED: Card background and border */}
            <div className="bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
              {/* UPDATED: Section Header Color */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-blue)] mb-6">
                Main
              </h2>
              <ul className="space-y-3">
                {pages.main.map((page) => (
                  <li key={page.url}>
                    <Link
                      href={page.url}
                      className="group flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg hover:bg-[var(--background)]/50 transition-colors duration-200"
                    >
                      {/* UPDATED: Link Text Color */}
                      <span className="text-[var(--foreground)] font-medium group-hover:text-[var(--primary)] transition-colors">
                        {page.name}
                      </span>
                      <span className="text-sm text-[var(--foreground-muted)] hidden sm:inline">•</span>
                      <span className="text-sm text-[var(--foreground-muted)]">{page.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-blue)] mb-6">
                Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pages.services.map((service) => (
                  <Link
                    key={service.url}
                    href={service.url}
                    // UPDATED: Border Color Hover
                    className="group p-4 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent-blue)]/50 hover:bg-[var(--background)]/50 transition-all duration-200"
                  >
                    <h3 className="text-[var(--foreground)] font-semibold mb-1 group-hover:text-[var(--primary)] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)]">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Portfolio Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-blue)] mb-6">
                Portfolio
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pages.portfolio.map((project) => (
                  <Link
                    key={project.url}
                    href={project.url}
                    className="group p-4 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent-blue)]/50 hover:bg-[var(--background)]/50 transition-all duration-200"
                  >
                    <h3 className="text-[var(--foreground)] font-semibold mb-1 group-hover:text-[var(--primary)] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)]">{project.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Blogs Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-blue)] mb-6">
                Blogs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pages.blogs.map((blog) => (
                  <Link
                    key={blog.url}
                    href={blog.url}
                    className="group p-4 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent-blue)]/50 hover:bg-[var(--background)]/50 transition-all duration-200"
                  >
                    <h3 className="text-[var(--foreground)] font-semibold mb-1 group-hover:text-[var(--primary)] transition-colors truncate">
                      {blog.name}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)] truncate">{blog.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Legal Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-blue)] mb-6">
                Legal
              </h2>
              <ul className="space-y-3">
                {pages.legal.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      className="group flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg hover:bg-[var(--background)]/50 transition-colors duration-200"
                    >
                      <span className="text-[var(--foreground)] font-medium group-hover:text-[var(--primary)] transition-colors">
                        {item.name}
                      </span>
                      <span className="text-sm text-[var(--foreground-muted)] hidden sm:inline">•</span>
                      <span className="text-sm text-[var(--foreground-muted)]">{item.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* XML & HTML Sitemap Links */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-2xl p-6">
              <p className="text-[var(--foreground-muted)] mb-4">
                Sitemap formats
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/sitemap.xml"
                  // UPDATED: Link colors
                  className="inline-flex items-center gap-2 text-[var(--accent-blue)] hover:text-[var(--primary)] transition-colors font-medium"
                >
                  <span>XML Sitemap</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
                <Link
                  href="/sitemap"
                  className="inline-flex items-center gap-2 text-[var(--accent-blue)] hover:text-[var(--primary)] transition-colors font-medium"
                >
                  <span>Interactive Sitemap</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* UPDATED: Glow colors using variables */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30vw] h-[30vw] bg-[var(--secondary)]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35vw] h-[35vw] bg-[var(--accent-blue)]/10 rounded-full blur-[120px]" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SitemapPage;