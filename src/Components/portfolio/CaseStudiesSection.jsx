// // import React, { useState, useEffect, useRef } from "react";
// // import CaseStudyCard from "./CaseStudyCard";
// // import { ref, onValue } from "firebase/database";
// // import { database } from "../../lib/firebase";
// // import { motion } from "framer-motion";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // const CaseStudiesSection = () => {
// //   const [projectsData, setProjectsData] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const scrollRef = useRef(null);

// //   // --- INTERACTION STATE ---
// //   const [isHovered, setIsHovered] = useState(false);
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [startX, setStartX] = useState(0);
// //   const [scrollLeftSnapshot, setScrollLeftSnapshot] = useState(0);

// //   // --- PROGRESS STATE ---
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   // --- FIREBASE FETCH ---
// //   useEffect(() => {
// //     const projectsRef = ref(database, "Protfolio");
// //     const unsubscribe = onValue(
// //       projectsRef,
// //       (snapshot) => {
// //         if (snapshot.exists()) {
// //           const fetchedData = snapshot.val();
// //           const projectsArray = Object.values(fetchedData);
// //           projectsArray.sort((a, b) => a.id - b.id);
// //           setProjectsData(projectsArray);
// //         } else {
// //           setProjectsData([]);
// //         }
// //         setLoading(false);
// //       },
// //       (error) => {
// //         console.error("Firebase read error:", error);
// //         setLoading(false);
// //       }
// //     );
// //     return () => unsubscribe();
// //   }, []);

// //   // --- INFINITE LOOP DATA ---
// //   const DUPLICATION_FACTOR = 4;
// //   const marqueeList = Array(DUPLICATION_FACTOR).fill(projectsData).flat();

// //   // --- SCROLL ANIMATION LOOP ---
// //   useEffect(() => {
// //     const scrollContainer = scrollRef.current;
// //     let animationFrameId;

// //     const step = () => {
// //       if (scrollContainer) {
// //         // 1. Auto-move (Only if NOT hovered, NOT dragging)
// //         if (!isHovered && !isDragging) {
// //           scrollContainer.scrollLeft += 1; // Speed
// //         }

// //         // 2. Infinite Reset Logic
// //         const maxScroll = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;

// //         // Safety check to prevent flickering
// //         if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
// //             if (scrollContainer.scrollLeft >= maxScroll) {
// //             scrollContainer.scrollLeft = scrollContainer.scrollLeft - maxScroll;
// //             } else if (scrollContainer.scrollLeft <= 0) {
// //                 scrollContainer.scrollLeft = maxScroll + scrollContainer.scrollLeft;
// //             }
// //         }

// //         // 3. Update Progress Bar
// //         // We only update activeIndex via scroll if we aren't manually hovering/dragging
// //         // This prevents the bar from "flickering" while you are trying to click it
// //         const singleSetWidth = scrollContainer.scrollWidth / DUPLICATION_FACTOR;
// //         if (singleSetWidth > 0) {
// //              const relativeScroll = scrollContainer.scrollLeft % singleSetWidth;
// //              const progressRatio = relativeScroll / singleSetWidth;
// //              const newIndex = Math.floor(progressRatio * projectsData.length) % projectsData.length;

// //              if (newIndex !== activeIndex && !isNaN(newIndex)) {
// //                  setActiveIndex(newIndex);
// //              }
// //         }
// //       }
// //       animationFrameId = requestAnimationFrame(step);
// //     };

// //     animationFrameId = requestAnimationFrame(step);
// //     return () => cancelAnimationFrame(animationFrameId);
// //   }, [isHovered, isDragging, projectsData, activeIndex]);

// //   // --- DRAG HANDLERS (MOUSE) ---
// //   const handleMouseDown = (e) => {
// //     setIsDragging(true);
// //     setStartX(e.pageX - scrollRef.current.offsetLeft);
// //     setScrollLeftSnapshot(scrollRef.current.scrollLeft);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsDragging(false);
// //     setIsHovered(false);
// //   };

// //   const handleMouseUp = () => {
// //     setIsDragging(false);
// //   };

// //   const handleMouseMove = (e) => {
// //     if (!isDragging) return;
// //     e.preventDefault();
// //     const x = e.pageX - scrollRef.current.offsetLeft;
// //     const walk = (x - startX) * 2;
// //     scrollRef.current.scrollLeft = scrollLeftSnapshot - walk;
// //   };

