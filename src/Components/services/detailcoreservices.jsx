
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link"; // Specific for Next.js routing
// import {
//   Bot,
//   ShieldCheck,
//   Terminal,
//   Check,
//   ArrowRight
// } from "lucide-react";

// // --- DATA CONFIGURATION ---
// const DETAILED_SERVICES = [
//   {
//     id: "ai",
//     title: "AI Solutions & Automation",
//     subtitle: "Intelligence that scales.",
//     icon: Bot,
//     accentColor: "var(--primary)",
//     subServices: [
//       { title: "AI model integration", href: "/services/ai-solutions" },
//       { title: "Workflow automation", href: "/services/workflow-automation" },
//       { title: "Chatbots and copilots", href: "/services/chatbots" },
//       { title: "Predictive analytics", href: "/services/predictive-analytics" },
//       { title: "Intelligent dashboards", href: "/services/dashboards" },
//     ],
//   },
//   {
//     id: "security",
//     title: "Cybersecurity Services",
//     subtitle: "Defense in depth.",
//     icon: ShieldCheck,
//     accentColor: "var(--secondary)",
//     subServices: [
//       { title: "Penetration testing", href: "/services/penetration-testing" },
//       { title: "Vulnerability assessments", href: "/services/vulnerability" },
//       { title: "Threat monitoring", href: "/services/threat-monitoring" },
//       { title: "Security audits", href: "/services/audits" },
//       { title: "Compliance support (ISO, SOC)", href: "/services/compliance" },
//     ],
//   },
//   {
//     id: "dev",
//     title: "Custom Software Development",
//     subtitle: "Built for performance.",
//     icon: Terminal,
//     accentColor: "var(--accent-blue)",
//     subServices: [
//       { title: "SaaS development", href: "/services/saas-development" },
//       { title: "MVP development", href: "/services/mvp" },
//       { title: "API integrations", href: "/services/api-integrations" },
//       { title: "Cloud-native applications", href: "/services/cloud-apps" },
//       { title: "System modernization", href: "/services/modernization" },
//     ],
//   },
// ];

// const ServiceCard = ({ service, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1, duration: 0.5 }}
//       className="group relative h-full rounded-3xl p-8 border transition-all duration-300 hover:shadow-2xl flex flex-col"
//       style={{
//         backgroundColor: "var(--card-bg)",
//         borderColor: "var(--border-color)",
//         boxShadow: `0 0 0 1px transparent`,
//       }}
//     >
//       {/* Hover Gradient Border Effect */}
//       <div
//         className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//         style={{
//           boxShadow: `inset 0 0 20px -5px ${service.accentColor}`,
//           border: `1px solid ${service.accentColor}`
//         }}
//       />

//       {/* --- ICON HEADER --- */}
//       <div className="mb-8 flex items-center gap-4">
//         <div
//           className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-[var(--background)] transition-transform duration-300 group-hover:scale-110"
//           style={{
//             borderColor: "var(--border-color)",
//             color: service.accentColor
//           }}
//         >
//           <service.icon className="h-7 w-7" />
//         </div>
//         <div>
//           <h3
//             className="text-xl font-bold leading-tight"
//             style={{ color: "var(--foreground)" }}
//           >
//             {service.title}
//           </h3>
//           <p
//             className="text-sm font-medium opacity-80"
//             style={{ color: service.accentColor }}
//           >
//             {service.subtitle}
//           </p>
//         </div>
//       </div>

//       {/* --- SUB-SERVICES LIST --- */}
//       <ul className="space-y-3 relative z-10 flex-grow">
//         {service.subServices.map((item, idx) => (
//           <li key={idx}>
//             <Link
//               href={item.href}
//               className="group/link flex items-center gap-3 p-2 -ml-2 rounded-lg transition-colors duration-200 hover:bg-[rgba(255,255,255,0.03)]"
//             >
//               {/* Custom Checkbox / Arrow Icon Wrapper */}
//               <div
//                 className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover/link:border-transparent"
//                 style={{
//                   borderColor: "var(--border-color)",
//                   backgroundColor: "rgba(255,255,255,0.03)"
//                 }}
//               >
//                 {/* Default Check Icon */}
//                 <Check
//                   className="h-3 w-3 transition-transform duration-300 group-hover/link:scale-0 group-hover/link:opacity-0 absolute"
//                   style={{ color: service.accentColor }}
//                 />
                
//                 {/* Hover Arrow Icon */}
//                 <ArrowRight
//                   className="h-3 w-3 transition-transform duration-300 scale-0 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 absolute"
//                   style={{ color: service.accentColor }}
//                 />
//               </div>

