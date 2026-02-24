// import React, { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   MessageSquare,
//   Search,
//   Filter,
//   Trash2,
//   Mail,
//   Briefcase,
//   Calendar,
//   User,
//   Layers,
//   GitBranch,
//   ArrowUpRight,
//   RefreshCw,
//   Clock
// } from "lucide-react";

// // --- COMPONENTS ---
// import Navbar from "../Components/Essntials/Navbar";
// import Footer from "../Components/Essntials/footer";

// // --- FIREBASE ---
// import { ref, onValue, remove } from "firebase/database";
// import { database } from "../lib/firebase";

// // --- UTILITY COMPONENTS ---

// const StatCard = ({ icon: Icon, label, value, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay, duration: 0.4 }}
//     className="bg-[var(--card-bg)] border border-[var(--border-color)] p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:border-[var(--primary)]/30 transition-colors"
//   >
//     <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
//       <Icon size={24} />
//     </div>
//     <div>
//       <h4 className="text-[var(--foreground-muted)] text-xs font-semibold uppercase tracking-wider">{label}</h4>
//       <p className="text-2xl font-bold text-[var(--foreground)] mt-0.5">{value}</p>
//     </div>
//   </motion.div>
// );

// const ServiceBadge = ({ icon: Icon, text }) => (
//   <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground-muted)] text-xs font-medium">
//     <Icon size={12} />
//     <span className="truncate max-w-[150px]">{text}</span>
//   </div>
// );

// const MessagesPage = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Search & Filter State
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedService, setSelectedService] = useState("All");

//   // --- 1. FETCH DATA ---
//   useEffect(() => {
//     const inquiriesRef = ref(database, "inquiries");
//     const unsubscribe = onValue(inquiriesRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const list = Object.keys(data).map((key) => ({
//           id: key,
//           ...data[key],
//         })).sort((a, b) => b.timestamp - a.timestamp); // Newest first
//         setMessages(list);
//       } else {
//         setMessages([]);
//       }
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   // --- 2. FILTER LOGIC ---
//   const filteredMessages = useMemo(() => {
//     return messages.filter(msg => {
//       const matchesSearch =
//         msg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         msg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         msg.company?.toLowerCase().includes(searchTerm.toLowerCase());
      
//       const matchesService =
//         selectedService === "All" ||
//         msg.coreService === selectedService;

//       return matchesSearch && matchesService;
//     });
//   }, [messages, searchTerm, selectedService]);

//   // --- 3. STATS CALCULATION ---
//   const stats = useMemo(() => {
//     const total = messages.length;
//     const today = new Date().toDateString();
//     const newToday = messages.filter(m => new Date(m.timestamp).toDateString() === today).length;
//     // Calculate unique services requested
//     const uniqueServices = new Set(messages.map(m => m.coreService).filter(Boolean)).size;
    
//     return { total, newToday, uniqueServices };
//   }, [messages]);

//   // --- 4. HANDLERS ---
//   const handleDelete = async (id) => {
//     if (window.confirm("Permanently delete this inquiry?")) {
//       try {
//         await remove(ref(database, `inquiries/${id}`));
//       } catch (e) {
//         console.error("Delete failed", e);
//       }
//     }
//   };

//   const formatDate = (ts) => {
//     if (!ts) return "Unknown";
//     const date = new Date(ts);
//     return new Intl.DateTimeFormat('en-US', {
//       month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
//     }).format(date);
//   };

//   // --- RENDER ---
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="w-10 h-10 border-2 border-[var(--primary)] border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
      
//       <main className="min-h-screen bg-[var(--background)] pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
//         <div className="max-w-7xl mx-auto space-y-10">
          
//           {/* --- HEADER SECTION --- */}
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//             <div>
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="flex items-center gap-3 mb-2"
//               >
//                 <div className="p-2 bg-[var(--primary)] rounded-lg text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]">
//                   <MessageSquare size={24} />
//                 </div>
//                 <h1 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">Inquiries</h1>
//               </motion.div>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-[var(--foreground-muted)]"
//               >
//                 Manage and track incoming client requests.
//               </motion.p>
//             </div>

