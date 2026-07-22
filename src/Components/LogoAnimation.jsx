// "use client"; // Required for Next.js App Router

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const LogoAnimation = ({ onComplete }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   // Colors extracted from the new SVG
//   const colorPurple = "#715FD9"; // .st0
//   const colorWhite = "#FFFFFF"; // .st1

//   // 1. Animation Settings
//   const draw = {
//     hidden: {
//       pathLength: 0,
//       opacity: 0,
//       fillOpacity: 0,
//     },
//     visible: (i) => ({
//       pathLength: 1,
//       opacity: 1,
//       fillOpacity: 1,
//       transition: {
//         pathLength: {
//           delay: i * 0.2, // Stagger effect
//           type: "spring",
//           duration: 1.5,
//           bounce: 0,
//         },
//         opacity: { delay: i * 0.2, duration: 0.01 },
//         // Fade in the solid color slightly after the stroke starts drawing
//         fillOpacity: { delay: i * 0.2 + 0.5, duration: 0.8 },
//       },
//     }),
//   };

//   useEffect(() => {
//     // Timer logic adjusted for the new complexity
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         if (onComplete) onComplete();
//       }, 600);
//     }, 3200); // Adjusted total duration

//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   // Splash screen container animation
//   const splashVariants = {
//     visible: {
//       opacity: 1,
//       transition: { duration: 0.3 },
//     },
//     hidden: {
//       opacity: 0,
//       transition: { duration: 0.6, ease: "easeInOut" },
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
//             viewBox="0 0 2500 2500" // Updated ViewBox for new SVG
//             width="300px"
//             height="300px"
//             initial="hidden"
//             animate="visible"
//             style={{
//               // Adjusted shadow to match the new purple color
//               filter: "drop-shadow(0px 0px 15px rgba(113, 95, 217, 0.5))",
//             }}
//           >
//             {/* CONVERSION NOTE:
//                Polygons have been converted to Paths (d="M... L... Z")
//                to allow the 'pathLength' drawing animation to work.
//             */}

//             {/* Shape 1: Right Polygon (Purple) */}
//             <motion.path
//               d="M1694.2,1189.6 L1347.7,1866.5 L2085,1866.5 L1743.4,1274.7 Z"
//               stroke={colorPurple}
//               strokeWidth="20"
//               fill={colorPurple}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               variants={draw}
//               custom={0}
//             />

//             {/* Shape 2: Left Polygon (White) */}
//             <motion.path
//               d="M767.9,1359.7 L421.4,682.8 L1158.7,682.8 L817.1,1274.7 Z"
//               stroke={colorWhite}
//               strokeWidth="20"
//               fill={colorWhite}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               variants={draw}
//               custom={1}
//             />

//             {/* Shape 3: Top/Middle Polygon (White) */}
//             <motion.path
//               d="M1555.3,977.6 L1062.7,1851.6 L743.9,1851.6 L1072.8,1282.1 L1401.6,712.6 L1546.4,963.2 Z"
//               stroke={colorWhite}
//               strokeWidth="20"
//               fill={colorWhite}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               variants={draw}
//               custom={2}
//             />

//             {/* Shape 4: Detailed Path (Purple) */}
//             <motion.path
//               d="M1555.3,977.6l-66.9-114.8l-564.6,988.8h155.9l484.5-859.7L1555.3,977.6z"
//               stroke={colorPurple}
//               strokeWidth="20"
//               fill={colorPurple}
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
//
//
//
"use client"; // Required for Next.js App Router

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LogoAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  // UPDATED: Use CSS Variables for Colors
  const colorPurple = "var(--secondary)"; // Adapts to theme (Purple)
  const colorWhite = "var(--foreground)"; // Adapts: White in Dark Mode, Dark in Light Mode

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
          // UPDATED: Background uses variable
          className="fixed inset-0 z-[9999] flex justify-center items-center bg-[var(--background)]"
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
              // UPDATED: Shadow uses variable color
              filter: "drop-shadow(0px 0px 15px var(--secondary))",
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

            {/* Shape 2: Left Polygon (White -> Foreground) */}
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

            {/* Shape 3: Top/Middle Polygon (White -> Foreground) */}
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
