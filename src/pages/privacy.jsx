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
      title: "1. Introduction",
      content:
        "Welcome to Aicyro AI (“Company,” “we,” “us,” or “our”). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, disclose, and safeguard information when you visit or interact with our website (the “Website”).",
      footer:
        "This policy applies to users worldwide, including those located in the European Union, United States, and other jurisdictions with data protection laws. By using our Website, you agree to the practices described herein.",
    },
    {
      id: "controller",
      title: "2. Who We Are (Data Controller)",
      content:
        "For the purposes of applicable data protection laws, including the General Data Protection Regulation (GDPR), Aicyro AI acts as the Data Controller for personal data collected through this Website.",
      footer:
        "If you have questions regarding this policy or your personal data, please refer to Section 16 (Contact Us).",
    },
    {
      id: "collection-voluntary",
      title: "3.1 Information You Provide Voluntarily",
      content:
        "We may collect personal information that you choose to provide when you contact us, request services, or subscribe to communications. This includes:",
      list: [
        "Full name",
        "Email address",
        "Phone number",
        "Company name",
        "Message content or inquiry details",
      ],
    },
    {
      id: "collection-auto",
      title: "3.2 Information Collected Automatically",
      content:
        "When you visit the Website, certain information is collected automatically using cookies, server logs, and similar technologies:",
      list: [
        "IP address",
        "Browser type and version",
        "Device information and operating system",
        "Pages visited and interaction data",
        "Referring and exit URLs",
        "Date and time of access",
      ],
    },
    {
      id: "usage",
      title: "4. How We Use Your Information",
      content:
        "We process personal data to operate, maintain, and improve our Website. Specific purposes include:",
      list: [
        "Responding to inquiries and support requests",
        "Providing information about our services",
        "Monitoring performance, usage trends, and security",
        "Complying with legal and regulatory obligations",
        "Preventing fraud, abuse, or unauthorized access",
      ],
      footer: "We do not sell personal data.",
    },
    {
      id: "ai-transparency",
      title: "5. AI & Automated Processing Transparency",
      content:
        "As an AI-focused company, transparency is important to us. Personal data submitted through the Website is not used to train or improve AI models unless explicitly stated and consent is obtained.",
      list: [
        "We do not engage in automated decision-making that produces legal effects on users via this Website.",
        "Any AI-related processing is subject to appropriate human oversight and security safeguards.",
      ],
    },
    {
      id: "cookies",
      title: "6. Cookies and Tracking Technologies",
      content:
        "We use cookies and similar technologies to ensure proper Website functionality and to analyze usage.",
      list: [
        "Essential cookies: Required for core functionality.",
        "Analytics cookies: Help us understand Website performance.",
        "Third-party cookies: Set by trusted service providers.",
      ],
      footer:
        "You may manage or disable cookies through your browser settings, though this may affect certain Website features.",
    },
    {
      id: "legal-bases",
      title: "7. Legal Bases for Processing (GDPR)",
      content: "Where GDPR applies, we rely on the following lawful bases:",
      list: [
        "Consent: Where you have given clear permission.",
        "Contractual necessity: To respond to service inquiries.",
        "Legitimate interests: To operate and improve our Website.",
        "Legal obligation: To comply with applicable laws.",
      ],
    },
    {
      id: "retention",
      title: "8. Data Retention",
      content:
        "We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When data is no longer needed, it is securely deleted or anonymized.",
    },
    {
      id: "sharing",
      title: "9. Data Sharing and Third-Party Services",
      content:
        "We may share personal data with trusted third parties only when necessary. All providers must maintain appropriate security measures.",
      list: [
        "Website hosting and infrastructure providers (e.g., Netlify)",
        "Analytics and performance monitoring services",
        "Legal or regulatory authorities, when required by law",
      ],
    },
    {
      id: "international",
      title: "10. International Data Transfers",
      content:
        "Your information may be transferred to and processed in countries outside your country of residence. When such transfers occur, we implement appropriate safeguards to ensure compliance with applicable data protection laws.",
    },
    {
      id: "rights-gdpr",
      title: "11.1 Your Privacy Rights (GDPR)",
      content: "Residents of the EU/EEA have the right to:",
      list: [
        "Access your personal data",
        "Correct inaccurate or incomplete data",
        "Request deletion of your data",
        "Restrict or object to processing",
        "Request data portability",
        "Withdraw consent at any time",
      ],
      footer:
        "You also have the right to lodge a complaint with your local data protection authority.",
    },
    {
      id: "rights-ccpa",
      title: "11.2 Your Privacy Rights (CCPA/CPRA)",
      content: "California residents have the right to:",
      list: [
        "Know what personal data is collected",
        "Request deletion of personal data",
        "Opt out of the sale or sharing of personal data (we do not sell data)",
        "Not be discriminated against for exercising privacy rights",
      ],
    },
    {
      id: "security",
      title: "12. Security Measures",
      content:
        "We implement reasonable administrative, technical, and organizational safeguards designed to protect personal data. However, no system is completely secure, and we cannot guarantee absolute security.",
    },
    {
      id: "children",
      title: "13. Children’s Privacy",
      content:
        "Our Website is not intended for children under the age of 13, and we do not knowingly collect personal data from children.",
    },
    {
      id: "links",
      title: "14. Third-Party Links",
      content:
        "Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites.",
    },
    {
      id: "changes",
      title: "15. Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date. Continued use of the Website constitutes acceptance of the revised policy.",
    },
    {
      id: "contact",
      title: "16. Contact Us",
      content:
        "If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us.",
      list: [
        "Email: privacy@aicyro.ai",
        "Website: https://aicyro.com/",
      ],
    },
  ];

  return (
    // UPDATED: Background and text variables
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen font-sans relative selection:bg-[var(--accent-blue)]/30 print:bg-white print:text-black transition-colors duration-300">
      <Seo
        title="Privacy Policy - Aicyro AI"
        description="Learn how Aicyro AI collects, protects, and handles your data, including our AI transparency and security policies."
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
        // UPDATED: Uses accent-blue variable
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--accent-blue)] z-[60] origin-left no-print"
        style={{ scaleX }}
      />

      <header className="fixed top-0 w-full z-50 no-print">
        <Navbar />
      </header>

      {/* --- Background Effects --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none no-print">
        {/* Minimal background glow */}
        {/* UPDATED: Glow color uses accent-blue variable */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--accent-blue)]/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* --- Header Section --- */}
        {/* UPDATED: Border color */}
        <div className="mb-16 relative border-b border-[var(--border-color)] pb-8 text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[var(--foreground)]"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            // UPDATED: Text color using muted var
            className="text-[var(--foreground-muted)] text-lg leading-relaxed print:text-black"
          >
            Aicyro AI respects your privacy. This policy explains how we collect,
            use, and protect your data when you visit our website.
          </motion.p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 no-print items-center justify-center sm:justify-start">
            <button
              onClick={handlePrint}
              // UPDATED: Accent color for link/icon
              className="flex items-center gap-2 text-sm text-[var(--accent-blue)] hover:text-[var(--foreground)] transition-colors"
            >
              <Download size={16} /> Download PDF
            </button>
            <div className="text-[var(--foreground-muted)] text-sm flex flex-col sm:flex-row sm:gap-4">
              <span>Last Updated: January 20, 2026</span>
              <span className="hidden sm:inline">|</span>
              <span>Effective Date: January 20, 2026</span>
            </div>
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
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 print:text-black">
                {section.title}
              </h3>

              {/* Content */}
              {section.content && (
                // UPDATED: Text color
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-4 print:text-black text-lg ">
                  {section.content}
                </p>
              )}

              {/* List */}
              {section.list && (
                // UPDATED: Text color
                <ul className="list-disc list-inside space-y-2 mb-4 text-[var(--foreground-muted)] print:text-black ml-2 text-lg">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="pl-2">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Footer note */}
              {section.footer && (
                <p className="text-sm text-[var(--foreground-muted)] mt-2 print:text-black italic">
                  {section.footer}
                </p>
              )}
              {/* UPDATED: Separator border */}
              <div className=" pt-5 border-b border-[var(--border-color)]"></div>
            </motion.div>
          ))}
        </div>

        {/* --- Back Link (Mobile) --- */}
        <div className="mt-16 text-center pt-8 no-print">
          <Link
            href="/"
            // UPDATED: Link colors
            className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors"
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
        {/* UPDATED: Label background uses card-bg to be visible in light mode */}
        <div className="bg-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] text-[var(--foreground)] text-xs font-medium py-1.5 px-3 rounded-lg shadow-lg">
          Questions about data?
        </div>

        {/* Action Button */}
        <Link href="/contact" passHref>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            // UPDATED: Gradient and Shadow use variables
            className="group flex items-center gap-3 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--secondary)] text-white font-medium py-3 px-6 rounded-full shadow-xl shadow-[var(--accent-blue)]/20 hover:shadow-[var(--accent-blue)]/40 transition-all duration-300"
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