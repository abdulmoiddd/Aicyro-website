import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle,
  Download,
  Lock,
  Activity,
  PieChart,
} from "lucide-react";
import Navbar from "../../Components/Essntials/Navbar";
import Footer from "../../Components/Essntials/footer";

// Firebase
import { ref, push, serverTimestamp } from "firebase/database";
import { database } from "../../lib/firebase12";

// Next.js dynamic import for client-side only rendering of PDF components
import dynamic from "next/dynamic";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false },
);

// --- Expanded Multi-Page PDF Styles ---
const pdfStyles = StyleSheet.create({
  page: { padding: 40, backgroundColor: "#f8fafc", fontFamily: "Helvetica" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderBottom: "3px solid #2563eb",
    paddingBottom: 15,
  },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoImage: { width: 35, height: 35, marginRight: 10 },
  logoText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f172a",
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 11,
    color: "#3b82f6",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
  },
  subtitle: { fontSize: 12, color: "#64748b", marginBottom: 25 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 12,
    marginTop: 15,
    borderLeft: "4px solid #3b82f6",
    paddingLeft: 8,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    border: "1px solid #cbd5e1",
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 11,
    color: "#475569",
    marginBottom: 8,
    lineHeight: 1.5,
  },
  listItem: {
    fontSize: 11,
    color: "#475569",
    marginBottom: 6,
    lineHeight: 1.5,
  },
  callout: {
    backgroundColor: "#eff6ff",
    borderLeft: "4px solid #3b82f6",
    padding: 12,
    marginBottom: 15,
  },
  calloutText: {
    fontSize: 11,
    color: "#1e40af",
    fontWeight: "bold",
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "8px 12px",
    borderRadius: 4,
    textAlign: "center",
    fontSize: 10,
    marginTop: 10,
    textDecoration: "none",
    width: 200,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 9,
    color: "#94a3b8",
    borderTop: "1px solid #cbd5e1",
    paddingTop: 10,
  },
});

// --- Expanded Interactive PDF Blueprint Component ---
const AicyroBlueprintPDF = ({ userName }) => (
  <Document>
    {/* PAGE 1 */}
    <Page size="A4" style={pdfStyles.page}>
      <View style={pdfStyles.header}>
        <View style={pdfStyles.logoContainer}>
          <Image
            src="https://via.placeholder.com/100x100.png?text=A"
            style={pdfStyles.logoImage}
          />
          <Text style={pdfStyles.logoText}>AICYRO</Text>
        </View>
        <Text style={pdfStyles.tagline}>MVP Launch Blueprint</Text>
      </View>

      <Text style={pdfStyles.title}>Blueprint for {userName || "Founder"}</Text>
      <Text style={pdfStyles.subtitle}>
        Your step-by-step framework to build, validate, and scale.
      </Text>

      <Text style={pdfStyles.sectionTitle}>
        Phase 1: Architecture & Foundations
      </Text>
      <View style={pdfStyles.card}>
        <Text style={pdfStyles.cardTitle}>Tech Stack Definition</Text>
        <Text style={pdfStyles.listItem}>
          • Frontend: React components structured for modular interfaces.
        </Text>
        <Text style={pdfStyles.listItem}>
          • Backend: Firebase database for real-time syncing and updates.
        </Text>
        <Text style={pdfStyles.listItem}>
          • State Management: Optimized hooks for seamless data flow.
        </Text>
      </View>
      <View style={pdfStyles.callout}>
        <Text style={pdfStyles.calloutText}>Crucial UX Directive:</Text>
        <Text style={pdfStyles.paragraph}>
          Do not remove the side live preview element. A continuous, real-time
          preview keeps users engaged and visually anchors the data
          transformations.
        </Text>
      </View>

      <Text style={pdfStyles.sectionTitle}>
        Phase 2: Dashboard Visuals & KPI Framework
      </Text>
      <View style={pdfStyles.card}>
        <Text style={pdfStyles.cardTitle}>Essential Data Visualizations</Text>
        <Text style={pdfStyles.listItem}>
          • KPI Cards: Top-level metrics placed prominently at the top.
        </Text>
        <Text style={pdfStyles.listItem}>
          • Trend Graphs: Line or bar charts showing performance over time.
        </Text>
        <Text style={pdfStyles.listItem}>
          • Pie Charts: Categorization breakdowns for quick snapshot insights.
        </Text>
        <Link src="https://aicyro.pro" style={pdfStyles.button}>
          Access Dashboard Specs
        </Link>
      </View>
      <Text style={pdfStyles.footer}>
        © 2026 AICYRO Solutions. Page 1 of 2.
      </Text>
    </Page>

    {/* PAGE 2 */}
    <Page size="A4" style={pdfStyles.page}>
      <View style={pdfStyles.header}>
        <Text style={pdfStyles.logoText}>AICYRO</Text>
      </View>

      <Text style={pdfStyles.sectionTitle}>
        Phase 3: Form Endpoints & Lead Routing
      </Text>
      <Text style={pdfStyles.paragraph}>
        The conversion engine relies heavily on how incoming leads are stored
        and validated.
      </Text>
      <View style={pdfStyles.card}>
        <Text style={pdfStyles.cardTitle}>Implementation & Technical Plan</Text>
        <Text style={pdfStyles.listItem}>
          • Wire application forms directly to dedicated API routes.
        </Text>
        <Text style={pdfStyles.listItem}>
          • Optimize database lead storage to ensure zero drop-off.
        </Text>
        <Text style={pdfStyles.listItem}>
          • Implement automated routing rules for incoming requests on
          aicyro.pro.
        </Text>
      </View>

      <Text style={pdfStyles.sectionTitle}>
        Phase 4: Compliance & Legal Infrastructure
      </Text>
      <View style={pdfStyles.card}>
        <Text style={pdfStyles.cardTitle}>
          Policies Validation (Effective June 8, 2026)
        </Text>
        <Text style={pdfStyles.listItem}>
          • Terms of Service: Clearly defining user agreements and platform
          liabilities.
        </Text>
        <Text style={pdfStyles.listItem}>
          • Cookie Policy: Active tracking consent mechanisms and local storage
          guidelines.
        </Text>
        <Link src="https://aicyro.pro" style={pdfStyles.button}>
          Review Live Policies
        </Link>
      </View>

      <Text style={pdfStyles.footer}>
        © 2026 AICYRO Solutions. Page 2 of 2.
      </Text>
    </Page>
  </Document>
);

