import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { ref, onValue } from "firebase/database";
import { database } from "../../../lib/firebase";

// --- HELPER: FALLBACK IMAGE GENERATOR ---
const getFallbackImage = (keyword) => {
  const params = "?q=80&w=800&auto=format&fit=crop";
  const normalized = keyword?.toLowerCase() || "";
  
  if (normalized.includes("finance")) return `https://images.unsplash.com/photo-1563986768609-322da13575f3${params}`;
  if (normalized.includes("warehouse")) return `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d${params}`;
  return `https://images.unsplash.com/photo-1550751827-4bd374c3f58b${params}`;
};

const PortfolioPreview = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- FIREBASE FETCHING ---
  useEffect(() => {
    const projectsRef = ref(database, "Protfolio");

    const unsubscribe = onValue(
      projectsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          const projectsArray = Object.values(fetchedData);
          
          // Sort by ID and limit to 3 items
          projectsArray.sort((a, b) => a.id - b.id);
          setProjects(projectsArray.slice(0, 3));
        } else {
          setProjects([]);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  if (loading) return null; // Or a subtle loading spinner if preferred

  // If no data, do not render section
  if (!loading && projects.length === 0) return null;

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER (CENTERED) --- */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--foreground)]"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
          >
            Real execution. Real results. A snapshot of how we solve complex problems.
          </motion.p>
        </div>

        {/* --- GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project) => {
            const safeProblem = project.problem || "Identified core system inefficiencies requiring modernization.";
            const safeSolution = project.solution || project.description?.substring(0, 60) + "..." || "Custom high-performance architecture.";
            const safeImage = project.imageSrc || getFallbackImage(project.title);

            return (
              <motion.div key={project.id} variants={cardVariants} className="w-full h-full">
                
                {/* --- EXACT PROJECT CARD DESIGN --- */}
                <div className="bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--border-color)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  
                  {/* Image Background */}
                  <div
                    className="h-48 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{
                      backgroundImage: `url('${safeImage}')`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="w-full h-full bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="p-6 text-[var(--foreground)] flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

                    {/* Problem */}
                    <div className="mb-4 min-h-[50px]">
                      {/* <div className="flex items-center gap-2 mb-1 text-red-400 font-semibold text-xs uppercase tracking-wider">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Problem
                      </div> */}
                      <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                        {safeProblem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6 pt-4 border-t border-[var(--border-color)]">
                      <div className="flex items-center gap-2 mb-1 text-[var(--secondary)] font-semibold text-xs uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Solution
                      </div>
                      <p className="text-sm text-[var(--foreground)] leading-relaxed">
                        {safeSolution}
                      </p>
                    </div>

                    {/* Button */}
                    <div className="mt-auto">
                      <Link
                        href={project.projectUrl || "/portfolio"}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[var(--secondary)] hover:bg-[var(--primary)] text-white font-medium rounded-lg transition-colors duration-200"
                      >
                        <Eye className="w-4 h-4" />
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- VIEW ALL BUTTON (CENTERED) --- */}
        <div className="text-center">
          <Link href="/portfolio">
            <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[var(--border-color)] text-[var(--foreground)] font-medium hover:bg-[var(--card-bg)] hover:border-[var(--primary)] transition-all duration-300">
              View Full Portfolio
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-[var(--primary)]" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;