// import React from "react";
// import { motion } from "framer-motion";
// import { Lightbulb } from "lucide-react";

// const VisionWatermark = () => {
//   return (
//     <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[var(--background)] overflow-hidden">
      
//       {/* 1. BACKGROUND WATERMARK (The "Texture") */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none flex justify-center items-center z-0">
//         <span
//           className="text-[15vw] md:text-[18vw] font-black text-[var(--foreground)] opacity-[0.03] leading-none tracking-tighter"
//           style={{ whiteSpace: 'nowrap' }}
//         >
//           VISION
//         </span>
//       </div>

//       {/* 2. FOREGROUND CONTENT */}
//       <div className="relative z-10 max-w-3xl mx-auto text-center">
        
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-8"
//         >
//           <Lightbulb className="w-6 h-6" />
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-8 leading-tight"
//         >
//           We are building the <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
//             operating system for growth.
//           </span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-xl text-[var(--foreground-muted)] leading-relaxed"
//         >
//           Our long-term vision is to democratize high-availability architecture.
//           We believe that in the next decade, every company will be a software company,
//           and we will be the foundation they build upon.
//         </motion.p>

//       </div>
//     </section>
//   );
// };

// export default VisionWatermark;

//
//
//
//
//
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
import { Lightbulb } from "lucide-react";

const VisionWatermark = () => {
  return (
    // Changed 'py-32' to 'pt-0 pb-32' to remove top padding
    <section className="relative pt-0 pb-32 px-4 sm:px-6 lg:px-8 bg-[var(--background)] overflow-hidden">
      
      {/* 1. BACKGROUND WATERMARK (The "Texture") */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none flex justify-center items-center z-0">
        <span 
          className="text-[15vw] md:text-[18vw] font-black text-[var(--foreground)] opacity-[0.03] leading-none tracking-tighter"
          style={{ whiteSpace: 'nowrap' }}
        >
          VISION
        </span>
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-8"
        >
          <Lightbulb className="w-6 h-6" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-8 leading-tight"
        >
          We are building the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
            operating system for growth.
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-[var(--foreground-muted)] leading-relaxed"
        >
          Our long-term vision is to democratize high-availability architecture. 
          We believe that in the next decade, every company will be a software company, 
          and we will be the foundation they build upon.
        </motion.p>

      </div>
    </section>
  );
};

export default VisionWatermark;