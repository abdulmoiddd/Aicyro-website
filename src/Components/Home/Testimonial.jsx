// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// // --- ICONS ---

// const StarIcon = ({ isActive }) => (
//   <svg
//     className={`w-4 h-4 sm:w-5 sm:h-5 ${
//       isActive
//         ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
//         : "text-gray-700"
//     }`}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// const QuoteIcon = () => (
//   <svg
//     width="80"
//     height="80"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className="absolute top-4 right-6 text-[#7B71DB] opacity-10 transform rotate-12 pointer-events-none"
//   >
//     <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
//   </svg>
// );

// const ArrowLeft = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="p-3 rounded-full border border-[#7B71DB]/30 bg-[#120B18] transition-all duration-300 group hover:bg-[#7B71DB] hover:border-[#7B71DB] hover:shadow-[0_0_15px_rgba(123,113,219,0.5)] active:scale-95"
//   >
//     <svg
//       className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-1"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M15 19l-7-7 7-7"
//       />
//     </svg>
//   </button>
// );

// const ArrowRight = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="p-3 rounded-full border border-[#7B71DB]/30 bg-[#120B18] transition-all duration-300 group hover:bg-[#7B71DB] hover:border-[#7B71DB] hover:shadow-[0_0_15px_rgba(123,113,219,0.5)] active:scale-95"
//   >
//     <svg
//       className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 5l7 7-7 7"
//       />
//     </svg>
//   </button>
// );

// // --- COMPONENT ---

// const TestimonialCard = ({ testimonial, className = "" }) => (
//   <motion.div
//     whileHover={{ y: -10 }}
//     className={`group relative p-6 sm:p-8 rounded-2xl h-full flex flex-col
//       bg-gradient-to-b from-[#1F1629] to-[#120B18]
//       border border-white/5 hover:border-[#7B71DB]/50
//       shadow-lg hover:shadow-[0_0_30px_-5px_rgba(123,113,219,0.2)]
//       transition-all duration-300 ease-out overflow-hidden select-none ${className}`}
//   >
//     <QuoteIcon />
//     <div className="relative z-10 mb-6">
//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <div className="absolute inset-0 rounded-full bg-[#7B71DB] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
//           <img
//             src={testimonial.avatar || avatar1}
//             alt={testimonial.name}
//             className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-white/10 relative z-10 pointer-events-none"
//           />
//         </div>
//         <div>
//           <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#9f94ff] transition-colors duration-300">
//             {testimonial.name}
//           </h3>
//           <p className="text-gray-400 text-sm font-medium">
//             {testimonial.location}
//           </p>
//         </div>
//       </div>
//       <div className="flex gap-1 mt-3">
//         {[...Array(5)].map((_, i) => (
//           <StarIcon key={i} isActive={i < testimonial.rating} />
//         ))}
//       </div>
//     </div>
//     <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />
//     <p className="text-sm sm:text-base text-gray-300 leading-relaxed relative z-10 font-light tracking-wide">
//       {testimonial.feedback}
//     </p>
//   </motion.div>
// );

// const Testimonial = () => {
//   const [testimonialData, setTestimonialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // --- CAROUSEL LOGIC STATE ---
//   const [index, setIndex] = useState(0);
//   const carouselRef = useRef();

//   // Card dimensions
//   const CARD_SIZE_DESKTOP = 432;
//   const CARD_SIZE_MOBILE = 374;

//   // Fetch Data
//   useEffect(() => {
//     const testimonialsRef = ref(database, "testimonialSection");
//     const unsubscribe = onValue(
//       testimonialsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const testimonialsArray = Object.values(
//             fetchedData.testimonials || {}
//           );
//           setTestimonialData({
//             ...fetchedData,
//             testimonials: testimonialsArray,
//           });
//           setLoading(false);
//         } else {
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );
//     return () => unsubscribe();
//   }, []);

//   // --- AUTO ROTATION EFFECT REMOVED ---

//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] min-h-[500px] flex justify-center items-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7B71DB]"></div>
//       </section>
//     );
//   }

//   if (!testimonialData) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 text-center">
//         No Data Found.
//       </section>
//     );
//   }

//   const { tagline, mainHeading, subText, testimonials } = testimonialData;
//   const isSlider = testimonials.length > 3;

//   // --- HANDLERS ---

//   const handlePrev = () => {
//     setIndex((prev) => {
//       // Loop to end if at start
//       if (prev === 0) return testimonials.length - 1;
//       return prev - 1;
//     });
//   };

//   const handleNext = () => {
//     setIndex((prev) => {
//       // Loop to start if at end
//       if (prev >= testimonials.length - 1) return 0;
//       return prev + 1;
//     });
//   };

//   const onDragEnd = (event, info) => {
//     const offset = info.offset.x;
//     const velocity = info.velocity.x;

