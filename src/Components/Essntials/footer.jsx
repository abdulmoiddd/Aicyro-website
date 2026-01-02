import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  const legalLinks = [
    { name: "Sitemap", href: "/sitemap" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61580451864408",
      icon: FaFacebookF,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/aicyro007/",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ai.cy.ro",
      icon: FaInstagram,
    },
  ];

  return (
    <footer className="relative bg-[#060010] text-white font-sans border-t border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#14002A] opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        {/* Top CTA Section */}
        <div className="bg-[#10001F] border border-white/10 rounded-2xl p-10 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Let’s Build Something Powerful
            </h2>
            <p className="text-gray-400 max-w-md">
              Your vision deserves a high‑performance digital experience.
            </p>
          </div>
          <div>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0RhC80jLUhQlXUJt_BzXMRJrr6HuzRmIFuIDST0NaT9QhT_s8NyPGHGNWTRXiaUjOQ7nYWnu3K"
              className="px-6 py-3 rounded-xl bg-[#7B71DB] hover:bg-[#6a60d1] transition-all text-sm font-semibold shadow-md"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Brand Section */}
          <div className="space-y-6">
            <Image
              src={logo}
              alt="Aicyro Solutions"
              className="h-12 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Accelerating innovation with AI, cloud, cybersecurity and modern
              digital solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#12001E] border border-white/10 hover:border-[#7B71DB] hover:bg-[#7B71DB]/20 transition-all text-gray-300 hover:text-white"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase text-gray-300 mb-5">
              Legal & Information
            </h3>
            <ul className="space-y-4">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase text-gray-300 mb-5">
              Contact
            </h3>

            {/* Email: Clickable */}
            <a
              href="mailto:info@aicyro.com"
              className="block text-gray-400 text-sm mb-3 hover:text-white transition-colors"
            >
              info@aicyro.com
            </a>

            {/* Location: Plain Text */}
            <p className="text-gray-400 text-sm">Islamabad, Pakistan</p>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Aicyro Solutions. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">Build for Future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
