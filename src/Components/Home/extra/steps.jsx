// // "use client";

// // import React, { useEffect, useRef } from "react";

// // const Steps = () => {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     const scriptId = "fluid-sim-script";
// //     let script = document.getElementById(scriptId);

// //     if (!script) {
// //       script = document.createElement("script");
// //       script.id = scriptId;
// //       script.src = "/fluid.js";
// //       script.async = true;

// //       document.body.appendChild(script);

// //       script.onload = () => {
// //         console.log("Fluid simulation loaded successfully");
// //       };

// //       script.onerror = () => {
// //         console.error("Failed to load fluid.js");
// //       };
// //     }
// //   }, []);

// //   const stepsData = [
// //     {
// //       title: "Free Consultation",
// //       description:
// //         "Get expert guidance to make informed decisions — no cost, no obligation.",
// //     },
// //     {
// //       title: "Instant Chat Support",
// //       description:
// //         "Connect with us instantly to explore solutions and get your questions answered.",
// //     },
// //     {
// //       title: "Wireframe & Development",
// //       description:
// //         "Turn your ideas into structured designs and experience a functional preview.",
// //     },
// //     {
// //       title: "Launch & Support",
// //       description:
// //         "Go live with confidence and enjoy continuous support to ensure lasting success.",
// //     },
// //   ];

// //   return (
// //     <section
// //       ref={containerRef}
// //       /* FIX 1: Removed overflow-hidden so content can scroll if it gets too tall */
// //       className="relative min-h-screen w-full bg-[#050011] text-white"
// //     >
// //       <canvas
// //         id="fluid-canvas"
// //         style={{
// //           position: "absolute",
// //           top: 0,
// //           left: 0,
// //           width: "100%",
// //           height: "100%",
// //         }}
// //         className="z-0 opacity-80 fixed"
// //         /* Added 'fixed' above so the fluid background stays put while you scroll */
// //       />

// //       <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#0f0529]/80 via-transparent to-[#050b29]/80 pointer-events-none fixed"></div>

// //       {/* ================================================================
// //           MAIN CONTENT
// //           ================================================================
// //       */}
// //       {/* FIX 2: Changed h-screen to min-h-screen so it can grow on mobile.
// //           Added py-20 for breathing room on mobile vertical stacking.
// //       */}
// //       <div className="relative w-full min-h-screen z-10 flex flex-col justify-center pointer-events-none py-20 md:py-0">
// //         {/* Central Hub */}
// //         {/* FIX 3: On mobile, we might need relative positioning if the grid gets huge,
// //             but absolute centered works if the parent grows.
// //             We keep it simple but ensure z-index is correct.
// //         */}
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-72 md:w-80 pointer-events-auto">
// //           <div className="bg-[#0A0118]/90 backdrop-blur-md border border-white/10 shadow-[0_0_80px_rgba(100,100,255,0.15)] rounded-2xl p-8 text-center transition-all duration-500 ">
// //             <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-blue-300 drop-shadow-sm">
// //               From Vision <br /> to Success
// //             </h2>
// //             <p className="text-blue-200/60 text-xs mt-2 font-light tracking-wide">
// //               ELEVATE YOUR DIGITAL PRESENCE
// //             </p>
// //             <a
// //               href="https://calendar.app.google/z5GZpzeNAPNfvqHE7"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="mt-6 block w-full py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-semibold tracking-wide shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300"
// //             >
// //               Start Now
// //             </a>
// //           </div>
// //         </div>

// //         {/* The Grid */}
// //         {/* FIX 4: Removed h-full. Let the grid take the natural height of its content. */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 w-full md:h-full pointer-events-none">
// //           {stepsData.map((step, index) => {
// //             let borderClasses = "border-white/5 ";
// //             if (index === 0) borderClasses += "border-b md:border-r";
// //             else if (index === 1) borderClasses += "border-b";
// //             else if (index === 2)
// //               borderClasses += "border-b md:border-b-0 md:border-r";

// //             const alignmentClasses =
// //               index % 2 === 0
// //                 ? "md:items-start md:text-left pl-8 md:pl-24"
// //                 : "md:items-end md:text-right pr-8 md:pr-24";

