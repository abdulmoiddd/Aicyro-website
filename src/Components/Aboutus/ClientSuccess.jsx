import React from "react";
// Assuming the Counter component is the one made responsive earlier
import Counter from "../Home/counter";

const ClientSuccess = () => {
  return (
    // Main container with dark background and optimized padding
    <section className="bg-[#0A0118] border-t border-white/10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* --- Header and Description Row (Stacks on mobile) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 space-y-6 lg:space-y-0 lg:space-x-12">
          {/* Left Side: Title & Label (Takes full width on mobile, half on large screens) */}
          <div className="lg:w-1/2 mx-auto text-center flex flex-col items-center">
            {/* Label: WHY US? */}
            <div className="text-xs tracking-widest uppercase font-semibold border border-[#677ED6] px-4 py-1.5 inline-block mb-4 sm:mb-6 text-white rounded-full">
              WHY US?
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              Unveiling The Success Of Our{" "}
              <span className="text-[#6C47FF]">Clients</span>
            </h2>
          </div>
        </div>

        {/* --- Counter Component (Assumed responsive, just ensuring it has responsive padding/margin) --- */}
        <div className="rounded-2xl mt-10">
          {/* The Counter component handles its own internal responsiveness */}
          <Counter />
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess;