//     // If swiped right (positive) -> Go Prev
//     if (offset > 100 || velocity > 500) {
//       handlePrev();
//     }
//     // If swiped left (negative) -> Go Next
//     else if (offset < -100 || velocity < -500) {
//       handleNext();
//     }
//   };

//   const getXPosition = () => {
//     const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;
//     const size = isDesktop ? CARD_SIZE_DESKTOP : CARD_SIZE_MOBILE;
//     return -index * size;
//   };

//   return (
//     <section className="bg-[#0A0118] text-white py-20 sm:py-24 overflow-hidden relative">
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B71DB] opacity-10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
//         <div className="text-center mb-6">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-block border border-[#7B71DB]/50 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wider"
//           >
//             {tagline}
//           </motion.span>
//         </div>

//         <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
//           <div className="w-full md:w-2/3 text-center md:text-left">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
//             >
//               {mainHeading}
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-base sm:text-lg text-gray-400 leading-relaxed"
//             >
//               {subText}
//             </motion.p>
//           </div>

//           {/* ARROWS */}
//           {isSlider && (
//             <div className="hidden md:flex gap-4">
//               <ArrowLeft onClick={handlePrev} />
//               <ArrowRight onClick={handleNext} />
//             </div>
//           )}
//         </div>
//       </div>

//       {isSlider ? (
//         // === OPTION A: DRAGGABLE CAROUSEL (Manual Only) ===
//         <div className="relative w-full">
//           <motion.div
//             ref={carouselRef}
//             className="overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto cursor-grab active:cursor-grabbing"
//           >
//             <motion.div
//               className="flex gap-6 sm:gap-8 w-max py-10"
//               animate={{ x: getXPosition() }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               // Enable Drag
//               drag="x"
//               // Adjust drag constraints dynamically
//               dragConstraints={{
//                 right: 0,
//                 left: -(
//                   testimonials.length * CARD_SIZE_DESKTOP -
//                   window.innerWidth
//                 ),
//               }}
//               onDragEnd={onDragEnd}
//             >
//               {testimonials.map((testimonial, idx) => (
//                 <div key={`slider-${idx}`} className="w-[350px] sm:w-[400px]">
//                   <TestimonialCard testimonial={testimonial} />
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Mobile Arrows */}
//           <div className="flex md:hidden justify-center gap-4 mt-4">
//             <ArrowLeft onClick={handlePrev} />
//             <ArrowRight onClick={handleNext} />
//           </div>
//         </div>
//       ) : (
//         // === OPTION B: GRID (<= 3 items) ===
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard
//                 key={index}
//                 testimonial={testimonial}
//                 className="w-full"
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Testimonial;

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
import { motion } from "framer-motion";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
// ---------------------------------

// --- ICONS ---