//             {/* Stats Row for Desktop */}
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto">
//               <StatCard icon={MessageSquare} label="Total" value={stats.total} delay={0.1} />
//               <StatCard icon={Clock} label="Today" value={stats.newToday} delay={0.2} />
//               <StatCard icon={Layers} label="Services" value={stats.uniqueServices} delay={0.3} />
//             </div>
//           </div>

//           {/* --- CONTROLS SECTION --- */}
//           <div className="flex flex-col md:flex-row gap-4 bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--border-color)] shadow-sm">
//             {/* Search */}
//             <div className="relative flex-grow">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] w-4 h-4" />
//               <input
//                 type="text"
//                 placeholder="Search by name, email or company..."
//                 className="w-full pl-10 pr-4 py-2.5 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             {/* Filter */}
//             <div className="relative min-w-[200px]">
//               <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] w-4 h-4" />
//               <select
//                 className="w-full pl-10 pr-8 py-2.5 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-sm text-[var(--foreground)] appearance-none cursor-pointer focus:ring-1 focus:ring-[var(--primary)] outline-none"
//                 value={selectedService}
//                 onChange={(e) => setSelectedService(e.target.value)}
//               >
//                 <option value="All">All Services</option>
//                 {/* Dynamically populate options from data + defaults */}
//                 {[...new Set(messages.map(m => m.coreService).filter(Boolean))].map(s => (
//                   <option key={s} value={s}>{s}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* --- MESSAGES GRID --- */}
//           <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//             <AnimatePresence mode="popLayout">
//               {filteredMessages.length > 0 ? (
//                 filteredMessages.map((msg, index) => (
//                   <MessageCard key={msg.id} msg={msg} onDelete={handleDelete} index={index} />
//                 ))
//               ) : (
//                 <div className="col-span-full py-20 text-center">
//                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-4">
//                     <RefreshCw className="w-6 h-6 text-[var(--foreground-muted)]" />
//                   </div>
//                   <h3 className="text-lg font-medium text-[var(--foreground)]">No messages found</h3>
//                   <p className="text-[var(--foreground-muted)]">Try adjusting your search or filters.</p>
//                 </div>
//               )}
//             </AnimatePresence>
//           </motion.div>

//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// // --- SUB-COMPONENT: MESSAGE CARD ---
// const MessageCard = ({ msg, onDelete, index }) => {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.3, delay: index * 0.05 }}
//       className="group relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:shadow-2xl hover:border-[var(--primary)]/40 transition-all duration-300 flex flex-col"
//     >
//       {/* Top Decoration Line */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//       <div className="p-6 flex flex-col h-full">
        
//         {/* Header: Avatar + Info + Delete */}
//         <div className="flex justify-between items-start mb-5">
//           <div className="flex items-center gap-3">
//             {/* Initials Avatar */}
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold text-sm shadow-inner">
//               {msg.name.charAt(0).toUpperCase()}
//             </div>
//             <div>
//               <h3 className="font-bold text-[var(--foreground)] text-base line-clamp-1" title={msg.name}>
//                 {msg.name}
//               </h3>
//               <div className="flex items-center gap-1.5 text-xs text-[var(--foreground-muted)] mt-0.5">
//                 <Calendar size={10} />
//                 {new Date(msg.timestamp).toLocaleDateString()}
//                 <span className="opacity-50">•</span>
//                 <Clock size={10} />
//                 {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
//               </div>
//             </div>
//           </div>
          
//           <button
//             onClick={() => onDelete(msg.id)}
//             className="text-[var(--foreground-muted)] hover:text-red-500 p-2 rounded-lg hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100"
//             title="Delete Message"
//           >
//             <Trash2 size={16} />
//           </button>
//         </div>

