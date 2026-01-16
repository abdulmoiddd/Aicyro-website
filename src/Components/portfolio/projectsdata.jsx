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
    const projectsRef = ref(database, "Protfolio");

    const unsubscribe = onValue(
      projectsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          // Convert object to array
          const projectsArray = Object.values(fetchedData);

          // --- SORTING LOGIC ---
          projectsArray.sort((a, b) => a.id - b.id);

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
      // UPDATED: Background variable and Text color
      <section className="bg-[var(--background)] min-h-screen py-16 px-4 flex justify-center items-center text-[var(--foreground)] text-xl">
        Loading Projects...
      </section>
    );
  }

  // 4. RENDER THE COMPONENT
  return (
    // UPDATED: Background variable
    <section className="bg-[var(--background)] min-h-screen py-16 px-4 transition-colors duration-300">
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
                  key={project.id} // Ensure IDs are unique in DB, otherwise use index
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  details={project.details}
                  projectUrl={project.projectUrl}
                />
              ))
            ) : (
              // UPDATED: Text color
              <div className="text-[var(--foreground)] text-center text-lg p-8 col-span-full">
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
              // UPDATED: Dynamic colors for disabled/enabled states
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border border-[var(--border-color)] ${
                currentPage === 1
                  ? "bg-[var(--card-bg)] text-[var(--foreground-muted)] opacity-50 cursor-not-allowed"
                  : "bg-[var(--card-bg)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white hover:border-transparent"
              }`}
            >
              Prev
            </button>

            {/* PAGE NUMBERS */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                // UPDATED: Active state gradient vs Inactive card style
                className={`w-10 h-10 rounded-md text-sm font-medium transition-colors border ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-[var(--secondary)] to-[var(--accent-blue)] text-white border-transparent hover:from-[var(--accent-blue)] hover:to-[var(--secondary)]"
                    : "bg-[var(--card-bg)] text-[var(--foreground)] border-[var(--border-color)] hover:bg-[var(--border-color)]"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* NEXT BUTTON */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              // UPDATED: Dynamic colors for disabled/enabled states
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border border-[var(--border-color)] ${
                currentPage === totalPages
                  ? "bg-[var(--card-bg)] text-[var(--foreground-muted)] opacity-50 cursor-not-allowed"
                  : "bg-[var(--card-bg)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white hover:border-transparent"
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
