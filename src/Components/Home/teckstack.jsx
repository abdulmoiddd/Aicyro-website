// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// // Defined explicitly to handle the sizing of the new logos
// const LOGO_WRAPPER_CLASS = "relative h-12 w-32 sm:h-16 sm:w-48 flex items-center justify-center";

// // --- TECH STACK SVGS ---

// // 1. NEXT.JS
// const LogoNextJS = () => (
//   <svg viewBox="0 0 180 180" className="w-10 h-10 sm:w-12 sm:h-12 fill-[var(--foreground)]" xmlns="http://www.w3.org/2000/svg">
//     <path fillRule="evenodd" clipRule="evenodd" d="M180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90ZM53.0123 138.802L124.636 46.1777H107.512L39.7051 133.58C43.7634 135.539 48.2711 137.409 53.0123 138.802ZM128.799 133.684L76.1646 64.9531H64.9541V115.047H76.4541V84.6973L123.824 146.121C125.604 142.174 127.311 138.025 128.799 133.684ZM137.545 115.047V64.9531H126.045V115.047H137.545Z"/>
//   </svg>
// );

// // 2. REACT
// const LogoReact = () => (
//   <svg viewBox="0 0 840 840" className="w-10 h-10 sm:w-14 sm:h-14 fill-[var(--primary)]" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="420" cy="420" r="60" fill="currentColor"/>
//     <g stroke="currentColor" strokeWidth="25" fill="none">
//       <ellipse cx="420" cy="420" rx="200" ry="510"/>
//       <ellipse cx="420" cy="420" rx="200" ry="510" transform="rotate(60 420 420)"/>
//       <ellipse cx="420" cy="420" rx="200" ry="510" transform="rotate(120 420 420)"/>
//     </g>
//   </svg>
// );

// // 3. NODE.JS
// const LogoNode = () => (
//   <svg viewBox="0 0 256 154" className="w-full h-full fill-[var(--foreground)]" xmlns="http://www.w3.org/2000/svg">
//     <path d="M128 0L0 74L23 87L128 27L233 87L256 74L128 0Z" opacity="0.5"/>
//     <path d="M128 26.6L34.2 80.4V172.6L128 226.4L221.8 172.6V80.4L128 26.6ZM203 161.8L128 204.8L53 161.8V91.2L128 48.2L203 91.2V161.8Z" transform="translate(0 -26)" clipRule="evenodd" fillRule="evenodd"/>
//     <path d="M185 91L128 124L71 91V109L128 142L185 109V91Z"/>
//   </svg>
// );

// // 4. PYTHON
// const LogoPython = () => (
//   <svg viewBox="0 0 256 255" className="w-10 h-10 sm:w-12 sm:h-12" xmlns="http://www.w3.org/2000/svg">
//     <path fill="#4B8BBE" d="M126.916 2.12c-35.02 0-32.85 15.36-32.85 15.36V39.4h33.64v4.75H47.16s-20.9 2.5-20.9 20.35v29.65s-.8 13.9 13.06 13.9h12.55v-18s-1.07-20.9 20.65-20.9h30.85v43.5h-41.2s-24.96.9-24.96 24.32v34.9s-.4 15.15 15.82 15.15h15.4v-4.9H53.1s-7.1 1.05-7.1-10.25V147.2s.3-11.8 11.8-11.8h56.4s11.3-.76 11.3-11.3V80h18.6s17.9-.55 17.9-19.1V22.25s.65-20.1-25.1-20.1h-10.1zM93.3 11.4c2.86 0 5.17 2.3 5.17 5.16 0 2.87-2.3 5.18-5.17 5.18-2.86 0-5.16-2.3-5.16-5.17 0-2.86 2.3-5.17 5.16-5.17z"/>
//     <path fill="#FFD43B" d="M129.2 253.08c35.03 0 32.86-15.37 32.86-15.37v-21.9h-33.64v-4.75h80.54s20.9-2.5 20.9-20.35v-29.66s.8-13.9-13.06-13.9h-12.55v18.02s1.07 20.9-20.65 20.9h-30.85v-43.5h41.2s24.96-.9 24.96-24.33v-34.9s.4-15.15-15.82-15.15h-15.4v4.9h15.4s7.1-1.05 7.1 10.25v24.64s-.3 11.8-11.8 11.8h-56.4s-11.3.76-11.3 11.3v44.1h-18.6s-17.9.55-17.9 19.1v38.64s-.65 20.13 25.1 20.13h10.1zm33.62-9.28c-2.87 0-5.18-2.3-5.18-5.16 0-2.87 2.3-5.17 5.18-5.17 2.86 0 5.16 2.3 5.16 5.17 0 2.86-2.3 5.16-5.16 5.16z"/>
//   </svg>
// );

// // 5. AWS
// const LogoAWS = () => (
//   <svg viewBox="0 0 100 60" className="w-full h-full fill-[var(--foreground)]" xmlns="http://www.w3.org/2000/svg">
//     <path d="M72.3 35.5c-0.2 0-0.4 0-0.6-0.1c-1.8-1-2.9-2.9-2.9-5V17.3l-8.5 23.9c-0.5 1.5-1.9 2.5-3.5 2.5h-0.2c-1.6 0-3-1-3.5-2.5L44.6 17.3v13.1c0 2-1.1 3.9-2.9 5c-0.2 0.1-0.4 0.1-0.6 0.1h-8.2V11.2h12.5l5.9 17l5.9-17h12.5v24.3H72.3z M27 35.5h-9.8l-1.9-5.7H6.9l-1.9 5.7H-4.8l9.8-24.3h12.3L27 35.5z M13.1 22.8L11 16.5l-2.1 6.3H13.1z M94.8 28.1c0 2.1-1.1 3.1-3.4 3.1c-1.3 0-2.8-0.4-4.5-1.2l-2.1 5.9c2.3 1 4.9 1.5 7.9 1.5c4.1 0 7.3-1.1 9.4-3.2c2.1-2.2 3.2-5.4 3.2-9.8c0-4.3-1-7.5-3.1-9.6c-2.1-2.1-5.1-3.1-8.9-3.1c-3.1 0-6.1 0.7-8.9 2l2.3 6.3c1.9-0.9 3.8-1.3 5.7-1.3c2 0 3.5 0.5 4.6 1.4c1.1 1 1.6 2.4 1.6 4.3c0 0.8-0.1 1.4-0.4 2c-1.8-0.8-4.1-1.2-6.8-1.2c-3.6 0-6.3 0.8-8.1 2.3c-1.8 1.5-2.7 3.6-2.7 6.3c0 2.4 0.8 4.3 2.5 5.6c1.7 1.3 3.9 2 6.7 2c2.4 0 4.5-0.5 6.4-1.4L94.8 28.1z M92.5 23.6c0 0.4-0.1 0.7-0.2 1c-0.2 0.3-0.5 0.6-0.9 0.8c-0.4 0.2-1.1 0.3-2 0.3c-1.6 0-2.3-0.6-2.3-1.8c0-0.6 0.3-1.1 0.8-1.4c0.5-0.3 1.5-0.5 2.8-0.5C91.4 22 92 22.5 92.5 23.6z"/>
//     <path d="M51.9 49.6c16.3 0 30.6-5.8 38-14.3c0.6-0.7 1.7-0.8 2.5-0.2c0.7 0.6 0.8 1.6 0.2 2.4c-8.6 9.8-24.5 16.2-42.5 16.2c-12.7 0-24.4-3.2-32.9-8.5c-0.8-0.5-1-1.5-0.5-2.3c0.5-0.8 1.5-1 2.3-0.5C26.5 47 37.3 49.6 51.9 49.6z M86.4 39.8l5 4.6l-6.8 0.4C85.1 43.1 85.6 41.3 86.4 39.8z" fill="#FF9900"/>
//   </svg>
// );

