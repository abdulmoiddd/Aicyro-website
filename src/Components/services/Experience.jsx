import React from "react";
import Link from "next/link";
import { CircleCheck, Award } from "lucide-react";

// This component recreates the "Experience The Aicyro Advantage" section.
const Experience = () => {
  return (
    // Main section container with dark page background and optimized padding
    <section className="bg-[#0A0117] py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Centered container for the gradient card */}
      <div className="max-w-6xl mx-auto">
        {/* Gradient Card Container (The main feature) */}
        {/* Re-adding the gradient and shadow for consistency with the design intent */}
        <div className=" p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl  text-white text-center">
          {/* Main Heading (Responsive sizing) */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 ">
            Experience The Aicyro Advantage
          </h2>

          {/* Subtitle/Description (Responsive sizing) */}
          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto mb-8 sm:mb-10">
            Maximize your digital journey with Aicyro Solutions — where
            innovation meets excellence to deliver unmatched results.
          </p>

          {/* Features/Checklist Section: Switches from vertical stack to horizontal */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-base sm:text-lg font-medium mb-10 sm:mb-12">
            {/* Feature 1 */}
            <div className="flex items-center space-x-2">
              <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span>Grow with confidence</span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-2">
              <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span>Trusted, proven results</span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-2">
              <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span>Success guaranteed</span>
            </div>
          </div>

          {/* EXPLORE ABOUT US Button (Responsive Text Size and Padding) */}
          {/* <button
            onClick={() => (window.location.href = "/about")}
            className="inline-flex items-center space-x-2 text-white border border-[#5B86D3] border-opacity-100 text-sm sm:text-base font-semibold uppercase tracking-wider rounded-full px-6 py-3 hover:bg-[#5B86D3] transition duration-300 w-full sm:w-auto justify-center"
          >
            <Award className="w-5 h-5" />
            <span>EXPLORE ABOUT US</span>
          </button> */}

          <Link
            href="/about"
            className="inline-flex items-center space-x-2 text-white border border-[#5B86D3] border-opacity-100 text-sm sm:text-base font-semibold uppercase tracking-wider rounded-full px-6 py-3 hover:bg-[#5B86D3] transition duration-300 w-full sm:w-auto justify-center"
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