// // // --- TOUCH HANDLERS (MOBILE) ---
// //   const handleTouchStart = () => {
// //     setIsHovered(true);
// //   };

// //   const handleTouchEnd = () => {
// //     setTimeout(() => {
// //         setIsHovered(false);
// //     }, 1000);
// //   };

// //   // --- MANUAL NAVIGATION ARROWS ---
// //   const handleManualScroll = (direction) => {
// //     if (scrollRef.current) {
// //         const firstCard = scrollRef.current.firstElementChild;
// //         const scrollAmount = firstCard ? firstCard.clientWidth + 32 : 400;
// //         scrollRef.current.scrollBy({
// //             left: direction === "left" ? -scrollAmount : scrollAmount,
// //             behavior: "smooth",
// //         });
// //     }
// //   };

// //   // --- CLICK TO SCROLL TO CARD ---
// //   const scrollToCard = (index) => {
// //     if (scrollRef.current) {
// //       // Set active index immediately for visual feedback
// //       setActiveIndex(index);

// //       const singleSetWidth = scrollRef.current.scrollWidth / DUPLICATION_FACTOR;
// //       // We divide by projectsData.length to get exact card width
// //       const cardWidth = singleSetWidth / projectsData.length;

// //       // We scroll to the FIRST set of data to keep math simple
// //       scrollRef.current.scrollTo({
// //         left: cardWidth * index,
// //         behavior: 'smooth'
// //       });
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <section className="bg-[var(--background)] min-h-[50vh] py-16 px-4 flex justify-center items-center text-[var(--foreground)] text-xl">
// //         Loading Case Studies...
// //       </section>
// //     );
// //   }

// //   return (
// //     <section className="bg-[var(--background)] py-16 sm:py-24 transition-colors duration-300 overflow-hidden select-none">

// //       {/* 1. Header */}
// //       <div className="max-w-7xl mx-auto px-4 text-center mb-10 sm:mb-16">
// //         <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
// //           Case Studies
// //         </h2>
// //         <div className="h-1 w-20 bg-[var(--primary)] mx-auto rounded-full mb-4"></div>
// //         <p className="text-[var(--foreground-muted)] text-base sm:text-lg">
// //           Explore our proven track record.
// //         </p>
// //       </div>

// //       {/* 2. MAIN WRAPPER */}
// //       <div
// //         className="relative w-full mb-8 sm:mb-12"
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //       >

// //         {/* --- LEFT ARROW --- */}
// //         <button
// //           onClick={() => handleManualScroll("left")}
// //           onMouseEnter={() => setIsHovered(true)}
// //           className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 backdrop-blur-md group hidden sm:flex justify-center items-center cursor-pointer"
// //           aria-label="Scroll left"
// //         >
// //           <ChevronLeft className="w-6 h-6 text-[var(--foreground)] group-hover:text-white" />
// //         </button>

// //         {/* --- RIGHT ARROW --- */}
// //         <button
// //           onClick={() => handleManualScroll("right")}
// //           onMouseEnter={() => setIsHovered(true)}
// //           className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 backdrop-blur-md group hidden sm:flex justify-center items-center cursor-pointer"
// //           aria-label="Scroll right"
// //         >
// //           <ChevronRight className="w-6 h-6 text-[var(--foreground)] group-hover:text-white" />
// //         </button>

// //         {/* Gradient Masks */}
// //         <div className="absolute top-0 left-0 h-full w-8 sm:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
// //         <div className="absolute top-0 right-0 h-full w-8 sm:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

// //         {/* Scrollable Track */}
// //         <div
// //           ref={scrollRef}
// //           className={`
// //             flex gap-4 sm:gap-8 overflow-x-auto whitespace-nowrap py-4 no-scrollbar touch-pan-x
// //             ${isDragging ? "cursor-grabbing" : "cursor-grab"}
// //             ${isHovered || isDragging ? "snap-x snap-mandatory" : ""}
// //           `}
// //           style={{
// //             scrollBehavior: "auto", // Important: we handle smooth scroll manually or via button
// //             msOverflowStyle: 'none',
// //             scrollbarWidth: 'none'
// //           }}

