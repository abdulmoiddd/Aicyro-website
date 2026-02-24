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
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let animationFrameId;

//     const step = () => {
//       if (scrollContainer) {
//         // 1. Auto-move (Only if NOT hovered, NOT dragging, and NOT touched)
//         if (!isHovered && !isDragging) {
//           scrollContainer.scrollLeft += 1; // Speed
//         }

//         // 2. Infinite Reset Logic
//         const maxScroll = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
        
//         // Safety check to prevent flickering if content is smaller than screen
//         if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
//             if (scrollContainer.scrollLeft >= maxScroll) {
//             scrollContainer.scrollLeft = scrollContainer.scrollLeft - maxScroll;
//             } else if (scrollContainer.scrollLeft <= 0) {
//                 scrollContainer.scrollLeft = maxScroll + scrollContainer.scrollLeft;
//             }
//         }

//         // 3. Update Progress Bar
//         const singleSetWidth = scrollContainer.scrollWidth / DUPLICATION_FACTOR;
//         if (singleSetWidth > 0) {
//              const relativeScroll = scrollContainer.scrollLeft % singleSetWidth;
//              const progressRatio = relativeScroll / singleSetWidth;
//              // Ensure index stays within bounds
//              const newIndex = Math.floor(progressRatio * projectsData.length) % projectsData.length;
             
//              if (newIndex !== activeIndex && !isNaN(newIndex)) {
//                  setActiveIndex(newIndex);
//              }
//         }
//       }
//       animationFrameId = requestAnimationFrame(step);
//     };

//     animationFrameId = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, [isHovered, isDragging, projectsData, activeIndex]);

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

// // --- TOUCH HANDLERS (MOBILE) ---
//   const handleTouchStart = () => {
//     setIsHovered(true); // Pauses auto-scroll, enables Snap
//   };

//   const handleTouchEnd = () => {

//     setTimeout(() => {
//         setIsHovered(false); // Resumes auto-scroll, disables Snap
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

//   // --- CLICK TO SCROLL TO CARD ---
//   const scrollToCard = (index) => {
//     if (scrollRef.current) {
//       const singleSetWidth = scrollRef.current.scrollWidth / DUPLICATION_FACTOR;
//       const cardWidth = singleSetWidth / projectsData.length;
//       scrollRef.current.scrollTo({
//         left: cardWidth * index,
//         behavior: 'smooth'
//       });
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
        
//         {/* --- LEFT ARROW (Hidden on Mobile) --- */}
//         <button
//           onClick={() => handleManualScroll("left")}
//           onMouseEnter={() => setIsHovered(true)}
//           className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 backdrop-blur-md group hidden sm:flex justify-center items-center cursor-pointer"
//           aria-label="Scroll left"
//         >
//           <ChevronLeft className="w-6 h-6 text-[var(--foreground)] group-hover:text-white" />
//         </button>

//         {/* --- RIGHT ARROW (Hidden on Mobile) --- */}
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

//        // Inside CaseStudiesSection.js

// {/* Scrollable Track */}
// <div
//   ref={scrollRef}
//   className={`
//     flex gap-4 sm:gap-8 overflow-x-auto whitespace-nowrap py-4 no-scrollbar touch-pan-x
//     ${isDragging ? "cursor-grabbing" : "cursor-grab"}
//     ${/* ONLY enable snap when the user is interacting */""}
//     ${isHovered || isDragging ? "snap-x snap-mandatory" : ""}
//   `}
//   style={{
//     scrollBehavior: "auto",
//     msOverflowStyle: 'none',
//     scrollbarWidth: 'none'
//   }}
  
//   onMouseDown={handleMouseDown}
//   onMouseLeave={handleMouseLeave}
//   onMouseUp={handleMouseUp}
//   onMouseMove={handleMouseMove}
  
//   // Mobile Listeners
//   onTouchStart={handleTouchStart}
//   onTouchEnd={handleTouchEnd}
// >
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