// //             return (
// //               <div
// //                 key={index}
// //                 /* Added min-h-[300px] to ensure cells have space on mobile */
// //                 className={`p-8 ${borderClasses} flex flex-col justify-center items-center ${alignmentClasses} relative overflow-hidden transition-all duration-500 pointer-events-auto min-h-[300px] md:min-h-0`}
// //               >
// //                 <h3 className="text-3xl font-light mb-4 text-white transition-colors duration-300 z-10">
// //                   {step.title}
// //                 </h3>
// //                 <p className="text-blue-100/40 text-lg leading-relaxed max-w-sm z-10 font-light">
// //                   {step.description}
// //                 </p>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Steps;

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// "use client";

// import React, { useEffect, useRef } from "react";

// const Steps = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const scriptId = "fluid-sim-script";
//     let script = document.getElementById(scriptId);

//     if (!script) {
//       script = document.createElement("script");
//       script.id = scriptId;
//       script.src = "/fluid.js";
//       script.async = true;

//       document.body.appendChild(script);

//       script.onload = () => {
//         console.log("Fluid simulation loaded successfully");
//       };

//       script.onerror = () => {
//         console.error("Failed to load fluid.js");
//       };
//     }
//   }, []);

//   const stepsData = [
//     {
//       title: "Free Consultation",
//       description:
//         "Get expert guidance to make informed decisions — no cost, no obligation.",
//     },
//     {
//       title: "Instant Chat Support",
//       description:
//         "Connect with us instantly to explore solutions and get your questions answered.",
//     },
//     {
//       title: "Wireframe & Development",
//       description:
//         "Turn your ideas into structured designs and experience a functional preview.",
//     },
//     {
//       title: "Launch & Support",
//       description:
//         "Go live with confidence and enjoy continuous support to ensure lasting success.",
//     },
//   ];

//   return (
//     <section
//       ref={containerRef}
//       /* UPDATED: Background and text colors use variables */
//       className="relative min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
//     >
//       <canvas
//         id="fluid-canvas"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//         }}
//         /* Note: In light mode, the fluid canvas might need an invert filter if it's purely white particles.
//            If needed, add: className="... dark:invert-0 invert" */
//         className="z-0 opacity-80 fixed"
//       />

//       {/* UPDATED: Gradient overlay uses variables defined in globals.css */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[var(--overlay-gradient-start)] via-transparent to-[var(--overlay-gradient-end)] pointer-events-none fixed"></div>

//       {/* ================================================================
//           MAIN CONTENT
//           ================================================================
//       */}
//       <div className="relative w-full min-h-screen z-10 flex flex-col justify-center pointer-events-none py-20 md:py-0">
//         {/* Central Hub */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-72 md:w-80 pointer-events-auto">
//           {/* UPDATED: Card background and border use variables */}
//           <div className="bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--border-color)] shadow-[0_0_80px_rgba(100,100,255,0.15)] rounded-2xl p-8 text-center transition-all duration-500 ">
//             <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[var(--foreground)] via-blue-400 to-blue-600 drop-shadow-sm">
//               From Vision <br /> to Success
//             </h2>
//             {/* UPDATED: Subtitle color */}
//             <p className="text-[var(--foreground-muted)] text-xs mt-2 font-light tracking-wide">
//               ELEVATE YOUR DIGITAL PRESENCE
//             </p>
//             <a
//               href="https://calendar.app.google/z5GZpzeNAPNfvqHE7"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-6 block w-full py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-semibold tracking-wide shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300"
//             >
//               Start Now
//             </a>
//           </div>
//         </div>

//         {/* The Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 w-full md:h-full pointer-events-none">
//           {stepsData.map((step, index) => {
//             // UPDATED: Border logic uses border-color variable via style or class replacement
//             // We use inline styling logic for borders to keep the conditional logic clean with Tailwind classes
//             let borderClasses = "border-[var(--border-color)] ";
//             if (index === 0) borderClasses += "border-b md:border-r";
//             else if (index === 1) borderClasses += "border-b";
//             else if (index === 2)
//               borderClasses += "border-b md:border-b-0 md:border-r";

//             const alignmentClasses =
//               index % 2 === 0
//                 ? "md:items-start md:text-left pl-8 md:pl-24"
//                 : "md:items-end md:text-right pr-8 md:pr-24";