// //           onMouseDown={handleMouseDown}
// //           onMouseLeave={handleMouseLeave}
// //           onMouseUp={handleMouseUp}
// //           onMouseMove={handleMouseMove}

// //           onTouchStart={handleTouchStart}
// //           onTouchEnd={handleTouchEnd}
// //         >
// //           {marqueeList.length > 0 ? (
// //             marqueeList.map((project, index) => (
// //               <div
// //                 key={`${project.id}-${index}`}
// //                 className="flex-shrink-0"
// //               >
// //                   <CaseStudyCard
// //                     title={project.title}
// //                     imageSrc={project.imageSrc}
// //                     projectUrl={project.projectUrl}
// //                     problem={project.problem || project.details?.problem || project.description}
// //                     client={project.client || project.details?.client}
// //                     solution={project.solution || project.details?.solution}
// //                     result={project.result || project.details?.result}
// //                   />
// //               </div>
// //             ))
// //           ) : (
// //             <div className="text-[var(--foreground)] text-center w-screen p-8">
// //               No case studies available.
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* 3. Block Progress Bar (NOW INTERACTIVE) */}
// //       {projectsData.length > 0 && (
// //         <div
// //             // ADDED: Pause auto-scroll when hovering the progress bar
// //             onMouseEnter={() => setIsHovered(true)}
// //             onMouseLeave={() => setIsHovered(false)}
// //             className="flex justify-center items-center gap-2 max-w-7xl mx-auto px-4 flex-wrap"
// //         >
// //             {projectsData.map((_, idx) => (
// //                 <div
// //                     key={idx}
// //                     onClick={() => scrollToCard(idx)}
// //                     className="relative w-8 h-1.5 sm:w-12 sm:h-2 rounded-full cursor-pointer overflow-hidden bg-[var(--border-color)] transition-all hover:opacity-80"
// //                 >
// //                     {idx === activeIndex && (
// //                         <motion.div
// //                             layoutId="active-progress-block"
// //                             className="absolute inset-0 bg-[var(--primary)]"
// //                             transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //                         />
// //                     )}
// //                 </div>
// //             ))}
// //         </div>
// //       )}

// //     </section>
// //   );
// // };

// // export default CaseStudiesSection;
// //
// //
// //\
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// import React, { useState, useEffect, useRef } from "react";
// import CaseStudyCard from "./CaseStudyCard";
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const CaseStudiesSection = () => {
//   const [projectsData, setProjectsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const scrollRef = useRef(null);

//   // --- INTERACTION STATE ---
//   const [isHovered, setIsHovered] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeftSnapshot, setScrollLeftSnapshot] = useState(0);

//   // --- PROGRESS STATE ---
//   const [activeIndex, setActiveIndex] = useState(0);

//   // --- FIREBASE FETCH ---
//   useEffect(() => {
//     const projectsRef = ref(database, "Protfolio");
//     const unsubscribe = onValue(
//       projectsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const projectsArray = Object.values(fetchedData);
//           projectsArray.sort((a, b) => a.id - b.id);
//           setProjectsData(projectsArray);
//         } else {
//           setProjectsData([]);
//         }
//         setLoading(false);
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );
//     return () => unsubscribe();
//   }, []);

//   // --- INFINITE LOOP DATA ---
//   const DUPLICATION_FACTOR = 4;
//   const marqueeList = Array(DUPLICATION_FACTOR).fill(projectsData).flat();

//   // --- SCROLL ANIMATION LOOP ---
//   // useEffect(() => {
//   //   const scrollContainer = scrollRef.current;
//   //   let animationFrameId;

//   //   const step = () => {
//   //     if (scrollContainer) {
//   //       // 1. Auto-move
//   //       if (!isHovered && !isDragging) {
//   //         scrollContainer.scrollLeft += 1;
//   //       }

//   //       // 2. Infinite Reset Logic
//   //       const maxScroll = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;

//   //       if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
//   //           if (scrollContainer.scrollLeft >= maxScroll) {
//   //           scrollContainer.scrollLeft = scrollContainer.scrollLeft - maxScroll;
//   //           } else if (scrollContainer.scrollLeft <= 0) {
//   //               scrollContainer.scrollLeft = maxScroll + scrollContainer.scrollLeft;
//   //           }
//   //       }

