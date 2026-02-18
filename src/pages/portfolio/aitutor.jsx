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
  ComposedChart,
  Line,
} from "recharts";
import {
  CheckCircle2,
  GraduationCap,
  Brain,
  BookOpen,
  ArrowRight,
  Layers,
  Sparkles,
  TrendingUp,
  Target,
} from "lucide-react";

// --- FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";

// --- MOCK DATA FOR CHARTS (EdTech/DKT Context) ---

// Chart 1: Knowledge Tracing (Predicted vs Actual Mastery)
const masteryData = [
  { step: 1, probability: 0.2, actual: 0 },
  { step: 5, probability: 0.35, actual: 0.3 },
  { step: 10, probability: 0.45, actual: 0.5 },
  { step: 15, probability: 0.6, actual: 0.7 },
  { step: 20, probability: 0.75, actual: 0.8 },
  { step: 25, probability: 0.85, actual: 0.9 },
  { step: 30, probability: 0.92, actual: 0.95 },
];

// Chart 2: Adaptive Difficulty Distribution (How the AI adjusted questions)
const difficultyData = [
  { level: "Easy", count: 15, time: 2 },
  { level: "Medium", count: 45, time: 5 },
  { level: "Hard", count: 20, time: 8 },
  { level: "Expert", count: 5, time: 12 },
];

const AiTutorProject = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FETCH DATA ---
  useEffect(() => {
    // Pointing to the specific node in your schema
    const portfolioRef = ref(database, "Protfolio/ai-tutor");

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
              <Brain className="text-[#677ED6] animate-pulse" size={24} />
            </div>
          </div>
          <p className="text-sm tracking-[0.2em] text-[#677ED6] uppercase font-medium">
            Loading Knowledge Model...
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
        title={data.title || "Personalized AI Tutor"}
        description={
          data.overview
            ? data.overview.slice(0, 160)
            : "Adaptive intelligent tutoring system using Deep Knowledge Tracing."
        }
        url="/portfolio/ai-tutor"
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
            {data.tag || "EdTech AI"}
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
            <span className="text-white">AI Tutor</span>
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

                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                  {data.meta?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl"
                    >
                      <div className="text-[#677ED6]">
                        {item.icon === "brain" && <Brain size={18} />}
                        {item.icon === "book" && <BookOpen size={18} />}
                        {item.icon === "target" && <Target size={18} />}
                        {!["brain", "book", "target"].includes(item.icon) && (
                          <Sparkles size={18} />
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
                    <GraduationCap size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Project Overview</h2>
                </div>

                <p className="text-slate-300 leading-relaxed text-lg font-light mt-4">
                  {data.overview}
                </p>
              </motion.section>
            )}

            {/* Scope Checklist */}
            {data.scope && (
              <motion.section variants={fadeInUp}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layers size={20} className="text-[#677ED6]" /> Educational
                  Modules
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

            {/* --- VISUALIZATION: LEARNING ANALYTICS --- */}
            <motion.section variants={fadeInUp} className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp size={20} className="text-[#677ED6]" /> Student
                Mastery Metrics
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chart 1: Deep Knowledge Tracing */}
                <div className="bg-[#111625] border border-white/10 rounded-2xl p-5 shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200">
                      Knowledge Tracing (DKT)
                    </h4>
                    <p className="text-xs text-slate-500">
                      Predicted Mastery vs Actual Performance
                    </p>
                  </div>
                  <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={masteryData}>
                        <defs>
                          <linearGradient
                            id="colorProb"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#677ED6"
                              stopOpacity={0.5}
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
                          dataKey="step"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#6b7280", fontSize: 10 }}
                          label={{
                            value: "Interactions",
                            position: "insideBottom",
                            fill: "#4b5563",
                            fontSize: 10,
                            offset: -5,
                          }}
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
                          dataKey="probability"
                          name="Predicted Mastery"
                          stroke="#677ED6"
                          fill="url(#colorProb)"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="actual"
                          name="Actual Performance"
                          stroke="#22c55e"
                          strokeWidth={2}
                          dot={{ r: 3 }}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 2: Adaptive Difficulty */}
                <div className="bg-[#111625] border border-white/10 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200">
                      Adaptive Difficulty
                    </h4>
                    <p className="text-xs text-slate-500">
                      Questions served by difficulty level
                    </p>
                  </div>
                  <div className="h-[220px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={difficultyData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#ffffff10"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="level"
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
                        <Bar
                          dataKey="count"
                          name="Questions Served"
                          fill="#677ED6"
                          radius={[4, 4, 0, 0]}
                          barSize={30}
                        >
                          {difficultyData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fillOpacity={0.6 + index * 0.1}
                            />
                          ))}
                        </Bar>
                      </BarChart>
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
                    <Brain size={64} className="text-white" />
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
                    <Sparkles size={18} className="text-[#677ED6]" /> Key
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

export default AiTutorProject;