//             return (
//               <div
//                 key={index}
//                 className={`p-8 ${borderClasses} flex flex-col justify-center items-center ${alignmentClasses} relative overflow-hidden transition-all duration-500 pointer-events-auto min-h-[300px] md:min-h-0`}
//               >
//                 {/* UPDATED: Title color */}
//                 <h3 className="text-3xl font-light mb-4 text-[var(--foreground)] transition-colors duration-300 z-10">
//                   {step.title}
//                 </h3>
//                 {/* UPDATED: Description color */}
//                 <p className="text-[var(--foreground-muted)] text-lg leading-relaxed max-w-sm z-10 font-light">
//                   {step.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Steps;

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
// "use client";

// import React, { useEffect, useRef } from "react";

// const Steps = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const scriptId = "fluid-sim-script";
//     let script = document.getElementById(scriptId);

//     if (!script) {
//       script = document.createElement("script");
//       script.id = scriptId;
//       script.src = "/fluid.js";
//       script.async = true;

//       document.body.appendChild(script);

//       script.onload = () => {
//         console.log("Fluid simulation loaded successfully");
//       };

//       script.onerror = () => {
//         console.error("Failed to load fluid.js");
//       };
//     }
//   }, []);

//   const stepsData = [
//     {
//       title: "Free Consultation",
//       description:
//         "Get expert guidance to make informed decisions — no cost, no obligation.",
//     },
//     {
//       title: "Instant Chat Support",
//       description:
//         "Connect with us instantly to explore solutions and get your questions answered.",
//     },
//     {
//       title: "Wireframe & Development",
//       description:
//         "Turn your ideas into structured designs and experience a functional preview.",
//     },
//     {
//       title: "Launch & Support",
//       description:
//         "Go live with confidence and enjoy continuous support to ensure lasting success.",
//     },
//   ];

//   return (
//     <section
//       ref={containerRef}
//       /* UPDATED: Background and text colors use variables */
//       className="relative min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
//     >
//       <canvas
//         id="fluid-canvas"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           // UPDATED: Filter variable ensures visibility in both modes
//           filter: "var(--canvas-filter)",
//         }}
//         className="z-0 opacity-80 fixed transition-[filter] duration-300"
//       />

//       {/* UPDATED: Gradient overlay uses variables */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[var(--overlay-gradient-start)] via-transparent to-[var(--overlay-gradient-end)] pointer-events-none fixed"></div>

//       {/* ================================================================
//           MAIN CONTENT
//           ================================================================
//       */}
//       <div className="relative w-full min-h-screen z-10 flex flex-col justify-center pointer-events-none py-20 md:py-0">
//         {/* Central Hub */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-72 md:w-80 pointer-events-auto">
//           {/* UPDATED: Card background and border use variables */}
//           <div className="bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--border-color)] shadow-[0_0_80px_rgba(100,100,255,0.15)] rounded-2xl p-8 text-center transition-all duration-500 ">
//             {/* UPDATED: Title Gradient uses foreground variable */}
//             <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[var(--foreground)] via-blue-400 to-blue-600 drop-shadow-sm">
//               From Vision <br /> to Success
//             </h2>
//             {/* UPDATED: Subtitle color */}
//             <p className="text-[var(--foreground-muted)] text-xs mt-2 font-light tracking-wide">
//               ELEVATE YOUR DIGITAL PRESENCE
//             </p>
//             <a
//               href="https://calendar.app.google/z5GZpzeNAPNfvqHE7"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-6 block w-full py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-semibold tracking-wide shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300"
//             >
//               Start Now
//             </a>
//           </div>
//         </div>

//         {/* The Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 w-full md:h-full pointer-events-none">
//           {stepsData.map((step, index) => {
//             // UPDATED: Border logic uses border-color variable
//             let borderClasses = "border-[var(--border-color)] ";
//             if (index === 0) borderClasses += "border-b md:border-r";
//             else if (index === 1) borderClasses += "border-b";
//             else if (index === 2)
//               borderClasses += "border-b md:border-b-0 md:border-r";

//             const alignmentClasses =
//               index % 2 === 0
//                 ? "md:items-start md:text-left pl-8 md:pl-24"
//                 : "md:items-end md:text-right pr-8 md:pr-24";