//   //       // 3. Update Progress Bar
//   //       const singleSetWidth = scrollContainer.scrollWidth / DUPLICATION_FACTOR;
//   //       if (singleSetWidth > 0) {
//   //            const relativeScroll = scrollContainer.scrollLeft % singleSetWidth;
//   //            const progressRatio = relativeScroll / singleSetWidth;
//   //            const newIndex = Math.floor(progressRatio * projectsData.length) % projectsData.length;

//   //            if (newIndex !== activeIndex && !isNaN(newIndex)) {
//   //                setActiveIndex(newIndex);
//   //            }
//   //       }
//   //     }
//   //     animationFrameId = requestAnimationFrame(step);
//   //   };

//   //   animationFrameId = requestAnimationFrame(step);
//   //   return () => cancelAnimationFrame(animationFrameId);
//   // }, [isHovered, isDragging, projectsData, activeIndex]);

//   // --- INITIAL CENTERING ON LOAD ---
//   useEffect(() => {
//     // Only run this once we have data and the container is rendered
//     if (scrollRef.current && projectsData.length > 0) {
//       const scrollContainer = scrollRef.current;
//       const cards = scrollContainer.children;

//       // Target the first card of the SECOND duplicated set (so we can scroll left infinitely right away)
//       const targetIndex = projectsData.length;

//       // Use a brief timeout to ensure the DOM has painted the exact widths
//       setTimeout(() => {
//         if (cards && cards[targetIndex]) {
//           const targetCard = cards[targetIndex];
//           const containerCenter = scrollContainer.clientWidth / 2;
//           const cardCenter = targetCard.offsetWidth / 2;

//           // Calculate the exact center position
//           const initialScrollPosition = targetCard.offsetLeft - containerCenter + cardCenter;

//           // Snap directly to this position without smooth animation
//           scrollContainer.scrollLeft = initialScrollPosition;
//         }
//       }, 50);
//     }
//   }, [projectsData]);
//   // --- DRAG HANDLERS (MOUSE) ---
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - scrollRef.current.offsetLeft);
//     setScrollLeftSnapshot(scrollRef.current.scrollLeft);
//   };

//   const handleMouseLeave = () => {
//     setIsDragging(false);
//     setIsHovered(false);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     scrollRef.current.scrollLeft = scrollLeftSnapshot - walk;
//   };

//   // --- TOUCH HANDLERS (MOBILE) ---
//   const handleTouchStart = () => {
//     setIsHovered(true);
//   };

//   const handleTouchEnd = () => {
//     setTimeout(() => {
//         setIsHovered(false);
//     }, 1000);
//   };

//   // --- MANUAL NAVIGATION ARROWS ---
//   const handleManualScroll = (direction) => {
//     if (scrollRef.current) {
//         const firstCard = scrollRef.current.firstElementChild;
//         const scrollAmount = firstCard ? firstCard.clientWidth + 32 : 400;
//         scrollRef.current.scrollBy({
//             left: direction === "left" ? -scrollAmount : scrollAmount,
//             behavior: "smooth",
//         });
//     }
//   };

//   // // --- CLICK TO SCROLL TO CARD (UPDATED) ---
//   // const scrollToCard = (index) => {
//   //   if (scrollRef.current) {
//   //     setActiveIndex(index);

//   //     // Grab the actual DOM elements to account for gaps accurately
//   //     const cards = scrollRef.current.children;
//   //     if (cards && cards[index]) {
//   //       const targetCard = cards[index];
//   //       const containerWidth = scrollRef.current.clientWidth;

//   //       // Calculate position to perfectly center the card in the view
//   //       const scrollPosition = targetCard.offsetLeft - (containerWidth / 2) + (targetCard.clientWidth / 2);

//   //       scrollRef.current.scrollTo({
//   //         left: Math.max(0, scrollPosition),
//   //         behavior: 'smooth'
//   //       });
//   //     }
//   //   }
//   // };

//   // --- CLICK TO SCROLL TO CARD (UPDATED FOR PERFECT CENTERING) ---
//   const scrollToCard = (index) => {
//     if (scrollRef.current && projectsData.length > 0) {
//       // 1. Update the progress bar visually right away
//       setActiveIndex(index);

//       const scrollContainer = scrollRef.current;
//       const cards = scrollContainer.children;

//       // 2. Figure out which "set" of the infinite loop we are currently viewing
//       const singleSetWidth = scrollContainer.scrollWidth / DUPLICATION_FACTOR;

