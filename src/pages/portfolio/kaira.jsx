// import React, { useState, useEffect } from "react";
// import Navbar from "../../Components/Essntials/Navbar";
// import Footer from "../../Components/Essntials/footer";
// import Seo from "../../Components/Essntials/Seo";
// import Link from "next/link";
// import { motion } from "framer-motion";

// // --- FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";

// // Create a motion-enabled Link for the breadcrumb
// const MotionLink = motion(Link);

// const Blockchain = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // --- FETCH DATA FROM FIREBASE REALTIME DATABASE ---
//   useEffect(() => {
//     // We point exactly to "Protfolio/Blockchain" as defined in your JSON
//     const portfolioRef = ref(database, "Protfolio/kaira");

//     const unsubscribe = onValue(
//       portfolioRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           setData(fetchedData);
//           setLoading(false);
//         } else {
//           console.warn("No data found at 'Protfolio/Blockchain'");
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

//     // Cleanup subscription on unmount
//     return () => unsubscribe();
//   }, []);

//   // --- ANIMATION VARIANTS ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   // --- LOADING STATE ---
//   if (loading) {
//     return (
//       <div className="bg-[#0A0118] min-h-screen flex items-center justify-center text-white">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-8 h-8 border-4 border-[#677ED6] border-t-transparent rounded-full animate-spin"></div>
//           <p className="text-sm tracking-widest uppercase animate-pulse">
//             Loading Project...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // --- ERROR STATE ---
//   if (error || !data) {
//     return (
//       <div className="bg-[#0A0118] min-h-screen flex flex-col items-center justify-center text-white px-4">
//         <p className="text-red-400 mb-4">{error || "Data unavailable"}</p>
//         <Link
//           href="/portfolio"
//           className="text-[#677ED6] hover:text-[#8ea2ff] transition-colors"
//         >
//           ← Back to Portfolio
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0A0118] text-white min-h-screen relative overflow-hidden font-sans">
//       <Seo
//         title={data.title || "Blockchain Solutions"}
//         description={
//           data.overview ? data.overview.slice(0, 160) : "Blockchain services."
//         }
//         url="/portfolio/blockchain"
//       />

//       {/* --- Header/Navbar Section --- */}
//       <header className="absolute top-0 inset-x-0 z-50">
//         <Navbar />
//       </header>

//       {/* --- Main Content --- */}
//       <motion.main
//         className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Top Section: Tag & Title */}
//         <div className="flex flex-col items-center text-center mb-12">
//           {/* Tag (Mapped from Schema: "tag") */}
//           <motion.div
//             variants={itemVariants}
//             className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[#677ED6] px-4 py-1.5 rounded-full mb-6 text-white"
//           >
//             {data.tag || "EXPERT SERVICES"}
//           </motion.div>

//           {/* Main Title (Mapped from Schema: "title") */}
//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
//           >
//             {data.title}
//           </motion.h1>

//           {/* Breadcrumb */}
//           <motion.div variants={itemVariants}>
//             <p className="text-sm text-white/70 flex items-center justify-center gap-2 flex-wrap">
//               <MotionLink
//                 href="/"
//                 className="text-[#677ED6] font-medium hover:text-[#8ea2ff] transition-colors"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Home
//               </MotionLink>
//               <span className="text-[#677ED6]">»</span>
//               <MotionLink
//                 href="/portfolio"
//                 className="text-[#677ED6] font-medium hover:text-[#8ea2ff] transition-colors"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Portfolio
//               </MotionLink>
//               <span className="text-[#677ED6]">»</span>
//               <span className="text-gray-400">{data.title}</span>
//             </p>
//           </motion.div>
//         </div>

//         {/* --- Hero Image Section (Mapped from Schema: "imageUrl") --- */}
//         {data.imageUrl && (
//           <motion.div variants={itemVariants} className="w-full mb-12">
//             <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-[#677ED6]/10 border border-[#677ED6]/30">
//               <img
//                 src={data.imageUrl}
//                 alt={data.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </motion.div>
//         )}

