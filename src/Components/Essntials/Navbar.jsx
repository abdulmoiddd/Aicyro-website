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

const getServiceImage = (searchTitle) => {
  const feature = weOfferData.weOfferSection.features.find((f) =>
    f.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  return feature
    ? feature.image
    : "https://dummyimages.netlify.app/services/default.jpg";
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

// --- UPDATED THEME TOGGLE (SYNCED COLORS) ---
// const ThemeToggle = ({ theme, toggleTheme }) => {
//   return (
//     <div
//       onClick={toggleTheme}
//       // Container: Uses foreground with low opacity for track, and border-color for definition
//       className={cn(
//         "relative flex w-20 h-10 items-center rounded-full p-1 cursor-pointer transition-all duration-300",
//         "bg-[var(--foreground)]/5 border border-[var(--border-color)] hover:border-[#8F8BF9]/50"
//       )}
//       role="button"
//       aria-label="Toggle Theme"
//     >
//       {/* Sliding Thumb: Uses main background color to look like a cutout/button */}
//       <motion.div
//         layout
//         transition={{ type: "spring", stiffness: 700, damping: 30 }}
//         className={cn(
//           "absolute h-8 w-8 rounded-full shadow-sm z-10",
//           "bg-[var(--background)] border border-[var(--border-color)]"
//         )}
//         animate={{
//           x: theme === "dark" ? 40 : 0,
//         }}
//       />

//       {/* Icons Layer */}
//       <div className="flex w-full justify-between items-center px-2 z-20">
//         {/* Sun Icon (Light Mode) */}
//         <div
//           className={cn(
//             "flex items-center justify-center w-5 h-5 transition-colors duration-300",
//             // If theme is light, this icon is Active (foreground color). If dark, it's inactive (faded).
//             theme === "light"
//               ? "text-[var(--foreground)]"
//               : "text-[var(--foreground)]/40"
//           )}
//         >
//           <SunIcon className="w-5 h-5" />
//         </div>

//         {/* Moon Icon (Dark Mode) */}
//         <div
//           className={cn(
//             "flex items-center justify-center w-5 h-5 transition-colors duration-300",
//             // If theme is dark, this icon is Active (foreground color). If light, it's inactive (faded).
//             theme === "dark"
//               ? "text-[var(--foreground)]"
//               : "text-[var(--foreground)]/40"
//           )}
//         >
//           <MoonIcon className="w-5 h-5" />
//         </div>
//       </div>
//     </div>
//   );
// };

// --- UPDATED THEME TOGGLE (Professional Segmented Look) ---
// const ThemeToggle = ({ theme, toggleTheme }) => {
//   const isDark = theme === "dark";

//   return (
//     <div
//       onClick={toggleTheme}
//       className={cn(
//         "relative flex w-20 h-10 items-center rounded-full p-1 cursor-pointer transition-all duration-300",
//         // Track Styling: Uses shadow-inner for depth and distinct borders for day/night
//         "bg-gray-200 dark:bg-[#0f172a] border border-gray-300 dark:border-gray-700 shadow-inner hover:border-[#8F8BF9]/50"
//       )}
//       role="button"
//       aria-label="Toggle Theme"
//     >
//       {/* Sliding Background Pill (The "Thumb" sits BEHIND the active icon) */}
//       <motion.div
//         layout
//         transition={{ type: "spring", stiffness: 400, damping: 30 }}
//         className={cn(
//           "absolute top-1 bottom-1 w-[34px] rounded-full shadow-sm z-0",
//           "bg-white dark:bg-slate-700"
//         )}
//         animate={{
//           // Slides to the right for dark mode, stays left for light
//           x: isDark ? 38 : 0,
//         }}
//       />

//       {/* Icons Container */}
//       <div className="flex w-full justify-between items-center z-10 px-1.5">
//         {/* Sun Icon (Left) */}
//         <div className="flex items-center justify-center w-8 h-8">
//           <motion.div
//             animate={{
//               rotate: isDark ? -90 : 0,
//               scale: isDark ? 0.8 : 1,
//               opacity: isDark ? 0.5 : 1,
//             }}
//             transition={{ duration: 0.2 }}
//             className={cn(
//               "transition-colors duration-300",
//               // Active: Amber, Inactive: Muted Gray
//               !isDark
//                 ? "text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
//                 : "text-gray-500"
//             )}
//           >
//             <SunIcon className="w-5 h-5" />
//           </motion.div>
//         </div>

//         {/* Moon Icon (Right) */}
//         <div className="flex items-center justify-center w-8 h-8">
//           <motion.div
//             animate={{
//               rotate: isDark ? 0 : 90,
//               scale: isDark ? 1 : 0.8,
//               opacity: isDark ? 1 : 0.5,
//             }}
//             transition={{ duration: 0.2 }}
//             className={cn(
//               "transition-colors duration-300",
//               // Active: Indigo/Blue, Inactive: Muted Gray
//               isDark
//                 ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]"
//                 : "text-gray-500"
//             )}
//           >
//             <MoonIcon className="w-5 h-5" />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// --- UPDATED THEME TOGGLE (Synced & High-End) ---
// const ThemeToggle = ({ theme, toggleTheme }) => {
//   const isDark = theme === "dark";

//   return (
//     <motion.div
//       onClick={toggleTheme}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className={cn(
//         "relative flex w-20 h-10 items-center rounded-full p-1 cursor-pointer transition-colors duration-300",
//         // TRACK STYLING:
//         // 1. Uses your CSS variables with opacity for perfect sync.
//         // 2. Adds a backdrop blur for that modern 'glass' feel.
//         // 3. Adds a subtle border that matches your navbar border.
//         "bg-[var(--foreground)]/10 backdrop-blur-md border border-[var(--border-color)]",
//         "hover:border-[#8F8BF9]/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
//       )}
//       role="button"
//       aria-label="Toggle Theme"
//     >
//       {/* --- SLIDING THUMB --- */}
//       <motion.div
//         layout
//         transition={{ type: "spring", stiffness: 500, damping: 30 }}
//         className={cn(
//           "absolute top-1 bottom-1 w-8 rounded-full shadow-md z-10",
//           // THUMB COLOR:
//           // Uses your main background color to look like a physical button sitting on the track.
//           // Adds a colored border glow based on the theme.
//           "bg-[var(--background)] border",
//           isDark ? "border-indigo-500/50" : "border-amber-500/50"
//         )}
//         animate={{
//           x: isDark ? 42 : 0, // Adjusted positioning for perfect fit
//         }}
//       />

//       {/* --- ICONS CONTAINER --- */}
//       <div className="flex w-full justify-between items-center z-20 px-1">
//         {/* SUN ICON */}
//         <div className="flex items-center justify-center w-8 h-8">
//           <motion.div
//             initial={false}
//             animate={{
//               scale: isDark ? 0.6 : 1,
//               opacity: isDark ? 0.5 : 1,
//               rotate: isDark ? -45 : 0,
//             }}
//             className={cn(
//               "transition-all duration-300",
//               // If Active (Light Mode): Gold color with a warm glow
//               // If Inactive (Dark Mode): Muted foreground color
//               !isDark
//                 ? "text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
//                 : "text-[var(--foreground)]/40"
//             )}
//           >
//             <SunIcon className="w-5 h-5 fill-current" />
//           </motion.div>
//         </div>

//         {/* MOON ICON */}
//         <div className="flex items-center justify-center w-8 h-8">
//           <motion.div
//             initial={false}
//             animate={{
//               scale: isDark ? 1 : 0.6,
//               opacity: isDark ? 1 : 0.5,
//               rotate: isDark ? 0 : 45,
//             }}
//             className={cn(
//               "transition-all duration-300",
//               // If Active (Dark Mode): Indigo/Violet color with a cool glow
//               // If Inactive (Light Mode): Muted foreground color
//               isDark
//                 ? "text-[#8F8BF9] drop-shadow-[0_0_8px_rgba(143,139,249,0.8)]"
//                 : "text-[var(--foreground)]/40"
//             )}
//           >
//             <MoonIcon className="w-5 h-5 fill-current" />
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// --- PERFECTLY ALIGNED THEME TOGGLE ---
// const ThemeToggle = ({ theme, toggleTheme }) => {
//   const isDark = theme === "dark";

//   return (
//     <motion.div
//       onClick={toggleTheme}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className={cn(
//         "relative flex w-20 h-10 cursor-pointer rounded-full p-1 transition-colors duration-300",
//         // Track Colors
//         "bg-[var(--foreground)]/10 backdrop-blur-md border border-[var(--border-color)]",
//         "hover:border-[#8F8BF9]/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
//       )}
//       role="button"
//       aria-label="Toggle Theme"
//     >
//       {/* --- SLIDING THUMB --- */}
//       <motion.div
//         layout
//         transition={{ type: "spring", stiffness: 500, damping: 30 }}
//         className={cn(
//           // Added 'left-1' to ensure it starts exactly on the padding edge
//           "absolute top-1 bottom-1 left-1 w-8 h-8 rounded-full shadow-md z-10",
//           "bg-[var(--background)] border",
//           isDark ? "border-indigo-500/50" : "border-amber-500/50"
//         )}
//         animate={{
//           // Exact calculation: Width (80) - Padding (8) - Thumb (32) = 40px travel
//           x: isDark ? 40 : 0,
//         }}
//       />

//       {/* --- ICONS CONTAINER --- */}
//       {/* Removed px-1 here to prevent icons from being pushed inward */}
//       <div className="relative z-20 flex w-full justify-between items-center">
//         {/* SUN ICON (Left) */}
//         <div className="flex items-center justify-center w-8 h-8">
//           <motion.div
//             initial={false}
//             animate={{
//               scale: isDark ? 0.6 : 1,
//               opacity: isDark ? 0.5 : 1,
//               rotate: isDark ? -45 : 0,
//             }}
//             className={cn(
//               "transition-all duration-300",
//               !isDark
//                 ? "text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
//                 : "text-[var(--foreground)]/40"
//             )}
//           >
//             <SunIcon className="w-5 h-5 fill-current" />
//           </motion.div>
//         </div>

//         {/* MOON ICON (Right) */}
//         <div className="flex items-center justify-center w-8 h-8">
//           <motion.div
//             initial={false}
//             animate={{
//               scale: isDark ? 1 : 0.6,
//               opacity: isDark ? 1 : 0.5,
//               rotate: isDark ? 0 : 45,
//             }}
//             className={cn(
//               "transition-all duration-300",
//               isDark
//                 ? "text-[#8F8BF9] drop-shadow-[0_0_8px_rgba(143,139,249,0.8)]"
//                 : "text-[var(--foreground)]/40"
//             )}
//           >
//             <MoonIcon className="w-5 h-5 fill-current" />
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// --- PIXEL-PERFECT ALIGNED THEME TOGGLE ---
const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <motion.div
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        // CONTAINER:
        // h-10 (40px) & w-20 (80px).
        // p-[3px] creates the perfect 32px internal slot for the icons.
        "relative flex h-10 w-20 cursor-pointer rounded-full p-[3px] transition-colors duration-300",
        "bg-[var(--foreground)]/10 backdrop-blur-md border border-[var(--border-color)]",
        "hover:border-[#8F8BF9]/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
      )}
      role="button"
      aria-label="Toggle Theme"
    >
      {/* --- SLIDING THUMB --- */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={cn(
          // THUMB:
          // Fixed w-8 h-8 (32px) to match the icons exactly.
          // shadow-md gives it pop.
          "h-8 w-8 rounded-full shadow-md z-10",
          "bg-[var(--background)] border",
          isDark ? "border-indigo-500/50" : "border-amber-500/50"
        )}
        animate={{
          // TRAVEL MATH:
          // 80px (Width) - 2px (Border) - 6px (Padding) = 72px Internal
          // 72px - 32px (Thumb) = 40px Travel
          x: isDark ? 40 : 0,
        }}
      />

      {/* --- ICONS CONTAINER --- */}
      {/* Absolute positioning ensures icons sit exactly in the available 32x72 space */}
      <div className="absolute inset-[3px] flex items-center justify-between z-20 pointer-events-none">
        {/* SUN ICON (Left) */}
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

        {/* MOON ICON (Right) */}
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
    setMobileSubMenuOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
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
    { name: "Protfolio", to: "/portfolio" },
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
      {/* --- LOGO & THEME TOGGLE GROUP (LEFT) --- */}
      <div className="flex items-center gap-4 font-poppins z-50 relative">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src={theme === "light" ? logoWhite : Logo}
            alt="Company Logo"
            className="h-10 w-auto transition-opacity duration-300"
          />
        </Link>
        {/* Toggle placed here with the Logo */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
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

        {/* --- DESKTOP ACTION BUTTONS (Right Side) --- */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-2.5 text-xs font-bold text-white tracking-wider uppercase rounded-full bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:shadow-[0_0_20px_rgba(121,115,219,0.5)] transition-all hover:-translate-y-0.5 inline-block text-center"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* --- Mobile Menu Toggle --- */}
      <div className="md:hidden flex items-center gap-4 z-50">
        <button onClick={toggleMenu} className="text-[var(--foreground)]">
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

      {/* --- Mobile Drawer --- */}
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