//       {/* 3. Block Progress Bar */}
//       {projectsData.length > 0 && (
//         <div className="flex justify-center items-center gap-2 max-w-7xl mx-auto px-4 flex-wrap">
//             {projectsData.map((_, idx) => (
//                 <div
//                     key={idx}
//                     onClick={() => scrollToCard(idx)}
//                     className="relative w-8 h-1.5 sm:w-12 sm:h-2 rounded-full cursor-pointer overflow-hidden bg-[var(--border-color)] transition-all hover:opacity-80"
//                 >
//                     {idx === activeIndex && (
//                         <motion.div
//                             layoutId="active-progress-block"
//                             className="absolute inset-0 bg-[var(--primary)]"
//                             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                         />
//                     )}
//                 </div>
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
///
//
//
//
//
import React, { useState, useEffect, useRef } from "react";
import CaseStudyCard from "./CaseStudyCard";
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
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
      }
    );
    return () => unsubscribe();
  }, []);

  // --- INFINITE LOOP DATA ---
  const DUPLICATION_FACTOR = 4;
  const marqueeList = Array(DUPLICATION_FACTOR).fill(projectsData).flat();

  // --- SCROLL ANIMATION LOOP ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const step = () => {
      if (scrollContainer) {
        // 1. Auto-move (Only if NOT hovered, NOT dragging)
        if (!isHovered && !isDragging) {
          scrollContainer.scrollLeft += 1; // Speed
        }

        // 2. Infinite Reset Logic
        const maxScroll = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
        
        // Safety check to prevent flickering
        if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
            if (scrollContainer.scrollLeft >= maxScroll) {
            scrollContainer.scrollLeft = scrollContainer.scrollLeft - maxScroll;
            } else if (scrollContainer.scrollLeft <= 0) {
                scrollContainer.scrollLeft = maxScroll + scrollContainer.scrollLeft;
            }
        }

        // 3. Update Progress Bar
        // We only update activeIndex via scroll if we aren't manually hovering/dragging
        // This prevents the bar from "flickering" while you are trying to click it
        const singleSetWidth = scrollContainer.scrollWidth / DUPLICATION_FACTOR;
        if (singleSetWidth > 0) {
             const relativeScroll = scrollContainer.scrollLeft % singleSetWidth;
             const progressRatio = relativeScroll / singleSetWidth;
             const newIndex = Math.floor(progressRatio * projectsData.length) % projectsData.length;
             
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

  // --- DRAG HANDLERS (MOUSE) ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
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
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeftSnapshot - walk;
  };

// --- TOUCH HANDLERS (MOBILE) ---
  const handleTouchStart = () => {
    setIsHovered(true); 
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
        setIsHovered(false); 
    }, 1000);
  };

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

  // --- CLICK TO SCROLL TO CARD ---
  const scrollToCard = (index) => {
    if (scrollRef.current) {
      // Set active index immediately for visual feedback
      setActiveIndex(index);
      
      const singleSetWidth = scrollRef.current.scrollWidth / DUPLICATION_FACTOR;
      // We divide by projectsData.length to get exact card width
      const cardWidth = singleSetWidth / projectsData.length;
      
      // We scroll to the FIRST set of data to keep math simple
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
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
      
      {/* 1. Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-10 sm:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
          Case Studies
        </h2>
        <div className="h-1 w-20 bg-[var(--primary)] mx-auto rounded-full mb-4"></div>
        <p className="text-[var(--foreground-muted)] text-base sm:text-lg">
          Explore our proven track record.
        </p>
      </div>

      {/* 2. MAIN WRAPPER */}
      <div 
        className="relative w-full mb-8 sm:mb-12"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* --- LEFT ARROW --- */}
        <button
          onClick={() => handleManualScroll("left")}
          onMouseEnter={() => setIsHovered(true)}
          className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 backdrop-blur-md group hidden sm:flex justify-center items-center cursor-pointer"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--foreground)] group-hover:text-white" />
        </button>

        {/* --- RIGHT ARROW --- */}
        <button
          onClick={() => handleManualScroll("right")}
          onMouseEnter={() => setIsHovered(true)}
          className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 backdrop-blur-md group hidden sm:flex justify-center items-center cursor-pointer"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-[var(--foreground)] group-hover:text-white" />
        </button>

        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-8 sm:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-8 sm:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

        {/* Scrollable Track */}
        <div 
          ref={scrollRef}
          className={`
            flex gap-4 sm:gap-8 overflow-x-auto whitespace-nowrap py-4 no-scrollbar touch-pan-x
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
            ${isHovered || isDragging ? "snap-x snap-mandatory" : ""} 
          `}
          style={{ 
            scrollBehavior: "auto", // Important: we handle smooth scroll manually or via button
            msOverflowStyle: 'none', 
            scrollbarWidth: 'none' 
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
              <div 
                key={`${project.id}-${index}`} 
                className="flex-shrink-0" 
              >
                  <CaseStudyCard
                    title={project.title}
                    imageSrc={project.imageSrc}
                    projectUrl={project.projectUrl}
                    problem={project.problem || project.details?.problem || project.description}
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

      {/* 3. Block Progress Bar (NOW INTERACTIVE) */}
      {projectsData.length > 0 && (
        <div 
            // ADDED: Pause auto-scroll when hovering the progress bar
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            className="flex justify-center items-center gap-2 max-w-7xl mx-auto px-4 flex-wrap"
        >
            {projectsData.map((_, idx) => (
                <div
                    key={idx}
                    onClick={() => scrollToCard(idx)}
                    className="relative w-8 h-1.5 sm:w-12 sm:h-2 rounded-full cursor-pointer overflow-hidden bg-[var(--border-color)] transition-all hover:opacity-80"
                >
                    {idx === activeIndex && (
                        <motion.div 
                            layoutId="active-progress-block"
                            className="absolute inset-0 bg-[var(--primary)]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </div>
            ))}
        </div>
      )}

    </section>
  );
};

export default CaseStudiesSection;