const StarIcon = ({ isActive }) => (
  <svg
    className={`w-4 h-4 sm:w-5 sm:h-5 ${
      isActive
        ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
        : "text-[var(--foreground-muted)]/30" // UPDATED: Inactive star adapts to theme
    }`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="currentColor"
    // UPDATED: Uses secondary variable
    className="absolute top-4 right-6 text-[var(--secondary)] opacity-10 transform rotate-12 pointer-events-none"
  >
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

const ArrowLeft = ({ onClick }) => (
  <button
    onClick={onClick}
    // UPDATED: Background and Border use variables
    className="p-3 rounded-full border border-[var(--secondary)]/30 bg-[var(--card-bg)] transition-all duration-300 group hover:bg-[var(--secondary)] hover:border-[var(--secondary)] hover:shadow-[0_0_15px_rgba(123,113,219,0.5)] active:scale-95"
  >
    <svg
      // UPDATED: Icon color
      className="w-6 h-6 text-[var(--foreground)] group-hover:text-white transition-transform duration-300 group-hover:-translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

const ArrowRight = ({ onClick }) => (
  <button
    onClick={onClick}
    // UPDATED: Background and Border use variables
    className="p-3 rounded-full border border-[var(--secondary)]/30 bg-[var(--card-bg)] transition-all duration-300 group hover:bg-[var(--secondary)] hover:border-[var(--secondary)] hover:shadow-[0_0_15px_rgba(123,113,219,0.5)] active:scale-95"
  >
    <svg
      // UPDATED: Icon color
      className="w-6 h-6 text-[var(--foreground)] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

// --- COMPONENT ---

const TestimonialCard = ({ testimonial, className = "" }) => (
  <motion.div
    whileHover={{ y: -10 }}
    // UPDATED: Background Gradient and Border use variables
    className={`group relative p-6 sm:p-8 rounded-2xl h-full flex flex-col 
      bg-gradient-to-b from-[var(--card-gradient-start)] to-[var(--card-gradient-end)] 
      border border-[var(--border-color)] hover:border-[var(--secondary)]/50 
      shadow-lg hover:shadow-[0_0_30px_-5px_rgba(123,113,219,0.2)] 
      transition-all duration-300 ease-out overflow-hidden select-none ${className}`}
  >
    <QuoteIcon />
    <div className="relative z-10 mb-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[var(--secondary)] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <img
            src={
              testimonial.avatar || "https://dummyimages.netlify.app/avatar.jpg"
            }
            alt={testimonial.name}
            // UPDATED: Border color
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[var(--border-color)] relative z-10 pointer-events-none"
          />
        </div>
        <div>
          {/* UPDATED: Name text color */}
          <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] group-hover:text-[#9f94ff] transition-colors duration-300">
            {testimonial.name}
          </h3>
          {/* UPDATED: Location text color */}
          <p className="text-[var(--foreground-muted)] text-sm font-medium">
            {testimonial.location}
          </p>
        </div>
      </div>
      <div className="flex gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} isActive={i < testimonial.rating} />
        ))}
      </div>
    </div>
    {/* UPDATED: Separator Line color */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--foreground)]/10 to-transparent mb-5" />

    {/* UPDATED: Feedback text color */}
    <p className="text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed relative z-10 font-light tracking-wide">
      {testimonial.feedback}
    </p>
  </motion.div>
);

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- CAROUSEL LOGIC STATE ---
  const [index, setIndex] = useState(0);
  const carouselRef = useRef();

  // Card dimensions
  const CARD_SIZE_DESKTOP = 432;
  const CARD_SIZE_MOBILE = 374;

  // Fetch Data
  useEffect(() => {
    const testimonialsRef = ref(database, "testimonialSection");
    const unsubscribe = onValue(
      testimonialsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          const testimonialsArray = Object.values(
            fetchedData.testimonials || {}
          );
          setTestimonialData({
            ...fetchedData,
            testimonials: testimonialsArray,
          });
          setLoading(false);
        } else {
          setLoading(false);
        }
      },
      (error) => {
        console.error("Firebase read error:", error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      // UPDATED: Loading spinner background
      <section className="bg-[var(--background)] min-h-[500px] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary)]"></div>
      </section>
    );
  }

  if (!testimonialData) {
    return (
      <section className="bg-[var(--background)] text-[var(--foreground)] py-20 text-center">
        No Data Found.
      </section>
    );
  }

  const { tagline, mainHeading, subText, testimonials } = testimonialData;
  const isSlider = testimonials.length > 3;

  // --- HANDLERS ---

  const handlePrev = () => {
    setIndex((prev) => {
      // Loop to end if at start
      if (prev === 0) return testimonials.length - 1;
      return prev - 1;
    });
  };

  const handleNext = () => {
    setIndex((prev) => {
      // Loop to start if at end
      if (prev >= testimonials.length - 1) return 0;
      return prev + 1;
    });
  };

  const onDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // If swiped right (positive) -> Go Prev
    if (offset > 100 || velocity > 500) {
      handlePrev();
    }
    // If swiped left (negative) -> Go Next
    else if (offset < -100 || velocity < -500) {
      handleNext();
    }
  };

  const getXPosition = () => {
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;
    const size = isDesktop ? CARD_SIZE_DESKTOP : CARD_SIZE_MOBILE;
    return -index * size;
  };

  return (
    // UPDATED: Main section background
    <section className="bg-[var(--background)] text-[var(--foreground)] py-20 sm:py-24 overflow-hidden relative transition-colors duration-300">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--secondary)] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // UPDATED: Tagline colors
            className="inline-block border border-[var(--secondary)]/50 text-[var(--foreground)] text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wider"
          >
            {tagline}
          </motion.span>
        </div>

        <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              // UPDATED: Heading text color
              className="text-3xl sm:text-5xl font-bold mb-4 text-[var(--foreground)]"
            >
              {mainHeading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              // UPDATED: Subtext color
              className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed"
            >
              {subText}
            </motion.p>
          </div>

          {/* ARROWS */}
          {isSlider && (
            <div className="hidden md:flex gap-4">
              <ArrowLeft onClick={handlePrev} />
              <ArrowRight onClick={handleNext} />
            </div>
          )}
        </div>
      </div>

      {isSlider ? (
        // === OPTION A: DRAGGABLE CAROUSEL (Manual Only) ===
        <div className="relative w-full">
          <motion.div
            ref={carouselRef}
            className="overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto cursor-grab active:cursor-grabbing"
          >
            <motion.div
              className="flex gap-6 sm:gap-8 w-max py-10"
              animate={{ x: getXPosition() }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              // Enable Drag
              drag="x"
              // Adjust drag constraints dynamically
              dragConstraints={{
                right: 0,
                left: -(
                  testimonials.length * CARD_SIZE_DESKTOP -
                  window.innerWidth
                ),
              }}
              onDragEnd={onDragEnd}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={`slider-${idx}`} className="w-[350px] sm:w-[400px]">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <ArrowLeft onClick={handlePrev} />
            <ArrowRight onClick={handleNext} />
          </div>
        </div>
      ) : (
        // === OPTION B: GRID (<= 3 items) ===
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                className="w-full"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial;
