// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   TrendingUp,
//   ShieldCheck,
//   Zap
// } from "lucide-react";

// const caseStudies = [
//   {
//     id: 1,
//     category: "FinTech",
//     title: "FinTech Platform Development",
//     challenge: "Legacy system performance delays and escalating security risks threatening user data.",
//     solution: "Built a scalable AI-powered cloud platform using Next.js and AWS to modernize infrastructure.",
//     stats: "40% Faster Performance",
//     icon: <ShieldCheck size={24} />,
//     tags: ["FinTech", "Cloud Security", "AI Integration"]
//   },
//   {
//     id: 2,
//     category: "Healthcare",
//     title: "AI-Powered Diagnostic Tool",
//     challenge: "Manual data entry caused 30% operational drag and increased error rates in patient records.",
//     solution: "Developed a secure ML pipeline that automates data extraction and analysis.",
//     stats: "3x Operational Efficiency",
//     icon: <Zap size={24} />,
//     tags: ["Healthcare", "Machine Learning", "Automation"]
//   },
//   {
//     id: 3,
//     category: "E-Commerce",
//     title: "Global SaaS Scalability",
//     challenge: "Platform crashing during high-traffic events, leading to lost revenue and customer churn.",
//     solution: "Re-architected to a microservices-based serverless environment for infinite scale.",
//     stats: "99.99% Uptime Achieved",
//     icon: <TrendingUp size={24} />,
//     tags: ["SaaS", "Serverless", "Scalability"]
//   }
// ];

// const CaseStudySection = () => {
//   return (
//     <section className="relative w-full py-24 px-4 bg-[var(--background)] overflow-hidden">
      
//       {/* Background Decor */}
//       <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* --- Header --- */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//           <div className="max-w-2xl">
//             <motion.p
//               initial={{ opacity: 0, x: -10 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="text-[var(--primary)] text-xs font-bold tracking-[0.2em] uppercase mb-4"
//             >
//               Proven Results
//             </motion.p>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="text-3xl md:text-5xl font-bold text-[var(--foreground)]"
//             >
//               See How We Help Companies <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Scale & Succeed</span>
//             </motion.h2>
//           </div>
          
//           <motion.button
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-color)] text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-all duration-300 group"
//           >
//             View All Projects
//             <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//           </motion.button>
//         </div>

//         {/* --- Case Studies Grid --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {caseStudies.map((study, index) => (
//             <CaseStudyCard key={study.id} study={study} index={index} />
//           ))}
//         </div>

//         {/* Mobile View All Button */}
//         <div className="mt-12 flex justify-center md:hidden">
//             <button className="px-8 py-4 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)] font-semibold">
//                 View All Projects
//             </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// // --- Sub-Component: Card ---
// const CaseStudyCard = ({ study, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.15 }}
//       className="group flex flex-col h-full rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/5"
//     >
//       {/* 1. Image Placeholder Area (Abstract Gradient) */}
//       <div className="relative h-48 w-full overflow-hidden bg-[var(--background)]">
//          {/* Gradient Mesh */}
//          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--background)] to-[var(--secondary)]/20 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
         
//          {/* Category Badge */}
//          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border-color)]">
//             <span className="text-[10px] font-bold tracking-wider uppercase text-[var(--foreground)]">
//                 {study.category}
//             </span>
//          </div>

//          {/* Icon Overlay */}
//          <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-[var(--card-bg)]/90 backdrop-blur border border-[var(--border-color)] text-[var(--primary)] shadow-lg">
//             {study.icon}
//          </div>
//       </div>

//       {/* 2. Content Area */}
//       <div className="p-8 flex flex-col flex-grow">
        
//         <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 group-hover:text-[var(--primary)] transition-colors duration-300">
//           {study.title}
//         </h3>

//         {/* Problem / Solution Split */}
//         <div className="space-y-4 mb-8 flex-grow">
//             <div>
//                 <span className="text-xs font-bold text-[var(--foreground-muted)] uppercase tracking-wider block mb-1">Challenge</span>
//                 <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">
//                     {study.challenge}
//                 </p>
//             </div>
//             <div>
//                 <span className="text-xs font-bold text-[var(--foreground-muted)] uppercase tracking-wider block mb-1">Solution</span>
//                 <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">
//                     {study.solution}
//                 </p>
//             </div>
//         </div>

//         {/* 3. Result Footer (Highlighted) */}
//         <div className="pt-6 border-t border-[var(--border-color)] mt-auto">
//             <div className="flex items-center gap-3">
//                 <div className="w-1 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full" />
//                 <div>
//                     <span className="text-xs font-bold text-[var(--foreground-muted)] uppercase">Result</span>
//                     <p className="text-lg font-bold text-[var(--foreground)]">
//                         {study.stats}
//                     </p>
//                 </div>
//             </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// export default CaseStudySection;

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
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Code2, 
  Smartphone,
  Globe,
  Loader2
} from "lucide-react";
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase"; // Adjust path if needed