// --- Main Page Component ---
const MVPBlueprint = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Founder",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const leadsRef = ref(database, "leadMagnets/mvpBlueprint");
      await push(leadsRef, {
        ...formData,
        timestamp: serverTimestamp(),
        source: "mvp-blueprint-page",
        status: "new",
      });

      fetch("/api/send-blueprint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      setLoading(false);
    } catch (error) {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const checklistItems = [
    "KPI Dashboard Mapping",
    "Firebase Schema Validation",
    "Legal Infrastructure Setup",
    "Lead Routing Checklists",
  ];

  return (
    <div className="bg-[var(--background)] min-h-screen text-[var(--foreground)]">
      <Head>
        <title>Download the MVP Launch Blueprint | Aicyro Solutions</title>
      </Head>

      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent-blue)] text-[var(--accent-blue)] text-xs font-bold uppercase mb-6 bg-[var(--accent-blue)]/10">
              <FileText size={14} />
              <span>Free Resource for Founders</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Guessing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                Start Shipping.
              </span>
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Get the ultimate <strong>MVP Launch Blueprint</strong> used to
              deploy robust components in record time.
            </p>

            <ul className="space-y-4 mb-10">
              {checklistItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Live Preview Element */}
            {/* <div className="relative w-full p-6 bg-white dark:bg-gray-900 rounded-xl border border-[var(--border-color)] shadow-inner overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]" />
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[var(--primary)] rounded-md flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                  <span className="font-bold text-sm tracking-wide">
                    AICYRO
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Live Preview
                </span>
              </div>
              <div className="space-y-3 opacity-90">
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                <div className="p-3 border border-gray-100 dark:border-gray-800 rounded flex gap-3">
                  <PieChart className="w-5 h-5 text-[var(--primary)]" />
                  <div className="w-full">
                    <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded"></div>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold mb-2">Get Instant Access</h3>
                <p className="text-[var(--foreground-muted)] mb-8 text-sm">
                  Enter details to unlock your 2-page PDF blueprint.
                </p>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-[var(--background)] outline-none"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-[var(--background)] outline-none"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-[var(--primary)] text-white font-bold"
                >
                  {loading ? "Processing..." : "Generate Blueprint"}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Success!</h3>
                {isClient && (
                  <PDFDownloadLink
                    document={<AicyroBlueprintPDF userName={formData.name} />}
                    fileName="Aicyro_MVP_Blueprint.pdf"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-[var(--primary)] text-white font-bold mt-6"
                  >
                    {({ loading }) =>
                      loading
                        ? "Generating Multi-page PDF..."
                        : "Download Blueprint"
                    }
                  </PDFDownloadLink>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MVPBlueprint;
