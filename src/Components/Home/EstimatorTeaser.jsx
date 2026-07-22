import React from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Clock, DollarSign } from "lucide-react";

const EstimatorTeaser = () => {
  return (
    <section className="relative w-full py-20 px-4">
      {/* bg-[var(--card-bg)] automatically handles light/dark mode 
        based on your global.css definitions 
      */}
      <div className="max-w-5xl mx-auto bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
        {/* Replaced hardcoded green/purple with theme variables.
          Using Tailwind's opacity utilities to manage the 5% / 10% values.
        */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-5 dark:opacity-10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--secondary)] opacity-5 dark:opacity-10 rounded-full blur-[80px]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-3/5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              Curious about costs?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              Stop guessing. Use our{" "}
              <strong>Interactive Project Planner</strong> to define your
              features, timeline, and get an instant budget estimate range for
              your custom software.
            </p>

            <div className="flex gap-6 text-sm font-medium text-[var(--foreground-muted)]">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[var(--primary)]" />
                <span>Takes 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Swapped hardcoded green for --secondary to match whatever theme is active */}
                <DollarSign size={16} className="text-[var(--secondary)]" />
                <span>Instant ball-park</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-end">
            <Link href="/resources/project-estimate">
              <button className="flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--primary)] text-white  font-bold text-lg hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all hover:scale-105 shadow-xl">
                <Calculator size={20} />
                <span>Start Estimator</span>
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimatorTeaser;