//               <span
//                 className="text-base font-medium transition-colors duration-200"
//                 style={{ color: "var(--foreground-muted)" }}
//                 // Using inline styles for simple hover override or you can use tailwind group-hover:text-[var(--foreground)]
//               >
//                 <span className="group-hover/link:text-[var(--foreground)] transition-colors">
//                     {item.title}
//                 </span>
//               </span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// };

// const DetailedCoreServices = () => {
//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)] relative overflow-hidden">
//       {/* Background Decorator */}
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
//           backgroundSize: '30px 30px',
//           maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* SECTION HEADER */}
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl sm:text-4xl font-bold mb-4"
//             style={{ color: "var(--foreground)" }}
//           >
//             Core Services
//           </motion.h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
//           />
//         </div>

//         {/* CARDS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {DETAILED_SERVICES.map((service, index) => (
//             <ServiceCard key={service.id} service={service} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DetailedCoreServices;

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
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; 
import {
  Bot,
  ShieldCheck,
  Terminal,
  Check,
  ArrowRight
} from "lucide-react";

// --- DATA CONFIGURATION ---
const DETAILED_SERVICES = [
  {
    id: "ai",
    title: "AI Solutions & Automation",
    subtitle: "Intelligence that scales.",
    icon: Bot,
    accentColor: "var(--primary)",
    subServices: [
      { title: "AI model integration" },
      { title: "Workflow automation" },
      { title: "Chatbots and copilots" },
      { title: "Predictive analytics" },
      { title: "Intelligent dashboards" },
    ],
  },
  {
    id: "security",
    title: "Cybersecurity Services",
    subtitle: "Defense in depth.",
    icon: ShieldCheck,
    accentColor: "var(--secondary)",
    subServices: [
      { title: "Penetration testing" },
      { title: "Vulnerability assessments" },
      { title: "Threat monitoring" },
      { title: "Security audits" },
      { title: "Compliance support (ISO, SOC)" },
    ],
  },
  {
    id: "dev",
    title: "Custom Software Development",
    subtitle: "Built for performance.",
    icon: Terminal,
    accentColor: "var(--accent-blue)",
    subServices: [
      { title: "SaaS development" },
      { title: "MVP development" },
      { title: "API integrations" },
      { title: "Cloud-native applications" },
      { title: "System modernization" },
    ],
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative h-full rounded-3xl p-8 border transition-all duration-300 hover:shadow-2xl flex flex-col"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
        boxShadow: `0 0 0 1px transparent`,
      }}
    >
      {/* Hover Gradient Border Effect */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 20px -5px ${service.accentColor}`,
          border: `1px solid ${service.accentColor}`
        }}
      />

      {/* --- ICON HEADER --- */}
      <div className="mb-8 flex items-center gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-[var(--background)] transition-transform duration-300 group-hover:scale-110"
          style={{
            borderColor: "var(--border-color)",
            color: service.accentColor
          }}
        >
          <service.icon className="h-7 w-7" />
        </div>
        <div>
          <h3
            className="text-xl font-bold leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            {service.title}
          </h3>
          <p
            className="text-sm font-medium opacity-80"
            style={{ color: service.accentColor }}
          >
            {service.subtitle}
          </p>
        </div>
      </div>

      {/* --- SUB-SERVICES LIST --- */}
      <ul className="space-y-3 relative z-10 flex-grow">
        {service.subServices.map((item, idx) => (
          <li key={idx}>
            {/* UPDATED LINK LOGIC HERE */}
            <Link 
              href={`/contact?service=${service.id}&sub=${encodeURIComponent(item.title)}`}
              className="group/link flex items-center gap-3 p-2 -ml-2 rounded-lg transition-colors duration-200 hover:bg-[rgba(255,255,255,0.03)]"
            >
              <div
                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover/link:border-transparent"
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: "rgba(255,255,255,0.03)"
                }}
              >
                <Check
                  className="h-3 w-3 transition-transform duration-300 group-hover/link:scale-0 group-hover/link:opacity-0 absolute"
                  style={{ color: service.accentColor }}
                />
                <ArrowRight 
                  className="h-3 w-3 transition-transform duration-300 scale-0 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 absolute"
                  style={{ color: service.accentColor }}
                />
              </div>

              <span
                className="text-base font-medium transition-colors duration-200"
                style={{ color: "var(--foreground-muted)" }}
              >
                <span className="group-hover/link:text-[var(--foreground)] transition-colors">
                    {item.title}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const DetailedCoreServices = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Core Services
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedCoreServices;