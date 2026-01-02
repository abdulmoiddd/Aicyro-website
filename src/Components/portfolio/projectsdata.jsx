// import React, { useState, useEffect } from "react";
// import ProjectCard from "./projectcard";
// import { motion, AnimatePresence } from "framer-motion"; // 1. Import Framer Motion

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// const ProjectsSection = () => {
//   const [projectsData, setProjectsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // --- PAGINATION STATE ---
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;
//   // ------------------------

//   // 2. FIREBASE DATA FETCHING EFFECT
//   useEffect(() => {
//     const projectsRef = ref(database, "projectsData");

//     const unsubscribe = onValue(
//       projectsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const projectsArray = Object.values(fetchedData);
//           setProjectsData(projectsArray);
//           setLoading(false);
//         } else {
//           console.log("No projects data found.");
//           setProjectsData([]);
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setProjectsData([]);
//         setLoading(false);
//       }
//     );

//     return () => unsubscribe();
//   }, []);

//   // --- PAGINATION LOGIC ---
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = projectsData.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(projectsData.length / itemsPerPage);

//   // Handler to change page with scroll to top
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     // Optional: Smooth scroll to top of section when page changes
//     // window.scrollTo({ top: 0, behavior: 'smooth' });
//   };
//   // ------------------------

//   // 3. Handle Loading State
//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] min-h-screen py-16 px-4 flex justify-center items-center text-white text-xl">
//         Loading Projects...
//       </section>
//     );
//   }

//   // 4. RENDER THE COMPONENT
//   return (
//     <section className="bg-[#0A0118] min-h-screen py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* ANIMATION WRAPPER */}
//         {/* mode='wait' ensures the old page fades out before new one fades in */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentPage} // This key triggers the animation when page changes
//             initial={{ opacity: 0, y: 20 }} // Start: transparent and slightly down
//             animate={{ opacity: 1, y: 0 }} // End: visible and in place
//             exit={{ opacity: 0, y: -20 }} // Exit: transparent and slightly up
//             transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth timing
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {/* Check if any data was loaded */}
//             {projectsData.length > 0 ? (
//               currentItems.map((project) => (
//                 <ProjectCard
//                   key={project.id}
//                   title={project.title}
//                   description={project.description}
//                   imageSrc={project.imageSrc}
//                   details={project.details}
//                 />
//               ))
//             ) : (
//               <div className="text-white text-center text-lg p-8 col-span-full">
//                 No projects available at this time.
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>

//         {/* PAGINATION CONTROLS */}
//         {projectsData.length > itemsPerPage && (
//           <div className="flex justify-center items-center mt-12 space-x-2">
//             {/* PREV BUTTON */}
//             <button
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 currentPage === 1
//                   ? "bg-gray-800 text-gray-500 cursor-not-allowed"
//                   : "bg-gray-800 text-white hover:bg-[#8A2BE2]"
//               }`}
//             >
//               Prev
//             </button>

//             {/* PAGE NUMBERS */}
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => paginate(index + 1)}
//                 className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
//                   currentPage === index + 1
//                     ? "bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB]"
//                     : "bg-gray-800 text-gray-300 hover:bg-gray-700"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}

//             {/* NEXT BUTTON */}
//             <button
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 currentPage === totalPages
//                   ? "bg-gray-800 text-gray-500 cursor-not-allowed"
//                   : "bg-gray-800 text-white bg-gradient-to-r hover:from-[#5B86D3] hover:to-[#7973DB]"
//               }`}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
//
//
//
//
//
//
//
//
//
import React, { useState, useEffect } from "react";
import ProjectCard from "./projectcard";
import { motion, AnimatePresence } from "framer-motion";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
// ---------------------------------

const ProjectsSection = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- PAGINATION STATE ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  // ------------------------

  // 2. FIREBASE DATA FETCHING EFFECT
  useEffect(() => {
    const projectsRef = ref(database, "projectsData");

    const unsubscribe = onValue(
      projectsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          const projectsArray = Object.values(fetchedData);
          setProjectsData(projectsArray);
          setLoading(false);
        } else {
          console.log("No projects data found.");
          setProjectsData([]);
          setLoading(false);
        }
      },
      (error) => {
        console.error("Firebase read error:", error);
        setProjectsData([]);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // --- PAGINATION LOGIC ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projectsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  // Handler to change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Optional: Smooth scroll to top
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // ------------------------

  // 3. Handle Loading State
  if (loading) {
    return (
      <section className="bg-[#0A0118] min-h-screen py-16 px-4 flex justify-center items-center text-white text-xl">
        Loading Projects...
      </section>
    );
  }

  // 4. RENDER THE COMPONENT
  return (
    <section className="bg-[#0A0118] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ANIMATION WRAPPER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Check if any data was loaded */}
            {projectsData.length > 0 ? (
              currentItems.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  details={project.details}
                  // --- NEW: Pass the URL prop here ---
                  // Ensure your Firebase data has a field named 'projectUrl'
                  // Or change this to: projectUrl={`/projects/${project.id}`} if using dynamic routing
                  projectUrl={project.projectUrl}
                />
              ))
            ) : (
              <div className="text-white text-center text-lg p-8 col-span-full">
                No projects available at this time.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* PAGINATION CONTROLS */}
        {projectsData.length > itemsPerPage && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            {/* PREV BUTTON */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 1
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-[#8A2BE2]"
              }`}
            >
              Prev
            </button>

            {/* PAGE NUMBERS */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB]"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* NEXT BUTTON */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-gray-800 text-white bg-gradient-to-r hover:from-[#5B86D3] hover:to-[#7973DB]"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