// --- HELPER: ICON SELECTOR ---
// Dynamically picks an icon based on the project title/category
const getProjectIcon = (keyword) => {
  const lower = keyword?.toLowerCase() || "";
  if (lower.includes("fintech") || lower.includes("security")) return <ShieldCheck size={24} />;
  if (lower.includes("health") || lower.includes("medical")) return <Zap size={24} />;
  if (lower.includes("saas") || lower.includes("growth")) return <TrendingUp size={24} />;
  if (lower.includes("mobile") || lower.includes("app")) return <Smartphone size={24} />;
  return <Code2 size={24} />;
};

// --- HELPER: FALLBACK IMAGE ---
const getFallbackImage = (keyword) => {
  const params = "?q=80&w=800&auto=format&fit=crop";
  const normalized = keyword?.toLowerCase() || "";
  if (normalized.includes("finance")) return `https://images.unsplash.com/photo-1563986768609-322da13575f3${params}`;
  if (normalized.includes("health")) return `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d${params}`;
  return `https://images.unsplash.com/photo-1550751827-4bd374c3f58b${params}`;
};

const CaseStudySection = () => {
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
          // Sort by ID and limit to 3 items for the homepage
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

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-[var(--background)]">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--primary)]" />
      </div>
    );
  }

  // If no data, hide section safely
  if (!loading && projects.length === 0) return null;

  return (
    <section className="relative w-full py-24 px-4 bg-[var(--background)] overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[var(--primary)] text-xs font-bold tracking-[0.2em] uppercase mb-4"
            >
              Proven Results
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              See How We Help Companies <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Scale & Succeed</span>
            </motion.h2>
          </div>
          
          <Link href="/portfolio">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-color)] text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-all duration-300 group"
            >
              View All Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* --- DYNAMIC GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Safe Data Mapping
            const title = project.title || "Untitled Project";
            const category = project.category || "Software Development";
            const challenge = project.problem || "Legacy infrastructure limiting growth and scalability.";
            const solution = project.solution || "Custom-engineered high-performance cloud architecture.";
            const stats = project.results || "Performance Optimized"; // Or "100% Delivery"
            const imageSrc = project.imageSrc || getFallbackImage(title);
            const icon = getProjectIcon(title + " " + category);
            
            return (
              <CaseStudyCard 
                key={project.id || index} 
                data={{ title, category, challenge, solution, stats, imageSrc, icon, url: project.projectUrl }} 
                index={index} 
              />
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 flex justify-center md:hidden">
            <Link href="/portfolio">
              <button className="px-8 py-4 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--foreground)] font-semibold">
                  View All Projects
              </button>
            </Link>
        </div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENT: CARD ---
const CaseStudyCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group flex flex-col h-full rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/5"
    >
      {/* 1. Image Area with Overlay */}
      <div className="relative h-48 w-full overflow-hidden bg-[var(--background)]">
         
         {/* Actual Image Background */}
         <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url('${data.imageSrc}')` }}
         />
         
         {/* Gradient Overlay for Readability */}
         <div className="absolute inset-0 " />
         
         {/* Category Badge */}
         {/* <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border-color)] z-10">
            <span className="text-[10px] font-bold tracking-wider uppercase text-[var(--foreground)]">
                {data.category}
            </span>
         </div> */}

         {/* Icon Bubble */}
         <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-[var(--card-bg)]/90 backdrop-blur border border-[var(--border-color)] text-[var(--primary)] shadow-lg z-10">
            {data.icon}
         </div>
      </div>

      {/* 2. Content Area */}
      <div className="p-8 flex flex-col flex-grow relative">
        
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-6 group-hover:text-[var(--primary)] transition-colors duration-300">
          {data.title}
        </h3>

        {/* Problem / Solution Blocks */}
        <div className="space-y-6 mb-8 flex-grow">
            <div>
                <span className="flex items-center gap-2 text-xs font-bold text-[var(--foreground-muted)] uppercase tracking-wider mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" /> Challenge
                </span>
                <p className="text-sm text-[var(--foreground)]/70 leading-relaxed line-clamp-3">
                    {data.challenge}
                </p>
            </div>
            <div>
                <span className="flex items-center gap-2 text-xs font-bold text-[var(--foreground-muted)] uppercase tracking-wider mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" /> Solution
                </span>
                <p className="text-sm text-[var(--foreground)]/70 leading-relaxed line-clamp-3">
                    {data.solution}
                </p>
            </div>
        </div>

        {/* 3. Result Footer */}
        <div className="pt-6 border-t border-[var(--border-color)] mt-auto">
            <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full" />
                <div>
                    <span className="text-xs font-bold text-[var(--foreground-muted)] uppercase">Key Result</span>
                    <p className="text-lg font-bold text-[var(--foreground)]">
                        {data.stats}
                    </p>
                </div>
            </div>
        </div>

        {/* Clickable Overlay for whole card */}
        {data.url && (
            <Link href={data.url} className="absolute inset-0 z-20" aria-label={`View ${data.title}`} />
        )}

      </div>
    </motion.div>
  );
};

export default CaseStudySection;