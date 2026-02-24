// import React from "react";
// import { motion } from "framer-motion";
// import { Target } from "lucide-react";

// const MissionSection = () => {
//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
//       <div className="max-w-5xl mx-auto">
        
//         {/* LABEL */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex items-center gap-2 mb-8"
//         >
//           <div className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
//             <Target className="w-5 h-5" />
//           </div>
//           <span className="text-sm font-bold tracking-widest uppercase text-[var(--foreground-muted)]">
//             Our Mission
//           </span>
//         </motion.div>

//         {/* HEADLINE STATEMENT */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-4xl md:text-6xl font-bold leading-tight text-[var(--foreground)] mb-8"
//         >
//           We bridge the gap between <br className="hidden md:block" />
//           <span className="text-[var(--foreground-muted)]">complex technical challenges</span> and <br className="hidden md:block" />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
//             business value.
//           </span>
//         </motion.h1>

//         {/* SUPPORTING TEXT */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-[var(--border-color)] pt-8"
//         >
//           <div className="md:col-span-2">
//             <p className="text-xl leading-relaxed text-[var(--foreground)]">
//               We believe that great software engineering is not just about writing code—it's about creating systems that are resilient, scalable, and secure by design.
//             </p>
//           </div>
//           <div className="md:col-span-1">
//             <p className="text-base leading-relaxed text-[var(--foreground-muted)]">
//               Our goal is to be the technical partner that allows you to stop worrying about infrastructure and start focusing on innovation.
//             </p>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default MissionSection;
//
//
//
//
//
//
//
//
import React from "react";
import { motion } from "framer-motion";
import { Flag, ShieldCheck, Zap } from "lucide-react";

const MissionSplit = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)] mb-6">
            Who We Are
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
            Engineering meaningful <br />
            <span className="text-[var(--secondary)]">digital transformation.</span>
          </h1>
          
          <p className="text-lg text-[var(--foreground-muted)] mb-8 leading-relaxed">
            In a world of rapid technological change, stability is our currency. 
            We exist to provide the engineering rigor required to build platforms 
            that last, scale, and perform under pressure.
          </p>

          {/* Core Values Mini-List */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-medium text-[var(--foreground)]">Security First Mindset</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)]">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-medium text-[var(--foreground)]">Performance Optimization</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: VISUAL METAPHOR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Abstract Shape Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-3xl blur-3xl transform rotate-6" />
          
          {/* Card Container */}
          <div className="relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 md:p-12 shadow-2xl">
             <Flag className="w-16 h-16 text-[var(--primary)] mb-6" />
             <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
               Our Commitment
             </h3>
             <p className="text-[var(--foreground-muted)] leading-relaxed">
               "To deliver engineering excellence that empowers our clients to scale without technical debt, ensuring that every line of code serves a business purpose."
             </p>
             
             {/* Signature / Decorative Line */}
             <div className="mt-8 h-1 w-24 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionSplit;