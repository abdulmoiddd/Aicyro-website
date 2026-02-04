// import React, { useState, useEffect } from "react";
// import Navbar from "../../Components/Essntials/Navbar";
// import Footer from "../../Components/Essntials/footer";
// import Seo from "../../Components/Essntials/Seo";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   Legend,
// } from "recharts";
// import {
//   CheckCircle2,
//   Bot,
//   Zap,
//   MessageSquare,
//   ArrowRight,
//   Layers,
//   Database,
//   Workflow,
//   LineChart,
//   ChevronLeft,
//   ChevronRight,
//   LayoutDashboard,
// } from "lucide-react";

// // --- FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";

// // --- MOCK DATA FOR CHARTS ---
// const leadsData = [
//   { month: "Jan", manual: 120, ai: 140 },
//   { month: "Feb", manual: 115, ai: 280 },
//   { month: "Mar", manual: 125, ai: 450 },
//   { month: "Apr", manual: 110, ai: 620 },
//   { month: "May", manual: 130, ai: 890 },
//   { month: "Jun", manual: 120, ai: 1150 },
// ];

// const efficiencyData = [
//   { task: "Lead Qual.", manual: 45, ai: 2 },
//   { task: "Data Entry", manual: 30, ai: 0.5 },
//   { task: "Emailing", manual: 60, ai: 5 },
//   { task: "Scheduling", manual: 25, ai: 1 },
// ];

// // --- MOCK GALLERY ---
// const mockGallery = [
//   {
//     id: 1,
//     src: "https://dummyimages.netlify.app/portfolioimagaes/Body%20langyage/1.jpg",
//     label: "CRM Dashboard",
//     desc: "Real-time pipeline monitoring",
//   },
//   {
//     id: 2,
//     src: "https://dummyimages.netlify.app/portfolioimagaes/Body%20langyage/2.jpg",
//     label: "Lead Scoring",
//     desc: "AI-driven probability metrics",
//   },
//   {
//     id: 3,
//     src: "https://dummyimages.netlify.app/portfolioimagaes/Body%20langyage/3.jpg",
//     label: "Email Sequence",
//     desc: "Automated follow-up flows",
//   },
//   {
//     id: 4,
//     src: "https://dummyimages.netlify.app/portfolioimagaes/Body%20langyage/4.jpg",
//     label: "Bot Analytics",
//     desc: "Conversational conversion tracking",
//   },
//   {
//     id: 5,
//     src: "https://dummyimages.netlify.app/portfolioimagaes/Body%20langyage/5.jpg",
//     label: "Data Pipeline",
//     desc: "Seamless integration nodes",
//   },
// ];

// const SalesAutomationProject = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Carousel State
//   const [activeImage, setActiveImage] = useState(0);

//   // --- FETCH DATA ---
//   useEffect(() => {
//     const portfolioRef = ref(database, "Protfolio/sales-ai-automation");
//     const unsubscribe = onValue(
//       portfolioRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           setData(snapshot.val());
//           setLoading(false);
//         } else {
//           console.warn("No data found");
//           setError("Project content not found.");
//           setLoading(false);
//         }
//       },
//       (err) => {
//         console.error("Firebase Read Error:", err);
//         setError("Failed to load project data.");
//         setLoading(false);
//       }
//     );
//     return () => unsubscribe();
//   }, []);

//   // --- CAROUSEL LOGIC ---
//   const galleryImages = data?.gallery || mockGallery;

//   const handleNext = () => {
//     setActiveImage((prev) => (prev + 1) % galleryImages.length);
//   };

//   const handlePrev = () => {
//     setActiveImage(
//       (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
//     );
//   };

//   const getSlideStyles = (index) => {
//     const total = galleryImages.length;
//     // Calculate relative index ensuring circularity
//     let offset = (index - activeImage + total) % total;
//     if (offset > total / 2) offset -= total;