//         {/* Services Badges */}
//         {(msg.coreService || msg.subService) && (
//           <div className="flex flex-wrap gap-2 mb-5">
//             {msg.coreService && (
//               <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 text-xs font-semibold">
//                 <Layers size={12} /> {msg.coreService}
//               </span>
//             )}
//             {msg.subService && (
//               <ServiceBadge icon={GitBranch} text={msg.subService} />
//             )}
//           </div>
//         )}

//         {/* Contact Details */}
//         <div className="space-y-2 mb-5 text-sm">
//           <a href={`mailto:${msg.email}`} className="flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors truncate">
//             <Mail size={14} className="shrink-0" />
//             {msg.email}
//           </a>
//           {msg.company && (
//             <div className="flex items-center gap-2 text-[var(--foreground-muted)] truncate">
//               <Briefcase size={14} className="shrink-0" />
//               {msg.company}
//             </div>
//           )}
//         </div>

//         {/* Message Body */}
//         <div className="mt-auto pt-4 border-t border-[var(--border-color)]/50">
//            <div className="relative">
//              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed whitespace-pre-wrap max-h-32 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[var(--border-color)] scrollbar-track-transparent">
//                "{msg.message}"
//              </p>
//            </div>
//         </div>

//         {/* Action (Reply Prompt) */}
//         {/* <div className="mt-4 pt-2 flex justify-end">
//             <a
//               href={`mailto:${msg.email}?subject=Re: Inquiry about ${msg.coreService || 'Services'}`}
//               className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors"
//             >
//               Reply via Email <ArrowUpRight size={12} />
//             </a>
//         </div> */}

//       </div>
//     </motion.div>
//   );
// };

// export default MessagesPage;

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
//
//
// import React, { useState, useEffect, useMemo } from "react";
// import { useRouter } from "next/router"; // Import Router
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   MessageSquare, Search, Filter, Trash2, Mail,
//   Briefcase, Calendar, Layers, GitBranch,
//   ArrowUpRight, RefreshCw, Clock, LogOut
// } from "lucide-react";

// // --- COMPONENTS ---
// import Navbar from "../Components/Essntials/Navbar";
// import Footer from "../Components/Essntials/footer";

// // --- FIREBASE ---
// import { ref, onValue, remove } from "firebase/database";
// import { onAuthStateChanged, signOut } from "firebase/auth"; // Auth imports
// import { database, auth } from "../lib/firebase";

// // --- UTILITY COMPONENTS ---
// const StatCard = ({ icon: Icon, label, value, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay, duration: 0.4 }}
//     className="bg-[var(--card-bg)] border border-[var(--border-color)] p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:border-[var(--primary)]/30 transition-colors"
//   >
//     <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
//       <Icon size={24} />
//     </div>
//     <div>
//       <h4 className="text-[var(--foreground-muted)] text-xs font-semibold uppercase tracking-wider">{label}</h4>
//       <p className="text-2xl font-bold text-[var(--foreground)] mt-0.5">{value}</p>
//     </div>
//   </motion.div>
// );

// const ServiceBadge = ({ icon: Icon, text }) => (
//   <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground-muted)] text-xs font-medium">
//     <Icon size={12} />
//     <span className="truncate max-w-[150px]">{text}</span>
//   </div>
// );

// const MessagesPage = () => {
//   const router = useRouter();
//   const [user, setUser] = useState(null); // Track auth state
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [authChecking, setAuthChecking] = useState(true); // Track initial auth check
  
//   // Search & Filter State
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedService, setSelectedService] = useState("All");

//   // --- 1. CHECK AUTHENTICATION ---
//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
//       if (!currentUser) {
//         // Not logged in? Go to login page
//         router.push("/login");
//       } else {
//         setUser(currentUser);
//         setAuthChecking(false);
//       }
//     });

//     return () => unsubscribeAuth();
//   }, [router]);

//   // --- 2. FETCH DATA (Only if authenticated) ---
//   useEffect(() => {
//     if (!user) return; // Don't fetch if not logged in

