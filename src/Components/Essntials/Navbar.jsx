import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Replace with your actual logo path
import Logo from "../../assets/logo.png";

// --- DATA BASE INTEGRATION ---
const weOfferData = {
  weOfferSection: {
    tagline: "WHAT WE OFFER",
    mainHeading: "Where Innovation Drives Results",
    description:
      "Aicyro Solutions delivers end-to-end services that help startups and enterprises scale. SaaS development creates market-ready products.",
    features: [
      {
        title: "SaaS development",
        description:
          "SaaS development at Aicyro Solutions helps startups launch MVPs in 30–45 days. We define scope through workshops, build in agile sprints, secure with VAPT testing, and deploy on cloud-first infrastructure.",
        icon: "code",
        image:
          "https://dummyimages.netlify.app/services/HDSaaS%20development.jpg",
        button: {
          text: "BUILD YOUR SAAS WITH US",
          link: "/services/saas-development",
          icon: "lightning",
        },
      },
      {
        title: "Cybersecurity & Data Protection",
        description:
          "Cybersecurity services at Aicyro Solutions protect systems before threats occur. We run vulnerability assessments, penetration testing, red teaming, and compliance audits. Our approach helps fintech, healthcare, SaaS, and enterprises pass audits and prevent breaches.",
        icon: "lock_globe",
        image:
          "https://dummyimages.netlify.app/services/HDCybersecurity%20&%20Data%20Protection.jpg",
        button: {
          text: "REQUEST A SECURITY AUDIT",
          link: "/services/cybersecurity-data-protection",
          icon: "lightning",
        },
      },
      {
        title: "AI Solutions",
        description:
          "AI solutions transform raw data into predictive insights. Our process starts with discovery workshops, moves into data preparation, and builds models trained on real business needs.",
        icon: "Bot",
        image:
          "https://dummyimages.netlify.app/services/HDAI%20Solutions%20.jpg",
        button: {
          text: "Schedule Consultation",
          link: "/services/ai-solutions",
          icon: "lightning",
        },
      },
      {
        title: "QA & Automation",
        description:
          "QA automation reduces bugs and improves software reliability. We begin with manual testing, build automation scripts, validate APIs, and run performance tests.",
        icon: "CircleCheckBig",
        image:
          "https://dummyimages.netlify.app/services/HDQA%20&%20Automation.jpg",
        button: {
          text: "Request A QA Demo",
          link: "/services/qa-automation",
          icon: "lightning",
        },
      },
      {
        title: "Cloud & DevOps",
        description:
          "Cloud and DevOps solutions improve speed, reliability, and cost optimization. We migrate applications to AWS, Azure, or GCP, set up CI/CD pipelines, integrate security, and build scalable architecture",
        icon: "CloudUpload",
        image:
          "https://dummyimages.netlify.app/services/HDCloud%20&%20DevOps.jpg",
        button: {
          text: "Talk to our DEVOPS Experts ",
          link: "/services/qa-automation",
          icon: "lightning",
        },
      },
      {
        title: "Web Development",
        description:
          "We build secure and scalable platforms tailored to your business needs — from backend systems to modern websites.",
        icon: "LayoutTemplate",
        image:
          "https://dummyimages.netlify.app/services/HDWeb%20Development.jpg",
        button: {
          text: "Lets Build Your Website",
          link: "/services/web-development",
          icon: "lightning",
        },
      },
      {
        title: "App Development",
        description:
          "Seamless Android and iOS apps designed for speed, usability, and long-term growth.",
        icon: "LayoutGrid",
        image:
          "https://dummyimages.netlify.app/services/HDWeb%20Development.jpg",
        button: {
          text: "Launch Your app today",
          link: "/services/app-development",
          icon: "lightning",
        },
      },
      {
        title: "Blockchain",
        description:
          "Innovative blockchain solutions, from smart contracts to decentralized applications, built for the future.",
        icon: "ChartColumnIncreasing",
        image: "https://dummyimages.netlify.app/services/HDBlockchain.jpg",
        button: {
          text: "Start Your Block Chain journey",
          link: "/services/blockchain",
          icon: "lightning",
        },
      },
    ],
  },
};

