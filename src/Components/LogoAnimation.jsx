// "use client"; // Required for Next.js App Router

// import React from "react";
// import { motion } from "framer-motion";

// const LogoAnimation = () => {
//   // 1. Animation Settings
//   // This controls how fast the line draws and fades in
//   const draw = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: (i) => ({
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay: i * 0.2, type: "spring", duration: 2, bounce: 0 },
//         opacity: { delay: i * 0.2, duration: 0.01 },
//       },
//     }),
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "50vh",
//         background: "#000",
//       }}
//     >
//       {/* 2. The SVG Container
//          IMPORTANT: Update the viewBox to match YOUR exported SVG file (e.g., "0 0 500 150")
//       */}
//       <motion.svg
//         width="600px"
//         height="200px"
//         viewBox="0 0 600 200"
//         initial="hidden"
//         animate="visible"
//         style={{
//           // This adds the "Neon Glow" effect seen on Octaloop
//           filter: "drop-shadow(0px 0px 8px rgba(0, 255, 255, 0.5))",
//         }}
//       >
//         {/* 3. Gradient Definition (The cyan/purple color) */}
//         <defs>
//           <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#00ffff" /> {/* Cyan */}
//             <stop offset="100%" stopColor="#ff00ff" /> {/* Purple */}
//           </linearGradient>
//         </defs>

//         {/* 4. The Logo Paths
//            Open your exported SVG file in Notepad/VSCode.
//            Copy the d="..." part from inside the <path> tag.
//            Paste it below.
//         */}

//         {/* Example: This acts as the first letter */}
//         <motion.path
//           d="M10,100 C10,100 50,0 90,100" // <--- PASTE YOUR 'd' CODE HERE
//           strokeWidth="4"
//           stroke="url(#neonGradient)" // Uses the gradient defined above
//           fill="transparent"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           variants={draw}
//           custom={0} // Start immediately
//         />

//         {/* If you have multiple letters (separate paths), duplicate this block */}
//         <motion.path
//           d="M120,100 L120,20" // <--- PASTE 2ND PATH HERE
//           strokeWidth="4"
//           stroke="url(#neonGradient)"
//           fill="transparent"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           variants={draw}
//           custom={1} // Delay this one slightly
//         />

//         {/* Add more <motion.path> blocks for every letter in your logo */}
//       </motion.svg>
//     </div>
//   );
// };

// export default LogoAnimation;