//       // Prevents NaN or Infinity if width isn't calculated yet
//       if (singleSetWidth === 0) return;

//       const currentSet = Math.floor(scrollContainer.scrollLeft / singleSetWidth);

//       // 3. Target the card in the CURRENT set to prevent a jarring long-distance rewind
//       let targetDomIndex = (currentSet * projectsData.length) + index;

//       // Safety fallback just in case the DOM hasn't caught up
//       if (targetDomIndex >= cards.length) {
//           targetDomIndex = index;
//       }

//       const targetCard = cards[targetDomIndex];

//       if (targetCard) {
//         // 4. The Magic Math for perfect centering:
//         // Card's Left Edge - Half of the Screen Width + Half of the Card's Width
//         const containerCenter = scrollContainer.clientWidth / 2;
//         const cardCenter = targetCard.offsetWidth / 2;

//         const scrollPosition = targetCard.offsetLeft - containerCenter + cardCenter;

//         scrollContainer.scrollTo({
//           left: scrollPosition,
//           behavior: 'smooth'
//         });
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <section className="bg-[var(--background)] min-h-[50vh] py-16 px-4 flex justify-center items-center text-[var(--foreground)] text-xl">
//         Loading Case Studies...
//       </section>
//     );
//   }

//   return (
//     <section className="bg-[var(--background)] py-16 sm:py-24 transition-colors duration-300 overflow-hidden select-none">

//       {/* 1. Header */}
//       <div className="max-w-7xl mx-auto px-4 text-center mb-10 sm:mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
//           Case Studies
//         </h2>
//         <div className="h-1 w-20 bg-[var(--primary)] mx-auto rounded-full mb-4"></div>
//         <p className="text-[var(--foreground-muted)] text-base sm:text-lg">
//           Explore our proven track record.
//         </p>
//       </div>

//       {/* 2. MAIN WRAPPER */}
//       <div
//         className="relative w-full mb-8 sm:mb-12"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >

//         {/* --- LEFT ARROW --- */}
//         <button
//           onClick={() => handleManualScroll("left")}
//           onMouseEnter={() => setIsHovered(true)}
//           className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 backdrop-blur-md group hidden sm:flex justify-center items-center cursor-pointer"
//           aria-label="Scroll left"
//         >
//           <ChevronLeft className="w-6 h-6 text-[var(--foreground)] group-hover:text-white" />
//         </button>

//         {/* --- RIGHT ARROW --- */}
//         <button
//           onClick={() => handleManualScroll("right")}
//           onMouseEnter={() => setIsHovered(true)}
//           className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 backdrop-blur-md group hidden sm:flex justify-center items-center cursor-pointer"
//           aria-label="Scroll right"
//         >
//           <ChevronRight className="w-6 h-6 text-[var(--foreground)] group-hover:text-white" />
//         </button>

//         {/* Gradient Masks */}
//         <div className="absolute top-0 left-0 h-full w-8 sm:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
//         <div className="absolute top-0 right-0 h-full w-8 sm:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

//         {/* Scrollable Track */}
//         <div
//           ref={scrollRef}
//           className={`
//             flex gap-4 sm:gap-8 overflow-x-auto whitespace-nowrap py-8 no-scrollbar touch-pan-x
//             ${isDragging ? "cursor-grabbing" : "cursor-grab"}
//             ${isHovered || isDragging ? "snap-x snap-mandatory" : ""}
//           `}
//           style={{
//             scrollBehavior: "auto",
//             msOverflowStyle: 'none',
//             scrollbarWidth: 'none'
//           }}
//           onMouseDown={handleMouseDown}
//           onMouseLeave={handleMouseLeave}
//           onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           {marqueeList.length > 0 ? (
//             marqueeList.map((project, index) => (
//               <div
//                 key={`${project.id}-${index}`}
//                 className="flex-shrink-0"
//               >
//                   <CaseStudyCard
//                     title={project.title}
//                     imageSrc={project.imageSrc}
//                     projectUrl={project.projectUrl}
//                     problem={project.problem || project.details?.problem || project.description}
//                     client={project.client || project.details?.client}
//                     solution={project.solution || project.details?.solution}
//                     result={project.result || project.details?.result}
//                   />
//               </div>
//             ))
//           ) : (
//             <div className="text-[var(--foreground)] text-center w-screen p-8">
//               No case studies available.
//             </div>
//           )}
//         </div>
//       </div>