//     const inquiriesRef = ref(database, "inquiries");
//     const unsubscribeDb = onValue(inquiriesRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const list = Object.keys(data).map((key) => ({
//           id: key,
//           ...data[key],
//         })).sort((a, b) => b.timestamp - a.timestamp);
//         setMessages(list);
//       } else {
//         setMessages([]);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribeDb();
//   }, [user]);

//   // --- 3. LOGOUT FUNCTION ---
//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.push("/login");
//     } catch (error) {
//       console.error("Logout Error:", error);
//     }
//   };

//   // --- 4. FILTER LOGIC ---
//   const filteredMessages = useMemo(() => {
//     return messages.filter(msg => {
//       const matchesSearch =
//         msg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         msg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         msg.company?.toLowerCase().includes(searchTerm.toLowerCase());
      
//       const matchesService =
//         selectedService === "All" ||
//         msg.coreService === selectedService;

//       return matchesSearch && matchesService;
//     });
//   }, [messages, searchTerm, selectedService]);

//   // --- 5. STATS ---
//   const stats = useMemo(() => {
//     const total = messages.length;
//     const today = new Date().toDateString();
//     const newToday = messages.filter(m => new Date(m.timestamp).toDateString() === today).length;
//     const uniqueServices = new Set(messages.map(m => m.coreService).filter(Boolean)).size;
//     return { total, newToday, uniqueServices };
//   }, [messages]);

//   const handleDelete = async (id) => {
//     if (window.confirm("Permanently delete this inquiry?")) {
//       try {
//         await remove(ref(database, `inquiries/${id}`));
//       } catch (e) { console.error("Delete failed", e); }
//     }
//   };

//   // --- RENDER LOADING (Auth or Data) ---
//   if (authChecking || (loading && user)) {
//     return (
//       <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="w-10 h-10 border-2 border-[var(--primary)] border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   // If we reached here but have no user (rare race condition), return null
//   if (!user) return null;

//   return (
//     <>
//       <Navbar />
      
//       <main className="min-h-screen bg-[var(--background)] pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
//         <div className="max-w-7xl mx-auto space-y-10">
          
//           {/* --- HEADER SECTION --- */}
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//             <div className="flex-grow">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="flex items-center gap-3 mb-2"
//               >
//                 <div className="p-2 bg-[var(--primary)] rounded-lg text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]">
//                   <MessageSquare size={24} />
//                 </div>
//                 <h1 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">Inquiries</h1>
//               </motion.div>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-[var(--foreground-muted)]"
//               >
//                 Welcome back. You are logged in as <span className="text-[var(--primary)]">{user.email}</span>
//               </motion.p>
//             </div>

//             {/* Actions: Stats & Logout */}
//             <div className="flex flex-col sm:flex-row items-stretch gap-4">
//                {/* Stats (Compact on Mobile) */}
//                <div className="grid grid-cols-3 gap-3">
//                   <StatCard icon={MessageSquare} label="Total" value={stats.total} delay={0.1} />
//                   <StatCard icon={Clock} label="Today" value={stats.newToday} delay={0.2} />
//                   <StatCard icon={Layers} label="Services" value={stats.uniqueServices} delay={0.3} />
//                </div>
               
//                {/* Logout Button */}
//                <button
//                 onClick={handleLogout}
//                 className="flex flex-col items-center justify-center px-4 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground-muted)] hover:text-red-400 hover:border-red-400/30 transition-all gap-1"
//                >
//                  <LogOut size={20} />
//                  <span className="text-[10px] uppercase font-bold tracking-wider">Logout</span>
//                </button>
//             </div>
//           </div>