// // 6. AI/ML (Brain Circuit)
// const LogoAI = () => (
//   <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 stroke-[var(--foreground)] fill-none stroke-[1.5]" xmlns="http://www.w3.org/2000/svg">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V12" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 8H12.01" />
//     <circle cx="9" cy="10" r="1.5" className="fill-[var(--primary)] stroke-none" />
//     <circle cx="15" cy="10" r="1.5" className="fill-[var(--secondary)] stroke-none" />
//     <circle cx="12" cy="15" r="1.5" className="fill-[var(--foreground)] stroke-none" />
//     <path d="M9 10L12 15L15 10" />
//     <path d="M12 2V5" />
//   </svg>
// );

// // 7. CYBERSECURITY (Shield Lock)
// const LogoSecurity = () => (
//   <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 stroke-[var(--foreground)] fill-none stroke-[1.5]" xmlns="http://www.w3.org/2000/svg">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
//     <rect x="9" y="10" width="6" height="5" rx="1" className="fill-[var(--primary)] stroke-none" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10V8.5C10.5 7.67 11.17 7 12 7C12.83 7 13.5 7.67 13.5 8.5V10" />
//   </svg>
// );

// // --- DATA STRUCTURE ---
// const TECH_STACK = [
//   { name: "Next.js", component: <LogoNextJS /> },
//   { name: "React", component: <LogoReact /> },
//   { name: "Node.js", component: <LogoNode /> },
//   { name: "Python", component: <LogoPython /> },
//   { name: "AWS", component: <LogoAWS /> },
//   { name: "AI/ML", component: <LogoAI /> },
//   { name: "Cybersecurity", component: <LogoSecurity /> },
// ];

// const ClientLoo = () => {
//   // Infinite scroll duplication
//   const marqueeList = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

//   return (
//     <section className="w-full bg-[var(--background)] py-10 relative z-20 overflow-hidden transition-colors duration-300">
      
//       {/* 1. Subtle Borders */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--foreground)] opacity-10" />
//       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--foreground)] opacity-10" />

//       {/* 2. Container */}
//       <div className="max-w-[100vw] mx-auto">
        
//         {/* Header Text */}
//         <div className="text-center mb-8">
//           <p className="text-xs font-bold tracking-[0.25em] text-[var(--foreground)] uppercase opacity-60">
//              Technologies We Build With
//           </p>
//         </div>

//         {/* 3. Marquee Area */}
//         <div
//           className="relative flex overflow-hidden"
//           // CSS Mask for edge fading
//           style={{
//             maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
//             WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
//           }}
//         >
//           <motion.div
//             className="flex items-center gap-12 sm:gap-16 md:gap-24 px-12"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               repeat: Infinity,
//               ease: "linear",
//               duration: 35, // Adjusted speed for number of items
//             }}
//           >
//             {marqueeList.map((tech, index) => (
//               <LogoItem key={index} tech={tech} />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- SUB-COMPONENT: Individual Item ---
// const LogoItem = ({ tech }) => {
//   return (
//     <div className="group relative flex flex-col items-center justify-center min-w-[100px]">
      
//       {/* Icon Wrapper */}
//       <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 scale-100 group-hover:scale-110">
//         {tech.component}
//       </div>

//       {/* Label (Always visible for tech stack, or hover-only based on preference. Here: visible but subtle) */}
//       <div className="mt-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
//          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
//            {tech.name}
//          </span>
//       </div>

//       {/* Glow Effect */}
//       <div className="absolute inset-0 bg-[var(--primary)]/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
      
//     </div>
//   );
// };

// export default ClientLoo;

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
//
//
//
//
//
//
// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// // --- CSS STYLES FOR THEME SWITCHING ---
// // This style tag handles the color logic based on your [data-theme='light'] setup.
// // Default (Dark Mode) = White Logos.
// // Light Mode = Original Colors.
// const LogoStyles = () => (
//   <style jsx global>{`
//     .tech-logo-svg {
//       transition: filter 0.3s ease, opacity 0.3s ease;
//       /* DEFAULT (Dark Mode): Turn everything to Pure White */
//       filter: brightness(0) invert(1);
//     }
    
//     /* LIGHT MODE OVERRIDE: Remove filter to show Original Colors */
//     [data-theme='light'] .tech-logo-svg {
//       filter: none;
//     }
//   `}</style>
// );

// // --- TECH STACK SVGS (With Original Brand Colors) ---

// // 1. NEXT.JS (Original: Black)
// const LogoNextJS = () => (
//   <svg viewBox="0 0 180 180" className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg" xmlns="http://www.w3.org/2000/svg">
//     <path fill="#000000" fillRule="evenodd" clipRule="evenodd" d="M180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90ZM53.0123 138.802L124.636 46.1777H107.512L39.7051 133.58C43.7634 135.539 48.2711 137.409 53.0123 138.802ZM128.799 133.684L76.1646 64.9531H64.9541V115.047H76.4541V84.6973L123.824 146.121C125.604 142.174 127.311 138.025 128.799 133.684ZM137.545 115.047V64.9531H126.045V115.047H137.545Z"/>
//   </svg>
// );

// // 2. REACT (Original: Cyan Blue)
// const LogoReact = () => (
//   <svg viewBox="0 0 840 840" className="w-10 h-10 sm:w-14 sm:h-14 tech-logo-svg" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="420" cy="420" r="60" fill="#61DAFB"/>
//     <g stroke="#61DAFB" strokeWidth="25" fill="none">
//       <ellipse cx="420" cy="420" rx="200" ry="510"/>
//       <ellipse cx="420" cy="420" rx="200" ry="510" transform="rotate(60 420 420)"/>
//       <ellipse cx="420" cy="420" rx="200" ry="510" transform="rotate(120 420 420)"/>
//     </g>
//   </svg>
// );

// // 3. NODE.JS (Original: Green & Dark Grey)
// const LogoNode = () => (
//   <svg viewBox="0 0 256 154" className="w-full h-full tech-logo-svg" xmlns="http://www.w3.org/2000/svg">
//     <path d="M128 0L0 74L23 87L128 27L233 87L256 74L128 0Z" fill="#333333" opacity="0.5"/>
//     <path d="M128 26.6L34.2 80.4V172.6L128 226.4L221.8 172.6V80.4L128 26.6ZM203 161.8L128 204.8L53 161.8V91.2L128 48.2L203 91.2V161.8Z" transform="translate(0 -26)" clipRule="evenodd" fillRule="evenodd" fill="#339933"/>
//     <path d="M185 91L128 124L71 91V109L128 142L185 109V91Z" fill="#333333"/>
//   </svg>
// );

