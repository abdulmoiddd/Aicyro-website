import React from "react";
import { Zap, ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative bg-[#0A0118] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow Effect - Adds depth to the dark background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#7D6BFF] opacity-20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-white text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          Innovate without{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D6BFF] to-[#A48AFF]">
            Compromise.
          </span>
        </h2>

        {/* Professional Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          <span className="font-semibold text-white">AICYRO Solutions</span>{" "}
          delivers enterprise-grade cybersecurity and scalable digital
          architecture. We secure your infrastructure so you can focus on
          scaling your business.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Primary Action (Calendar/Get Started) */}
          <button
            onClick={() =>
              window.open(
                "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
                "_blank"
              )
            }
            className="group relative flex items-center justify-center space-x-2 bg-gradient-to-r from-[#7D6BFF] to-[#A48AFF] text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:shadow-[0_0_20px_rgba(125,107,255,0.4)] transition-all duration-300 w-full sm:w-auto"
          >
            <Zap className="w-5 h-5 fill-current" />
            <span>START YOUR PROJECT</span>
          </button>

          {/* Secondary Action (Contact Us) */}
          <button
            onClick={() => (window.location.href = "/contact")}
            className="group flex items-center justify-center space-x-2 border border-white/20 bg-white/5 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