//           {/* --- CONTROLS SECTION --- */}
//           <div className="flex flex-col md:flex-row gap-4 bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--border-color)] shadow-sm">
//             {/* Search */}
//             <div className="relative flex-grow">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] w-4 h-4" />
//               <input
//                 type="text"
//                 placeholder="Search by name, email or company..."
//                 className="w-full pl-10 pr-4 py-2.5 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             {/* Filter */}
//             <div className="relative min-w-[200px]">
//               <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] w-4 h-4" />
//               <select
//                 className="w-full pl-10 pr-8 py-2.5 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-sm text-[var(--foreground)] appearance-none cursor-pointer focus:ring-1 focus:ring-[var(--primary)] outline-none"
//                 value={selectedService}
//                 onChange={(e) => setSelectedService(e.target.value)}
//               >
//                 <option value="All">All Services</option>
//                 {[...new Set(messages.map(m => m.coreService).filter(Boolean))].map(s => (
//                   <option key={s} value={s}>{s}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* --- MESSAGES GRID --- */}
//           <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//             <AnimatePresence mode="popLayout">
//               {filteredMessages.length > 0 ? (
//                 filteredMessages.map((msg, index) => (
//                   <MessageCard key={msg.id} msg={msg} onDelete={handleDelete} index={index} />
//                 ))
//               ) : (
//                 <div className="col-span-full py-20 text-center">
//                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-4">
//                     <RefreshCw className="w-6 h-6 text-[var(--foreground-muted)]" />
//                   </div>
//                   <h3 className="text-lg font-medium text-[var(--foreground)]">No messages found</h3>
//                   <p className="text-[var(--foreground-muted)]">Try adjusting your search or filters.</p>
//                 </div>
//               )}
//             </AnimatePresence>
//           </motion.div>

//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// // --- MESSAGE CARD (Same as before) ---
// const MessageCard = ({ msg, onDelete, index }) => {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.3, delay: index * 0.05 }}
//       className="group relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:shadow-2xl hover:border-[var(--primary)]/40 transition-all duration-300 flex flex-col"
//     >
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       <div className="p-6 flex flex-col h-full">
//         <div className="flex justify-between items-start mb-5">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold text-sm shadow-inner">
//               {msg.name.charAt(0).toUpperCase()}
//             </div>
//             <div>
//               <h3 className="font-bold text-[var(--foreground)] text-base line-clamp-1" title={msg.name}>{msg.name}</h3>
//               <div className="flex items-center gap-1.5 text-xs text-[var(--foreground-muted)] mt-0.5">
//                 <Calendar size={10} />
//                 {new Date(msg.timestamp).toLocaleDateString()}
//                 <span className="opacity-50">•</span>
//                 <Clock size={10} />
//                 {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
//               </div>
//             </div>
//           </div>
//           <button onClick={() => onDelete(msg.id)} className="text-[var(--foreground-muted)] hover:text-red-500 p-2 rounded-lg hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100" title="Delete Message"><Trash2 size={16} /></button>
//         </div>
//         {(msg.coreService || msg.subService) && (
//           <div className="flex flex-wrap gap-2 mb-5">
//             {msg.coreService && <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 text-xs font-semibold"><Layers size={12} /> {msg.coreService}</span>}
//             {msg.subService && <ServiceBadge icon={GitBranch} text={msg.subService} />}
//           </div>
//         )}
//         <div className="space-y-2 mb-5 text-sm">
//           <a href={`mailto:${msg.email}`} className="flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors truncate"><Mail size={14} className="shrink-0" />{msg.email}</a>
//           {msg.company && <div className="flex items-center gap-2 text-[var(--foreground-muted)] truncate"><Briefcase size={14} className="shrink-0" />{msg.company}</div>}
//         </div>
//         <div className="mt-auto pt-4 border-t border-[var(--border-color)]/50">
//            <div className="relative">
//              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed whitespace-pre-wrap max-h-32 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[var(--border-color)] scrollbar-track-transparent">"{msg.message}"</p>
//            </div>
//         </div>
//         <div className="mt-4 pt-2 flex justify-end">
//             <a href={`mailto:${msg.email}?subject=Re: Inquiry about ${msg.coreService || 'Services'}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors">Reply via Email <ArrowUpRight size={12} /></a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default MessagesPage;
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
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, Search, Filter, Trash2, Mail, 
  Briefcase, Calendar, Layers, GitBranch, 
  ArrowUpRight, RefreshCw, Clock, LogOut 
} from "lucide-react";