// // 4. PYTHON (Original: Blue & Yellow)
// const LogoPython = () => (
//   <svg viewBox="0 0 256 255" className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg" xmlns="http://www.w3.org/2000/svg">
//     <path fill="#4B8BBE" d="M126.916 2.12c-35.02 0-32.85 15.36-32.85 15.36V39.4h33.64v4.75H47.16s-20.9 2.5-20.9 20.35v29.65s-.8 13.9 13.06 13.9h12.55v-18s-1.07-20.9 20.65-20.9h30.85v43.5h-41.2s-24.96.9-24.96 24.32v34.9s-.4 15.15 15.82 15.15h15.4v-4.9H53.1s-7.1 1.05-7.1-10.25V147.2s.3-11.8 11.8-11.8h56.4s11.3-.76 11.3-11.3V80h18.6s17.9-.55 17.9-19.1V22.25s.65-20.1-25.1-20.1h-10.1zM93.3 11.4c2.86 0 5.17 2.3 5.17 5.16 0 2.87-2.3 5.18-5.17 5.18-2.86 0-5.16-2.3-5.16-5.17 0-2.86 2.3-5.17 5.16-5.17z"/>
//     <path fill="#FFD43B" d="M129.2 253.08c35.03 0 32.86-15.37 32.86-15.37v-21.9h-33.64v-4.75h80.54s20.9-2.5 20.9-20.35v-29.66s.8-13.9-13.06-13.9h-12.55v18.02s1.07 20.9-20.65 20.9h-30.85v-43.5h41.2s24.96-.9 24.96-24.33v-34.9s.4-15.15-15.82-15.15h-15.4v4.9h15.4s7.1-1.05 7.1 10.25v24.64s-.3 11.8-11.8 11.8h-56.4s-11.3.76-11.3 11.3v44.1h-18.6s-17.9.55-17.9 19.1v38.64s-.65 20.13 25.1 20.13h10.1zm33.62-9.28c-2.87 0-5.18-2.3-5.18-5.16 0-2.87 2.3-5.17 5.18-5.17 2.86 0 5.16 2.3 5.16 5.16 5.16z"/>
//   </svg>
// );

// // 5. AWS (Original: Black & Orange)
// const LogoAWS = () => (
//   <svg viewBox="0 0 100 60" className="w-full h-full tech-logo-svg" xmlns="http://www.w3.org/2000/svg">
//     <path d="M72.3 35.5c-0.2 0-0.4 0-0.6-0.1c-1.8-1-2.9-2.9-2.9-5V17.3l-8.5 23.9c-0.5 1.5-1.9 2.5-3.5 2.5h-0.2c-1.6 0-3-1-3.5-2.5L44.6 17.3v13.1c0 2-1.1 3.9-2.9 5c-0.2 0.1-0.4 0.1-0.6 0.1h-8.2V11.2h12.5l5.9 17l5.9-17h12.5v24.3H72.3z M27 35.5h-9.8l-1.9-5.7H6.9l-1.9 5.7H-4.8l9.8-24.3h12.3L27 35.5z M13.1 22.8L11 16.5l-2.1 6.3H13.1z M94.8 28.1c0 2.1-1.1 3.1-3.4 3.1c-1.3 0-2.8-0.4-4.5-1.2l-2.1 5.9c2.3 1 4.9 1.5 7.9 1.5c4.1 0 7.3-1.1 9.4-3.2c2.1-2.2 3.2-5.4 3.2-9.8c0-4.3-1-7.5-3.1-9.6c-2.1-2.1-5.1-3.1-8.9-3.1c-3.1 0-6.1 0.7-8.9 2l2.3 6.3c1.9-0.9 3.8-1.3 5.7-1.3c2 0 3.5 0.5 4.6 1.4c1.1 1 1.6 2.4 1.6 4.3c0 0.8-0.1 1.4-0.4 2c-1.8-0.8-4.1-1.2-6.8-1.2c-3.6 0-6.3 0.8-8.1 2.3c-1.8 1.5-2.7 3.6-2.7 6.3c0 2.4 0.8 4.3 2.5 5.6c1.7 1.3 3.9 2 6.7 2c2.4 0 4.5-0.5 6.4-1.4L94.8 28.1z M92.5 23.6c0 0.4-0.1 0.7-0.2 1c-0.2 0.3-0.5 0.6-0.9 0.8c-0.4 0.2-1.1 0.3-2 0.3c-1.6 0-2.3-0.6-2.3-1.8c0-0.6 0.3-1.1 0.8-1.4c0.5-0.3 1.5-0.5 2.8-0.5C91.4 22 92 22.5 92.5 23.6z" fill="#232F3E"/>
//     <path d="M51.9 49.6c16.3 0 30.6-5.8 38-14.3c0.6-0.7 1.7-0.8 2.5-0.2c0.7 0.6 0.8 1.6 0.2 2.4c-8.6 9.8-24.5 16.2-42.5 16.2c-12.7 0-24.4-3.2-32.9-8.5c-0.8-0.5-1-1.5-0.5-2.3c0.5-0.8 1.5-1 2.3-0.5C26.5 47 37.3 49.6 51.9 49.6z M86.4 39.8l5 4.6l-6.8 0.4C85.1 43.1 85.6 41.3 86.4 39.8z" fill="#FF9900"/>
//   </svg>
// );

// // 6. AI/ML (Original: Tech Blue)
// const LogoAI = () => (
//   <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 stroke-[#3B82F6] fill-none stroke-[1.5] tech-logo-svg" xmlns="http://www.w3.org/2000/svg">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V12" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 8H12.01" />
//     <circle cx="9" cy="10" r="1.5" className="fill-[#3B82F6] stroke-none" />
//     <circle cx="15" cy="10" r="1.5" className="fill-[#8B5CF6] stroke-none" />
//     <circle cx="12" cy="15" r="1.5" className="fill-[#3B82F6] stroke-none" />
//     <path d="M9 10L12 15L15 10" />
//     <path d="M12 2V5" />
//   </svg>
// );

// // 7. CYBERSECURITY (Original: Emerald Green)
// const LogoSecurity = () => (
//   <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 stroke-[#10B981] fill-none stroke-[1.5] tech-logo-svg" xmlns="http://www.w3.org/2000/svg">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
//     <rect x="9" y="10" width="6" height="5" rx="1" className="fill-[#10B981] stroke-none" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10V8.5C10.5 7.67 11.17 7 12 7C12.83 7 13.5 7.67 13.5 8.5V10" />
//   </svg>
// );

// // --- DATA STRUCTURE ---
// const TECH_STACK = [
//   { name: "Next.js", component: <LogoNextJS /> },
//   { name: "React", component: <LogoReact /> },
//   { name: "Node.js", component: <LogoNode /> },
//   { name: "Python", component: <LogoPython /> },
//   { name: "AWS", component: <LogoAWS /> },
//   { name: "AI/ML", component: <LogoAI /> },
//   { name: "Cybersecurity", component: <LogoSecurity /> },
// ];

