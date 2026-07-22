
import React, { useState, useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Search, ShieldCheck, Code2, Sliders, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // --- 1. DETECT MOBILE SCREEN ---
  useEffect(() => {
    const checkMobile = () => {
      // 1024px is a standard breakpoint for tablets/desktops
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- STATIC DATA ---
  const headerData = {
    heading: "How We Build Future-Ready Software",
    description:
      "We don’t start with tools, trends, or code. We start with clarity. Every solution we build is grounded in strategy.",
  };

  const steps = [
    {
      id: "01",
      title: "Business Discovery",
      description:
        "We analyze your business goals, operational challenges, and technical risks to define a clear strategy.",
      icon: <Search className="w-full h-full" />,
    },
    {
      id: "02",
      title: "Secure Architecture",
      description:
        "Designed with scalability, performance, and cybersecurity built in from day one - not added later.",
      icon: <ShieldCheck className="w-full h-full" />,
    },
    {
      id: "03",
      title: "Precision Engineering",
      description:
        "Modern frameworks, AI-assisted workflows, and secure coding practices.",
      icon: <Code2 className="w-full h-full" />,
    },
    {
      id: "04",
      title: "Continuous Testing",
      description:
        "Ongoing testing, performance tuning, and security validation ensure stability throughout the lifecycle.",
      icon: <Sliders className="w-full h-full" />,
    },
    {
      id: "05",
      title: "Scale & Support",
      description:
        "Built to adapt and evolve - supporting growth, upgrades, and innovation as your business expands.",
      icon: <TrendingUp className="w-full h-full" />,
    },
  ];

  return (
    <section className="relative bg-[var(--background)] text-[var(--foreground)] py-24 px-4 overflow-hidden min-h-screen">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--card-bg)] to-[var(--background)] opacity-50 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {headerData.heading}
          </h2>
          <p className="text-[var(--foreground-muted)] text-lg font-light">
            {headerData.description}
          </p>
        </div>

        {/* GRID SYSTEM */}
        <LayoutGroup>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {steps.map((step, index) => {
              const isHovered = hoveredId === step.id;
              const isDimmed = hoveredId !== null && !isHovered;
              const isTopRow = index < 2;

              return (
                <motion.div
                  key={step.id}
                  layout
                  // --- 2. DISABLE INTERACTION ON MOBILE ---
                  onMouseEnter={() => !isMobile && setHoveredId(step.id)}
                  onMouseLeave={() => !isMobile && setHoveredId(null)}
                  // Remove cursor pointer on mobile
                  className={`
                    relative overflow-hidden rounded-3xl border 
                    flex flex-col justify-between 
                    bg-[var(--card-bg)] border-[var(--border-color)]
                    ${isMobile ? "" : "cursor-pointer"} 
                  `}
                  initial={false}
                  animate={{
                    // --- 3. FORCE STATIC LAYOUT ON MOBILE ---

                    // Width: Full width on mobile, Calculated % on desktop
                    flexBasis: isMobile ? "100%" : isTopRow ? "40%" : "30%",

                    // Grow: No growing on mobile
                    flexGrow: isMobile ? 1 : isHovered ? 2 : 1,

                    // Height: Auto on mobile (fit content), fixed heights on desktop
                    height: isMobile
                      ? "auto"
                      : isHovered
                      ? 500
                      : isDimmed
                      ? 300
                      : 400,

                    // Opacity/Dimming: Disable dimming on mobile
                    opacity: isMobile ? 1 : isDimmed ? 0.5 : 1,

                    borderColor:
                      isHovered && !isMobile
                        ? "var(--secondary)"
                        : "var(--border-color)",
                    backgroundColor:
                      isHovered && !isMobile
                        ? "var(--card-bg)"
                        : "rgba(var(--background), 0.5)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    minWidth: "280px",
                  }}
                >
                  {/* Hover Gradient (Hidden on Mobile) */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/20 to-transparent pointer-events-none"
                    animate={{ opacity: isHovered && !isMobile ? 1 : 0 }}
                  />

                  <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between min-w-[300px]">
                    {/* Top: Icon + ID */}
                    <div className="flex justify-between items-start mb-6">
                      <motion.div
                        layout="position"
                        className="rounded-2xl flex items-center justify-center border"
                        animate={{
                          // Static icon size on mobile
                          width: isMobile ? 60 : isHovered ? 70 : 50,
                          height: isMobile ? 60 : isHovered ? 70 : 50,
                          backgroundColor:
                            isHovered && !isMobile
                              ? "var(--secondary)"
                              : "transparent",
                          color:
                            isHovered && !isMobile
                              ? "#fff"
                              : "var(--foreground-muted)",
                        }}
                      >
                        <div className="p-2 w-full h-full">{step.icon}</div>
                      </motion.div>

                      <motion.span
                        layout="position"
                        className="font-mono font-bold text-[var(--foreground)]/10"
                        animate={{
                          // Static font size on mobile
                          fontSize: isMobile
                            ? "3rem"
                            : isHovered
                            ? "4rem"
                            : "2.5rem",
                        }}
                      >
                        {step.id}
                      </motion.span>
                    </div>

                    {/* Bottom: Text */}
                    <div className="flex flex-col justify-end">
                      <motion.h3
                        layout="position"
                        className="font-bold leading-tight text-[var(--foreground)] mb-3"
                        animate={{
                          fontSize: isMobile
                            ? "1.75rem"
                            : isHovered
                            ? "2.5rem"
                            : "1.5rem",
                          color:
                            isDimmed && !isMobile
                              ? "var(--foreground-muted)"
                              : "var(--foreground)",
                        }}
                      >
                        {step.title}
                      </motion.h3>

                      <motion.div
                        className="overflow-hidden"
                        animate={{
                          // Always show description on mobile
                          height: isMobile
                            ? "auto"
                            : isHovered
                            ? "auto"
                            : isDimmed
                            ? 0
                            : "auto",
                          opacity: isMobile ? 1 : isDimmed ? 0 : 1,
                        }}
                      >
                        <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default ProcessSection;