//             return (
//               <div
//                 key={index}
//                 className={`p-8 ${borderClasses} flex flex-col justify-center items-center ${alignmentClasses} relative overflow-hidden transition-all duration-500 pointer-events-auto min-h-[300px] md:min-h-0`}
//               >
//                 {/* UPDATED: Title color */}
//                 <h3 className="text-3xl font-light mb-4 text-[var(--foreground)] transition-colors duration-300 z-10">
//                   {step.title}
//                 </h3>
//                 {/* UPDATED: Description color */}
//                 <p className="text-[var(--foreground-muted)] text-lg leading-relaxed max-w-sm z-10 font-light">
//                   {step.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Steps;

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
"use client";

import React, { useEffect, useRef } from "react";

const Steps = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptId = "fluid-sim-script";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "/fluid.js";
      script.async = true;

      document.body.appendChild(script);

      script.onload = () => {
        console.log("Fluid simulation loaded successfully");
      };

      script.onerror = () => {
        console.error("Failed to load fluid.js");
      };
    }
  }, []);

  const stepsData = [
    {
      title: "Free Consultation",
      description:
        "Get expert guidance to make informed decisions — no cost, no obligation.",
    },
    {
      title: "Instant Chat Support",
      description:
        "Connect with us instantly to explore solutions and get your questions answered.",
    },
    {
      title: "Wireframe & Development",
      description:
        "Turn your ideas into structured designs and experience a functional preview.",
    },
    {
      title: "Launch & Support",
      description:
        "Go live with confidence and enjoy continuous support to ensure lasting success.",
    },
  ];

  return (
    <section
      ref={containerRef}
      /* UPDATED: Background and text colors use variables */
      className="relative min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      <canvas
        id="fluid-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // UPDATED: Filter variable ensures visibility in both modes
          filter: "var(--canvas-filter)",
        }}
        className="z-0 opacity-80 fixed transition-[filter] duration-300"
      />

      {/* UPDATED: Gradient overlay uses variables */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[var(--overlay-gradient-start)] via-transparent to-[var(--overlay-gradient-end)] pointer-events-none fixed"></div>

      {/* ================================================================
          MAIN CONTENT
          ================================================================
      */}
      <div className="relative w-full min-h-screen z-10 flex flex-col justify-center pointer-events-none py-20 md:py-0">
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-72 md:w-80 pointer-events-auto">
          {/* UPDATED: Card background and border use variables */}
          <div className="bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--border-color)] shadow-[0_0_80px_rgba(100,100,255,0.15)] rounded-2xl p-8 text-center transition-all duration-500 ">
            {/* UPDATED: Title Gradient uses foreground variable */}
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[var(--foreground)] via-blue-400 to-blue-600 drop-shadow-sm">
              From Vision <br /> to Success
            </h2>
            {/* UPDATED: Subtitle color */}
            <p className="text-[var(--foreground-muted)] text-xs mt-2 font-light tracking-wide">
              ELEVATE YOUR DIGITAL PRESENCE
            </p>
            <a
              href="https://calendar.app.google/z5GZpzeNAPNfvqHE7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-semibold tracking-wide shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              Start Now
            </a>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:h-full pointer-events-none">
          {stepsData.map((step, index) => {
            // UPDATED: Border logic uses border-color variable
            let borderClasses = "border-[var(--border-color)] ";
            if (index === 0) borderClasses += "border-b md:border-r";
            else if (index === 1) borderClasses += "border-b";
            else if (index === 2)
              borderClasses += "border-b md:border-b-0 md:border-r";

            const alignmentClasses =
              index % 2 === 0
                ? "md:items-start md:text-left pl-8 md:pl-24"
                : "md:items-end md:text-right pr-8 md:pr-24";

            return (
              <div
                key={index}
                className={`p-8 ${borderClasses} flex flex-col justify-center items-center ${alignmentClasses} relative overflow-hidden transition-all duration-500 pointer-events-auto min-h-[300px] md:min-h-0`}
              >
                {/* UPDATED: Title color */}
                <h3 className="text-3xl font-light mb-4 text-[var(--foreground)] transition-colors duration-300 z-10">
                  {step.title}
                </h3>
                {/* UPDATED: Description color */}
                <p className="text-[var(--foreground-muted)] text-lg leading-relaxed max-w-sm z-10 font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