// --- UTILITY ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Helper to fetch image from Database based on title
const getServiceImage = (searchTitle) => {
  const feature = weOfferData.weOfferSection.features.find((f) =>
    f.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  return feature
    ? feature.image
    : "https://dummyimages.netlify.app/services/default.jpg";
};

// --- NEW COMPONENT: Hover Image ---
const HoverImage = ({ src, alt }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-[#0B0219]/80 z-10" />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transform group-hover/card:scale-110 transition-transform duration-700"
      />
    </div>
  );
};

// --- ANIMATED BACKGROUND COMPONENT ---
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none select-none">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0B0219] to-[#1a103c]" />
      <motion.div
        className="absolute inset-0 z-20 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4a4a6a 1px, transparent 1px),
            linear-gradient(to bottom, #4a4a6a 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        animate={{ y: [0, -40] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0B0219] via-transparent to-[#0B0219] opacity-40" />
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  const router = useRouter();
  const timeoutRef = useRef(null);

  // --- Handlers ---
  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleMobileSubMenu = (menuName) => {
    setMobileSubMenuOpen((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const linkBase = "transition duration-300 hover:text-[#8F8BF9]";

  // --- Navigation Data ---
  const navLinks = [
    { name: "Home", to: "/" },
    {
      name: "Services",
      to: "/services",
      subLinks: [
        {
          name: "SaaS Development",
          to: "/services/saas-development",
          desc: "Scalable cloud software.",
          image: getServiceImage("SaaS development"),
        },
        {
          name: "Cybersecurity",
          to: "/services/cybersecurity-data-protection",
          desc: "Protect your data.",
          image: getServiceImage("Cybersecurity"),
        },
        {
          name: "AI Solutions",
          to: "/services/ai-solutions",
          desc: "Intelligent automation.",
          image: getServiceImage("AI Solutions"),
        },
        {
          name: "QA & Automation",
          to: "/services/qa-automation",
          desc: "Bug-free deployment.",
          image: getServiceImage("QA & Automation"),
        },
        {
          name: "Cloud & DevOps",
          to: "/services/cloud-devops",
          desc: "Infrastructure management.",
          image: getServiceImage("Cloud & DevOps"),
        },
        {
          name: "Web Development",
          to: "/services/web-development",
          desc: "Modern frontend solutions.",
          image: getServiceImage("Web Development"),
        },
        {
          name: "App Development",
          to: "/services/app-development",
          desc: "iOS and Android apps.",
          image: getServiceImage("App Development"),
        },
        {
          name: "Blockchain",
          to: "/services/blockchain",
          desc: "Decentralized ledgers.",
          image: getServiceImage("Blockchain"),
        },
      ],
    },
    {
      name: "Portfolio",
      to: "/portfolio",
      sections: [
        {
          heading: "Advanced Analytics",
          subHeading: "AI & Blockchain",
          icon: (
            <svg
              className="w-5 h-5 text-[#8F8BF9]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          ),
          items: [
            { name: "Kaira - AI Coach", to: "/portfolio/kaira" },
            { name: "NYC Tourism", to: "/portfolio/nyctourism" },
            { name: "Go Grocer", to: "/portfolio/go" },
          ],
        },
        {
          heading: "App Security",
          subHeading: "Identity & Risk",
          icon: (
            <svg
              className="w-5 h-5 text-[#8F8BF9]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          ),
          items: [
            { name: "Shady Rays", to: "/portfolio/shady" },
            { name: "JBB & Associates", to: "/portfolio/jbb" },
            { name: "ZipZap", to: "/portfolio/zipzap" },
          ],
        },
        {
          heading: "Infrastructure",
          subHeading: "Network & Devices",
          icon: (
            <svg
              className="w-5 h-5 text-[#8F8BF9]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          ),
          items: [
            { name: "POLITICO Pro", to: "/portfolio/politico" },
            { name: "Cove.ai", to: "/portfolio/cove" },
            { name: "HPL Games", to: "/portfolio/hpl" },
          ],
        },
      ],
    },
    { name: "About", to: "/about" },
  ];

  const isActive = (path) => {
    if (!router?.pathname) return false;
    if (path === "/") return router.pathname === "/";
    return router.pathname.startsWith(path);
  };

  const ChevronIcon = ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <nav
      className={cn(
        // FIX APPLIED: Changed "fixed" to "absolute"
        // This keeps it at the top of the content, but it will scroll UP and disappear as you scroll down.
        "absolute top-0 inset-x-0 z-[9999] flex items-center justify-between py-5 px-4 md:px-12 lg:px-20 text-white border-b border-white/5 bg-[#0B0219] transition-all duration-300 ease-in-out"
      )}
    >
      {/* Logo */}
      <div className="flex items-center font-poppins z-50 relative">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          <Image src={Logo} alt="Company Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-6 lg:space-x-10 text-sm font-medium items-center">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="static"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              {link.subLinks || link.sections ? (
                <div>
                  <button
                    className={cn(
                      "flex items-center gap-1 py-4 transition-colors duration-200 focus:outline-none",
                      isActive(link.to) || activeDropdown === link.name
                        ? "text-[#8F8BF9]"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    <Link href={link.to}>{link.name}</Link>
                    <ChevronIcon
                      className={cn(
                        "w-3 h-3 transition-transform duration-300 text-white/50",
                        activeDropdown === link.name
                          ? "rotate-180 text-[#8F8BF9]"
                          : ""
                      )}
                    />
                  </button>

                  {/* === DROPDOWN MENU === */}
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[85px] left-0 w-full px-6 md:px-12 lg:px-20"
                      >
                        {/* Max width wrapper */}
                        <div className="max-w-7xl mx-auto">
                          <div className="relative rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden min-h-[300px]">
                            {/* --- BACKGROUND ANIMATION --- */}
                            <AnimatedGrid />

                            {/* --- CONTENT --- */}
                            <div className="relative z-30 px-10 py-10">
                              {link.sections ? (
                                // --- PORTFOLIO DESIGN ---
                                <div className="grid grid-cols-3 gap-10">
                                  {link.sections.map((section, idx) => (
                                    <div key={idx} className="flex flex-col">
                                      {/* Section Header */}
                                      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/20">
                                        <div className="p-2 bg-white/20 rounded-lg border border-white/10">
                                          {section.icon}
                                        </div>
                                        <div>
                                          <h3 className="text-white font-bold text-lg leading-tight">
                                            {section.heading}
                                          </h3>
                                          <p className="text-[#8F8BF9] text-[10px] font-bold uppercase tracking-widest mt-0.5">
                                            {section.subHeading}
                                          </p>
                                        </div>
                                      </div>

                                      {/* Card List Items */}
                                      <div className="flex flex-col gap-3">
                                        {section.items.map((item) => (
                                          <Link
                                            key={item.name}
                                            href={item.to}
                                            className="group/item flex items-center justify-between p-3.5 rounded-xl bg-[#0B041E] border border-white/5 hover:border-[#8F8BF9]/50 hover:bg-[#8F8BF9]/10 transition-all duration-300"
                                          >
                                            <span className="text-white text-sm font-medium tracking-wide group-hover/item:translate-x-1 transition-transform duration-300">
                                              {item.name}
                                            </span>
                                            <span className="text-[#8F8BF9]/70 group-hover/item:text-[#8F8BF9] transform translate-x-2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                              →
                                            </span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                // --- SERVICES / BLOGS DESIGN (WITH IMAGES) ---
                                <div className="grid grid-cols-4 gap-5">
                                  {link.subLinks.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.to}
                                      className="group/card relative block p-5 rounded-xl border border-white/10 bg-[#0B0219] hover:border-[#8F8BF9]/30 transition-all duration-500 shadow-lg overflow-hidden"
                                    >
                                      {/* --- IMAGE BACKGROUND --- */}
                                      {subItem.image && (
                                        <HoverImage
                                          src={subItem.image}
                                          alt={subItem.name}
                                        />
                                      )}

                                      {/* --- TEXT CONTENT (Z-20 to sit above image) --- */}
                                      <div className="relative z-20">
                                        <div className="mb-3">
                                          <h4 className="text-white text-sm font-bold group-hover/card:text-[#8F8BF9] transition-colors">
                                            {subItem.name}
                                          </h4>
                                        </div>
                                        <p className="text-gray-400 text-xs leading-relaxed group-hover/card:text-gray-200">
                                          {subItem.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={link.to}
                  className={cn(
                    "block py-4",
                    isActive(link.to)
                      ? "text-[#8F8BF9] font-medium"
                      : `text-white/90 hover:text-white ${linkBase}`
                  )}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="px-6 py-2.5 text-xs font-bold text-white tracking-wider uppercase rounded-full bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:shadow-[0_0_20px_rgba(121,115,219,0.5)] transition-all hover:-translate-y-0.5 inline-block text-center"
        >
          Contact us
        </Link>
      </div>

      {/* --- Mobile Menu --- */}
      <div className="md:hidden flex items-center gap-4 z-50">
        <button onClick={toggleMenu} className="text-white">
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden fixed top-0 left-0 w-full bg-[#0B0219] min-h-screen z-[9998] transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        )}
      >
        <div className="pt-24 px-8 pb-10 flex flex-col gap-4 overflow-y-auto h-screen">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-white/10 py-2">
              {link.subLinks || link.sections ? (
                <div onClick={() => toggleMobileSubMenu(link.name)}>
                  <div className="flex justify-between items-center text-white text-lg py-2">
                    <span>{link.name}</span>
                    <ChevronIcon
                      className={cn(
                        "w-4 h-4 transition-transform",
                        mobileSubMenuOpen[link.name] ? "rotate-180" : ""
                      )}
                    />
                  </div>
                  {mobileSubMenuOpen[link.name] && (
                    <div className="pl-4 pb-2 text-sm text-gray-400">
                      {link.sections
                        ? link.sections
                            .flatMap((s) => s.items)
                            .map((i) => (
                              <Link
                                key={i.name}
                                href={i.to}
                                className="block py-2"
                              >
                                {i.name}
                              </Link>
                            ))
                        : link.subLinks.map((s) => (
                            <Link
                              key={s.name}
                              href={s.to}
                              className="block py-2"
                            >
                              {s.name}
                            </Link>
                          ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.to}
                  onClick={toggleMenu}
                  className="block text-white text-lg py-2"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
