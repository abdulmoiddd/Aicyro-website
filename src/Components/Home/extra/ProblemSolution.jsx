import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  UserPlus, 
  ArrowRight,
  MinusCircle,
  PlusCircle
} from "lucide-react";

const ProblemSolution = () => {
  const transformationData = [
    {
      problem: "Projects going over budget or timeline",
      solution: "Fixed-scope agile delivery & transparent tracking",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      problem: "Difficulty hiring reliable developers",
      solution: "Vetted experts in AI & modern architecture",
      icon: <UserPlus className="w-5 h-5" />,
    },
    {
      problem: "Security & performance bottlenecks",
      solution: "Cyber-secure, VAPT-tested scalable code",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      problem: "Lack of specialized AI expertise",
      solution: "Custom LLMs & intelligent automation",
      icon: <Zap className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[var(--background)] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8F8BF9]/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#8F8BF9] font-semibold tracking-widest uppercase text-sm"
          >
            The Aicyro Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mt-4 mb-6"
          >
            Turn Technical Friction <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8F8BF9] to-[#5B86D3]">
              Into Business Momentum
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {transformationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#8F8BF9]/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="p-4 rounded-xl bg-[var(--foreground)]/5 text-[#8F8BF9] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <div className="flex-grow space-y-4">
                  {/* Problem Statement */}
                  <div className="flex items-center gap-3 text-[var(--foreground-muted)] opacity-60 group-hover:opacity-100 transition-opacity">
                    <MinusCircle className="w-4 h-4 text-slate-500" />
                    <p className="text-sm font-medium italic">{item.problem}</p>
                  </div>

                  {/* Solution Statement */}
                  <div className="flex items-start gap-3">
                    <PlusCircle className="w-5 h-5 text-[#8F8BF9] mt-1 shrink-0" />
                    <h4 className="text-xl font-semibold text-[var(--foreground)] leading-tight">
                      {item.solution}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition Line */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 p-8 rounded-3xl bg-gradient-to-b from-[var(--foreground)]/5 to-transparent border border-[var(--border-color)]"
        >
          <p className="text-xl font-medium text-[var(--foreground)]">
            Ready to build software that <span className="text-[#8F8BF9]">actually delivers</span>?
          </p>
                  <button
                     onClick={() => window.location.href = "/portfolio"}
                      className="flex items-center gap-2 px-8 py-3 bg-[#8F8BF9] text-white rounded-full font-bold hover:shadow-[0_0_30px_rgba(143,139,249,0.3)] hover:-translate-y-1 transition-all">
            See Our Approach <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;