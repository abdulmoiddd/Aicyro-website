
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Server, Database, Workflow, Zap, Briefcase, ChevronRight } from "lucide-react";

// // --- DATA ---
// // (Same Data as above)
// const CAPABILITIES_DATA = [
//   { id: 1, title: "DevOps & Cloud Security", icon: Server, description: "Streamlined CI/CD pipelines, container orchestration (Docker/Kubernetes), and infrastructure-as-code (Terraform) secured with industry-best practices." },
//   { id: 2, title: "Data Engineering", icon: Database, description: "Robust ETL pipelines, data warehousing solutions, and real-time analytics architectures designed to turn raw data into actionable business insights." },
//   { id: 3, title: "System Architecture", icon: Workflow, description: "Expert guidance on microservices adoption, legacy system migration, and designing scalable, fault-tolerant architectures for high-traffic applications." },
//   { id: 4, title: "Performance Optimization", icon: Zap, description: "Deep-dive analysis into bottlenecks, database query optimization, load balancing strategies, and frontend performance tuning to reduce latency." },
//   { id: 5, title: "Technical Advisory", icon: Briefcase, description: "Strategic technology roadmapping, vendor selection, and CTO-level guidance to align technical decisions with your long-term business goals." },
// ];

// const AdditionalCapabilitiesTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
//       <div className="max-w-6xl mx-auto">
        
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">Capabilities</h2>
//           <p className="text-[var(--foreground-muted)]">Select a specialized area to learn more.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
//           {/* LEFT COLUMN: NAVIGATION LIST */}
//           <div className="lg:col-span-5 flex flex-col gap-2">
//             {CAPABILITIES_DATA.map((item, index) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(index)}
//                 className={`relative group flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 ${
//                   activeTab === index
//                     ? "bg-[var(--card-bg)] shadow-sm"
//                     : "hover:bg-[var(--card-bg)]/50"
//                 }`}
//               >
//                 <div className="flex items-center gap-4 z-10">
//                   <div className={`p-2 rounded-lg transition-colors duration-300 ${
//                     activeTab === index ? "bg-[var(--primary)] text-white" : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
//                   }`}>
//                     <item.icon size={20} />
//                   </div>
//                   <span className={`font-medium transition-colors ${
//                     activeTab === index ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
//                   }`}>
//                     {item.title}
//                   </span>
//                 </div>
                
//                 {/* Active Indicator Arrow */}
//                 {activeTab === index && (
//                   <motion.div
//                     layoutId="activeIndicator"
//                     className="text-[var(--primary)]"
//                   >
//                     <ChevronRight size={20} />
//                   </motion.div>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* RIGHT COLUMN: CONTENT DISPLAY */}
//           <div className="lg:col-span-7">
//             <div className="h-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 md:p-10 relative overflow-hidden">
//                {/* Background decoration */}
//                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

//                <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeTab}
//                   initial={{ opacity: 0, y: 10, scale: 0.98 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -10, scale: 0.98 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative z-10 flex flex-col h-full justify-center"
//                 >
//                   <div className="w-16 h-16 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center mb-6 text-[var(--primary)] shadow-sm">
//                     {React.createElement(CAPABILITIES_DATA[activeTab].icon, { size: 32 })}
//                   </div>
                  
//                   <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
//                     {CAPABILITIES_DATA[activeTab].title}
//                   </h3>
                  
//                   <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
//                     {CAPABILITIES_DATA[activeTab].description}
//                   </p>

//                   <div className="mt-8 pt-8 border-t border-[var(--border-color)]">
//                     <button className="text-sm font-semibold text-[var(--primary)] hover:opacity-80 flex items-center gap-2">
//                       Learn more about {CAPABILITIES_DATA[activeTab].title.split(" ")[0]} <ChevronRight size={16} />
//                     </button>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdditionalCapabilitiesTabs;
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
//


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Changed to next/link
import { Server, Database, Workflow, Zap, Briefcase, ChevronRight } from "lucide-react";

// --- DATA ---
const CAPABILITIES_DATA = [
  { id: 1, title: "DevOps & Cloud Security", icon: Server, description: "Streamlined CI/CD pipelines, container orchestration (Docker/Kubernetes), and infrastructure-as-code (Terraform) secured with industry-best practices." },
  { id: 2, title: "Data Engineering", icon: Database, description: "Robust ETL pipelines, data warehousing solutions, and real-time analytics architectures designed to turn raw data into actionable business insights." },
  { id: 3, title: "System Architecture", icon: Workflow, description: "Expert guidance on microservices adoption, legacy system migration, and designing scalable, fault-tolerant architectures for high-traffic applications." },
  { id: 4, title: "Performance Optimization", icon: Zap, description: "Deep-dive analysis into bottlenecks, database query optimization, load balancing strategies, and frontend performance tuning to reduce latency." },
  { id: 5, title: "Technical Advisory", icon: Briefcase, description: "Strategic technology roadmapping, vendor selection, and CTO-level guidance to align technical decisions with your long-term business goals." },
];

const AdditionalCapabilitiesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">Capabilities</h2>
          <p className="text-[var(--foreground-muted)]">Select a specialized area to learn more.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: NAVIGATION LIST */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {CAPABILITIES_DATA.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`relative group flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === index 
                    ? "bg-[var(--card-bg)] shadow-sm" 
                    : "hover:bg-[var(--card-bg)]/50"
                }`}
              >
                <div className="flex items-center gap-4 z-10">
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    activeTab === index ? "bg-[var(--primary)] text-white" : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
                  }`}>
                    <item.icon size={20} />
                  </div>
                  <span className={`font-medium transition-colors ${
                    activeTab === index ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
                  }`}>
                    {item.title}
                  </span>
                </div>
                
                {/* Active Indicator Arrow */}
                {activeTab === index && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="text-[var(--primary)]"
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* RIGHT COLUMN: CONTENT DISPLAY */}
          <div className="lg:col-span-7">
            <div className="h-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-8 md:p-10 relative overflow-hidden">
               {/* Background decoration */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

               <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col h-full justify-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center mb-6 text-[var(--primary)] shadow-sm">
                    {React.createElement(CAPABILITIES_DATA[activeTab].icon, { size: 32 })}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
                    {CAPABILITIES_DATA[activeTab].title}
                  </h3>
                  
                  <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
                    {CAPABILITIES_DATA[activeTab].description}
                  </p>

                  <div className="mt-8 pt-8 border-t border-[var(--border-color)]">
                    {/* CHANGED TO LINK TO CONTACT PAGE WITH PARAMS */}
                    <Link 
                        href={`/contact?service=others&sub=${encodeURIComponent(CAPABILITIES_DATA[activeTab].title)}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:opacity-80 transition-opacity"
                    >
                      Learn more about {CAPABILITIES_DATA[activeTab].title.split(" ")[0]} <ChevronRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdditionalCapabilitiesTabs;