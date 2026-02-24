
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useSearchParams } from "next/navigation";
// import {
//   Send,
//   MessageSquare,
//   Briefcase,
//   User,
//   Mail,
//   MapPin,
//   Clock,
//   Globe,
//   Layers,
//   ArrowDown
// } from "lucide-react";

// import { ref, onValue, push, serverTimestamp } from "firebase/database";
// import { database } from "../../lib/firebase";

// // --- UPDATED SERVICE DATA ---
// const SERVICES_DATA = [
//   {
//     id: "ai",
//     title: "AI Solutions & Automation",
//     subServices: [
//       "AI model integration", "Workflow automation", "Chatbots and copilots", "Predictive analytics", "Intelligent dashboards"
//     ],
//   },
//   {
//     id: "security",
//     title: "Cybersecurity Services",
//     subServices: [
//       "Penetration testing", "Vulnerability assessments", "Threat monitoring", "Security audits", "Compliance support (ISO, SOC)"
//     ],
//   },
//   {
//     id: "dev",
//     title: "Custom Software Development",
//     subServices: [
//       "SaaS development", "MVP development", "API integrations", "Cloud-native applications", "System modernization"
//     ],
//   },
//   // --- NEW "OTHERS" CATEGORY ADDED HERE ---
//   {
//     id: "others",
//     title: "Other Capabilities",
//     subServices: [
//       "DevOps & Cloud Security",
//       "Data Engineering",
//       "System Architecture",
//       "Performance Optimization",
//       "Technical Advisory"
//     ],
//   },
// ];

// const ContactSection = () => {
//   const searchParams = useSearchParams();
//   const [contactData, setContactData] = useState(null);
//   const [loading, setLoading] = useState(true);
  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     coreService: "",
//     subService: "",
//     message: ""
//   });
  
//   const [submissionStatus, setSubmissionStatus] = useState("");

//   // --- 1. FETCH DATA FROM FIREBASE ---
//   useEffect(() => {
//     const contactRef = ref(database, "contactSection");
//     const unsubscribe = onValue(contactRef, (snapshot) => {
//       if (snapshot.exists()) {
//         setContactData(snapshot.val());
//       } else {
//         setContactData({
//             formContent: {
//                 heading: "Get in Touch",
//                 subHeading: "Let's build something great.",
//                 submitButtonText: "Send Message",
//                 successMessage: "Message sent!"
//             }
//         });
//       }
//       setLoading(false);
//     }, (error) => {
//       console.error("Firebase error:", error);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   // --- 2. HANDLE URL PARAMS & AUTO-SELECT ---
//   useEffect(() => {
//     const serviceParam = searchParams.get("service");
//     const subParam = searchParams.get("sub");

//     if (serviceParam) {
//       // Validate that the service exists in our data
//       const isValidService = SERVICES_DATA.some(s => s.id === serviceParam);
//       if (isValidService) {
//         setFormData(prev => ({
//           ...prev,
//           coreService: serviceParam,
//           subService: subParam || ""
//         }));
//       }
//     }
//   }, [searchParams]);

//   // --- 3. HANDLE INPUT ---
//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     if (name === "coreService") {
//         setFormData({ ...formData, coreService: value, subService: "" });
//     } else {
//         setFormData({ ...formData, [name]: value });
//     }
//   };

//   // --- 4. HANDLE SUBMIT ---
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmissionStatus("submitting");

//     if (!formData.name || !formData.email || !formData.message) {
//       setSubmissionStatus("error");
//       setTimeout(() => setSubmissionStatus(""), 5000);
//       return;
//     }

//     try {
//       const inquiriesRef = ref(database, "inquiries");
//       await push(inquiriesRef, {
//         ...formData,
//         timestamp: serverTimestamp(),
//         status: "new",
//       });

//       setSubmissionStatus("success");
//       setFormData({ name: "", email: "", company: "", coreService: "", subService: "", message: "" });
//       setTimeout(() => setSubmissionStatus(""), 5000);
//     } catch (error) {
//       console.error("Error submitting form: ", error);
//       setSubmissionStatus("error");
//       setTimeout(() => setSubmissionStatus(""), 5000);
//     }
//   };

//   const currentSubServices = SERVICES_DATA.find(s => s.id === formData.coreService)?.subServices || [];

//   if (loading) {
//     return (
//       <section className="bg-[var(--background)] min-h-screen flex items-center justify-center">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-8 h-8 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
//           <p className="text-[var(--foreground-muted)]">Loading...</p>
//         </div>
//       </section>
//     );
//   }

//   const { formContent } = contactData || {};

//   return (
//     <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
//       <div className="max-w-4xl mx-auto">
        