// const ClientLoo = () => {
//   const marqueeList = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

//   return (
//     <section className="w-full bg-[var(--background)] py-10 relative z-20 overflow-hidden transition-colors duration-300">
      
//       {/* Inject Styles */}
//       <LogoStyles />

//       {/* 1. Subtle Borders */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--foreground)] opacity-10" />
//       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--foreground)] opacity-10" />

//       {/* 2. Container */}
//       <div className="max-w-[100vw] mx-auto">
        
//         {/* Header Text */}
//         <div className="text-center mb-8">
//           <p className="text-xs font-bold tracking-[0.25em] text-[var(--foreground)] uppercase opacity-60">
//              Technologies We Build With
//           </p>
//         </div>

//         {/* 3. Marquee Area */}
//         <div
//           className="relative flex overflow-hidden"
//           style={{
//             maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
//             WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
//           }}
//         >
//           <motion.div
//             className="flex items-center gap-12 sm:gap-16 md:gap-24 px-12"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               repeat: Infinity,
//               ease: "linear",
//               duration: 35,
//             }}
//           >
//             {marqueeList.map((tech, index) => (
//               <LogoItem key={index} tech={tech} />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- SUB-COMPONENT: Individual Item ---
// const LogoItem = ({ tech }) => {
//   return (
//     <div className="group relative flex flex-col items-center justify-center min-w-[100px]">
      
//       {/* Icon Wrapper */}
//       <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center transition-all duration-300 scale-100 group-hover:scale-110">
//         {/* We removed grayscale so the filter handles the coloring logic */}
//         {tech.component}
//       </div>

//       {/* Label */}
//       <div className="mt-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
//          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
//            {tech.name}
//          </span>
//       </div>

//       {/* Glow Effect */}
//       <div className="absolute inset-0 bg-[var(--primary)]/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
      
//     </div>
//   );
// };

// export default ClientLoo;
//
//
//
//
///
//
//
///
//
//
////
///
//
///
//
//
//
//
//
//
// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// // --- CSS STYLES FOR THEME SWITCHING ---
// // Default (Dark Mode) = White Logos.
// // Light Mode = Original Colors.
// const LogoStyles = () => (
//   <style jsx global>{`
//     .tech-logo-svg {
//       transition: filter 0.3s ease, opacity 0.3s ease;
//       /* DEFAULT (Dark Mode): Turn everything to Pure White */
//       filter: brightness(0) invert(1);
//     }
    
//     /* LIGHT MODE OVERRIDE: Remove filter to show Original Colors */
//     [data-theme='light'] .tech-logo-svg {
//       filter: none;
//     }
//   `}</style>
// );

// // --- TECH STACK SVGS (Updated with provided SVGs) ---

// // 1. NEXT.JS
// const LogoNextJS = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <title>Next.js icon</title>
//     <path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z"/>
//   </svg>
// );

// // 2. REACT
// const LogoReact = () => (
//   <svg
//     viewBox="0 0 64 64"
//     className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <circle cx="32.001" cy="31.955" r="4.478" fill="#00d8ff"/>
//     <path d="M32.33,22.516c7.635,0.052 15.965,0.609 21.683,5.708c0.168,0.15 0.33,0.306 0.488,0.467c1.349,1.375 2.054,3.595 0.965,5.422c-2.234,3.751 -7.23,5.387 -12.067,6.394c-7.234,1.506 -14.798,1.518 -22.029,0.192c-4.161,-0.764 -8.416,-2.103 -11.373,-4.904c-1.151,-1.09 -2.135,-2.524 -1.981,-4.12c0.25,-2.582 2.727,-4.239 4.812,-5.361c5.791,-3.116 12.847,-3.813 19.502,-3.798Zm-0.554,1.173c-7.224,0.049 -15.043,0.51 -20.621,5.129c-0.195,0.161 -0.383,0.33 -0.564,0.507c-0.117,0.114 -0.23,0.233 -0.339,0.355c-0.979,1.1 -1.316,2.867 -0.392,4.188c0.93,1.329 2.342,2.288 3.796,3.07c5.438,2.924 11.864,3.443 18.129,3.465c6.343,0.023 12.884,-0.555 18.487,-3.452c2.232,-1.155 4.744,-2.851 4.655,-5.035c-0.082,-2.004 -2.036,-3.242 -3.499,-4.126c-0.396,-0.239 -0.803,-0.46 -1.216,-0.668c-5.562,-2.787 -12.08,-3.447 -18.436,-3.433Z" fill="#00d8ff"/>
//     <path d="M42.115,10.703c2.793,0.071 4.24,3.429 4.431,5.909c0.038,0.493 0.052,0.988 0.046,1.483c-0.006,0.536 -0.035,1.072 -0.082,1.606c-0.589,6.612 -3.608,12.909 -7.163,18.724c-3.477,5.688 -7.717,11.36 -13.485,13.996c-1.907,0.872 -4.175,1.41 -5.863,0.437c-2.314,-1.333 -2.567,-4.451 -2.524,-6.816c0.011,-0.581 0.049,-1.162 0.109,-1.741c0.889,-8.56 5.228,-16.669 10.658,-23.655c3.168,-4.076 6.937,-8.119 11.632,-9.583c0.739,-0.231 1.326,-0.371 2.241,-0.36Zm-0.134,1.172c-3.279,0.052 -6.223,2.482 -8.83,5.007c-6.854,6.637 -11.905,15.464 -13.937,24.721c-0.157,0.717 -0.289,1.439 -0.386,2.166c-0.075,0.563 -0.13,1.129 -0.159,1.697c-0.023,0.452 -0.031,0.905 -0.017,1.358c0.01,0.354 0.033,0.708 0.072,1.06c0.029,0.269 0.068,0.537 0.117,0.803c0.037,0.197 0.08,0.393 0.13,0.588c0.041,0.158 0.087,0.315 0.139,0.471c0.409,1.233 1.463,2.411 2.878,2.45c3.301,0.09 6.409,-2.317 9.096,-4.933c4.717,-4.591 8.232,-10.36 10.978,-16.424c2.216,-4.896 4.243,-10.218 3.111,-15.607c-0.043,-0.204 -0.093,-0.406 -0.15,-0.606c-0.047,-0.163 -0.1,-0.324 -0.158,-0.483c-0.44,-1.199 -1.475,-2.271 -2.884,-2.268Z" fill="#00d8ff"/>
//     <path d="M22.109,10.747c3.564,0.069 6.765,2.488 9.607,5.197c5.186,4.943 9.011,11.231 11.913,17.849c2.248,5.127 4.316,10.882 2.478,16.292c-0.579,1.705 -2.044,3.265 -3.997,3.305c-3.581,0.072 -6.9,-2.532 -9.78,-5.335c-7.225,-7.034 -12.589,-16.32 -14.427,-26.168c-0.132,-0.704 -0.237,-1.414 -0.309,-2.127c-0.059,-0.582 -0.096,-1.167 -0.106,-1.752c-0.008,-0.472 0.002,-0.944 0.035,-1.414c0.022,-0.314 0.054,-0.626 0.097,-0.937c0.041,-0.292 0.093,-0.583 0.158,-0.871c0.043,-0.191 0.091,-0.38 0.146,-0.568c0.539,-1.843 1.941,-3.485 4.185,-3.471Zm-0.135,1.173c-2.087,0.046 -3.042,2.507 -3.234,4.234c-0.039,0.354 -0.063,0.711 -0.074,1.068c-0.014,0.456 -0.008,0.913 0.015,1.369c0.328,6.599 3.278,12.979 6.838,18.821c3.352,5.5 7.4,10.978 12.968,13.794c1.608,0.813 3.562,1.452 4.951,0.684c1.742,-0.964 1.956,-3.261 2.049,-4.973c0.025,-0.466 0.028,-0.934 0.013,-1.401c-0.018,-0.586 -0.064,-1.171 -0.133,-1.753c-0.642,-5.437 -3.05,-10.582 -5.816,-15.444c-3.442,-6.048 -7.659,-12.076 -13.627,-15.225c-1.236,-0.652 -2.574,-1.185 -3.95,-1.174Z" fill="#00d8ff"/>
//   </svg>
// );

