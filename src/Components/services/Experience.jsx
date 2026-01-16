import React from "react";
import Link from "next/link";
import { CircleCheck, Award } from "lucide-react";

// This component recreates the "Experience The Aicyro Advantage" section.
const Experience = () => {
  return (
    // Main section container with dynamic background variable
    <section className="bg-[var(--background)] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Centered container for the content */}
      <div className="max-w-6xl mx-auto">
        {/* Card Container: 
           Removed hardcoded text-white so it adapts to theme 
        */}
        <div className="p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl text-center">
          {/* Main Heading: text-foreground ensures visibility in Light Mode */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-[var(--foreground)]">
            Experience The Aicyro Advantage
          </h2>

          {/* Subtitle/Description: text-foreground-muted for gray text */}
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-8 sm:mb-10">
            Maximize your digital journey with Aicyro Solutions — where
            innovation meets excellence to deliver unmatched results.
          </p>

          {/* Features/Checklist Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-base sm:text-lg font-medium mb-10 sm:mb-12 text-[var(--foreground)]">
            {/* Feature 1 */}
            <div className="flex items-center space-x-2">
              <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-[var(--secondary)]" />
              <span>Grow with confidence</span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-2">
              <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-[var(--secondary)]" />
              <span>Trusted, proven results</span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-2">
              <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-[var(--secondary)]" />
              <span>Success guaranteed</span>
            </div>
          </div>

          {/* EXPLORE ABOUT US Button */}
          <Link
            href="/about"
            // UPDATED: Border and Text use variables. Hover background uses variable.
            className="inline-flex items-center space-x-2 text-[var(--foreground)] border border-[var(--secondary)] border-opacity-100 text-sm sm:text-base font-semibold uppercase tracking-wider rounded-full px-6 py-3 hover:bg-[var(--secondary)] hover:text-white transition duration-300 w-full sm:w-auto justify-center"
          >
            <Award className="w-5 h-5" />
            <span>EXPLORE ABOUT US</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
