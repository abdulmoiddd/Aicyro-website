import React from "react";
// Assuming the Counter component is the one made responsive earlier
import Counter from "../Home/counter";

const ClientSuccess = () => {
  return (
    // UPDATED: Background and Border use variables
    <section className="bg-[var(--background)] border-t border-[var(--border-color)] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* --- Header and Description Row (Stacks on mobile) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 space-y-6 lg:space-y-0 lg:space-x-12">
          {/* Left Side: Title & Label (Takes full width on mobile, half on large screens) */}
          <div className="lg:w-1/2 mx-auto text-center flex flex-col items-center">
            {/* Label: WHY US? */}
            {/* UPDATED: Border uses accent-blue, text uses foreground */}
            <div className="text-xs tracking-widest uppercase font-semibold border border-[var(--accent-blue)] px-4 py-1.5 inline-block mb-4 sm:mb-6 text-[var(--foreground)] rounded-full">
              WHY US?
            </div>

            {/* Main Heading */}
            {/* UPDATED: Main text uses foreground */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--foreground)]">
              Unveiling The Success Of Our{" "}
              {/* UPDATED: Highlight uses primary brand variable */}
              <span className="text-[var(--primary)]">Clients</span>
            </h2>
          </div>
        </div>

        {/* --- Counter Component --- */}
        <div className="rounded-2xl mt-10">
          {/* The Counter component handles its own internal responsiveness */}
          <Counter />
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess;