// // 3. NODE.JS
// const Cyber = () => (
//   <svg
//     viewBox="0 0 512 512"
//     className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path fill="#000000" d="M435.209,96.685l-19.627-1.077c-53.229-2.957-99.37-23.39-126.611-56.099L255.999,0l-32.98,39.509
//       c-27.24,32.709-73.391,53.142-126.611,56.099l-40.497,2.24v187.094c0,26.61,8.059,51.698,20.878,74.642
//       c44.26,79.84,144.978,134.496,159.311,142.02L255.999,512l19.891-10.396c18.454-9.678,180.198-97.664,180.198-216.662V97.848
//       L435.209,96.685z M98.737,261.106c0-46.326,0-122.674,0-122.674c64.333-3.579,121.509-28.578,157.263-71.5v194.174h157.247v23.836
//       c0,96.501-157.247,178.668-157.247,178.668V261.106H98.737z"/>
//   </svg>
// );

// // 4. PYTHON
// const LogoPython = () => (
//   <svg
//     viewBox="0 0 32 32"
//     className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#327EBD"/>
//         <stop offset="1" stopColor="#1565A7"/>
//       </linearGradient>
//       <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#FFDA4B"/>
//         <stop offset="1" stopColor="#F9C600"/>
//       </linearGradient>
//     </defs>
//     <path fillRule="evenodd" clipRule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
//     <path fillRule="evenodd" clipRule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
//   </svg>
// );

// // 5. AWS
// const LogoAWS = () => (
//   <svg
//     viewBox="0 0 16 16"
//     className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path fill="#252F3E" d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.165-.315c-.415.491-.936.737-1.564.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.191-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.618.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.049-.214c0-.085.043-.133.128-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.1-.208a.365.365 0 01.214-.053h.425c.102 0 .17.016.213.053.043.032.08.107.101.208l.841 3.578.92-3.578a.458.458 0 01.107-.208.346.346 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.76.76 0 01-.038.133l-1.283 4.127c-.032.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.378.378 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.46.46 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.427 2.427 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.436 1.436 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z"/>
//     <g fill="#F90" fillRule="evenodd" clipRule="evenodd">
//       <path d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z"/>
//       <path d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.218-.1.213-.53.687-1.72.463-2.003z"/>
//     </g>
//   </svg>
// );

// // 6. AI/ML
// const LogoAI = () => (
//   <svg
//     viewBox="0 0 32 32"
//     className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path fill="#000000" d="M12,30.36c-1.47,0-2.852-0.766-3.653-2.011C5.703,28.24,3.64,26.106,3.64,23.5
//       c0-0.899,0.252-1.771,0.733-2.544C2.678,19.887,1.64,18.021,1.64,16s1.038-3.886,2.733-4.957C3.893,10.271,3.64,9.4,3.64,8.5
//       c0-2.63,2.101-4.779,4.712-4.858C9.155,2.402,10.534,1.64,12,1.64c2.404,0,4.36,1.956,4.36,4.36v4.64H25
//       c0.904,0,1.64-0.736,1.64-1.64V7.312c-0.575-0.158-1-0.686-1-1.312c0-0.75,0.61-1.36,1.36-1.36S28.36,5.25,28.36,6
//       c0,0.625-0.425,1.153-1,1.312V9c0,1.301-1.059,2.36-2.36,2.36h-8.64v2.28h11.329c0.158-0.576,0.687-1,1.312-1
//       c0.75,0,1.36,0.61,1.36,1.36s-0.61,1.36-1.36,1.36c-0.625,0-1.153-0.424-1.312-1H16.36v3.28h11.329c0.158-0.575,0.687-1,1.312-1
//       c0.75,0,1.36,0.61,1.36,1.36s-0.61,1.36-1.36,1.36c-0.625,0-1.153-0.425-1.312-1H16.36v2.279H25c1.302,0,2.36,1.059,2.36,2.36v1.688
//       c0.575,0.158,1,0.687,1,1.312c0,0.75-0.61,1.36-1.36,1.36s-1.36-0.61-1.36-1.36c0-0.625,0.425-1.153,1-1.312V23
//       c0-0.904-0.735-1.64-1.64-1.64h-8.64V26C16.36,28.404,14.404,30.36,12,30.36z M8.721,27.628l0.143,0.186
//       C9.526,28.957,10.699,29.64,12,29.64c2.007,0,3.64-1.633,3.64-3.64V6c0-2.007-1.633-3.64-3.64-3.64
//       c-1.301,0-2.474,0.683-3.137,1.826L8.747,4.365C8.493,4.869,8.36,5.431,8.36,6c0,0.64,0.168,1.269,0.487,1.82L8.224,8.18
//       C7.842,7.521,7.64,6.766,7.64,6c0-0.547,0.103-1.088,0.3-1.593C5.901,4.694,4.36,6.42,4.36,8.5c0,0.876,0.283,1.722,0.817,2.446
//       l0.246,0.333l-0.364,0.197C3.394,12.377,2.36,14.11,2.36,16c0,1.785,0.922,3.43,2.427,4.365C5.713,19.268,7.061,18.64,8.5,18.64
//       v0.721c-1.206,0-2.336,0.517-3.125,1.424l-0.198,0.27C4.643,21.778,4.36,22.624,4.36,23.5c0,2.283,1.857,4.14,4.14,4.14
//       L8.721,27.628z M27,25.36c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64S27.353,25.36,27,25.36z
//       M29,17.36c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64S29.353,17.36,29,17.36z M29,13.36
//       c-0.353,0-0.64,0.287-0.64,0.64s0.287,0.64,0.64,0.64s0.64-0.287,0.64-0.64S29.353,13.36,29,13.36z M27,5.36
//       c-0.353,0-0.64,0.287-0.64,0.64S26.647,6.64,27,6.64S27.64,6.353,27.64,6S27.353,5.36,27,5.36z M12,28.36v-0.72
//       c0.904,0,1.64-0.735,1.64-1.64h0.72C14.36,27.302,13.301,28.36,12,28.36z M9,26.36c-1.577,0-2.86-1.283-2.86-2.86h0.72
//       c0,1.18,0.96,2.14,2.14,2.14C9,25.64,9,26.36,9,26.36z M12,24.36c-1.301,0-2.36-1.059-2.36-2.36s1.059-2.36,2.36-2.36v0.721
//       c0.904,0-1.64,0.735-1.64,1.64s0.736,1.64,1.64,1.64V24.36z M6.332,16.667C5.886,16.221,5.64,15.629,5.64,15
//       c0-1.39,0.97-2.36,2.36-2.36c0.641,0,1.218,0.238,1.669,0.689l-0.51,0.509C8.847,13.525,8.446,13.36,8,13.36
//       c-0.996,0-1.64,0.644-1.64,1.64c0,0.437,0.171,0.848,0.48,1.158L6.332,16.667z M12,12.86v-0.72c0.904,0,1.64-0.736,1.64-1.64
//       S12.904,8.86,12,8.86V8.14c1.301,0,2.36,1.059,2.36,2.36S13.301,12.86,12,12.86z M14.36,6h-0.72c0-0.904-0.736-1.64-1.64-1.64
//       S10.36,5.096,10.36,6H9.64c0-1.301,1.059-2.36,2.36-2.36S14.36,4.699,14.36,6z"/>
//   </svg>
// );

