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
  Legend,
} from "recharts";
import {
  CheckCircle2,
  FileText,
  Search,
  BookOpen,
  ArrowRight,
  Layers,
  Library,
  Network,
  Quote,
} from "lucide-react";

// --- FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";

// --- MOCK DATA FOR CHARTS (NLP/Research Context) ---

// Chart 1: Retrieval Precision (Keyword vs SciBERT)
const accuracyData = [
  { metric: "Precision@10", keyword: 45, semantic: 82 },
  { metric: "Recall@10", keyword: 30, semantic: 78 },
  { metric: "F1 Score", keyword: 36, semantic: 80 },
];

// Chart 2: Time to Insight (Manual Review vs AI)
const timeData = [
  { task: "Paper Discovery", manual: 120, ai: 5 }, // minutes
  { task: "Reading/Filtering", manual: 300, ai: 15 },
  { task: "Insight Extraction", manual: 180, ai: 10 },
  { task: "Citation Check", manual: 60, ai: 2 },
];

const AutoScholarProject = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FETCH DATA ---
  useEffect(() => {
    // Pointing to the specific node in your schema
    const portfolioRef = ref(database, "Protfolio/auto-scholar");

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
      y: 0,
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
              <Search className="text-[#677ED6] animate-pulse" size={24} />
            </div>
          </div>
          <p className="text-sm tracking-[0.2em] text-[#677ED6] uppercase font-medium">
            Indexing Corpus...
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
        title={data.title || "AutoScholar AI"}
        description={
          data.overview
            ? data.overview.slice(0, 160)
            : "Autonomous research assistant using SciBERT and LangChain."
        }
        url="/portfolio/auto-scholar"
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
            {data.tag || "NLP Research"}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              {data.title}
            </span>
          </motion.h1>

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
            <span className="text-white">AutoScholar</span>
          </motion.div>
        </div>

        {/* --- HERO IMAGE --- */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-transparent to-transparent opacity-80"></div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                  {data.meta?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl"
                    >
                      <div className="text-[#677ED6]">
                        {item.icon === "search" && <Search size={18} />}
                        {item.icon === "book" && <BookOpen size={18} />}
                        {item.icon === "network" && <Network size={18} />}
                        {!["search", "book", "network"].includes(item.icon) && (
                          <FileText size={18} />
                        )}
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
                    <Library size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Research Architecture</h2>
                </div>
                [Image of Retrieval-Augmented Generation architecture]
                <p className="text-slate-300 leading-relaxed text-lg font-light mt-4">
                  {data.overview}
                </p>
              </motion.section>
            )}

            {/* Scope Checklist */}
            {data.scope && (
              <motion.section variants={fadeInUp}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layers size={20} className="text-[#677ED6]" /> Core Features
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

            {/* --- VISUALIZATION: RETRIEVAL ANALYTICS --- */}
            <motion.section variants={fadeInUp} className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Network size={20} className="text-[#677ED6]" /> Retrieval
                Performance
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chart 1: Search Accuracy Comparison */}
                <div className="bg-[#111625] border border-white/10 rounded-2xl p-5 shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200">
                      Semantic Search vs Keyword
                    </h4>
                    <p className="text-xs text-slate-500">
                      SciBERT Embeddings Performance
                    </p>
                  </div>
                  <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={accuracyData} barGap={4}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#ffffff10"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="metric"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#6b7280", fontSize: 10 }}
                        />
                        <Tooltip
                          cursor={{ fill: "transparent" }}
                          contentStyle={{
                            backgroundColor: "#0A0118",
                            borderColor: "#677ED6",
                            borderRadius: "8px",
                          }}
                          itemStyle={{ color: "#fff" }}
                        />
                        <Legend
                          verticalAlign="top"
                          height={36}
                          iconSize={8}
                          wrapperStyle={{ fontSize: "10px" }}
                        />
                        <Bar
                          dataKey="keyword"
                          name="Keyword Search"
                          fill="#374151"
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar
                          dataKey="semantic"
                          name="SciBERT Search"
                          fill="#677ED6"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 2: Time Savings (Manual vs AI) */}
                <div className="bg-[#111625] border border-white/10 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200">
                      Literature Review Speed
                    </h4>
                    <p className="text-xs text-slate-500">
                      Time (Minutes) per Research Question
                    </p>
                  </div>
                  <div className="h-[220px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={timeData}>
                        <defs>
                          <linearGradient
                            id="colorManual"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#374151"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#374151"
                              stopOpacity={0}
                            />
                          </linearGradient>
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
                          dataKey="task"
                          tick={{ fill: "#9ca3af", fontSize: 10 }}
                          axisLine={false}
                          tickLine={false}
                          interval={0}
                          angle={-15}
                          textAnchor="end"
                          height={40}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#0A0118",
                            borderColor: "#677ED6",
                          }}
                        />
                        <Area
                          type="step"
                          dataKey="manual"
                          name="Manual Time"
                          stroke="#4b5563"
                          fill="url(#colorManual)"
                          fillOpacity={0.5}
                        />
                        <Area
                          type="step"
                          dataKey="ai"
                          name="AutoScholar"
                          stroke="#677ED6"
                          fill="url(#colorAi)"
                          fillOpacity={0.8}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* --- RIGHT COLUMN: Sidebar --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-32">
              {/* Tech Stack */}
              {data.techStack && (
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-[#111625] to-[#0A0118] border border-white/10 rounded-2xl p-6 mb-8 shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Network size={64} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-6 relative z-10">
                    Tech Stack
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

              {/* Deliverables */}
              {data.deliverables && (
                <motion.div
                  variants={fadeInUp}
                  className="bg-[#111625]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Quote size={18} className="text-[#677ED6]" /> Key
                    Deliverables
                  </h3>
                  <div className="space-y-0 relative">
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

export default AutoScholarProject;
