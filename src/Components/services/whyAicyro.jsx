import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import {
  SquareStack,
  Lock,
  Repeat,
  CloudUpload,
  CheckCircle,
} from "lucide-react";

// --- TypingText Component (Unchanged) ---
const TypingText = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 80,
  delay = 2000,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;
    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    wordIndex,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return (
    <span className="text-[#7B71DB] font-semibold inline-block min-w-[80px] sm:min-w-[120px]">
      {currentText}
      <span className="cursor-blink">|</span>
    </span>
  );
};
// --- End TypingText Component ---

const WhyAicyro = () => {
  const typingWords = ["Innovation", "Scale", "Reliability"];
  const metricIconClasses = "w-7 h-7 sm:w-8 sm:h-8 text-white flex-shrink-0";
  const iconBgClasses =
    "bg-gradient-to-r from-[#7973DB] to-[#5B86D3] p-3 rounded-full";
  const featureIconClasses = "w-6 h-6 text-white flex-shrink-0";

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  const iconScaleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };
  // --------------------------

  return (
    <div className="bg-[#0A0118] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style jsx="true">{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .cursor-blink {
          animation: blink 0.75s step-end infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* --- Left Column: Growth & Metrics --- */}
        <motion.div
          className="text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Bordered container */}
          <div className="border border-gray-700 p-6 sm:p-8 rounded-xl h-full bg-[#0A0118]/50 backdrop-blur-sm">
            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold leading-tight mb-6 sm:mb-8"
            >
              Enhance Your Digital <br />
              Growth with <br />
              Aicyro Solutions
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-400 leading-relaxed mb-10 max-w-lg"
            >
              At Aicyro Solutions, we empower startups and enterprises with
              next-gen digital services that accelerate growth, strengthen
              trust, and ensure long-term success. From SaaS development to
              AI-powered automation, our expertise delivers scalable, secure,
              and market-ready solutions.
            </motion.p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10">
              {/* Metric 1 */}
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-3 sm:space-x-4"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  variants={iconScaleVariants}
                  className={iconBgClasses}
                >
                  <SquareStack className={metricIconClasses} />
                </motion.div>
                <div>
                  <p className="text-2xl sm:text-3xl font-semibold leading-none">
                    8,220
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">
                    Products Scaled
                  </p>
                </div>
              </motion.div>

              {/* Metric 2 */}
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-3 sm:space-x-4"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  variants={iconScaleVariants}
                  className={iconBgClasses}
                >
                  <Lock className={metricIconClasses} />
                </motion.div>
                <div>
                  <p className="text-2xl sm:text-3xl font-semibold leading-none">
                    2,311
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">
                    Systems Secured
                  </p>
                </div>
              </motion.div>

              {/* Metric 3 */}
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-3 sm:space-x-4"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  variants={iconScaleVariants}
                  className={iconBgClasses}
                >
                  <Repeat className={metricIconClasses} />
                </motion.div>
                <div>
                  <p className="text-2xl sm:text-3xl font-semibold leading-none">
                    7,543
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">
                    AutoProcess
                  </p>
                </div>
              </motion.div>

              {/* Metric 4 */}
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-3 sm:space-x-4"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  variants={iconScaleVariants}
                  className={iconBgClasses}
                >
                  <CloudUpload className={metricIconClasses} />
                </motion.div>
                <div>
                  <p className="text-2xl sm:text-3xl font-semibold leading-none">
                    6,422
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">
                    Projects Deployed
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- Right Column: Solutions & Features --- */}
        <motion.div
          className="text-white pt-0 lg:pt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Label */}
          <motion.div
            variants={itemVariants}
            className="text-xs tracking-widest uppercase font-semibold rounded-full border border-[#7B71DB] px-4 py-1.5 inline-block mb-4"
          >
            WHY AICYRO?
          </motion.div>

          {/* Heading with Typing Effect */}
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-semibold mb-6"
          >
            Solutions That Deliver <br className="hidden sm:block" />
            <TypingText words={typingWords} />
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-400 leading-relaxed mb-10"
          >
            We design and build solutions that don’t just function — they drive
            results. With innovation at the core, every service is tailored to
            meet your goals, enhance efficiency, and create measurable business
            value.
          </motion.p>

          {/* Feature 1 */}
          <motion.div
            variants={itemVariants}
            className="flex space-x-4 sm:space-x-5 mb-8"
          >
            <motion.div
              variants={iconScaleVariants}
              className={`${iconBgClasses} self-start flex-shrink-0`}
            >
              <CheckCircle className={featureIconClasses} />
            </motion.div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1">
                SaaS Excellence
              </h4>
              <p className="text-sm sm:text-base text-gray-400">
                We transform ideas into scalable SaaS products, helping
                businesses launch faster and grow smarter.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={itemVariants}
            className="flex space-x-4 sm:space-x-5"
          >
            <motion.div
              variants={iconScaleVariants}
              className={`${iconBgClasses} self-start flex-shrink-0`}
            >
              <CloudUpload className={featureIconClasses} />
            </motion.div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1">
                Agile Cloud & DevOps
              </h4>
              <p className="text-sm sm:text-base text-gray-400">
                Speed, flexibility, and reliability with seamless cloud
                deployment and DevOps practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyAicyro;