// // 7. CYBERSECURITY
// // (Using the "ai" titled network/chip SVG as it is the most relevant abstract tech icon left)
// const AII = () => (
//   <svg
//     viewBox="0 0 512 512"
//     className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path fill="#000000" d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"/>
//   </svg>
// );


// // 8. MONGODB (Original: Green)
// const Nodejs = () => (
//   <svg
//     viewBox="0 -99 512 512"
//     className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//   >
//     <defs>
//       <linearGradient x1="68.188%" y1="17.487%" x2="27.823%" y2="89.755%" id="mongo_grad_1">
//         <stop stopColor="#41873F" offset="0%" />
//         <stop stopColor="#418B3D" offset="32.88%" />
//         <stop stopColor="#419637" offset="63.52%" />
//         <stop stopColor="#3FA92D" offset="93.19%" />
//         <stop stopColor="#3FAE2A" offset="100%" />
//       </linearGradient>
      
//       <path id="mongo_path_2" d="M57.903 1.849c-1.85-1.04-4.045-1.04-5.894 0L3.352 29.934C1.502 30.974.462 32.94.462 35.02v56.285c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085c1.85 1.04 4.045 1.04 5.894 0l48.657-28.085c1.85-1.04 2.89-3.005 2.89-5.085V35.02c0-2.08-1.156-4.045-2.89-5.085L57.903 1.85z" />
      
//       <linearGradient x1="43.277%" y1="55.169%" x2="159.245%" y2="-18.306%" id="mongo_grad_4">
//         <stop stopColor="#41873F" offset="13.76%" />
//         <stop stopColor="#54A044" offset="40.32%" />
//         <stop stopColor="#66B848" offset="71.36%" />
//         <stop stopColor="#6CC04A" offset="90.81%" />
//       </linearGradient>
      
//       <linearGradient x1="-4413.77%" y1="13.43%" x2="5327.93%" y2="13.43%" id="mongo_grad_5">
//         <stop stopColor="#6CC04A" offset="9.192%" />
//         <stop stopColor="#66B848" offset="28.64%" />
//         <stop stopColor="#54A044" offset="59.68%" />
//         <stop stopColor="#41873F" offset="86.24%" />
//       </linearGradient>
      
//       <linearGradient x1="-4.389%" y1="49.997%" x2="101.499%" y2="49.997%" id="mongo_grad_6">
//         <stop stopColor="#6CC04A" offset="9.192%" />
//         <stop stopColor="#66B848" offset="28.64%" />
//         <stop stopColor="#54A044" offset="59.68%" />
//         <stop stopColor="#41873F" offset="86.24%" />
//       </linearGradient>
      
//       <linearGradient x1="-9713.77%" y1="36.21%" x2="27.93%" y2="36.21%" id="mongo_grad_7">
//         <stop stopColor="#6CC04A" offset="9.192%" />
//         <stop stopColor="#66B848" offset="28.64%" />
//         <stop stopColor="#54A044" offset="59.68%" />
//         <stop stopColor="#41873F" offset="86.24%" />
//       </linearGradient>
      
//       <linearGradient x1="-103.861%" y1="50.275%" x2="100.797%" y2="50.275%" id="mongo_grad_8">
//         <stop stopColor="#6CC04A" offset="9.192%" />
//         <stop stopColor="#66B848" offset="28.64%" />
//         <stop stopColor="#54A044" offset="59.68%" />
//         <stop stopColor="#41873F" offset="86.24%" />
//       </linearGradient>
      
//       <linearGradient x1="130.613%" y1="-211.069%" x2="4.393%" y2="201.605%" id="mongo_grad_9">
//         <stop stopColor="#41873F" offset="0%" />
//         <stop stopColor="#418B3D" offset="32.88%" />
//         <stop stopColor="#419637" offset="63.52%" />
//         <stop stopColor="#3FA92D" offset="93.19%" />
//         <stop stopColor="#3FAE2A" offset="100%" />
//       </linearGradient>
//     </defs>
    
