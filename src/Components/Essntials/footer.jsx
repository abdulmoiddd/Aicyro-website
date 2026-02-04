import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Assets
import logo from "../../assets/logo.png";
import logowhite from "../../assets/logowhite.png";

const Footer = () => {
  // State to track theme for the Logo switch
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // 1. Get initial theme
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(currentTheme);

    // 2. Watch for changes (When Navbar toggles the theme)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const newTheme =
            document.documentElement.getAttribute("data-theme") || "dark";
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--foreground)] border-t border-[var(--border-color)] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        
        {/* --- MAIN FOOTER GRID (5 COLUMNS) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* COLUMN 1: BRAND / COMPANY INFO */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="block w-fit">
              <Image
                src={theme === "light" ? logowhite : logo}
                alt="Aicyro Solutions"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
              Aicyro provides AI-powered cybersecurity, automation, and custom software solutions for modern businesses.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="font-bold text-[var(--foreground)] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Portfolio</Link></li>
              <li><Link href="/blogs" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Blogs</Link></li>
              <li><Link href="/about" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES (SEO SUPPORT) */}
          <div>
            <h4 className="font-bold text-[var(--foreground)] mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">AI Solutions & Automation</Link></li>
              <li><Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Cybersecurity Services</Link></li>
              <li><Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Custom Software Development</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFORMATION */}
          <div>
            <h4 className="font-bold text-[var(--foreground)] mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@aicyro.com" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">
                  info@aicyro.com
                </a>
              </li>
              <li>
                <a href="mailto:contact@aicyro.com" className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">
                  contact@aicyro.com
                </a>
              </li>
              
              {/* Phone number omitted as per instruction "Optional... Do not add unless available" */}
            </ul>
          </div>

          {/* COLUMN 5: CTA */}
          <div className="flex flex-col items-start">
            <h4 className="font-bold text-[var(--foreground)] mb-4">Get Started</h4>
            <Link
              href="/contact" 
              className="px-6 py-3 rounded-lg bg-[#7B71DB] hover:bg-[#6a60d1] text-white text-sm font-semibold shadow-md transition-all text-center w-full sm:w-auto"
            >
              Book Free Consultation
            </Link>
          </div>

        </div>

        {/* --- FOOTER BOTTOM BAR --- */}
        <div className="mt-16 pt-6 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--foreground-muted)]">
          
          {/* Copyright */}
          <p>© {new Date().getFullYear()} Aicyro. All rights reserved.</p>
          
          {/* Legal Links (Optional) */}
          <div className="flex gap-6">
            <Link href="/sitemap" className="hover:text-[var(--foreground)] transition-colors">
              Sitemap
            </Link>
            <Link href="/privacy" className="hover:text-[var(--foreground)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--foreground)] transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;