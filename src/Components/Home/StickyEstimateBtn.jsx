import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

const StickyEstimateBtn = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-8 right-8 z-50 hidden md:block"
    >
      <Link href="/resources/project-estimate">
        <button className="group flex items-center gap-3 pl-4 pr-6 py-3 bg-[var(--primary)] text-white rounded-full shadow-lg shadow-purple-500/30 hover:scale-105 transition-all duration-300">
          <div className="bg-white/20 p-2 rounded-full">
            <Calculator size={20} className="text-white" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] font-medium opacity-80 uppercase tracking-wider">
              Get an Estimate
            </span>
            <span className="block text-sm font-bold leading-none">
              Project Cost Calculator
            </span>
          </div>
        </button>
      </Link>
    </motion.div>
  );
};

export default StickyEstimateBtn;