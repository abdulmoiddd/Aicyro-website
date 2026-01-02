import React, { useState, useEffect } from "react";
import Navbar from "../Components/Essntials/Navbar";
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Download, MessageSquareText } from "lucide-react";

const PrivacyPolicy = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // --- STATE FOR BUTTON VISIBILITY ---
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  // --- SCROLL LISTENER TO HANDLE APPEAR/DISAPPEAR ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const distanceToBottom = docHeight - (scrollY + windowHeight);

      // Show button if scrolled down more than 300px AND NOT at the bottom (200px buffer)
      if (scrollY > 300 && distanceToBottom > 200) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case user reloads mid-page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- PRINT HANDLER ---
  const handlePrint = () => {
    window.print();
  };

  // --- CONTENT DATA ---
  const allSections = [
    {
      id: "intro",
      title: "Introduction",
      content:
        "This Privacy Policy explains how AICYRO (“we,” “us,” “our”) collects, uses, discloses, and protects personal information when you visit our website www.aicyro.com or engage with our services. By accessing or using our website or services, you agree to this Privacy Policy.",
    },
    {
      id: "collection",
      title: "1. Information We Collect",
      content:
        "A. Personal Information: We collect personal information you voluntarily provide, such as:",
      list: [
        "Name",
        "Email address",
        "Phone number",
        "Company name",
        "Job title",
        "Business requirements or project details",
      ],
      footer:
        "This information is typically collected when you submit a contact form, request a consultation, or sign up for newsletters or resources.",
    },
    {
      id: "usage-data",
      title: "2. Usage Data & Tracking",
      content:
        "When you visit our website, we automatically collect usage data such as:",
      list: [
        "IP address",
        "Device type",
        "Browser type",
        "Pages visited",
        "Referral/exit pages",
        "Interaction events",
      ],
      footer:
        "We use cookies, web beacons, and similar technologies to understand usage patterns and improve user experience.",
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      content: "We may use the information we collect to:",
      list: [
        "Provide and improve our services",
        "Respond to inquiries and support requests",
        "Personalize your experience",
        "Send newsletters, updates, or marketing communications (with consent)",
        "Conduct analytics and website performance tracking",
        "Protect against fraud and maintain security",
      ],
    },
    {
      id: "cookies",
      title: "4. Cookies and Tracking Technologies",
      content:
        "We use cookies and similar technologies to track user behavior, remember preferences, and analyze traffic patterns.",
      list: [
        "Track user behavior",
        "Remember preferences",
        "Analyze traffic patterns",
      ],
      footer:
        "You may choose to disable cookies through your browser settings. Note that disabling certain cookies may affect website functionality.",
    },
    {
      id: "sharing",
      title: "5. How We Share Your Information",
      content:
        "We do not sell or rent your personal information to third parties. We may share data with:",
      list: [
        "Service providers (e.g., hosting, analytics, email delivery)",
        "Legal authorities when required by law",
        "Business partners with your consent",
        "Professional advisors (e.g., lawyers, auditors)",
      ],
      footer: "All third parties are bound by confidentiality obligations.",
    },
    {
      id: "security",
      title: "6. Data Security",
      content:
        "We implement administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, or misuse. We regularly assess our security measures to align with industry practices.",
      footer:
        "However, no system can be guaranteed 100% secure, and we cannot fully eliminate all risks.",
    },
    {
      id: "third-party-sites",
      title: "7. Third-Party Websites",
      content:
        "Our website may contain links to external websites not owned or controlled by AICYRO. We are not responsible for the content or privacy practices of those third-party sites. We recommend reviewing their privacy policies separately.",
    },
    {
      id: "children",
      title: "8. Children’s Privacy",
      content:
        "Our services and website are intended for individuals and businesses over the age of 18. We do not knowingly collect information from individuals under 18. If you believe we have unintentionally collected such data, please contact us for removal.",
    },
    {
      id: "rights",
      title: "9. Your Rights and Choices",
      content: "You have the right to:",
      list: [
        "Access and correct your personal information",
        "Request deletion of personal data",
        "Opt out of marketing communications",
        "Withdraw consent at any time",
      ],
      footer:
        "To exercise these rights, contact us using the information below.",
    },
    {
      id: "retention",
      title: "10. Retention of Data",
      content:
        "We retain personal data only as long as necessary for the purposes described in this policy or to comply with legal obligations.",
    },
    {
      id: "changes",
      title: "11. Changes to This Policy",
      content:
        "We may update this Privacy Policy periodically. The “Last Updated” date will reflect changes. Continued use of our services after changes means you accept the updated policy.",
    },
  ];

  return (
    <div className="bg-[#0A0118] text-white min-h-screen font-sans relative selection:bg-[#677ED6]/30 print:bg-white print:text-black">
      <Seo
        title="Privacy Policy - AICYRO"
        description="Learn how AICYRO collects and protects your data."
        url="/privacy"
      />

      {/* --- PRINT STYLES --- */}
      <style jsx global>{`
        @media print {
          header,
          footer,
          button,
          input,
          .no-print {
            display: none !important;
          }
          body,
          main {
            background-color: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          p,
          h1,
          h2,
          h3,
          li,
          span,
          ul {
            color: black !important;
            text-shadow: none !important;
          }
          .fixed {
            display: none !important;
          }
        }
      `}</style>

      {/* --- Reading Progress Bar --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#677ED6] z-[60] origin-left no-print"
        style={{ scaleX }}
      />

      <header className="fixed top-0 w-full z-50 no-print">
        <Navbar />
      </header>

      {/* --- Background Effects --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none no-print">
        {/* Minimal background glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#677ED6]/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* --- Header Section --- */}
        <div className="mb-16 relative border-b border-white/10 pb-8 text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed print:text-black"
          >
            This Privacy Policy explains how AICYRO (“we,” “us,” “our”)
            collects, uses, discloses, and protects personal information when
            you visit our website or engage with our services.
          </motion.p>

          <div className="mt-6 flex gap-4 no-print items-center justify-center sm:justify-start">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 text-sm text-[#677ED6] hover:text-white transition-colors"
            >
              <Download size={16} /> Download PDF
            </button>
            <span className="text-slate-500 text-sm">
              Last Updated: December 29, 2025
            </span>
          </div>
        </div>

        {/* --- Main Content (Centered Single Column) --- */}
        <div className="space-y-12 ">
          {allSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="print:mb-8"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 print:text-black">
                {section.title}
              </h3>

              {/* Content */}
              {section.content && (
                <p className="text-slate-300 leading-relaxed mb-4 print:text-black text-lg ">
                  {section.content}
                </p>
              )}

              {/* List */}
              {section.list && (
                <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300 print:text-black ml-2 text-lg">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="pl-2">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Footer note */}
              {section.footer && (
                <p className="text-sm text-slate-500 mt-2 print:text-black">
                  {section.footer}
                </p>
              )}
              <div className=" pt-5 border-b border-white/30"></div>
            </motion.div>
          ))}
        </div>

        {/* --- Back Link (Mobile) --- */}
        <div className="mt-16 text-center pt-8 no-print">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-200 hover:text-[#677ED6] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </main>

      {/* --- FLOATING CONTACT BUTTON (RIGHT CENTER, STACKED, SCROLL TRIGGERED) --- */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        // Controls: Visible if scrolled down AND not at bottom
        animate={{
          opacity: showFloatingButton ? 1 : 0,
          x: showFloatingButton ? 0 : 50,
          pointerEvents: showFloatingButton ? "auto" : "none",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col items-center gap-3 no-print"
      >
        {/* Text Label on Top */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 text-slate-200 text-xs font-medium py-1.5 px-3 rounded-lg shadow-lg">
          Want to know more?
        </div>

        {/* Action Button */}
        <Link href="/contact" passHref>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-gradient-to-r from-[#677ED6] to-[#566AC0] text-white font-medium py-3 px-6 rounded-full shadow-xl shadow-[#677ED6]/20 hover:shadow-[#677ED6]/40 transition-all duration-300"
          >
            <span>Contact Us</span>
            <MessageSquareText
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
          </motion.button>
        </Link>
      </motion.div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
