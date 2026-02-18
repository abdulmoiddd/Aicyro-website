
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- ASSETS ---
import Logo from "../../assets/logo.png";
import logoWhite from "../../assets/logowhite.png";

// --- ICONS ---
const SunIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

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
        // ADD YOUR LIGHT THEME IMAGE URL HERE
        imageLight:
          "https://dummyimages.netlify.app/services/light/SaaS.png",
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
        // ADD YOUR LIGHT THEME IMAGE URL HERE
        imageLight:
          "https://dummyimages.netlify.app/services/light/CyberSecurity%20and%20Data%20Protection.png",
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
        imageLight:
          "https://dummyimages.netlify.app/services/light/HDAI%20Solutions%201.png",
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
        imageLight:
          "https://dummyimages.netlify.app/services/light/QA%20and%20Autmation.png",
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
        imageLight:
          "https://dummyimages.netlify.app/services/light/Cloud%20and%20DevOps.png",
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
        imageLight:
          "https://dummyimages.netlify.app/services/light/Web%20Development.png",
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
        imageLight:
          "https://dummyimages.netlify.app/services/light/HD%20App%20Development.png",
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
        imageLight: "https://dummyimages.netlify.app/services/light/Block%20Chain.png",
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

// --- UPDATED HELPER FUNCTION ---
// Now accepts 'currentTheme' as the second argument
const getServiceImage = (searchTitle, currentTheme) => {
  const feature = weOfferData.weOfferSection.features.find((f) =>
    f.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  if (!feature) return "https://dummyimages.netlify.app/services/default.jpg";

  // If theme is 'light' and we have a specific light image, return that
  if (currentTheme === "light" && feature.imageLight) {
    return feature.imageLight;
  }

  // Otherwise return the default (dark theme) image
  return feature.image;
};

// --- COMPONENT: Hover Image ---
const HoverImage = ({ src, alt }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-[var(--background)]/80 z-10" />
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[var(--background)] to-transparent" />
      <motion.div
        className="absolute inset-0 z-20 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        animate={{ y: [0, -40] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)] opacity-40" />
    </div>
  );
};