//         {/* --- Project Meta Data Row (Mapped from Schema: "meta") --- */}
//         {data.meta && Array.isArray(data.meta) && (
//           <motion.div
//             variants={itemVariants}
//             className="bg-[#111625] rounded-xl p-6 mb-12 border border-[#677ED6]/30"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {data.meta.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center md:items-start text-center md:text-left"
//                 >
//                   <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
//                     <span className="text-[#677ED6]">
//                       {item.icon === "map" && <MapIcon />}
//                       {item.icon === "clock" && <ClockIcon />}
//                       {item.icon === "users" && <UsersIcon />}
//                     </span>
//                     {item.label}
//                   </div>
//                   <div className="font-semibold text-white text-lg pl-0 md:pl-6">
//                     {item.value}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* --- Content Sections --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Left Column */}
//           <div className="lg:col-span-2 space-y-12">
//             {/* Project Overview (Mapped from Schema: "overview") */}
//             {data.overview && (
//               <motion.section variants={itemVariants}>
//                 <h2 className="text-2xl font-bold text-white mb-4">
//                   Project Overview
//                 </h2>
//                 <p className="text-white/80 leading-relaxed text-lg">
//                   {data.overview}
//                 </p>
//                 <div className="h-px w-full bg-[#677ED6]/20 mt-8"></div>
//               </motion.section>
//             )}

//             {/* Project Scope (Mapped from Schema: "scope") */}
//             {data.scope && Array.isArray(data.scope) && (
//               <motion.section variants={itemVariants}>
//                 <h2 className="text-2xl font-bold text-white mb-6">
//                   Project Scope
//                 </h2>
//                 <ul className="space-y-4">
//                   {data.scope.map((item, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <CheckIcon />
//                       <span className="text-white/80">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.section>
//             )}
//           </div>

//           {/* Right Column */}
//           <div className="space-y-12">
//             {/* Key Deliverables (Mapped from Schema: "deliverables") */}
//             {data.deliverables && Array.isArray(data.deliverables) && (
//               <motion.section variants={itemVariants}>
//                 <h2 className="text-2xl font-bold text-white mb-6">
//                   Key Deliverables
//                 </h2>
//                 <ul className="space-y-4">
//                   {data.deliverables.map((item, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <CheckIcon />
//                       <span className="text-white/80 text-sm">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="h-px w-full bg-[#677ED6]/20 mt-8"></div>
//               </motion.section>
//             )}

