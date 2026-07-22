import React, { useState, useEffect } from "react";
import Navbar from "../Components/Essntials/Navbar";
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Download, MessageSquareText } from "lucide-react";

const TermsConditions = () => {
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
        "Welcome to AICYRO. By using our website or any of our services, you agree to the Terms & Conditions outlined below. Please read them carefully.",
    },
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content:
        "By accessing AICYRO’s website or engaging our services, you acknowledge that you have read and agreed to these Terms. If you do not agree, please discontinue use of our site and services.",
    },
    {
      id: "services",
      title: "2. Services We Provide",
      content: "AICYRO offers technology and digital services including:",
      list: [
        "SaaS Development",
        "Cybersecurity & Data Protection",
        "AI Solutions",
        "QA & Automation",
        "Cloud & DevOps",
        "Web & App Development",
        "Blockchain Solutions",
      ],
      footer: "We may update or expand our services at any time.",
    },
    {
      id: "use-of-website",
      title: "3. Use of Website",
      content: "You agree not to:",
      list: [
        "Misuse or disrupt the website",
        "Attempt unauthorized access",
        "Copy or redistribute content without permission",
        "Use our platform for illegal or harmful activities",
      ],
      footer: "All website content belongs to AICYRO.",
    },
    {
      id: "client-responsibilities",
      title: "4. Client Responsibilities",
      content: "Clients must:",
      list: [
        "Provide accurate information and required assets",
        "Approve deliverables in a timely manner",
        "Follow payment terms",
        "Respect confidentiality obligations",
      ],
      footer:
        "AICYRO is not responsible for delays caused by incomplete client feedback.",
    },
    {
      id: "payments",
      title: "5. Payments & Refunds",
      content:
        "Payments must be completed as stated in the proposal or contract.",
      footer:
        "Due to the nature of digital services, all payments are non-refundable, unless agreed otherwise in writing.",
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property",
      content:
        "AICYRO retains ownership of internal tools, frameworks, and reusable components.",
      list: [
        "Clients own final, paid deliverables unless restricted by agreement.",
        "We may display non-confidential work in our portfolio unless an NDA prohibits this.",
      ],
    },
    {
      id: "confidentiality",
      title: "7. Confidentiality",
      content:
        "Both parties agree to protect sensitive information shared during the project.",
      footer: "Confidential data will not be disclosed unless required by law.",
    },
    {
      id: "third-party",
      title: "8. Third-Party Tools",
      content:
        "AICYRO may use third-party platforms (e.g., AWS, analytics, DevOps tools).",
      footer:
        "We are not responsible for issues caused by these external systems.",
    },
    {
      id: "liability",
      title: "9. Limitation of Liability",
      content: "AICYRO is not liable for:",
      list: [
        "Loss of data, revenue, or profits",
        "Client-side security issues",
        "Downtime from third-party providers",
        "Misuse of delivered software",
      ],
      footer:
        "Our maximum liability is limited to the amount paid for the specific project.",
    },
    {
      id: "termination",
      title: "10. Termination",
      content: "AICYRO may pause or terminate services if:",
      list: [
        "Payments are overdue",
        "Terms are violated",
        "Misuse is detected",
      ],
      footer: "Clients may also request termination as per their contract.",
    },
    {
      id: "updates",
      title: "11. Updates to Terms",
      content:
        "We may update these Terms anytime. Continued use of our site or services means you accept the updated Terms.",
    },
  ];

  return (
    // UPDATED: Background and text variables
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen font-sans relative selection:bg-[var(--accent-blue)]/30 print:bg-white print:text-black transition-colors duration-300">
      <Seo
        title="Terms & Conditions - AICYRO"
        description="Read the Terms & Conditions for using AICYRO's services and website."
        url="/terms"
      />

      {/* --- PRINT STYLES (Unchanged as print always needs white/black) --- */}
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
        {/* UPDATED: Glow color */}
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
            Terms & Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            // UPDATED: Text color using muted var
            className="text-[var(--foreground-muted)] text-lg leading-relaxed print:text-black"
          >
            Welcome to AICYRO. By using our website or any of our services, you
            agree to the Terms & Conditions outlined below. Please read them
            carefully.
          </motion.p>

          <div className="mt-6 flex gap-4 no-print items-center justify-center sm:justify-start">
            <button
              onClick={handlePrint}
              // UPDATED: Accent color for link/icon
              className="flex items-center gap-2 text-sm text-[var(--accent-blue)] hover:text-[var(--foreground)] transition-colors"
            >
              <Download size={16} /> Download PDF
            </button>
            <span className="text-[var(--foreground-muted)] text-sm">
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
                <p className="text-sm text-[var(--foreground-muted)] mt-2 print:text-black">
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
          Want to know more?
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

export default TermsConditions;