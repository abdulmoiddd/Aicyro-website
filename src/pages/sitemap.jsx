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
      { name: "About Us", url: "/about", description: "Learn about Aicyro Solutions" },
      { name: "Services", url: "/services", description: "Our service offerings" },
      { name: "Portfolio", url: "/portfolio", description: "Our project portfolio" },
      { name: "Contact", url: "/contact", description: "Get in touch with us" },
      { name: "Sitemap", url: "/sitemap", description: "All site links in one place" },
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
      { name: "Cove.ai", url: "/portfolio/cove", description: "Visual AI collaboration workspace." },
      { name: "Go Grocer", url: "/portfolio/go", description: "On-demand grocery and delivery." },
      { name: "HPL Games", url: "/portfolio/hpl", description: "Gaming and engagement platform." },
      { name: "JBB & Associates", url: "/portfolio/jbb", description: "CPA & business advisory platform." },
      { name: "Kaira", url: "/portfolio/kaira", description: "AI financial wellness coach." },
      { name: "NYC Tourism", url: "/portfolio/nyctourism", description: "Tourism experience platform." },
      { name: "POLITICO Pro", url: "/portfolio/politico", description: "Policy intelligence platform." },
      { name: "Shady Rays", url: "/portfolio/shady", description: "High-performance eyewear ecommerce." },
      { name: "ZipZap", url: "/portfolio/zipzap", description: "Payments and finance experience." },
    ],
  };

  return (
    <div className="bg-[#0B0219] min-h-screen flex flex-col">
      <Seo
        title="Sitemap"
        description="Complete sitemap of Aicyro Solutions. SaaS development company and cyber security experts with services, portfolio, and contact pages."
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
              Site Map
            </h1>
            <p className="text-lg sm:text-xl text-gray-300/80 max-w-2xl mx-auto">
              Navigate through all pages and sections of our website
            </p>
          </motion.div>

          {/* Main Pages Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#677ED6] mb-6">
                Main Pages
              </h2>
              <ul className="space-y-3">
                {pages.main.map((page) => (
                  <li key={page.url}>
                    <Link
                      href={page.url}
                      className="group flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    >
                      <span className="text-white font-medium group-hover:text-[#8F8BF9] transition-colors">
                        {page.name}
                      </span>
                      <span className="text-sm text-gray-400 hidden sm:inline">•</span>
                      <span className="text-sm text-gray-400">{page.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#677ED6] mb-6">
                Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pages.services.map((service) => (
                  <Link
                    key={service.url}
                    href={service.url}
                    className="group p-4 rounded-lg border border-white/10 hover:border-[#677ED6]/50 hover:bg-white/5 transition-all duration-200"
                  >
                    <h3 className="text-white font-semibold mb-1 group-hover:text-[#8F8BF9] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Portfolio Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#677ED6] mb-6">
                Portfolio Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pages.portfolio.map((project) => (
                  <Link
                    key={project.url}
                    href={project.url}
                    className="group p-4 rounded-lg border border-white/10 hover:border-[#677ED6]/50 hover:bg-white/5 transition-all duration-200"
                  >
                    <h3 className="text-white font-semibold mb-1 group-hover:text-[#8F8BF9] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>

          {/* XML Sitemap Link */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-gray-400 mb-4">
                Looking for the XML sitemap for search engines?
              </p>
              <Link
                href="/sitemap.xml"
                className="inline-flex items-center gap-2 text-[#677ED6] hover:text-[#8F8BF9] transition-colors font-medium"
              >
                <span>View XML Sitemap</span>
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
            </div>
          </motion.div>
        </div>
      </motion.main>

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35vw] h-[35vw] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SitemapPage;