//             {/* Technologies Used (Mapped from Schema: "techStack") */}
//             {data.techStack && Array.isArray(data.techStack) && (
//               <motion.section variants={itemVariants}>
//                 <h2 className="text-2xl font-bold text-white mb-6">
//                   Technologies
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {data.techStack.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 rounded-full text-xs font-medium bg-[#1E1B38] text-[#9caeff] border border-[#677ED6]/50"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </motion.section>
//             )}
//           </div>
//         </div>
//       </motion.main>

//       {/* --- CSS-Based Background Effects --- */}
//       <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px]" />
//         <div className="absolute top-[20%] right-[-5%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[100px]" />
//         <div className="absolute bottom-[-10%] left-[20%] w-[35vw] h-[35vw] bg-indigo-600/10 rounded-full blur-[120px]" />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// // --- Helper Components ---

// const CheckIcon = () => (
//   <svg
//     className="mt-1 flex-shrink-0 text-[#677ED6]"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M7.75 12L10.58 14.83L16.25 9.17"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const MapIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// const ClockIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <circle cx="12" cy="12" r="10" />
//     <polyline points="12 6 12 12 16 14" />
//   </svg>
// );

// const UsersIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// );

// export default Blockchain;

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
///
//
//
//
//
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Essntials/Navbar";
import Footer from "../../Components/Essntials/footer";
import Seo from "../../Components/Essntials/Seo";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Cell,
} from "recharts";
import {
  CheckCircle2,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Layers,
  Cpu,
  TrendingUp,
  Activity,
} from "lucide-react";

// --- FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";

// Create a motion-enabled Link
const MotionLink = motion(Link);

// --- MOCK DATA FOR CHARTS (Visual Flair) ---
// In a real scenario, you could fetch this from Firebase too
const performanceData = [
  { name: "Jan", speed: 4000, efficiency: 2400 },
  { name: "Feb", speed: 3000, efficiency: 1398 },
  { name: "Mar", speed: 2000, efficiency: 9800 },
  { name: "Apr", speed: 2780, efficiency: 3908 },
  { name: "May", speed: 1890, efficiency: 4800 },
  { name: "Jun", speed: 2390, efficiency: 3800 },
  { name: "Jul", speed: 3490, efficiency: 4300 },
];

const throughputData = [
  { name: "Legacy", value: 30 },
  { name: "New Core", value: 85 },
];

const Blockchain = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FETCH DATA ---
  useEffect(() => {
    const portfolioRef = ref(database, "Protfolio/kaira");

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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  // --- LOADING STATE ---
  if (loading) {
    return (
      <div className="bg-[#0A0118] min-h-screen flex items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="flex flex-col items-center gap-6 z-10">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-[#677ED6]/30 border-t-[#677ED6] rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#677ED6] rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-sm tracking-[0.2em] text-[#677ED6] uppercase font-medium">
            Initializing Core...
          </p>
        </div>
      </div>
    );
  }

  // --- ERROR STATE ---
  if (error || !data) {
    return (
      <div className="bg-[#0A0118] min-h-screen flex flex-col items-center justify-center text-white px-4">
        <p className="text-red-400 mb-6 bg-red-500/10 px-6 py-3 rounded-lg border border-red-500/20">
          {error || "Data unavailable"}
        </p>
        <Link
          href="/portfolio"
          className="group flex items-center gap-2 text-[#677ED6] hover:text-white transition-colors"
        >
          <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />{" "}
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0118] text-white min-h-screen relative font-sans selection:bg-[#677ED6]/30">
      <Seo
        title={data.title || "Blockchain Solutions"}
        description={
          data.overview ? data.overview.slice(0, 160) : "Blockchain services."
        }
        url="/portfolio/blockchain"
      />

      <header className="absolute top-0 inset-x-0 z-50">
        <Navbar />
      </header>

      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#677ED6]/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <motion.main
        className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#677ED6]/10 border border-[#677ED6]/30 text-[#677ED6] text-xs font-bold tracking-widest uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#677ED6] animate-pulse"></span>
            {data.tag || "Case Study"}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              {data.title}
            </span>
          </motion.h1>

          {/* Custom Breadcrumb */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 text-sm text-slate-400"
          >
            <Link href="/" className="hover:text-[#677ED6] transition-colors">
              Home
            </Link>
            <span className="text-slate-700">/</span>
            <Link
              href="/portfolio"
              className="hover:text-[#677ED6] transition-colors"
            >
              Portfolio
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-white">{data.title}</span>
          </motion.div>
        </div>

        {/* --- HERO IMAGE (Glass Container) --- */}
        {data.imageUrl && (
          <motion.div
            variants={fadeInUp}
            className="relative w-full mb-20 group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#677ED6] to-purple-600 rounded-3xl opacity-30 blur group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0118]">
              <div className="aspect-video w-full relative">
                <img
                  src={data.imageUrl}
                  alt={data.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-transparent to-transparent opacity-80"></div>

                {/* Floating Stats on Image */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                  {data.meta?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl"
                    >
                      <div className="text-[#677ED6]">
                        {item.icon === "map" && <MapPin size={18} />}
                        {item.icon === "clock" && <Clock size={18} />}
                        {item.icon === "users" && <Users size={18} />}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* --- LEFT COLUMN: Content --- */}
          <div className="lg:col-span-7 space-y-12">
            {/* Overview */}
            {data.overview && (
              <motion.section
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-[#677ED6]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#677ED6]/20 rounded-lg text-[#677ED6]">
                    <Activity size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">
                    The Challenge & Solution
                  </h2>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg font-light">
                  {data.overview}
                </p>
              </motion.section>
            )}

            {/* Scope */}
            {data.scope && (
              <motion.section variants={fadeInUp}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layers size={20} className="text-[#677ED6]" /> Project Scope
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.scope.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[#111625] border border-white/5 group hover:bg-[#677ED6]/5 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#677ED6] shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* --- DATA VISUALIZATION SECTION (NEW) --- */}
            <motion.section variants={fadeInUp} className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp size={20} className="text-[#677ED6]" /> Impact
                Analysis
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chart 1: Efficiency Over Time */}
                <div className="bg-[#111625] border border-white/10 rounded-2xl p-5 shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200">
                      System Efficiency
                    </h4>
                    <p className="text-xs text-slate-500">
                      Post-implementation metrics
                    </p>
                  </div>
                  <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={performanceData}>
                        <defs>
                          <linearGradient
                            id="colorSpeed"
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
                          dataKey="name"
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
                          itemStyle={{ color: "#fff" }}
                        />
                        <Area
                          type="monotone"
                          dataKey="speed"
                          stroke="#677ED6"
                          fillOpacity={1}
                          fill="url(#colorSpeed)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 2: Comparative Throughput */}
                <div className="bg-[#111625] border border-white/10 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200">
                      Throughput Increase
                    </h4>
                    <p className="text-xs text-slate-500">
                      Legacy vs. New Architecture
                    </p>
                  </div>
                  <div className="h-[180px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={throughputData} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis
                          dataKey="name"
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
                          }}
                        />
                        <Bar dataKey="value" barSize={24} radius={[0, 4, 4, 0]}>
                          {throughputData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={index === 1 ? "#677ED6" : "#2d3748"}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-2xl font-bold text-[#677ED6]">
                      +183%
                    </span>
                    <span className="text-xs text-slate-500 block">
                      Improvement
                    </span>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* --- RIGHT COLUMN: Sticky Sidebar --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-32">
              {/* Tech Stack Box */}
              {data.techStack && (
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-[#111625] to-[#0A0118] border border-white/10 rounded-2xl p-6 mb-8 shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Cpu size={64} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-6 relative z-10">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {data.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/5 text-[#9caeff] border border-[#677ED6]/20 hover:border-[#677ED6] hover:bg-[#677ED6]/10 hover:shadow-[0_0_15px_rgba(103,126,214,0.3)] transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Deliverables List */}
              {data.deliverables && (
                <motion.div
                  variants={fadeInUp}
                  className="bg-[#111625]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-6">
                    Key Deliverables
                  </h3>
                  <div className="space-y-0 relative">
                    {/* Timeline line */}
                    <div className="absolute left-3.5 top-2 bottom-4 w-0.5 bg-gradient-to-b from-[#677ED6] to-transparent opacity-30"></div>

                    {data.deliverables.map((item, index) => (
                      <div key={index} className="flex gap-4 pb-6 relative">
                        <div className="mt-1 w-7 h-7 rounded-full bg-[#0A0118] border-2 border-[#677ED6] flex items-center justify-center shrink-0 z-10">
                          <div className="w-2 h-2 bg-[#677ED6] rounded-full"></div>
                        </div>
                        <div className="pt-1">
                          <p className="text-sm text-slate-300 leading-snug">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 bg-[#677ED6] text-white py-3 rounded-xl font-semibold shadow-[0_4px_14px_0_rgba(103,126,214,0.39)] hover:bg-[#5a6fc2] transition-all"
                  >
                    View Live Project
                  </motion.button> */}
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

export default Blockchain;