//     // Styles for 3D Perspective
//     if (offset === 0) {
//       return {
//         zIndex: 20,
//         opacity: 1,
//         scale: 1,
//         x: "0%",
//         rotateY: 0,
//         filter: "brightness(1)",
//         pointerEvents: "auto",
//       };
//     } else if (offset === -1 || (offset === total - 1 && total > 1)) {
//       // Left Item
//       return {
//         zIndex: 10,
//         opacity: 0.6,
//         scale: 0.8,
//         x: "-60%",
//         rotateY: 35,
//         filter: "brightness(0.4) blur(2px)",
//         pointerEvents: "auto",
//       };
//     } else if (offset === 1 || (offset === -(total - 1) && total > 1)) {
//       // Right Item
//       return {
//         zIndex: 10,
//         opacity: 0.6,
//         scale: 0.8,
//         x: "60%",
//         rotateY: -35,
//         filter: "brightness(0.4) blur(2px)",
//         pointerEvents: "auto",
//       };
//     } else {
//       // Hidden items
//       return {
//         zIndex: 0,
//         opacity: 0,
//         scale: 0.5,
//         x: "0%",
//         rotateY: 0,
//         filter: "brightness(0)",
//         pointerEvents: "none",
//       };
//     }
//   };

//   // --- ANIMATION VARIANTS ---
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   // --- LOADING / ERROR STATES ---
//   if (loading) {
//     return (
//       <div className="bg-[#0A0118] min-h-screen flex items-center justify-center text-white relative overflow-hidden">
//         <div className="flex flex-col items-center gap-6 z-10">
//           <Zap className="text-[#677ED6] animate-pulse" size={48} />
//           <p className="text-sm tracking-[0.2em] text-[#677ED6] uppercase font-medium">
//             Automating...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !data) {
//     return (
//       <div className="bg-[#0A0118] min-h-screen flex flex-col items-center justify-center text-white px-4">
//         <p className="text-red-400 mb-6">{error || "Data unavailable"}</p>
//         <Link href="/portfolio" className="text-[#677ED6]">
//           Back to Portfolio
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0A0118] text-white min-h-screen relative font-sans selection:bg-[#677ED6]/30 overflow-x-hidden">
//       <Seo
//         title={data.title || "AI Sales Automation"}
//         description={data.overview ? data.overview.slice(0, 160) : "AI Sales."}
//         url="/portfolio/sales-automation"
//       />

//       <header className="absolute top-0 inset-x-0 z-50">
//         <Navbar />
//       </header>

//       {/* --- BACKGROUND FX --- */}
//       <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#677ED6]/20 rounded-full blur-[120px] mix-blend-screen" />
//         <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px]" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
//       </div>

//       <motion.main
//         className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
//         variants={staggerContainer}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* --- HEADER --- */}
//         <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
//           <motion.div
//             variants={fadeInUp}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#677ED6]/10 border border-[#677ED6]/30 text-[#677ED6] text-xs font-bold tracking-widest uppercase mb-6"
//           >
//             <span className="w-2 h-2 rounded-full bg-[#677ED6] animate-pulse"></span>
//             {data.tag || "Workflow Automation"}
//           </motion.div>
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
//               {data.title}
//             </span>
//           </motion.h1>
//         </div>

//         {/* --- 3D PERSPECTIVE CAROUSEL --- */}
//         <motion.div
//           variants={fadeInUp}
//           className="relative w-full h-[500px] mb-24 perspective-1000"
//         >
//           <div className="absolute inset-0 flex items-center justify-center [perspective:1000px]">
//             {galleryImages.map((img, index) => {
//               const styles = getSlideStyles(index);
//               const isActive = index === activeImage;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={false}
//                   animate={styles}
//                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                   onClick={() => setActiveImage(index)}
//                   className="absolute w-[80%] md:w-[60%] aspect-video rounded-2xl border border-white/10 bg-[#111625] shadow-2xl cursor-pointer overflow-hidden"
//                   style={{
//                     transformStyle: "preserve-3d",
//                     boxShadow: isActive
//                       ? "0 20px 50px -10px rgba(103,126,214, 0.3)"
//                       : "none",
//                   }}
//                 >
//                   <img
//                     src={img.src}
//                     alt={img.label}
//                     className="w-full h-full object-cover"
//                   />

//                   {/* Active Slide Content */}
//                   {isActive && (
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-transparent to-transparent">
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                         className="absolute bottom-0 left-0 w-full p-8"
//                       >
//                         <div className="flex items-center gap-3 mb-2">
//                           <LayoutDashboard
//                             className="text-[#677ED6]"
//                             size={20}
//                           />
//                           <h3 className="text-2xl font-bold text-white">
//                             {img.label}
//                           </h3>
//                         </div>
//                         <p className="text-sm text-gray-300 font-light">
//                           {img.desc || "System Visualization"}
//                         </p>
//                       </motion.div>
//                       {/* Decorative Tech Lines */}
//                       <div className="absolute top-0 right-0 p-4">
//                         <div className="flex gap-1">
//                           <div className="w-1 h-1 bg-[#677ED6] rounded-full"></div>
//                           <div className="w-1 h-1 bg-[#677ED6]/50 rounded-full"></div>
//                           <div className="w-1 h-1 bg-[#677ED6]/20 rounded-full"></div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Navigation Controls */}
//           <div className="absolute inset-x-0 bottom-[-60px] flex items-center justify-center gap-6 z-50">
//             <button
//               onClick={handlePrev}
//               className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#677ED6] hover:text-white text-gray-400 transition-all hover:scale-110 active:scale-95"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <div className="flex gap-2">
//               {galleryImages.map((_, i) => (
//                 <div
//                   key={i}
//                   className={`h-1 rounded-full transition-all duration-300 ${
//                     i === activeImage ? "w-8 bg-[#677ED6]" : "w-2 bg-white/20"
//                   }`}
//                 />
//               ))}
//             </div>
//             <button
//               onClick={handleNext}
//               className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#677ED6] hover:text-white text-gray-400 transition-all hover:scale-110 active:scale-95"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </motion.div>

//         {/* --- CONTENT GRID --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
//           <div className="lg:col-span-7 space-y-12">
//             {/* Overview */}
//             {data.overview && (
//               <motion.section
//                 variants={fadeInUp}
//                 className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-[#677ED6]/30 transition-colors"
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-2 bg-[#677ED6]/20 rounded-lg text-[#677ED6]">
//                     <Workflow size={20} />
//                   </div>
//                   <h2 className="text-2xl font-bold">Automation Workflow</h2>
//                 </div>
//                 <p className="text-slate-300 leading-relaxed text-lg font-light mb-6">
//                   {data.overview}
//                 </p>
//               </motion.section>
//             )}

//             {/* Scope Checklist */}
//             {data.scope && (
//               <motion.section variants={fadeInUp}>
//                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//                   <Layers size={20} className="text-[#677ED6]" /> System Modules
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {data.scope.map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex items-start gap-3 p-4 rounded-xl bg-[#111625] border border-white/5 group hover:bg-[#677ED6]/5 transition-colors"
//                     >
//                       <CheckCircle2 className="w-5 h-5 text-[#677ED6] shrink-0 mt-0.5" />
//                       <span className="text-slate-300 text-sm">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.section>
//             )}

//             {/* --- CHARTS --- */}
//             <motion.section variants={fadeInUp} className="space-y-6">
//               <h3 className="text-xl font-bold flex items-center gap-2">
//                 <LineChart size={20} className="text-[#677ED6]" /> Automation
//                 Impact
//               </h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="bg-[#111625] border border-white/10 rounded-2xl p-5 shadow-lg">
//                   <div className="mb-4">
//                     <h4 className="text-sm font-semibold text-slate-200">
//                       Processing Capacity
//                     </h4>
//                     <p className="text-xs text-slate-500">
//                       Leads Processed: Manual vs AI
//                     </p>
//                   </div>
//                   <div className="h-[200px] w-full">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <AreaChart data={leadsData}>
//                         <defs>
//                           <linearGradient
//                             id="colorAi"
//                             x1="0"
//                             y1="0"
//                             x2="0"
//                             y2="1"
//                           >
//                             <stop
//                               offset="5%"
//                               stopColor="#677ED6"
//                               stopOpacity={0.8}
//                             />
//                             <stop
//                               offset="95%"
//                               stopColor="#677ED6"
//                               stopOpacity={0}
//                             />
//                           </linearGradient>
//                         </defs>
//                         <CartesianGrid
//                           strokeDasharray="3 3"
//                           stroke="#ffffff10"
//                           vertical={false}
//                         />
//                         <XAxis
//                           dataKey="month"
//                           axisLine={false}
//                           tickLine={false}
//                           tick={{ fill: "#6b7280", fontSize: 10 }}
//                         />
//                         <Tooltip
//                           contentStyle={{
//                             backgroundColor: "#0A0118",
//                             borderColor: "#677ED6",
//                             borderRadius: "8px",
//                           }}
//                         />
//                         <Area
//                           type="monotone"
//                           dataKey="ai"
//                           stackId="1"
//                           stroke="#677ED6"
//                           fill="url(#colorAi)"
//                           strokeWidth={2}
//                         />
//                         <Area
//                           type="monotone"
//                           dataKey="manual"
//                           stackId="2"
//                           stroke="#4b5563"
//                           fill="#374151"
//                           strokeWidth={2}
//                         />
//                       </AreaChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>

//                 <div className="bg-[#111625] border border-white/10 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
//                   <div className="mb-4">
//                     <h4 className="text-sm font-semibold text-slate-200">
//                       Time Saved (Mins/Task)
//                     </h4>
//                     <p className="text-xs text-slate-500">
//                       Drastic reduction in manual overhead
//                     </p>
//                   </div>
//                   <div className="h-[220px] w-full">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <BarChart
//                         data={efficiencyData}
//                         layout="vertical"
//                         barGap={2}
//                       >
//                         <XAxis type="number" hide />
//                         <YAxis
//                           dataKey="task"
//                           type="category"
//                           width={70}
//                           tick={{ fill: "#9ca3af", fontSize: 11 }}
//                           axisLine={false}
//                           tickLine={false}
//                         />
//                         <Tooltip
//                           cursor={{ fill: "transparent" }}
//                           contentStyle={{
//                             backgroundColor: "#0A0118",
//                             borderColor: "#677ED6",
//                           }}
//                         />
//                         <Bar
//                           dataKey="manual"
//                           fill="#374151"
//                           radius={[0, 4, 4, 0]}
//                           barSize={12}
//                         />
//                         <Bar
//                           dataKey="ai"
//                           fill="#677ED6"
//                           radius={[0, 4, 4, 0]}
//                           barSize={12}
//                         />
//                       </BarChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//               </div>
//             </motion.section>
//           </div>

//           {/* --- RIGHT COLUMN --- */}
//           <div className="lg:col-span-5 space-y-8">
//             <div className="sticky top-32">
//               {data.techStack && (
//                 <motion.div
//                   variants={fadeInUp}
//                   className="bg-gradient-to-br from-[#111625] to-[#0A0118] border border-white/10 rounded-2xl p-6 mb-8 shadow-xl relative overflow-hidden"
//                 >
//                   <div className="absolute top-0 right-0 p-4 opacity-10">
//                     <Bot size={64} className="text-white" />
//                   </div>
//                   <h3 className="text-lg font-bold text-white mb-6 relative z-10">
//                     Tech Stack
//                   </h3>
//                   <div className="flex flex-wrap gap-2 relative z-10">
//                     {data.techStack.map((tech, index) => (
//                       <span
//                         key={index}
//                         className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/5 text-[#9caeff] border border-[#677ED6]/20 hover:border-[#677ED6] hover:bg-[#677ED6]/10 transition-all cursor-default"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {data.deliverables && (
//                 <motion.div
//                   variants={fadeInUp}
//                   className="bg-[#111625]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6"
//                 >
//                   <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
//                     <MessageSquare size={18} className="text-[#677ED6]" /> Key
//                     Deliverables
//                   </h3>
//                   <div className="space-y-0 relative">
//                     <div className="absolute left-3.5 top-2 bottom-4 w-0.5 bg-gradient-to-b from-[#677ED6] to-transparent opacity-30"></div>
//                     {data.deliverables.map((item, index) => (
//                       <div key={index} className="flex gap-4 pb-6 relative">
//                         <div className="mt-1 w-7 h-7 rounded-full bg-[#0A0118] border-2 border-[#677ED6] flex items-center justify-center shrink-0 z-10">
//                           <div className="w-2 h-2 bg-[#677ED6] rounded-full"></div>
//                         </div>
//                         <div className="pt-1">
//                           <p className="text-sm text-slate-300 leading-snug">
//                             {item}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.main>
//       <Footer />
//     </div>
//   );
// };

// export default SalesAutomationProject;

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
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Essntials/Navbar";
import Footer from "../../Components/Essntials/footer";
import Seo from "../../Components/Essntials/Seo";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import {
  CheckCircle2,
  Bot,
  Zap,
  MessageSquare,
  ArrowRight,
  Layers,
  Database,
  Workflow,
  LineChart,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
} from "lucide-react";

// --- FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";

// --- MOCK DATA FOR CHARTS ---
const leadsData = [
  { month: "Jan", manual: 120, ai: 140 },
  { month: "Feb", manual: 115, ai: 280 },
  { month: "Mar", manual: 125, ai: 450 },
  { month: "Apr", manual: 110, ai: 620 },
  { month: "May", manual: 130, ai: 890 },
  { month: "Jun", manual: 120, ai: 1150 },
];

const efficiencyData = [
  { task: "Lead Qual.", manual: 45, ai: 2 },
  { task: "Data Entry", manual: 30, ai: 0.5 },
  { task: "Emailing", manual: 60, ai: 5 },
  { task: "Scheduling", manual: 25, ai: 1 },
];

// --- MOCK GALLERY ---
const mockGallery = [
  {
    id: 1,
    src: "https://dummyimages.netlify.app/portfolioimagaes/Body%20langyage/1.jpg",
    label: "CRM Dashboard",
    desc: "Real-time pipeline monitoring",
  },
  {
    id: 2,
    src: "https://dummyimages.netlify.app/portfolioimagaes/Body%20langyage/2.jpg",
    label: "Lead Scoring",
    desc: "AI-driven probability metrics",
  },
  {
    id: 3,
    src: "https://dummyimages.netlify.app/portfolioimagaes/Body%20langyage/3.jpg",
    label: "Email Sequence",
    desc: "Automated follow-up flows",
  },
  {
    id: 4,
    src: "https://dummyimages.netlify.app/portfolioimagaes/Body%20langyage/4.jpg",
    label: "Bot Analytics",
    desc: "Conversational conversion tracking",
  },
  {
    id: 5,
    src: "https://dummyimages.netlify.app/portfolioimagaes/Body%20langyage/5.jpg",
    label: "Data Pipeline",
    desc: "Seamless integration nodes",
  },
];

const SalesAutomationProject = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carousel State
  const [activeImage, setActiveImage] = useState(0);

  // --- FETCH DATA ---
  useEffect(() => {
    const portfolioRef = ref(database, "Protfolio/sales-ai-automation");
    const unsubscribe = onValue(
      portfolioRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
          setLoading(false);
        } else {
          console.warn("No data found");
          setError("Project content not found.");
          setLoading(false);
        }
      },
      (err) => {
        console.error("Firebase Read Error:", err);
        setError("Failed to load project data.");
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // --- CAROUSEL LOGIC ---
  const galleryImages = data?.gallery || mockGallery;

  const handleNext = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setActiveImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const getSlideStyles = (index) => {
    const total = galleryImages.length;
    // Calculate relative index ensuring circularity
    let offset = (index - activeImage + total) % total;
    if (offset > total / 2) offset -= total;

    // Styles for 3D Perspective
    if (offset === 0) {
      return {
        zIndex: 20,
        opacity: 1,
        scale: 1,
        x: "0%",
        rotateY: 0,
        filter: "brightness(1)",
        pointerEvents: "auto",
      };
    } else if (offset === -1 || (offset === total - 1 && total > 1)) {
      // Left Item
      return {
        zIndex: 10,
        opacity: 0.6,
        scale: 0.8,
        x: "-60%",
        rotateY: 35,
        filter: "brightness(0.4) blur(2px)",
        pointerEvents: "auto",
      };
    } else if (offset === 1 || (offset === -(total - 1) && total > 1)) {
      // Right Item
      return {
        zIndex: 10,
        opacity: 0.6,
        scale: 0.8,
        x: "60%",
        rotateY: -35,
        filter: "brightness(0.4) blur(2px)",
        pointerEvents: "auto",
      };
    } else {
      // Hidden items
      return {
        zIndex: 0,
        opacity: 0,
        scale: 0.5,
        x: "0%",
        rotateY: 0,
        filter: "brightness(0)",
        pointerEvents: "none",
      };
    }
  };

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  // --- LOADING / ERROR STATES ---
  if (loading) {
    return (
      // UPDATED: Background variable
      <div className="bg-[var(--background)] min-h-screen flex items-center justify-center text-[var(--foreground)] relative overflow-hidden">
        <div className="flex flex-col items-center gap-6 z-10">
          {/* UPDATED: Accent color */}
          <Zap className="text-[var(--accent-blue)] animate-pulse" size={48} />
          <p className="text-sm tracking-[0.2em] text-[var(--accent-blue)] uppercase font-medium">
            Automating...
          </p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      // UPDATED: Background and text variables
      <div className="bg-[var(--background)] min-h-screen flex flex-col items-center justify-center text-[var(--foreground)] px-4">
        <p className="text-red-400 mb-6">{error || "Data unavailable"}</p>
        <Link href="/portfolio" className="text-[var(--accent-blue)]">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    // UPDATED: Background variable
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen relative font-sans selection:bg-[var(--accent-blue)]/30 overflow-x-hidden transition-colors duration-300">
      <Seo
        title={data.title || "AI Sales Automation"}
        description={data.overview ? data.overview.slice(0, 160) : "AI Sales."}
        url="/portfolio/sales-automation"
      />

      <header className="absolute top-0 inset-x-0 z-50">
        <Navbar />
      </header>

      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* UPDATED: Accent color for blur blob */}
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[var(--accent-blue)]/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px]" />
        {/* UPDATED: Grid opacity adjustment for light mode via custom variable or class */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <motion.main
        className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            // UPDATED: Tag uses accent-blue variable
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] text-xs font-bold tracking-widest uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse"></span>
            {data.tag || "Workflow Automation"}
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            {/* UPDATED: Title Gradient adapted */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[var(--foreground)] to-[var(--foreground-muted)]">
              {data.title}
            </span>
          </motion.h1>
        </div>

        {/* --- 3D PERSPECTIVE CAROUSEL --- */}
        <motion.div
          variants={fadeInUp}
          className="relative w-full h-[500px] mb-24 perspective-1000"
        >
          <div className="absolute inset-0 flex items-center justify-center [perspective:1000px]">
            {galleryImages.map((img, index) => {
              const styles = getSlideStyles(index);
              const isActive = index === activeImage;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={styles}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveImage(index)}
                  // UPDATED: Card background
                  className="absolute w-[80%] md:w-[60%] aspect-video rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl cursor-pointer overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: isActive
                      ? "0 20px 50px -10px rgba(103,126,214, 0.3)"
                      : "none",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />

                  {/* Active Slide Content */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-0 left-0 w-full p-8"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <LayoutDashboard
                            className="text-[var(--accent-blue)]"
                            size={20}
                          />
                          <h3 className="text-2xl font-bold text-[var(--foreground)]">
                            {img.label}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--foreground-muted)] font-light">
                          {img.desc || "System Visualization"}
                        </p>
                      </motion.div>
                      {/* Decorative Tech Lines */}
                      <div className="absolute top-0 right-0 p-4">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-[var(--accent-blue)] rounded-full"></div>
                          <div className="w-1 h-1 bg-[var(--accent-blue)]/50 rounded-full"></div>
                          <div className="w-1 h-1 bg-[var(--accent-blue)]/20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 bottom-[-60px] flex items-center justify-center gap-6 z-50">
            <button
              onClick={handlePrev}
              // UPDATED: Button colors
              className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] hover:bg-[var(--accent-blue)] hover:text-white text-[var(--foreground-muted)] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {galleryImages.map((_, i) => (
                <div
                  key={i}
                  // UPDATED: Dot indicator colors
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === activeImage
                      ? "w-8 bg-[var(--accent-blue)]"
                      : "w-2 bg-[var(--foreground)]/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] hover:bg-[var(--accent-blue)] hover:text-white text-[var(--foreground-muted)] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
          <div className="lg:col-span-7 space-y-12">
            {/* Overview */}
            {data.overview && (
              <motion.section
                variants={fadeInUp}
                // UPDATED: Card styles
                className="bg-[var(--card-bg)]/50 backdrop-blur-sm border border-[var(--border-color)] rounded-2xl p-8 hover:border-[var(--accent-blue)]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[var(--accent-blue)]/20 rounded-lg text-[var(--accent-blue)]">
                    <Workflow size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Automation Workflow</h2>
                </div>
                <p className="text-[var(--foreground-muted)] leading-relaxed text-lg font-light mb-6">
                  {data.overview}
                </p>
              </motion.section>
            )}

            {/* Scope Checklist */}
            {data.scope && (
              <motion.section variants={fadeInUp}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layers size={20} className="text-[var(--accent-blue)]" />{" "}
                  System Modules
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.scope.map((item, index) => (
                    <div
                      key={index}
                      // UPDATED: List item styles
                      className="flex items-start gap-3 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] group hover:bg-[var(--accent-blue)]/5 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                      <span className="text-[var(--foreground-muted)] text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* --- CHARTS --- */}
            <motion.section variants={fadeInUp} className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <LineChart size={20} className="text-[var(--accent-blue)]" />{" "}
                Automation Impact
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-5 shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[var(--foreground)]">
                      Processing Capacity
                    </h4>
                    <p className="text-xs text-[var(--foreground-muted)]">
                      Leads Processed: Manual vs AI
                    </p>
                  </div>
                  <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={leadsData}>
                        <defs>
                          <linearGradient
                            id="colorAi"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#677ED6"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#677ED6"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#ffffff10"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#6b7280", fontSize: 10 }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#0A0118",
                            borderColor: "#677ED6",
                            borderRadius: "8px",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="ai"
                          stackId="1"
                          stroke="#677ED6"
                          fill="url(#colorAi)"
                          strokeWidth={2}
                        />
                        <Area
                          type="monotone"
                          dataKey="manual"
                          stackId="2"
                          stroke="#4b5563"
                          fill="#374151"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[var(--foreground)]">
                      Time Saved (Mins/Task)
                    </h4>
                    <p className="text-xs text-[var(--foreground-muted)]">
                      Drastic reduction in manual overhead
                    </p>
                  </div>
                  <div className="h-[220px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={efficiencyData}
                        layout="vertical"
                        barGap={2}
                      >
                        <XAxis type="number" hide />
                        <YAxis
                          dataKey="task"
                          type="category"
                          width={70}
                          tick={{ fill: "#9ca3af", fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip
                          cursor={{ fill: "transparent" }}
                          contentStyle={{
                            backgroundColor: "#0A0118",
                            borderColor: "#677ED6",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar
                          dataKey="manual"
                          fill="#374151"
                          radius={[0, 4, 4, 0]}
                          barSize={12}
                        />
                        <Bar
                          dataKey="ai"
                          fill="#677ED6"
                          radius={[0, 4, 4, 0]}
                          barSize={12}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-32">
              {data.techStack && (
                <motion.div
                  variants={fadeInUp}
                  // UPDATED: Gradient background using card-bg and background
                  className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] border border-[var(--border-color)] rounded-2xl p-6 mb-8 shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Bot size={64} className="text-[var(--foreground)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-6 relative z-10">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {data.techStack.map((tech, index) => (
                      <span
                        key={index}
                        // UPDATED: Tag styles
                        className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--foreground)]/5 text-[var(--accent-blue)] border border-[var(--accent-blue)]/20 hover:border-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/10 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {data.deliverables && (
                <motion.div
                  variants={fadeInUp}
                  className="bg-[var(--card-bg)]/50 backdrop-blur-md border border-[var(--border-color)] rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
                    <MessageSquare
                      size={18}
                      className="text-[var(--accent-blue)]"
                    />{" "}
                    Key Deliverables
                  </h3>
                  <div className="space-y-0 relative">
                    <div className="absolute left-3.5 top-2 bottom-4 w-0.5 bg-gradient-to-b from-[var(--accent-blue)] to-transparent opacity-30"></div>
                    {data.deliverables.map((item, index) => (
                      <div key={index} className="flex gap-4 pb-6 relative">
                        <div className="mt-1 w-7 h-7 rounded-full bg-[var(--background)] border-2 border-[var(--accent-blue)] flex items-center justify-center shrink-0 z-10">
                          <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full"></div>
                        </div>
                        <div className="pt-1">
                          <p className="text-sm text-[var(--foreground-muted)] leading-snug">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default SalesAutomationProject;