//         <div className="mb-10 text-center md:text-left">
//           <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
//             {formContent?.heading || "Contact Us"}
//           </h1>
//           <p className="text-[var(--foreground-muted)] text-lg">
//             {formContent?.subHeading || "We'd love to hear from you."}
//           </p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm mb-12"
//         >
//           <div className="h-1 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />

//           <form onSubmit={handleSubmit} className="p-8 md:p-10">
            
//             {submissionStatus === "success" && (
//                 <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 font-medium text-center">
//                     {formContent?.successMessage || "Message Sent Successfully!"}
//                 </div>
//             )}
//             {submissionStatus === "error" && (
//                 <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 font-medium text-center">
//                     Something went wrong. Please try again.
//                 </div>
//             )}

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
//                 </div>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
//                   placeholder="Work Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="relative group md:col-span-2">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Briefcase className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
//                 </div>
//                 <input
//                   type="text"
//                   name="company"
//                   className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
//                   placeholder="Company Name"
//                   value={formData.company}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* CORE SERVICE DROPDOWN */}
//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Layers className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
//                 </div>
//                 <div className="relative">
//                     <select
//                         name="coreService"
//                         value={formData.coreService}
//                         onChange={handleChange}
//                         className="w-full pl-10 pr-10 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all appearance-none cursor-pointer"
//                     >
//                         <option value="" disabled>Select Core Service</option>
//                         {SERVICES_DATA.map((service) => (
//                             <option key={service.id} value={service.id}>
//                                 {service.title}
//                             </option>
//                         ))}
//                     </select>
//                     <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                         <ArrowDown className="h-4 w-4 text-[var(--foreground-muted)]" />
//                     </div>
//                 </div>
//               </div>

//               {/* SUB SERVICE DROPDOWN */}
//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Layers className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors opacity-70" />
//                 </div>
//                 <div className="relative">
//                     <select
//                         name="subService"
//                         value={formData.subService}
//                         onChange={handleChange}
//                         disabled={!formData.coreService}
//                         className={`w-full pl-10 pr-10 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all appearance-none ${!formData.coreService ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//                     >
//                         <option value="" disabled>Select Specific Service</option>
//                         {currentSubServices.map((sub, idx) => (
//                             <option key={idx} value={sub}>
//                                 {sub}
//                             </option>
//                         ))}
//                     </select>
//                     <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                         <ArrowDown className="h-4 w-4 text-[var(--foreground-muted)]" />
//                     </div>
//                 </div>
//               </div>

//               <div className="relative group md:col-span-2">
//                 <div className="absolute top-3 left-3 pointer-events-none">
//                   <MessageSquare className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
//                 </div>
//                 <textarea
//                   name="message"
//                   required
//                   rows="4"
//                   className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all resize-none"
//                   placeholder="How can we help you scale?"
//                   value={formData.message}
//                   onChange={handleChange}
//                 />
//               </div>

//             </div>

//             <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-color)]">
//               <button
//                 type="submit"
//                 disabled={submissionStatus === "submitting"}
//                 className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors duration-300 ${submissionStatus === "submitting" ? "opacity-70 cursor-wait" : ""}`}
//               >
//                 <span>{submissionStatus === "submitting" ? "Sending..." : (formContent?.submitButtonText || "Send Message")}</span>
//                 <Send className="w-4 h-4" />
//               </button>
//             </div>

//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

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
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation"; // 1. Import useRouter
import { 
  Send, 
  MessageSquare, 
  Briefcase, 
  User, 
  Mail, 
  MapPin, 
  Clock, 
  Globe,
  Layers, 
  ArrowDown 
} from "lucide-react";

import { ref, onValue, push, serverTimestamp } from "firebase/database";
import { database } from "../../lib/firebase";

// --- UPDATED SERVICE DATA ---
const SERVICES_DATA = [
  {
    id: "ai",
    title: "AI Solutions & Automation",
    subServices: [
      "AI model integration", "Workflow automation", "Chatbots and copilots", "Predictive analytics", "Intelligent dashboards"
    ],
  },
  {
    id: "security",
    title: "Cybersecurity Services",
    subServices: [
      "Penetration testing", "Vulnerability assessments", "Threat monitoring", "Security audits", "Compliance support (ISO, SOC)"
    ],
  },
  {
    id: "dev",
    title: "Custom Software Development",
    subServices: [
      "SaaS development", "MVP development", "API integrations", "Cloud-native applications", "System modernization"
    ],
  },
  {
    id: "others",
    title: "Other Capabilities",
    subServices: [
      "DevOps & Cloud Security",
      "Data Engineering",
      "System Architecture",
      "Performance Optimization",
      "Technical Advisory"
    ],
  },
];