//     <g fill="none">
//       <path d="M253.11 313.094c-1.733 0-3.35-.462-4.853-1.27l-15.372-9.13c-2.311-1.272-1.155-1.734-.462-1.965 3.12-1.04 3.698-1.271 6.934-3.12.347-.231.81-.115 1.156.116l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.693-.693.693-1.271v-53.28c0-.578-.231-1.04-.693-1.271l-46.115-26.582c-.462-.231-1.04-.231-1.386 0l-46.115 26.582c-.462.231-.693.81-.693 1.271v53.28c0 .462.231 1.04.693 1.272l12.597 7.28c6.82 3.468 11.096-.577 11.096-4.622v-52.587c0-.693.578-1.386 1.387-1.386h5.894c.693 0 1.387.577 1.387 1.386v52.587c0 9.13-4.97 14.447-13.638 14.447-2.658 0-4.738 0-10.633-2.89l-12.135-6.933c-3.005-1.734-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.85-6.704 4.854-8.437l46.115-26.698c2.89-1.618 6.819-1.618 9.708 0l46.115 26.698c3.005 1.733 4.854 4.97 4.854 8.437v53.28c0 3.467-1.85 6.703-4.854 8.437l-46.115 26.698c-1.502.693-3.236 1.04-4.853 1.04zm14.216-36.637c-20.226 0-24.387-9.246-24.387-17.105 0-.693.578-1.386 1.387-1.386h6.01c.693 0 1.27.462 1.27 1.155.925 6.126 3.583 9.13 15.834 9.13 9.708 0 13.869-2.196 13.869-7.397 0-3.005-1.156-5.201-16.296-6.704-12.598-1.271-20.457-4.045-20.457-14.1 0-9.362 7.859-14.909 21.034-14.909 14.794 0 22.076 5.086 23 16.18.001.348-.115.694-.346 1.041-.231.231-.578.462-.925.462h-6.009c-.578 0-1.156-.462-1.271-1.04-1.387-6.357-4.97-8.437-14.448-8.437-10.633 0-11.904 3.698-11.904 6.472 0 3.351 1.502 4.392 15.834 6.24 14.215 1.85 20.919 4.508 20.919 14.448-.116 10.17-8.438 15.949-23.116 15.949z" fill="#539E43"/>
//       <path d="M110.028 104.712c0-2.08-1.156-4.045-3.005-5.086L58.019 71.426c-.809-.463-1.734-.694-2.658-.81h-.462c-.925 0-1.85.347-2.659.81L3.236 99.626c-1.85 1.04-3.005 3.005-3.005 5.085l.116 75.818c0 1.04.578 2.08 1.502 2.542.925.578 2.08.578 2.89 0l29.125-16.643c1.85-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.156-4.045 3.005-5.085l12.367-7.166c.924-.578 1.964-.81 3.005-.81 1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.005 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643c.925.578 2.08.578 3.005 0 .925-.462 1.503-1.502 1.503-2.542l-.116-75.818z" fill="#333333"/>
//       <path d="M345.57.347c-.924-.463-2.08-.463-2.889 0-.925.578-1.503 1.503-1.503 2.542v75.125c0 .693-.346 1.387-1.04 1.849-.693.346-1.386.346-2.08 0l-12.25-7.05c-1.85-1.04-4.046-1.04-5.895 0l-49.004 28.316c-1.85 1.04-3.005 3.005-3.005 5.085v56.517c0 2.08 1.156 4.045 3.005 5.085l49.004 28.316c1.85 1.04 4.045 1.04 5.895 0l49.004-28.316c1.85-1.04 3.005-3.005 3.005-5.085V21.844c0-2.196-1.156-4.161-3.005-5.201L345.57.347zm-4.507 143.776c0 .578-.231 1.04-.693 1.272l-16.758 9.708c-.462.231-1.04.231-1.502 0l-16.758-9.708c-.463-.232-.694-.81-.694-1.272V124.706c0-.578.231-1.04.693-1.271l16.758-9.708c.463-.231 1.04-.231 1.502 0l16.758 9.708c.462.231.693.81.693 1.271v19.417z" fill="#333333"/>
      
//       <g transform="translate(401.047 70.501)">
//         <path d="M107.6 53.743c1.85-1.04 2.89-3.005 2.89-5.085V34.904c0-2.08-1.156-4.045-2.89-5.085L58.944 1.618C57.094.578 54.9 .578 53.05 1.618L4.045 29.934C2.196 30.974 1.04 32.94 1.04 35.02v56.516c0 2.08 1.156 4.045 3.005 5.086l48.657 27.739c1.85 1.04 4.046 1.04 5.78 0l29.472-16.412c.924-.462 1.502-1.502 1.502-2.542 0-1.04-.578-2.08-1.502-2.542l-49.237-28.317c-.924-.578-1.502-1.502-1.502-2.542V54.32c0-1.04.578-2.08 1.502-2.542l15.372-8.785c.924-.578 2.08-.578 3.005 0l15.371 8.785c.925.578 1.503 1.502 1.503 2.542v13.869c0 1.04.578 2.08 1.502 2.542.925.578 2.08.578 3.005 0L107.6 53.743z" fill="#333333"/>
//         <path d="M55.245 51.084c.347-.231.81-.231 1.156 0l9.362 5.432c.347.231.578.578.578 1.04v10.864c0 .462-.231.81-.578 1.04l-9.362 5.432c-.347.231-.81.231-1.156 0l-9.362-5.432c-.346-.231-.577-.578-.577-1.04V57.557c0-.462.231-.81.577-1.04l9.362-5.432z" fill="#539E43"/>
//       </g>
      
//       <g transform="translate(134.068 70.501)">
//         <mask id="mongo_mask_3" fill="white">
//           <use xlinkHref="#mongo_path_2" />
//         </mask>
//         <use fill="url(#mongo_grad_1)" xlinkHref="#mongo_path_2" />
        
//         <g mask="url(#mongo_mask_3)">
//           <path d="M51.893 1.85L3.12 29.934C1.27 30.974 0 32.94 0 35.02v56.285c0 1.387.578 2.658 1.502 3.698l54.783-93.847c-1.387-.231-3.005-.116-4.391.693z" />
//           <path d="M56.632 125.053c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.02c0-1.503-.693-3.005-1.733-4.045L56.632 125.053z" />
//           <path d="M106.676 29.934L57.788 1.85c-.462-.232-1.04-.463-1.503-.578L1.502 95.119c.463.578 1.04 1.04 1.618 1.387l48.889 28.085c1.387.809 3.005 1.04 4.507.577L107.948 31.09c-.347-.462-.809-.809-1.272-1.156z" fill="url(#mongo_grad_4)" />
//         </g>
        
//         <g mask="url(#mongo_mask_3)">
//           <g transform="translate(0 -9.246)">
//             <path d="M109.797 100.55V44.265c0-2.08-1.271-4.045-3.12-5.085L57.788 11.095c-.578-.346-1.156-.577-1.85-.693L109.45 101.822c.231-.346.347-.809.347-1.271z" fill="none" />
//             <path d="M3.12 39.18c-1.85 1.04-3.12 3.005-3.12 5.085v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.155.694 2.427.925 3.814.694L3.467 39.065l-.347.116z" fill="none" />
//             <path fill="url(#mongo_grad_5)" fillRule="evenodd" d="M50.39.81l-.693.346.925-.001-.232-.346z" />
//             <path d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.054 10.402c-1.387-.231-2.89-.116-4.16.693L3.352 39.065 55.707 134.53c.693-.116 1.502-.347 2.196-.693l48.889-28.2z" fill="url(#mongo_grad_6)" fillRule="evenodd" />
//             <path fill="url(#mongo_grad_7)" fillRule="evenodd" d="M111.299 104.712l-.346-.578v.809l.346-.231z" />
//             <path d="M106.792 105.636l-48.773 28.085c-.693.347-1.387.578-2.196.693l.925 1.734L110.837 104.827v-.693l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z" fill="url(#mongo_grad_8)" fillRule="evenodd" />
//             <path d="M106.792 105.636l-48.773 28.085c-.693.347-1.387.578-2.196.693l.925 1.734L110.837 104.827v-.693l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z" fill="url(#mongo_grad_9)" fillRule="evenodd" />
//           </g>
//         </g>
//       </g>
//     </g>
//   </svg>
// );

// // --- DATA STRUCTURE ---
// const TECH_STACK = [
//   { name: "Next.js", component: <LogoNextJS /> },
//   { name: "React", component: <LogoReact /> },
//   // { name: "MongoDB", component: <LogoMongoDB /> },
//   { name: "Node.js", component: <Nodejs /> },
//   { name: "Python", component: <LogoPython /> },
//   { name: "AWS", component: <LogoAWS /> },
//   { name: "AI/ML", component: <AII /> },
//   { name: "Cybersecurity", component: <Cyber /> },
// ];

