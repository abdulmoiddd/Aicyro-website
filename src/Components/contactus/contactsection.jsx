import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue, push, serverTimestamp } from "firebase/database";
import { database } from "../../lib/firebase";
// ---------------------------------

import {
  FaClock,
  FaFacebook,
  FaHeadset,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdHeadsetMic } from "react-icons/md";

// Helper to render icons
const renderContactIcon = (iconName) => {
  const iconClass = "w-6 h-6 text-white"; // Icons stay white inside colored circles
  switch (iconName) {
    case "location":
      return <FaLocationDot className={iconClass} />;
    case "mail":
      return <IoMdMail className={iconClass} />;
    case "clock":
      return <FaClock className={iconClass} />;
    case "headset":
      return <MdHeadsetMic className={iconClass} />;
    default:
      return <MdHeadsetMic className={iconClass} />;
  }
};

// --- DEFAULT DATA (Fallback if Firebase is empty) ---
const defaultContactData = {
  formContent: {
    heading: "Have an Idea?",
    subHeading:
      "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    successMessage: "Message sent successfully!",
    submitButtonText: "Send Message",
  },
  infoContent: {
    mainHeading: "Contact Us",
    subTitle: "Let's Talk",
    socialLinks: [
      { icon: "facebook", url: "#" },
      { icon: "linkedin", url: "#" },
      { icon: "instagram", url: "#" },
    ],
    contactDetails: [
      {
        icon: "location",
        title: "Our Location",
        lines: ["123 Innovation Drive", "Tech City, TC 90210"],
      },
      {
        icon: "mail",
        title: "Email Us",
        lines: ["support@aicyro.com"],
        link: "mailto:support@aicyro.com",
      },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  },
};

const ContactSection = () => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  useEffect(() => {
    const contactRef = ref(database, "contactSection");

    const unsubscribe = onValue(
      contactRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setContactData(snapshot.val());
        } else {
          console.warn(
            "Firebase 'contactSection' missing. Using default data."
          );
          setContactData(defaultContactData); // Use default data
        }
        setLoading(false);
      },
      (error) => {
        console.error("Firebase read error:", error);
        setContactData(defaultContactData); // Fallback on error
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    if (!formData.name || !formData.email || !formData.subject) {
      setSubmissionStatus("error");
      setTimeout(() => setSubmissionStatus(""), 5000);
      return;
    }

    try {
      const inquiriesRef = ref(database, "inquiries");
      await push(inquiriesRef, {
        ...formData,
        timestamp: serverTimestamp(),
        status: "new",
      });

      setSubmissionStatus(
        contactData?.formContent?.successMessage || "Submission successful!"
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmissionStatus(""), 5000);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmissionStatus("An error occurred. Please try again.");
      setTimeout(() => setSubmissionStatus(""), 5000);
    }
  };

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };
  // --------------------------

  if (loading) {
    return (
      // UPDATED: Background and text variables
      <div className="bg-[var(--background)] min-h-[400px] flex justify-center items-center text-[var(--foreground)]">
        Loading Contact Section...
      </div>
    );
  }

  // Safe check for data
  const { formContent, infoContent } = contactData || defaultContactData;

  return (
    // UPDATED: Radial gradient uses hero variables for light/dark mode support
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Contact Form */}
        <motion.div
          variants={itemVariants}
          // UPDATED: Border and Card Background variables
          className="border border-[var(--border-color)] p-6 sm:p-8 rounded-xl shadow-lg bg-[var(--card-bg)]/50 backdrop-blur-sm"
        >
          {/* UPDATED: Heading Text */}
          <h2 className="text-[var(--foreground)] text-3xl sm:text-4xl font-semibold mb-4">
            {formContent.heading}
          </h2>
          {/* UPDATED: Subheading Text */}
          <p className="text-[var(--foreground-muted)] text-sm sm:text-base mb-8">
            {formContent.subHeading}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {submissionStatus && (
              <div
                className={`p-3 rounded-lg text-sm font-semibold ${
                  submissionStatus.includes("error")
                    ? "bg-red-600"
                    : "bg-green-600"
                } text-white`}
              >
                {submissionStatus}
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                // UPDATED: Label Color
                className="block text-[var(--foreground-muted)] text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                // UPDATED: Input Background, Border, Text, Focus
                className="w-full p-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm placeholder-[var(--foreground-muted)]/50"
                placeholder="Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[var(--foreground-muted)] text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm placeholder-[var(--foreground-muted)]/50"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-[var(--foreground-muted)] text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm placeholder-[var(--foreground-muted)]/50"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[var(--foreground-muted)] text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm placeholder-[var(--foreground-muted)]/50"
                placeholder="Message"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={submissionStatus === "submitting"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              // UPDATED: Button Gradient uses variables
              className="w-full bg-gradient-to-r from-[var(--secondary)] to-[var(--accent-blue)] text-white font-semibold py-3 rounded-full transition-colors duration-300"
            >
              {submissionStatus === "submitting"
                ? "Sending..."
                : formContent.submitButtonText}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column: Info */}
        <motion.div
          className="text-[var(--foreground)] pt-6 lg:pt-0"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              {infoContent.mainHeading}
            </h2>
            <p className="text-xl sm:text-3xl font-semibold mb-6 sm:mb-8">
              {infoContent.subTitle}
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-4 mb-8 sm:mb-10"
            variants={itemVariants}
          >
            {infoContent.socialLinks &&
              infoContent.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  // UPDATED: Gradient
                  className="p-2 bg-gradient-to-r from-[var(--secondary)] to-[var(--accent-blue)] rounded-full"
                >
                  {/* Icons remain white */}
                  {link.icon === "facebook" && (
                    <FaFacebook className="w-6 h-6 text-white" />
                  )}
                  {link.icon === "linkedin" && (
                    <FaLinkedin className="w-6 h-6 text-white" />
                  )}
                  {link.icon === "instagram" && (
                    <FaInstagram className="w-6 h-6 text-white" />
                  )}
                </a>
              ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
            variants={itemVariants}
          >
            {infoContent.contactDetails &&
              infoContent.contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {/* UPDATED: Gradient */}
                  <div className="p-3 bg-gradient-to-r from-[var(--secondary)] to-[var(--accent-blue)] rounded-full">
                    {renderContactIcon(detail.icon)}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{detail.title}</h4>
                    {detail.lines.map((line, i) => (
                      // UPDATED: Text color
                      <p
                        key={i}
                        className="text-[var(--foreground-muted)] text-sm"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden shadow-lg h-64 w-full"
            variants={itemVariants}
          >
            <iframe
              src={infoContent.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