//
//
//
//
//
//
//
///
//
//
//
//
//
// "use client"; // Required for Next.js App Router

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const LogoAnimation = ({ onComplete }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   // 1. Animation Settings - Reduced timing for faster animation
//   const draw = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: (i) => ({
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: {
//           delay: i * 0.15, // Reduced from 0.3 to 0.15
//           type: "spring",
//           duration: 1.2, // Reduced from 2.5 to 1.2
//           bounce: 0,
//         },
//         opacity: { delay: i * 0.15, duration: 0.01 },
//       },
//     }),
//   };

//   // Calculate total animation duration: last path starts at 3 * 0.15 = 0.45s, duration 1.2s = ~1.65s total
//   // Add 0.5 second hold time before fade out
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//       // Wait for fade-out animation to complete before calling onComplete
//       setTimeout(() => {
//         if (onComplete) onComplete();
//       }, 600); // Reduced fade-out duration
//     }, 2800); // Total: ~1.65s animation + 0.5s hold + 0.6s fade = ~2.8s

//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   // Splash screen container animation
//   const splashVariants = {
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.3,
//       },
//     },
//     hidden: {
//       opacity: 0,
//       transition: {
//         duration: 0.6, // Reduced from 0.8 to 0.6
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           className="fixed inset-0 z-[9999] flex justify-center items-center bg-[#0B0219]"
//           initial="visible"
//           animate="visible"
//           exit="hidden"
//           variants={splashVariants}
//         >
//           <motion.svg
//             viewBox="0 0 1040 1040"
//             width="300px"
//             height="300px"
//             initial="hidden"
//             animate="visible"
//             style={{
//               filter: "drop-shadow(0px 0px 10px rgba(123, 113, 219, 0.6))",
//             }}
//           >
//             <defs>
//               <linearGradient
//                 id="neonGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop offset="0%" stopColor="#7B71DB" />{" "}
//                 {/* Primary theme purple */}
//                 <stop offset="50%" stopColor="#7873DA" />{" "}
//                 {/* Secondary purple */}
//                 <stop offset="100%" stopColor="#6A5ACD" />{" "}
//                 {/* Gradient end purple */}
//               </linearGradient>
//             </defs>

//             {/* Path 1 */}
//             <motion.path
//               d="M1009.75,867.24c-147.01,0-291,0-437.5,0 c68.43-133.17,136.13-264.92,205.52-399.95C855.66,601.57,932.01,733.21,1009.75,867.24z"
//               strokeWidth="10"
//               stroke="url(#neonGradient)"
//               fill="transparent"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               variants={draw}
//               custom={0}
//             />

//             {/* Path 2 */}
//             <motion.path
//               d="M232.59,571.14 c-16.13-31.34-30.93-60.13-45.75-88.9C136.32,384.1,85.82,285.95,35.27,187.83c-7.79-15.11-7.88-15.07,9.57-15.07 c134.43,0,268.86,0,403.28,0c4.13,0,8.26,0,15.55,0C386.57,305.7,310.43,436.94,232.59,571.14z"
//               strokeWidth="10"
//               stroke="url(#neonGradient)"
//               fill="transparent"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               variants={draw}
//               custom={1}
//             />

//             {/* Path 3 */}
//             <motion.path
//               d="M320.16,857.22c-27.99,2.78-56.05,0.95-84.08,1.17 c-11.28,0.09-14.08-4.76-8.36-14.91c12.33-21.85,25.66-43.14,38.17-64.9c35.95-62.57,71.47-125.38,107.57-187.86 c64.36-111.4,129.02-222.63,193.58-333.92c10.8-18.62,22.06-36.99,32.44-55.85c4.89-8.88,7.94-8.19,12.45-0.04 c14.62,26.42,29.49,52.7,44.27,79.03c-26.16,44.44-52.51,88.77-78.42,133.35c-16.33,28.1-32.19,56.47-47.89,84.93 c-14.67,26.58-32.17,51.66-45.87,78.56c-25,49.07-52.77,96.58-79.02,144.93c-18.87,34.77-40.52,68.02-59.29,102.94 C339.28,836.59,333.33,850.04,320.16,857.22z"
//               strokeWidth="10"
//               stroke="url(#neonGradient)"
//               fill="transparent"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               variants={draw}
//               custom={2}
//             />

//             {/* Path 4 */}
//             <motion.path
//               d="M320.16,857.22c13.17-7.18,19.12-20.62,25.54-32.56 c18.77-34.92,40.42-68.17,59.29-102.94c26.24-48.35,54.01-95.86,79.02-144.93c13.71-26.9,31.21-51.99,45.87-78.56 c15.7-28.45,31.57-56.83,47.89-84.93c25.91-44.58,52.25-88.91,78.42-133.35c4.13-0.04,5.09,3.41,6.64,6.1 c7.78,13.49,13.74,28.5,23.64,40.19c17.26,20.38,12.18,36.94,0.01,58.12c-87.44,152.27-173.69,305.22-259.74,458.29 c-7.24,12.89-14.94,18.16-29.9,17.11c-21.09-1.48-42.37-0.27-63.56-0.45C328.88,859.26,324.02,861,320.16,857.22z"
//               strokeWidth="10"
//               stroke="url(#neonGradient)"
//               fill="transparent"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               variants={draw}
//               custom={3}
//             />
//           </motion.svg>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default LogoAnimation;

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
"use client"; // Required for Next.js App Router

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LogoAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Colors extracted from the new SVG
  const colorPurple = "#715FD9"; // .st0
  const colorWhite = "#FFFFFF"; // .st1

  // 1. Animation Settings
  const draw = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      fillOpacity: 0,
    },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      fillOpacity: 1,
      transition: {
        pathLength: {
          delay: i * 0.2, // Stagger effect
          type: "spring",
          duration: 1.5,
          bounce: 0,
        },
        opacity: { delay: i * 0.2, duration: 0.01 },
        // Fade in the solid color slightly after the stroke starts drawing
        fillOpacity: { delay: i * 0.2 + 0.5, duration: 0.8 },
      },
    }),
  };

  useEffect(() => {
    // Timer logic adjusted for the new complexity
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    }, 3200); // Adjusted total duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Splash screen container animation
  const splashVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex justify-center items-center bg-[#0B0219]"
          initial="visible"
          animate="visible"
          exit="hidden"
          variants={splashVariants}
        >
          <motion.svg
            viewBox="0 0 2500 2500" // Updated ViewBox for new SVG
            width="300px"
            height="300px"
            initial="hidden"
            animate="visible"
            style={{
              // Adjusted shadow to match the new purple color
              filter: "drop-shadow(0px 0px 15px rgba(113, 95, 217, 0.5))",
            }}
          >
            {/* CONVERSION NOTE:
               Polygons have been converted to Paths (d="M... L... Z") 
               to allow the 'pathLength' drawing animation to work.
            */}

            {/* Shape 1: Right Polygon (Purple) */}
            <motion.path
              d="M1694.2,1189.6 L1347.7,1866.5 L2085,1866.5 L1743.4,1274.7 Z"
              stroke={colorPurple}
              strokeWidth="20"
              fill={colorPurple}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={draw}
              custom={0}
            />

            {/* Shape 2: Left Polygon (White) */}
            <motion.path
              d="M767.9,1359.7 L421.4,682.8 L1158.7,682.8 L817.1,1274.7 Z"
              stroke={colorWhite}
              strokeWidth="20"
              fill={colorWhite}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={draw}
              custom={1}
            />

            {/* Shape 3: Top/Middle Polygon (White) */}
            <motion.path
              d="M1555.3,977.6 L1062.7,1851.6 L743.9,1851.6 L1072.8,1282.1 L1401.6,712.6 L1546.4,963.2 Z"
              stroke={colorWhite}
              strokeWidth="20"
              fill={colorWhite}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={draw}
              custom={2}
            />

            {/* Shape 4: Detailed Path (Purple) */}
            <motion.path
              d="M1555.3,977.6l-66.9-114.8l-564.6,988.8h155.9l484.5-859.7L1555.3,977.6z"
              stroke={colorPurple}
              strokeWidth="20"
              fill={colorPurple}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={draw}
              custom={3}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoAnimation;