// const ClientLoo = () => {
//   const marqueeList = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

//   return (
//     <section className="w-full bg-[var(--background)] py-10 relative z-20 overflow-hidden transition-colors duration-300">
      
//       {/* Inject Styles */}
//       <LogoStyles />

//       {/* 1. Subtle Borders */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--foreground)] opacity-10" />
//       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--foreground)] opacity-10" />

//       {/* 2. Container */}
//       <div className="max-w-[100vw] mx-auto">
        
//         {/* Header Text */}
//         <div className="text-center mb-8">
//           <p className="text-xs font-bold tracking-[0.25em] text-[var(--foreground)] uppercase opacity-60">
//               Technologies We Build With
//           </p>
//         </div>

//         {/* 3. Marquee Area */}
//         <div
//           className="relative flex overflow-hidden"
//           style={{
//             maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
//             WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
//           }}
//         >
//           <motion.div
//             className="flex items-center gap-12 sm:gap-16 md:gap-24 px-12"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               repeat: Infinity,
//               ease: "linear",
//               duration: 35,
//             }}
//           >
//             {marqueeList.map((tech, index) => (
//               <LogoItem key={index} tech={tech} />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- SUB-COMPONENT: Individual Item ---
// const LogoItem = ({ tech }) => {
//   return (
//     <div className="group relative flex flex-col items-center justify-center min-w-[100px]">
      
//       {/* Icon Wrapper */}
//       <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center transition-all duration-300 scale-100 group-hover:scale-110">
//         {/* We removed grayscale so the filter handles the coloring logic */}
//         {tech.component}
//       </div>

//       {/* Label */}
//       <div className="mt-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
//          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
//            {tech.name}
//          </span>
//       </div>

//       {/* Glow Effect */}
//       <div className="absolute inset-0 bg-[var(--primary)]/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
      
//     </div>
//   );
// };

// export default ClientLoo;

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
//
//
//
//
//
//
///
///
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

"use client";

import React from "react";
import { motion } from "framer-motion";

// --- CSS STYLES FOR THEME SWITCHING ---
// Default (Dark Mode) = White Logos.
// Light Mode = Original Colors.
const LogoStyles = () => (
  <style jsx global>{`
    .tech-logo-svg {
      transition: filter 0.3s ease, opacity 0.3s ease;
      /* DEFAULT (Dark Mode): Turn everything to Pure White */
      filter: brightness(0) invert(1); 
    }
    
    /* LIGHT MODE OVERRIDE: Remove filter to show Original Colors */
    [data-theme='light'] .tech-logo-svg {
      filter: none;
    }
  `}</style>
);

// --- TECH STACK SVGS (Updated with new logos) ---

// 1. Tailwind CSS
const LogoTailwind = () => (
  <svg 
    fill="#06B6D4" 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
  >
    <title>Tailwind CSS</title>
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
);

// 2. MongoDB
const LogoMongoDB = () => (
  <svg 
    fill="#47A248" 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
  >
    <title>MongoDB</title>
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
  </svg>
);

// 3. React
const LogoReact = () => (
  <svg 
    fill="#61DAFB" 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
  >
    <title>React</title>
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
  </svg>
);

// 4. Python
const LogoPython = () => (
   <svg 
    viewBox="0 0 32 32" 
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
        <stop stopColor="#327EBD"/>
        <stop offset="1" stopColor="#1565A7"/>
      </linearGradient>
      <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFDA4B"/>
        <stop offset="1" stopColor="#F9C600"/>
      </linearGradient>
    </defs>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
  </svg>
  
);

// 5. PostgreSQL
const LogoPostgreSQL = () => (
  <svg 
    fill="#4169E1" 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
  >
    <title>PostgreSQL</title>
    <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"/>
  </svg>
);

// 6. GitHub
const LogoGithub = () => (
  <svg 
    fill="#181717" 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

// 7. JavaScript (Node.js icon)
const LogoJavaScript = () => (
  <svg 
    fill="#339933" 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
  >
    <title>Node.js</title>
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
  </svg>
);

// 8. PyTorch
const LogoPyTorch = () => (
  <svg 
    fill="#EE4C2C" 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
  >
    <title>PyTorch</title>
    <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z"/>
  </svg>
);

// 9. TensorFlow
const LogoTensorFlow = () => (
  <svg 
    fill="#FF6F00" 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
  >
    <title>TensorFlow</title>
    <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"/>
  </svg>
);

// 10. Next.js
const LogoNextJS = () => (
  <svg 
    fill="#000000" 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
  >
    <title>Next.js</title>
    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
  </svg>
);

// 11. OpenAI
const LogoOpenAI = () => (
  <svg 
    fill="#000000" 
    viewBox="0 0 24 24" 
    role="img" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 sm:w-12 sm:h-12 tech-logo-svg"
  >
    <title>OpenAI icon</title>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);


// --- DATA STRUCTURE ---
const TECH_STACK = [
  { name: "Tailwind CSS", component: <LogoTailwind /> },
  { name: "MongoDB", component: <LogoMongoDB /> },
  { name: "React", component: <LogoReact /> },
  { name: "Python", component: <LogoPython /> },
  { name: "PostgreSQL", component: <LogoPostgreSQL /> },
  { name: "GitHub", component: <LogoGithub /> },
  { name: "JavaScript", component: <LogoJavaScript /> },
  { name: "PyTorch", component: <LogoPyTorch /> },
  { name: "TensorFlow", component: <LogoTensorFlow /> },
  { name: "Next.js", component: <LogoNextJS /> },
  { name: "OpenAI", component: <LogoOpenAI /> },
];

const ClientLoo = () => {
  const marqueeList = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <section className="w-full bg-[var(--background)] py-10 relative z-20 overflow-hidden transition-colors duration-300">
      
      {/* Inject Styles */}
      <LogoStyles />

      {/* 1. Subtle Borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--foreground)] opacity-10" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--foreground)] opacity-10" />

      {/* 2. Container */}
      <div className="max-w-[100vw] mx-auto">
        
        {/* Header Text */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold tracking-[0.25em] text-[var(--foreground)] uppercase opacity-60">
              Technologies We Build With
          </p>
        </div>

        {/* 3. Marquee Area */}
        <div 
          className="relative flex overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        >
          <motion.div
            className="flex items-center gap-12 sm:gap-16 md:gap-24 px-12"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35, 
            }}
          >
            {marqueeList.map((tech, index) => (
              <LogoItem key={index} tech={tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: Individual Item ---
const LogoItem = ({ tech }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center min-w-[100px]">
      
      {/* Icon Wrapper */}
      <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center transition-all duration-300 scale-100 group-hover:scale-110">
        {/* We removed grayscale so the filter handles the coloring logic */}
        {tech.component}
      </div>

      {/* Label */}
      <div className="mt-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
         <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
           {tech.name}
         </span>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[var(--primary)]/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
      
    </div>
  );
};

export default ClientLoo;