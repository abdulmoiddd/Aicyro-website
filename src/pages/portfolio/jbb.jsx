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
  TrendingUp,
  Globe,
  ShoppingBag,
  Briefcase,
  ArrowRight,
  Gem,
  Award,
  PieChart,
} from "lucide-react";

// --- FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";

// Create a motion-enabled Link
const MotionLink = motion(Link);

// --- MOCK DATA FOR CHARTS (Business/Retail Context) ---
const revenueData = [
  { name: "Q1", revenue: 45000, traffic: 12000 },
  { name: "Q2", revenue: 52000, traffic: 15000 },
  { name: "Q3", revenue: 48000, traffic: 18000 },
  { name: "Q4", revenue: 75000, traffic: 32000 },
];

const conversionStats = [
  { name: "Industry Avg", value: 2.5 },
  { name: "JBB Platform", value: 5.8 },
];

const JbbProject = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FETCH DATA ---
  useEffect(() => {
    // Pointing to "Protfolio/JBB"
    const portfolioRef = ref(database, "Protfolio/JBB");

    const unsubscribe = onValue(
      portfolioRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
          setLoading(false);
        } else {
          console.warn("No data found at 'Protfolio/JBB'");
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
              <Gem className="w-6 h-6 text-[#677ED6] opacity-50" />
            </div>
          </div>
          <p className="text-sm tracking-[0.2em] text-[#677ED6] uppercase font-medium">
            Polishing Assets...
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
        title={data.title || "JBB Project"}
        description={
          data.overview ? data.overview.slice(0, 160) : "Business solutions."
        }
        url="/portfolio/jbb"
      />

      <header className="absolute top-0 inset-x-0 z-50">
        <Navbar />
      </header>

      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-[#677ED6]/10 rounded-[100%] blur-[120px]" />
        <div className="absolute bottom-[0%] left-[0%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
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
            <Award size={12} />
            {data.tag || "PREMIUM SOLUTIONS"}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              {data.title}
            </span>
          </motion.h1>

          {/* Breadcrumb */}
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
            <div className="absolute -inset-1 bg-gradient-to-b from-[#677ED6] to-transparent rounded-3xl opacity-10 blur group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0118]">
              <div className="aspect-video w-full relative">
                <img
                  src={data.imageUrl}
                  alt={data.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-transparent to-transparent opacity-90"></div>

                {/* Floating Stats on Image */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                  {data.meta?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl shadow-lg"
                    >
                      <div className="text-[#677ED6]">
                        {item.icon === "map" && <Globe size={18} />}
                        {item.icon === "clock" && <TrendingUp size={18} />}
                        {item.icon === "users" && <Briefcase size={18} />}
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
                    <Briefcase size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Executive Summary</h2>
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
                  <PieChart size={20} className="text-[#677ED6]" /> Strategic
                  Scope
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.scope.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[#111625] border border-white/5 group hover:bg-[#677ED6]/5 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-sm bg-[#677ED6] mt-2 group-hover:rotate-45 transition-transform"></div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* --- DATA VISUALIZATION SECTION --- */}
            <motion.section variants={fadeInUp} className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp size={20} className="text-[#677ED6]" /> Growth
                Metrics
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chart 1: Revenue Growth */}
                <div className="bg-[#111625] border border-white/10 rounded-2xl p-5 shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200">
                      Revenue Trajectory
                    </h4>
                    <p className="text-xs text-slate-500">
                      Quarterly performance
                    </p>
                  </div>
                  <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient
                            id="colorRev"
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
                          dataKey="revenue"
                          stroke="#677ED6"
                          fillOpacity={1}
                          fill="url(#colorRev)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 2: Conversion Rate */}
                <div className="bg-[#111625] border border-white/10 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200">
                      Conversion Rate
                    </h4>
                    <p className="text-xs text-slate-500">
                      Platform vs Industry Standard
                    </p>
                  </div>
                  <div className="h-[180px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={conversionStats} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis
                          dataKey="name"
                          type="category"
                          width={100}
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
                          {conversionStats.map((entry, index) => (
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
                      2.3x
                    </span>
                    <span className="text-xs text-slate-500 block">
                      Performance Uplift
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
                    <Gem size={64} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-6 relative z-10">
                    Tech Ecosystem
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

              {/* Deliverables Timeline */}
              {data.deliverables && (
                <motion.div
                  variants={fadeInUp}
                  className="bg-[#111625]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-6">
                    Key Milestones
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
                    View Project Case
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

export default JbbProject;
