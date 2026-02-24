import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { User, Lock, LogIn, AlertCircle } from "lucide-react"; // Changed Mail to User icon

// --- FIREBASE IMPORTS ---
import { ref, get } from "firebase/database";
import { database } from "../lib/firebase";

// --- COMPONENTS ---
import Navbar from "../Components/Essntials/Navbar";
import Footer from "../Components/Essntials/footer";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1. Reference the 'login' node in your database
      const loginRef = ref(database, "login");
      
      // 2. Fetch the data once
      const snapshot = await get(loginRef);

      if (snapshot.exists()) {
        const usersData = snapshot.val();
        
        // 3. Convert object to array and find a matching user
        // The schema is: "1": { name: "root", password: "admin" }, ...
        const userFound = Object.values(usersData).find(
          (user) => user.name === username && user.password === password
        );

        if (userFound) {
          // 4. LOGIN SUCCESS: Save a simple session flag
          // Note: In a real production app, use secure tokens. This is a simple client-side check.
          localStorage.setItem("aicyro_admin_user", JSON.stringify(userFound));
          router.push("/messages");
        } else {
          // Password or Username didn't match
          setError("Invalid username or password.");
        }
      } else {
        setError("System error: Login data not found.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Failed to connect to the database.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[var(--background)] flex items-center justify-center pt-20 px-4">
        
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--primary)]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--secondary)]/20 rounded-full blur-[100px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Admin Login</h1>
            <p className="text-[var(--foreground-muted)] text-sm">Enter your database credentials</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-2"
              >
                <AlertCircle size={16} />
                {error}
              </motion.div>
            )}

            <div className="space-y-4">
              {/* Username Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Username"
                  className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[var(--foreground-muted)] group-focus-within:text-[var(--primary)] transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all transform hover:-translate-y-0.5 ${loading ? "opacity-70 cursor-wait" : ""}`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <LogIn size={18} />
                </>
              )}
            </button>
          </form>

        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;