// --- COMPONENTS ---
import Navbar from "../Components/Essntials/Navbar";
import Footer from "../Components/Essntials/footer";

// --- FIREBASE ---
import { ref, onValue, remove } from "firebase/database";
import { database } from "../lib/firebase";

// --- UTILITY COMPONENTS ---
const StatCard = ({ icon: Icon, label, value, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-[var(--card-bg)] border border-[var(--border-color)] p-5 rounded-2xl flex items-center gap-4 shadow-sm hover:border-[var(--primary)]/30 transition-colors"
  >
    <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-[var(--foreground-muted)] text-xs font-semibold uppercase tracking-wider">{label}</h4>
      <p className="text-2xl font-bold text-[var(--foreground)] mt-0.5">{value}</p>
    </div>
  </motion.div>
);

const ServiceBadge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground-muted)] text-xs font-medium">
    <Icon size={12} />
    <span className="truncate max-w-[150px]">{text}</span>
  </div>
);

const MessagesPage = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null); // Local State User
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authChecking, setAuthChecking] = useState(true);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState("All");

  // --- 1. CHECK CUSTOM AUTHENTICATION (LocalStorage) ---
  useEffect(() => {
    // Check if user info is stored in LocalStorage
    const storedUser = localStorage.getItem("aicyro_admin_user");
    
    if (!storedUser) {
      // Not logged in? Redirect to login
      router.push("/login");
    } else {
      setCurrentUser(JSON.parse(storedUser));
      setAuthChecking(false);
    }
  }, [router]);

  // --- 2. FETCH DATA (Only if authenticated) ---
  useEffect(() => {
    if (authChecking) return; // Wait for auth check

    const inquiriesRef = ref(database, "inquiries");
    const unsubscribeDb = onValue(inquiriesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const list = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        })).sort((a, b) => b.timestamp - a.timestamp);
        setMessages(list);
      } else {
        setMessages([]);
      }
      setLoading(false);
    });

    return () => unsubscribeDb();
  }, [authChecking]);

  // --- 3. LOGOUT FUNCTION ---
  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("aicyro_admin_user");
    router.push("/lg");
  };

  // --- 4. FILTER LOGIC ---
  const filteredMessages = useMemo(() => {
    return messages.filter(msg => {
      const matchesSearch = 
        msg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.company?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesService = 
        selectedService === "All" || 
        msg.coreService === selectedService;

      return matchesSearch && matchesService;
    });
  }, [messages, searchTerm, selectedService]);

  // --- 5. STATS ---
  const stats = useMemo(() => {
    const total = messages.length;
    const today = new Date().toDateString();
    const newToday = messages.filter(m => new Date(m.timestamp).toDateString() === today).length;
    const uniqueServices = new Set(messages.map(m => m.coreService).filter(Boolean)).size;
    return { total, newToday, uniqueServices };
  }, [messages]);

  const handleDelete = async (id) => {
    if (window.confirm("Permanently delete this inquiry?")) {
      try {
        await remove(ref(database, `inquiries/${id}`));
      } catch (e) { console.error("Delete failed", e); }
    }
  };

  // --- RENDER LOADING ---
  if (authChecking || (loading && !authChecking)) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 border-2 border-[var(--primary)] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  // If we reached here but have no user (rare race condition), return null
  if (!currentUser) return null;

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[var(--background)] pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* --- HEADER SECTION --- */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex-grow">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-2"
              >
                <div className="p-2 bg-[var(--primary)] rounded-lg text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]">
                  <MessageSquare size={24} />
                </div>
                <h1 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">Inquiries</h1>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-[var(--foreground-muted)]"
              >
                Logged in as <span className="text-[var(--primary)] font-bold">{currentUser.name}</span>
              </motion.p>
            </div>

            {/* Actions: Stats & Logout */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
               {/* Stats */}
               <div className="grid grid-cols-3 gap-3">
                  <StatCard icon={MessageSquare} label="Total" value={stats.total} delay={0.1} />
                  <StatCard icon={Clock} label="Today" value={stats.newToday} delay={0.2} />
                  <StatCard icon={Layers} label="Services" value={stats.uniqueServices} delay={0.3} />
               </div>
               
               {/* Logout Button */}
               <button 
                onClick={handleLogout}
                className="flex flex-col items-center justify-center px-4 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground-muted)] hover:text-red-400 hover:border-red-400/30 transition-all gap-1"
               >
                 <LogOut size={20} />
                 <span className="text-[10px] uppercase font-bold tracking-wider">Logout</span>
               </button>
            </div>
          </div>

          {/* --- CONTROLS SECTION --- */}
          <div className="flex flex-col md:flex-row gap-4 bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--border-color)] shadow-sm">
            {/* Search */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search by name, email or company..." 
                className="w-full pl-10 pr-4 py-2.5 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="relative min-w-[200px]">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] w-4 h-4" />
              <select 
                className="w-full pl-10 pr-8 py-2.5 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-sm text-[var(--foreground)] appearance-none cursor-pointer focus:ring-1 focus:ring-[var(--primary)] outline-none"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="All">All Services</option>
                {[...new Set(messages.map(m => m.coreService).filter(Boolean))].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* --- MESSAGES GRID --- */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((msg, index) => (
                  <MessageCard key={msg.id} msg={msg} onDelete={handleDelete} index={index} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-4">
                    <RefreshCw className="w-6 h-6 text-[var(--foreground-muted)]" />
                  </div>
                  <h3 className="text-lg font-medium text-[var(--foreground)]">No messages found</h3>
                  <p className="text-[var(--foreground-muted)]">Try adjusting your search or filters.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
};

// --- MESSAGE CARD ---
const MessageCard = ({ msg, onDelete, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:shadow-2xl hover:border-[var(--primary)]/40 transition-all duration-300 flex flex-col"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-6 flex flex-col h-full">
        
        {/* Card Header */}
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold text-sm shadow-inner">
              {msg.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="font-bold text-[var(--foreground)] text-base line-clamp-1" title={msg.name}>{msg.name}</h3>
              <div className="flex items-center gap-1.5 text-xs text-[var(--foreground-muted)] mt-0.5">
                <Calendar size={10} />
                {new Date(msg.timestamp).toLocaleDateString()} 
                <span className="opacity-50">•</span>
                <Clock size={10} />
                {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
          </div>
          <button onClick={() => onDelete(msg.id)} className="text-[var(--foreground-muted)] hover:text-red-500 p-2 rounded-lg hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100" title="Delete Message"><Trash2 size={16} /></button>
        </div>

        {/* Tags */}
        {(msg.coreService || msg.subService) && (
          <div className="flex flex-wrap gap-2 mb-5">
            {msg.coreService && <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 text-xs font-semibold"><Layers size={12} /> {msg.coreService}</span>}
            {msg.subService && <ServiceBadge icon={GitBranch} text={msg.subService} />}
          </div>
        )}

        {/* Details */}
        <div className="space-y-2 mb-5 text-sm">
          <a href={`mailto:${msg.email}`} className="flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors truncate"><Mail size={14} className="shrink-0" />{msg.email}</a>
          {msg.company && <div className="flex items-center gap-2 text-[var(--foreground-muted)] truncate"><Briefcase size={14} className="shrink-0" />{msg.company}</div>}
        </div>

        {/* Message Body */}
        <div className="mt-auto pt-4 border-t border-[var(--border-color)]/50">
           <div className="relative">
             <p className="text-sm text-[var(--foreground)]/80 leading-relaxed whitespace-pre-wrap max-h-32 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[var(--border-color)] scrollbar-track-transparent">"{msg.message}"</p>
           </div>
        </div>

        {/* Action */}
        <div className="mt-4 pt-2 flex justify-end">
            <a href={`mailto:${msg.email}?subject=Re: Inquiry about ${msg.coreService || 'Services'}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors">Reply via Email <ArrowUpRight size={12} /></a>
        </div>
      </div>
    </motion.div>
  );
};

export default MessagesPage;