// --- PIXEL-PERFECT ALIGNED THEME TOGGLE ---
const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <motion.div
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative flex h-10 w-20 cursor-pointer rounded-full p-[3px] transition-colors duration-300",
        "bg-[var(--foreground)]/10 backdrop-blur-md border border-[var(--border-color)]",
        "hover:border-[#8F8BF9]/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
      )}
      role="button"
      aria-label="Toggle Theme"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={cn(
          "h-8 w-8 rounded-full shadow-md z-10",
          "bg-[var(--background)] border",
          isDark ? "border-indigo-500/50" : "border-amber-500/50"
        )}
        animate={{
          x: isDark ? 40 : 0,
        }}
      />

      <div className="absolute inset-[3px] flex items-center justify-between z-20 pointer-events-none">
        <div className="flex items-center justify-center w-8 h-8">
          <motion.div
            initial={false}
            animate={{
              scale: isDark ? 0.6 : 1,
              opacity: isDark ? 0.5 : 1,
              rotate: isDark ? -45 : 0,
            }}
            className={cn(
              "transition-all duration-300",
              !isDark
                ? "text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                : "text-[var(--foreground)]/40"
            )}
          >
            <SunIcon className="w-5 h-5 fill-current" />
          </motion.div>
        </div>

        <div className="flex items-center justify-center w-8 h-8">
          <motion.div
            initial={false}
            animate={{
              scale: isDark ? 1 : 0.6,
              opacity: isDark ? 1 : 0.5,
              rotate: isDark ? 0 : 45,
            }}
            className={cn(
              "transition-all duration-300",
              isDark
                ? "text-[#8F8BF9] drop-shadow-[0_0_8px_rgba(143,139,249,0.8)]"
                : "text-[var(--foreground)]/40"
            )}
          >
            <MoonIcon className="w-5 h-5 fill-current" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  // --- THEME STATE ---
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const router = useRouter();
  const timeoutRef = useRef(null);

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
    setMobileSubMenuOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const linkBase = "transition duration-300 hover:text-[#8F8BF9]";

  // --- Navigation Data ---
  // Pass 'theme' to getServiceImage here
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
          image: getServiceImage("SaaS development", theme),
        },
        {
          name: "Cybersecurity",
          to: "/services/cybersecurity-data-protection",
          desc: "Protect your data.",
          image: getServiceImage("Cybersecurity", theme),
        },
        {
          name: "AI Solutions",
          to: "/services/ai-solutions",
          desc: "Intelligent automation.",
          image: getServiceImage("AI Solutions", theme),
        },
        {
          name: "QA & Automation",
          to: "/services/qa-automation",
          desc: "Bug-free deployment.",
          image: getServiceImage("QA & Automation", theme),
        },
        {
          name: "Cloud & DevOps",
          to: "/services/cloud-devops",
          desc: "Infrastructure management.",
          image: getServiceImage("Cloud & DevOps", theme),
        },
        {
          name: "Web Development",
          to: "/services/web-development",
          desc: "Modern frontend solutions.",
          image: getServiceImage("Web Development", theme),
        },
        {
          name: "App Development",
          to: "/services/app-development",
          desc: "iOS and Android apps.",
          image: getServiceImage("App Development", theme),
        },
        {
          name: "Blockchain",
          to: "/services/blockchain",
          desc: "Decentralized ledgers.",
          image: getServiceImage("Blockchain", theme),
        },
      ],
    },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Blogs", to: "/blogs" },
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
        "absolute top-0 inset-x-0 z-[9999] flex items-center justify-between py-5 px-4 md:px-12 lg:px-20",
        "bg-[var(--background)] border-b border-[var(--border-color)] text-[var(--foreground)]",
        "transition-all duration-300 ease-in-out"
      )}
    >
      <div className="flex items-center gap-4 font-poppins z-50 relative">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            // Main Logo logic (Light theme = White Logo, Dark theme = Dark Logo)
            src={theme === "light" ? logoWhite : Logo}
            alt="Company Logo"
            // ADD THIS LINE:
    priority 
    // width/height are auto-inferred from import, but 'priority' is key here
            className="h-10 w-auto transition-opacity duration-300"
          />
        </Link>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

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
                        : "text-[var(--foreground)]/90 hover:text-[var(--foreground)]"
                    )}
                  >
                    <Link href={link.to}>{link.name}</Link>
                    <ChevronIcon
                      className={cn(
                        "w-3 h-3 transition-transform duration-300 text-[var(--foreground)]/50",
                        activeDropdown === link.name
                          ? "rotate-180 text-[#8F8BF9]"
                          : ""
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[85px] left-0 w-full px-6 md:px-12 lg:px-20"
                      >
                        <div className="max-w-7xl mx-auto">
                          <div className="relative rounded-2xl border border-[var(--border-color)] shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden min-h-[300px] bg-[var(--background)]">
                            <AnimatedGrid />
                            <div className="relative z-30 px-10 py-10">
                              {link.sections ? (
                                <div className="grid grid-cols-3 gap-10"></div>
                              ) : (
                                <div className="grid grid-cols-4 gap-5">
                                  {link.subLinks.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.to}
                                      className="group/card relative block p-5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#8F8BF9]/30 transition-all duration-500 shadow-lg overflow-hidden"
                                    >
                                      {subItem.image && (
                                        <HoverImage
                                          src={subItem.image}
                                          alt={subItem.name}
                                        />
                                      )}
                                      <div className="relative z-20">
                                        <div className="mb-3">
                                          <h4 className="text-[var(--foreground)] text-sm font-bold group-hover/card:text-[#8F8BF9] transition-colors">
                                            {subItem.name}
                                          </h4>
                                        </div>
                                        <p className="text-[var(--foreground-muted)] text-xs leading-relaxed group-hover/card:text-[var(--foreground)]">
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
                      : `text-[var(--foreground)]/90 hover:text-[var(--foreground)] ${linkBase}`
                  )}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-2.5 text-xs font-bold text-white tracking-wider uppercase rounded-full bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:shadow-[0_0_20px_rgba(121,115,219,0.5)] transition-all hover:-translate-y-0.5 inline-block text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="md:hidden flex items-center gap-4 z-50">
        <button onClick={toggleMenu} className="text-[var(--foreground)]" aria-label="Toggle mobile menu">
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
          "md:hidden fixed top-0 left-0 w-full bg-[var(--background)] min-h-screen z-[9998] transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        )}
      >
        <div className="pt-24 px-8 pb-10 flex flex-col gap-4 overflow-y-auto h-screen text-[var(--foreground)]">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="border-b border-[var(--border-color)] py-2"
            >
              {link.subLinks || link.sections ? (
                <div onClick={() => toggleMobileSubMenu(link.name)}>
                  <div className="flex justify-between items-center text-lg py-2">
                    <span>{link.name}</span>
                    <ChevronIcon
                      className={cn(
                        "w-4 h-4 transition-transform",
                        mobileSubMenuOpen[link.name] ? "rotate-180" : ""
                      )}
                    />
                  </div>
                  {mobileSubMenuOpen[link.name] && (
                    <div className="pl-4 pb-2 text-sm text-[var(--foreground-muted)]">
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
                  className="block text-lg py-2"
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