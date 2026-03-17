import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Custom Hook to handle the counting animation
// UPDATE: Added 'shouldStart' parameter to trigger animation only when visible
const useCounterAnimation = (targetValue, shouldStart, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only run if target is valid AND we have been told to start (scrolled into view)
    if (targetValue > 0 && shouldStart) {
      const end = targetValue;
      const startTime = Date.now();

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Cubic ease-out
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easedProgress * end);

        setCount(currentValue);

        if (progress === 1) {
          clearInterval(timer);
          setCount(end);
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [targetValue, duration, shouldStart]);

  return count;
};

// Component for a single counter item
const CounterItem = ({
  label,
  target,
  suffix = "",
  precision = 0,
  index,
  startAnimation, // Receive the trigger prop
}) => {
  let numericTarget;
  let textLabel = label;

  // Handle the special case for 4.8 (Client Ratings)
  if (label === "CLIENT RATINGS") {
    // UPDATED: Changed from 490 to 480 so it divides by 100 to get 4.8
    numericTarget = 480;
    precision = 1;
  } else {
    numericTarget = parseInt(target.replace("+", ""), 10);
  }

  // Pass 'startAnimation' to the hook
  const animatedCount = useCounterAnimation(numericTarget, startAnimation);

  let displayValue;
  if (label === "CLIENT RATINGS") {
    displayValue = (animatedCount / 100).toFixed(precision);
  } else {
    displayValue = animatedCount.toLocaleString();
  }

  const finalDisplay = `${displayValue}${suffix}`;

  // Border Logic (kept exactly as in your original code)
  let borderClasses =
    "border-t border-gray-200/30 pt-6 mt-6 sm:pt-0 sm:mt-0 sm:border-t-0";

  if (index === 0 || index === 1) {
    borderClasses = "border-t-0 pt-0 mt-0";
  }

  let lgBorderClass = "lg:border-l lg:border-gray-200/30";
  if (index === 0) {
    lgBorderClass = "";
  }

  // Animation Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.div
      className={`flex flex-col items-center px-4 sm:px-6 py-2 w-full ${borderClasses} ${lgBorderClass}`}
      variants={itemVariants} // Apply slide-up animation
    >
      <span className="text-3xl md:text-4xl font-semibold text-white mb-2 leading-none">
        {finalDisplay}
      </span>
      <span className="text-xs tracking-widest uppercase text-gray-200 text-center">
        {textLabel}
      </span>
    </motion.div>
  );
};

const Counter = () => {
  // State to track if the section has been viewed
  const [hasViewed, setHasViewed] = useState(false);

  const stats = [
    { label: "COMPLETED PROJECT", target: "100", suffix: "+" },
    { label: "HAPPY CLIENT", target: "70", suffix: "+" },
    { label: "YEARS OF EXPERIENCE", target: "4", suffix: "+" },
    // UPDATED: Changed target from 4.6 to 4.8
    { label: "CLIENT RATINGS", target: "4.8", suffix: " / 5" },
  ];

  // Animation Variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Delays each child by 0.2s
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-r from-[#7873DA] to-[#5B86D3] py-10 sm:py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Animate when 50% visible
      onViewportEnter={() => setHasViewed(true)} // Trigger the counting logic
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 items-center"
        variants={containerVariants}
      >
        {stats.map((stat, index) => (
          <CounterItem
            key={index}
            label={stat.label}
            target={stat.target}
            suffix={stat.suffix}
            index={index}
            startAnimation={hasViewed} // Pass the trigger state down
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Counter;
