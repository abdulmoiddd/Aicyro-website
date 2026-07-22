import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, ShieldCheck, TrendingUp } from "lucide-react";

const PROCESS_STEPS = [
  { 
    id: 1, 
    title: "Discovery", 
    description: "Analyzing goals, requirements, and identifying potential bottlenecks.", 
    icon: Search,
    color: "from-blue-400 to-cyan-400"
  },
  { 
    id: 2, 
    title: "Design", 
    description: "Architecting scalable systems and crafting intuitive UX workflows.", 
    icon: PenTool,
    color: "from-cyan-400 to-teal-400"
  },
  { 
    id: 3, 
    title: "Build", 
    description: "Agile development cycles producing clean, maintainable code.", 
    icon: Code2,
    color: "from-teal-400 to-emerald-400"
  },
  { 
    id: 4, 
    title: "Secure", 
    description: "Rigorous penetration testing and automated security hardening.", 
    icon: ShieldCheck,
    color: "from-emerald-400 to-green-400"
  },
  { 
    id: 5, 
    title: "Scale", 
    description: "Global deployment, real-time monitoring, and optimization.", 
    icon: TrendingUp,
    color: "from-green-400 to-lime-400"
  },
];

const ProcessPipeline = () => {
  return (
    // UPDATED: Background uses variable
    <section className="py-24 px-4 bg-[var(--background)] relative overflow-hidden transition-colors duration-300">
      {/* Background Gradients - Adjusted opacity for theme compatibility */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // UPDATED: Badge background and border
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)]/50 backdrop-blur-md"
          >
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
              How We Work
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            // UPDATED: Text color
            className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)]"
          >
            The Engineering <span className="text-[var(--foreground-muted)]">Workflow</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            // UPDATED: Text color
            className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg mb-8"
          >
            From initial concept to global scale, our process is designed for transparency, velocity, and uncompromised quality.
          </motion.p>

          

        </div>

        {/* Pipeline Container */}
        <div className="relative">
          
          {/* --- DESKTOP CONNECTOR LINE --- */}
          <div className="hidden lg:block absolute top-[3.5rem] left-0 w-full h-0.5 bg-[var(--border-color)] rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-lime-500"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                
                {/* --- MOBILE VERTICAL LINE --- */}
                {index !== PROCESS_STEPS.length - 1 && (
                    // UPDATED: Line color
                    <div className="lg:hidden absolute top-16 left-[50%] -translate-x-1/2 w-0.5 h-full bg-[var(--border-color)] -z-10" />
                )}

                {/* Icon Container */}
                <div className="relative mb-8">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full`} />
                  
                  {/* Icon Circle */}
                  {/* UPDATED: Backgrounds match theme variables */}
                  <div className="w-28 h-28 rounded-full bg-[var(--background)] border-4 border-[var(--card-bg)] flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} p-[2px]`}>
                        <div className="w-full h-full rounded-full bg-[var(--background)] flex items-center justify-center">
                          {/* UPDATED: Icon Color uses foreground */}
                          <step.icon size={32} className="text-[var(--foreground)]" />
                        </div>
                    </div>

                    {/* Number Badge */}
                    {/* UPDATED: Badge colors */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[var(--card-bg)] border-2 border-[var(--background)] flex items-center justify-center text-sm font-bold text-[var(--foreground)] shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                {/* UPDATED: Card styling using variables */}
                <div className="bg-[var(--card-bg)]/50 border border-[var(--border-color)] p-6 rounded-2xl w-full min-h-[160px] hover:bg-[var(--card-bg)] transition-colors duration-300 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPipeline;