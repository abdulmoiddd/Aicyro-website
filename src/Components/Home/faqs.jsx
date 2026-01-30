// import React, { useState } from "react";
// import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

// // Data for the FAQ accordion
// const faqData = [
//   {
//     id: 1,
//     question: "01. What services does Aicyro Solutions offer?",
//     answer:
//       "Aicyro Solutions offers comprehensive services across AI development, advanced cybersecurity solutions, custom web application development, and cutting-edge mobile solutions (iOS/Android).",
//   },
//   {
//     id: 2,
//     question: "02. How can Aicyro Solutions help my business?",
//     answer:
//       "We empower your business with smarter automation, stronger security, and innovative digital experiences that drive growth and efficiency.",
//   },
//   {
//     id: 3,
//     question: "03. Is there a free consultation available?",
//     answer:
//       "Yes, we offer a free initial consultation to understand your business needs, discuss potential solutions, and provide a tailored project estimate.",
//   },
//   {
//     id: 4,
//     question: "04. Can I customize services according to my business needs?",
//     answer:
//       "Absolutely. All our services are highly customizable. We work closely with you to tailor our solutions to meet your specific operational and strategic requirements.",
//   },
//   {
//     id: 5,
//     question: "05. How does Aicyro Solutions ensure quality?",
//     answer:
//       "Quality is ensured through rigorous testing protocols, adherence to industry best practices, continuous integration/continuous deployment (CI/CD), and expert oversight at every phase of the project.",
//   },
//   {
//     id: 6,
//     question: "06. What industries do you work with?",
//     answer:
//       "We serve a diverse range of industries, including Fintech, Healthcare, E-commerce, Manufacturing, and Logistics, among others.",
//   },
//   {
//     id: 7,
//     question: "07. How long does it take to see results?",
//     answer:
//       "Timelines vary by project, but many of our clients begin to see measurable improvements within weeks of implementation.",
//   },
//   {
//     id: 8,
//     question: "08. Do you provide ongoing support?",
//     answer:
//       "Yes, we provide continuous support, maintenance, and upgrades to ensure your solutions stay future-ready.",
//   },
//   {
//     id: 9,
//     question: "09. How can I get started with Aicyro Solutions?",
//     answer:
//       "Simply contact us for a free consultation — our team will guide you step by step.",
//   },
//   {
//     id: 10,
//     question: "10. What makes Aicyro Solutions different?",
//     answer:
//       "Our unique blend of AI innovation, robust cybersecurity, and full-stack digital expertise sets us apart — making us your trusted technology partner.",
//   },
// ];

// const Faqs = () => {
//   // State to manage the open/closed status of the accordion items
//   const [openId, setOpenId] = useState(1); // Start with Q1 open

//   const toggleAccordion = (id) => {
//     setOpenId(openId === id ? null : id);
//   };

//   return (
//     <section className="bg-[#0A0117] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
//       {/* --- CUSTOM SCROLLBAR STYLES ---
//          This style block creates the attractive thin purple scrollbar
//       */}
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #1b1724;
//           border-radius: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #5b86d3;
//           border-radius: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #7873da;
//         }
//       `}</style>

//       {/* Grid container */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
//         {/* === Left Column: Heading and Contact Button === */}
//         <div className="lg:col-span-1 pt-0 lg:pt-10 h-full flex flex-col">
//           <h2 className="text-3xl sm:text-4xl font-semibold mb-6 leading-tight sticky top-10">
//             Still Have Questions?
//             <p className="text-sm sm:text-base text-gray-400 mt-6 font-normal max-w-sm">
//               Find answers to the most common questions about our AI,
//               Cybersecurity, Web, and Mobile Solutions.
//             </p>
//             <button
//               onClick={() => (window.location.href = "/contact")}
//               className="mt-8 bg-gradient-to-r from-[#7873DA] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7873DA] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center space-x-2 text-sm w-full sm:w-auto justify-center"
//             >
//               <span>CONTACT US</span>
//               <ExternalLink className="w-5 h-5" />
//             </button>
//           </h2>
//         </div>

//         {/* === Right Column: Scrollable Accordion List === */}
//         <div className="lg:col-span-2">
//           {/* Scrollable Container
//              - h-[600px]: Sets a fixed height
//              - overflow-y-auto: Enables vertical scrolling
//              - pr-4: Adds padding so content doesn't touch the scrollbar
//              - custom-scrollbar: Applies our CSS styles
//           */}
//           <div className="h-[600px] overflow-y-auto pr-2 sm:pr-4 custom-scrollbar space-y-4">
//             {faqData.map((item) => {
//               const isOpen = item.id === openId;
//               const bgColor = isOpen ? "bg-[#2B2338]" : "bg-[#1B1724]";

//               return (
//                 <div
//                   key={item.id}
//                   className={`${bgColor} p-4 sm:p-6 rounded-xl transition-all duration-300 shadow-xl border border-transparent ${
//                     isOpen ? "border-[#7B71DB]" : "hover:border-[#7B71DB]/30"
//                   }`}
//                 >
//                   {/* Accordion Header */}
//                   <button
//                     onClick={() => toggleAccordion(item.id)}
//                     className="w-full flex justify-between items-start text-left focus:outline-none py-1"
//                   >
//                     <span className="text-base sm:text-lg font-semibold pr-4 leading-relaxed">
//                       {item.question}
//                     </span>

//                     <span className="transform transition-transform duration-300 text-[#7B71DB] flex-shrink-0 mt-0.5">
//                       {isOpen ? (
//                         <ChevronUp className="w-6 h-6" />
//                       ) : (
//                         <ChevronDown className="w-6 h-6" />
//                       )}
//                     </span>
//                   </button>

//                   {/* Accordion Content */}
//                   <div
//                     className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                       isOpen
//                         ? "max-h-[300px] opacity-100 pt-3"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <p className="text-sm sm:text-base text-gray-300 pl-4 border-l border-[#7B71DB]/50 leading-relaxed">
//                       {item.answer}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faqs;

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
import React, { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

// Data for the FAQ accordion
const faqData = [
  {
    id: 1,
    question: "01. What services does Aicyro Solutions offer?",
    answer:
      "Aicyro Solutions offers comprehensive services across AI development, advanced cybersecurity solutions, custom web application development, and cutting-edge mobile solutions (iOS/Android).",
  },
  {
    id: 2,
    question: "02. How can Aicyro Solutions help my business?",
    answer:
      "We empower your business with smarter automation, stronger security, and innovative digital experiences that drive growth and efficiency.",
  },
  {
    id: 3,
    question: "03. Is there a free consultation available?",
    answer:
      "Yes, we offer a free initial consultation to understand your business needs, discuss potential solutions, and provide a tailored project estimate.",
  },
  {
    id: 4,
    question: "04. Can I customize services according to my business needs?",
    answer:
      "Absolutely. All our services are highly customizable. We work closely with you to tailor our solutions to meet your specific operational and strategic requirements.",
  },
  {
    id: 5,
    question: "05. How does Aicyro Solutions ensure quality?",
    answer:
      "Quality is ensured through rigorous testing protocols, adherence to industry best practices, continuous integration/continuous deployment (CI/CD), and expert oversight at every phase of the project.",
  },
  {
    id: 6,
    question: "06. What industries do you work with?",
    answer:
      "We serve a diverse range of industries, including Fintech, Healthcare, E-commerce, Manufacturing, and Logistics, among others.",
  },
  {
    id: 7,
    question: "07. How long does it take to see results?",
    answer:
      "Timelines vary by project, but many of our clients begin to see measurable improvements within weeks of implementation.",
  },
  {
    id: 8,
    question: "08. Do you provide ongoing support?",
    answer:
      "Yes, we provide continuous support, maintenance, and upgrades to ensure your solutions stay future-ready.",
  },
  {
    id: 9,
    question: "09. How can I get started with Aicyro Solutions?",
    answer:
      "Simply contact us for a free consultation — our team will guide you step by step.",
  },
  {
    id: 10,
    question: "10. What makes Aicyro Solutions different?",
    answer:
      "Our unique blend of AI innovation, robust cybersecurity, and full-stack digital expertise sets us apart — making us your trusted technology partner.",
  },
];

const Faqs = () => {
  // State to manage the open/closed status of the accordion items
  const [openId, setOpenId] = useState(1); // Start with Q1 open

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    // UPDATED: Background and Text color variables
    <section className="bg-[var(--background)] text-[var(--foreground)] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      {/* --- CUSTOM SCROLLBAR STYLES --- 
          Updated to use CSS variables for theme support
      */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--scrollbar-track);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--scrollbar-thumb);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--secondary);
        }
      `}</style>

      {/* Grid container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
        {/* === Left Column: Heading and Contact Button === */}
        <div className="lg:col-span-1 pt-0 lg:pt-10 h-full flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 leading-tight sticky top-10">
            Still Have Questions?
            {/* UPDATED: Subtext color */}
            <p className="text-sm sm:text-base text-[var(--foreground-muted)] mt-6 font-normal max-w-sm">
              Find answers to the most common questions about our AI,
              Cybersecurity, Web, and Mobile Solutions.
            </p>
            <button
              onClick={() => (window.location.href = "/contact")}
              // UPDATED: Gradient uses variables (Assuming specific blue/purple wanted, but adapting hover)
              className="mt-8 bg-gradient-to-r from-[#7873DA] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7873DA] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 inline-flex items-center space-x-2 text-sm w-full sm:w-auto justify-center"
            >
              <span>CONTACT US</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </h2>
        </div>

        {/* === Right Column: Scrollable Accordion List === */}
        <div className="lg:col-span-2">
          {/* Scrollable Container */}
          <div className="h-[600px] overflow-y-auto pr-2 sm:pr-4 custom-scrollbar space-y-4">
            {faqData.map((item) => {
              const isOpen = item.id === openId;
              // UPDATED: Background Logic uses variables
              const bgColor = isOpen
                ? "bg-[var(--faq-open-bg)]"
                : "bg-[var(--faq-closed-bg)]";

              return (
                <div
                  key={item.id}
                  // UPDATED: Border color variable
                  className={`${bgColor} p-4 sm:p-6 rounded-xl transition-all duration-300 shadow-xl border border-transparent ${
                    isOpen
                      ? "border-[var(--secondary)]"
                      : "hover:border-[var(--secondary)]/30"
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex justify-between items-start text-left focus:outline-none py-1"
                  >
                    <span className="text-base sm:text-lg font-semibold pr-4 leading-relaxed">
                      {item.question}
                    </span>

                    {/* UPDATED: Icon color */}
                    <span className="transform transition-transform duration-300 text-[var(--secondary)] flex-shrink-0 mt-0.5">
                      {isOpen ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "max-h-[300px] opacity-100 pt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {/* UPDATED: Text color and Border color */}
                    <p className="text-sm sm:text-base text-[var(--foreground-muted)] pl-4 border-l border-[var(--secondary)]/50 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