const ContactSection = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); // 2. Initialize Router
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    coreService: "", 
    subService: "",  
    message: ""
  });
  
  const [submissionStatus, setSubmissionStatus] = useState("");

  // --- 1. FETCH DATA FROM FIREBASE ---
  useEffect(() => {
    const contactRef = ref(database, "contactSection");
    const unsubscribe = onValue(contactRef, (snapshot) => {
      if (snapshot.exists()) {
        setContactData(snapshot.val());
      } else {
        setContactData({ 
            formContent: { 
                heading: "Get in Touch", 
                subHeading: "Let's build something great.", 
                submitButtonText: "Send Message",
                successMessage: "Message sent!"
            } 
        });
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase error:", error);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // --- 2. HANDLE URL PARAMS & AUTO-SELECT ---
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const subParam = searchParams.get("sub");

    if (serviceParam) {
      const isValidService = SERVICES_DATA.some(s => s.id === serviceParam);
      if (isValidService) {
        setFormData(prev => ({
          ...prev,
          coreService: serviceParam,
          subService: subParam || ""
        }));
      }
    }
  }, [searchParams]);

  // --- 3. HANDLE INPUT ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "coreService") {
        setFormData({ ...formData, coreService: value, subService: "" });
    } else {
        setFormData({ ...formData, [name]: value });
    }
  };

  // --- 4. HANDLE SUBMIT WITH REDIRECT ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus("error");
      setTimeout(() => setSubmissionStatus(""), 5000);
      return;
    }

    try {
      const inquiriesRef = ref(database, "inquiries");
      await push(inquiriesRef, {
        ...formData,
        timestamp: serverTimestamp(),
        status: "new",
      });

      setSubmissionStatus("success");
      
      // Clear form immediately
      setFormData({ name: "", email: "", company: "", coreService: "", subService: "", message: "" });
      
      // 3. EXECUTE REDIRECT FLOW
      // Redirects to the Thank You page to track conversions
      router.push("/thank-you"); 

    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmissionStatus("error");
      setTimeout(() => setSubmissionStatus(""), 5000);
    }
  };

  const currentSubServices = SERVICES_DATA.find(s => s.id === formData.coreService)?.subServices || [];

  if (loading) {
    return (
      <section className="bg-[var(--background)] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
          <p className="text-[var(--foreground-muted)]">Loading...</p>
        </div>
      </section>
    );
  }

  const { formContent } = contactData || {};

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
            {formContent?.heading || "Contact Us"}
          </h1>
          <p className="text-[var(--foreground-muted)] text-lg">
            {formContent?.subHeading || "We'd love to hear from you."}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm mb-12"
        >
          <div className="h-1 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />

          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            
            {/* Error Message Only (Success handled by redirect) */}
            {submissionStatus === "error" && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 font-medium text-center">
                    Something went wrong. Please try again.
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="relative group md:col-span-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
                </div>
                <input
                  type="text"
                  name="company"
                  className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              {/* CORE SERVICE DROPDOWN */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Layers className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
                </div>
                <div className="relative">
                    <select
                        name="coreService"
                        value={formData.coreService}
                        onChange={handleChange}
                        className="w-full pl-10 pr-10 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all appearance-none cursor-pointer"
                    >
                        <option value="" disabled>Select Core Service</option>
                        {SERVICES_DATA.map((service) => (
                            <option key={service.id} value={service.id}>
                                {service.title}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ArrowDown className="h-4 w-4 text-[var(--foreground-muted)]" />
                    </div>
                </div>
              </div>

              {/* SUB SERVICE DROPDOWN */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Layers className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors opacity-70" />
                </div>
                <div className="relative">
                    <select
                        name="subService"
                        value={formData.subService}
                        onChange={handleChange}
                        disabled={!formData.coreService}
                        className={`w-full pl-10 pr-10 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all appearance-none ${!formData.coreService ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <option value="" disabled>Select Specific Service</option>
                        {currentSubServices.map((sub, idx) => (
                            <option key={idx} value={sub}>
                                {sub}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ArrowDown className="h-4 w-4 text-[var(--foreground-muted)]" />
                    </div>
                </div>
              </div>

              <div className="relative group md:col-span-2">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
                </div>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all resize-none"
                  placeholder="How can we help you scale?"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-color)]">
              <button
                type="submit"
                disabled={submissionStatus === "submitting"}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors duration-300 ${submissionStatus === "submitting" ? "opacity-70 cursor-wait" : ""}`}
              >
                <span>{submissionStatus === "submitting" ? "Sending..." : (formContent?.submitButtonText || "Send Message")}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;