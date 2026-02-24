import React from "react";
import Link from "next/link";
import { Wrench, TrendingUp, ArrowRight } from "lucide-react";

const CaseStudyCard = ({ title, problem, imageSrc, client, solution, result, projectUrl }) => {
  return (
    // CHANGE: Width is now 85vw on mobile, 350px on tablet, 400px on desktop
    <div className="w-[85vw] sm:w-[350px] md:w-[400px] h-full relative group snap-center">
      
      {/* CARD CONTAINER */}
      <div className="bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--border-color)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        
        {/* 1. IMAGE */}
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url('${imageSrc || "/api/placeholder/400/300"}')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        </div>

        {/* 2. CONTENT - Reduced padding on mobile (p-4) vs desktop (sm:p-6) */}
        <div className="p-4 sm:p-6 text-[var(--foreground)] flex flex-col flex-grow text-center">
          
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 line-clamp-2">{title}</h3>
          
          {/* Problem / Description */}
          <div className="mb-4 sm:mb-6 flex-grow">
            <span className="block text-[10px] sm:text-xs font-bold text-[var(--foreground-muted)] uppercase tracking-wider mb-1">
              The Challenge
            </span>
            <p className="text-sm text-[var(--foreground-muted)] line-clamp-3">
              {problem || "Description of the business problem goes here..."}
            </p>
          </div>

          {/* Details Section */}
          <div className="text-sm space-y-2 sm:space-y-3 mb-4 sm:mb-6 border-t border-b border-[var(--border-color)] py-3 sm:py-4 flex flex-col items-start text-left w-full">
            
            {/* Solution */}
            <div className="flex items-start gap-2 text-[var(--foreground-muted)]">
              <Wrench className="w-4 h-4 mt-0.5 text-[var(--secondary)] shrink-0" />
              <span>
                <span className="font-semibold text-[var(--foreground)]">Solution: </span> 
                {solution || "Custom Architecture"}
              </span>
            </div>

            {/* Result */}
            <div className="flex items-start gap-2 text-[var(--foreground-muted)]">
              <TrendingUp className="w-4 h-4 mt-0.5 text-[var(--secondary)] shrink-0" />
              <span>
                <span className="font-semibold text-[var(--foreground)]">Result: </span> 
                {result || "Pending Metrics"}
              </span>
            </div>
          </div>

          {/* 3. BUTTON SECTION */}
          <div className="mt-auto">
            <Link
              href={projectUrl || "#"}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 sm:py-3 bg-[var(--secondary)] hover:bg-[var(--primary)] text-white text-sm sm:text-base font-medium rounded-lg transition-colors duration-200"
            >
              <ArrowRight className="w-4 h-4" />
              View Case Study
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;