//       {/* 3. Block Progress Bar (UPDATED RESPONSIVENESS) */}
//       {projectsData.length > 0 && (
//         <div
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             className="flex justify-center items-center gap-1.5 sm:gap-2 max-w-2xl mx-auto px-4 w-full"
//         >
//             {projectsData.map((_, idx) => (
//                 <button
//                     key={idx}
//                     onClick={() => scrollToCard(idx)}
//                     aria-label={`Go to slide ${idx + 1}`}
//                     // Flex-1 allows them to stretch/shrink perfectly based on the container size and number of items
//                     className="relative flex-1 min-w-[16px] max-w-[48px] h-1.5 sm:h-2 rounded-full cursor-pointer overflow-hidden bg-[var(--border-color)] transition-all hover:bg-[var(--foreground-muted)]"
//                 >
//                     {idx === activeIndex && (
//                         <motion.div
//                             layoutId="active-progress-block"
//                             className="absolute inset-0 bg-[var(--primary)]"
//                             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                         />
//                     )}
//                 </button>
//             ))}
//         </div>
//       )}

//     </section>
//   );
// };

// export default CaseStudiesSection;

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
//
//
//

import React, { useState, useEffect, useRef } from "react";
import CaseStudyCard from "./CaseStudyCard";
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase12";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CaseStudiesSection = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);

  // --- INTERACTION STATE ---
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftSnapshot, setScrollLeftSnapshot] = useState(0);

  // --- PROGRESS STATE ---
  const [activeIndex, setActiveIndex] = useState(0);

  // --- FIREBASE FETCH ---
  useEffect(() => {
    const projectsRef = ref(database, "Protfolio");
    const unsubscribe = onValue(
      projectsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          const projectsArray = Object.values(fetchedData);
          projectsArray.sort((a, b) => a.id - b.id);
          setProjectsData(projectsArray);
        } else {
          setProjectsData([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Firebase read error:", error);
        setLoading(false);
      },
    );
    return () => unsubscribe();
  }, []);

  // --- INFINITE LOOP DATA ---
  const DUPLICATION_FACTOR = 4;
  const marqueeList = Array(DUPLICATION_FACTOR).fill(projectsData).flat();

  // --- INITIAL CENTERING ON LOAD ---
  useEffect(() => {
    if (scrollRef.current && projectsData.length > 0) {
      const scrollContainer = scrollRef.current;

      // Wait for DOM to paint widths accurately
      setTimeout(() => {
        const cards = scrollContainer.children;
        const targetIndex = projectsData.length; // Start at the second set of duplicates

        if (cards && cards[targetIndex]) {
          const targetCard = cards[targetIndex];
          const containerCenter = scrollContainer.clientWidth / 2;
          const cardCenter = targetCard.offsetWidth / 2;

          scrollContainer.scrollLeft =
            targetCard.offsetLeft - containerCenter + cardCenter;
        }
      }, 100);
    }
  }, [projectsData]);

  // --- SCROLL ANIMATION LOOP ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const step = () => {
      if (scrollContainer) {
        // 1. Smooth Auto-rotate
        if (!isHovered && !isDragging) {
          scrollContainer.scrollLeft += 1; // Speed
        }

        const singleSetWidth = scrollContainer.scrollWidth / DUPLICATION_FACTOR;
        if (singleSetWidth > 0) {
          // 2. Seamless Infinite Reset Math
          if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
            scrollContainer.scrollLeft -= singleSetWidth;
          } else if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft += singleSetWidth;
          }

          // 3. Update Progress Bar based on the CENTER of the screen
          // Find the absolute center pixel of the currently visible area
          const centerPixel =
            scrollContainer.scrollLeft + scrollContainer.clientWidth / 2;

          // Find where that pixel falls within a single "set" of data
          const relativeCenter = centerPixel % singleSetWidth;

          // Map that center point to the correct card index
          const progressRatio = relativeCenter / singleSetWidth;
          const newIndex =
            Math.floor(progressRatio * projectsData.length) %
            projectsData.length;

          if (newIndex !== activeIndex && !isNaN(newIndex)) {
            setActiveIndex(newIndex);
          }
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, projectsData, activeIndex]);
  // --- SMOOTH DRAG HANDLERS ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    // Increased precision for starting position
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftSnapshot(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    // Multiplier adjusted to 1.5x for a natural, 1:1 fluid feel
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftSnapshot - walk;
  };

  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setTimeout(() => setIsHovered(false), 1000);

  // --- MANUAL NAVIGATION ARROWS ---
  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.firstElementChild;
      const scrollAmount = firstCard ? firstCard.clientWidth + 32 : 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // --- CLICK PROGRESS BAR TO PERFECTLY CENTER ---
  const scrollToCard = (index) => {
    if (scrollRef.current && projectsData.length > 0) {
      setActiveIndex(index);
      const scrollContainer = scrollRef.current;
      const cards = scrollContainer.children;
      const singleSetWidth = scrollContainer.scrollWidth / DUPLICATION_FACTOR;

      if (singleSetWidth === 0) return;

      // Target the set the user is currently looking at
      const currentSet = Math.floor(
        scrollContainer.scrollLeft / singleSetWidth,
      );
      let targetDomIndex = currentSet * projectsData.length + index;

      if (targetDomIndex >= cards.length) targetDomIndex = index;

      const targetCard = cards[targetDomIndex];

      if (targetCard) {
        const containerCenter = scrollContainer.clientWidth / 2;
        const cardCenter = targetCard.offsetWidth / 2;
        const scrollPosition =
          targetCard.offsetLeft - containerCenter + cardCenter;

        scrollContainer.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  if (loading) {
    return (
      <section className="bg-[var(--background)] min-h-[50vh] py-16 px-4 flex justify-center items-center text-[var(--foreground)] text-xl">
        Loading Case Studies...
      </section>
    );
  }

  return (
    <section className="bg-[var(--background)] py-16 sm:py-24 transition-colors duration-300 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10 sm:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
          Case Studies
        </h2>
        <div className="h-1 w-20 bg-[var(--primary)] mx-auto rounded-full mb-4"></div>
        <p className="text-[var(--foreground-muted)] text-base sm:text-lg">
          Explore our proven track record.
        </p>
      </div>

      <div
        className="relative w-full mb-8 sm:mb-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={() => handleManualScroll("left")}
          onMouseEnter={() => setIsHovered(true)}
          className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 backdrop-blur-md group hidden sm:flex justify-center items-center cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--foreground)] group-hover:text-white" />
        </button>

        <button
          onClick={() => handleManualScroll("right")}
          onMouseEnter={() => setIsHovered(true)}
          className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 backdrop-blur-md group hidden sm:flex justify-center items-center cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-[var(--foreground)] group-hover:text-white" />
        </button>

        <div className="absolute top-0 left-0 h-full w-8 sm:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-8 sm:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className={`
            flex gap-4 sm:gap-8 overflow-x-auto whitespace-nowrap py-8 no-scrollbar touch-pan-x
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          `}
          // REMOVED snap CSS classes so it slides beautifully
          style={{
            scrollBehavior: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {marqueeList.length > 0 ? (
            marqueeList.map((project, index) => (
              <div key={`${project.id}-${index}`} className="flex-shrink-0">
                <CaseStudyCard
                  title={project.title}
                  imageSrc={project.imageSrc}
                  projectUrl={project.projectUrl}
                  problem={
                    project.problem ||
                    project.details?.problem ||
                    project.description
                  }
                  client={project.client || project.details?.client}
                  solution={project.solution || project.details?.solution}
                  result={project.result || project.details?.result}
                />
              </div>
            ))
          ) : (
            <div className="text-[var(--foreground)] text-center w-screen p-8">
              No case studies available.
            </div>
          )}
        </div>
      </div>

      {projectsData.length > 0 && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex justify-center items-center gap-1.5 sm:gap-2 max-w-2xl mx-auto px-4 w-full"
        >
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="relative flex-1 min-w-[16px] max-w-[48px] h-1.5 sm:h-2 rounded-full cursor-pointer overflow-hidden bg-[var(--border-color)] transition-all hover:bg-[var(--foreground-muted)]"
            >
              {idx === activeIndex && (
                <motion.div
                  layoutId="active-progress-block"
                  className="absolute inset-0 bg-[var(--primary)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default CaseStudiesSection;
