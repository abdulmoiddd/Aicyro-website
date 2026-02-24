import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Mail, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';

// --- COMPONENTS ---
import Navbar from '../Components/Essntials/Navbar'; //
import Footer from '../Components/Essntials/footer'; //

const MeetingScheduler = () => {
  const [formData, setFormData] = useState({ 
    userName: '', 
    userEmail: '', 
    notes: '', 
    date: '', 
    time: '' 
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  
  // Store the Google Access Token
  const [accessToken, setAccessToken] = useState(null);

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Configure Google Login
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Login Success:", tokenResponse);
      setAccessToken(tokenResponse.access_token);
      setStatus(null);
    },
    onError: () => setStatus('error'),
    scope: 'https://www.googleapis.com/auth/calendar',
    flow: 'implicit',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!accessToken) {
      // Trigger login if they try to submit without it
      login(); 
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const startDateTime = new Date(`${formData.date} ${formData.time}`).toISOString();
      const endDateTime = new Date(new Date(startDateTime).getTime() + 60 * 60000).toISOString();

      // Call the API endpoint defined in api/schedule.js
      const response = await fetch('/api/schedule', { //
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          token: accessToken,
          meetingData: {
            userName: formData.userName,
            userEmail: formData.userEmail,
            notes: formData.notes,
            start: startDateTime,
            end: endDateTime
          }
        })
      });

      if (!response.ok) throw new Error('Failed to schedule');
      setStatus('success');
      // Reset form on success
      setFormData({ userName: '', userEmail: '', notes: '', date: '', time: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    // UPDATED: Background and text variables
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-poppins selection:bg-[var(--secondary)] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Ambient Glow */}
        {/* UPDATED: Glow colors using variables */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--secondary)]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-blue)]/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          // UPDATED: Card background and border
          className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] overflow-hidden z-10"
        >
          
          {/* --- LEFT PANEL: INFO --- */}
          {/* UPDATED: Gradient uses hero variables for adaptability */}
          <div className="lg:col-span-5 relative overflow-hidden p-10 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-[var(--hero-from)] to-[var(--hero-to)]">
            {/* Decorative Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: `linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(to right, var(--secondary) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
            />

            <div className="relative z-10">
              {/* UPDATED: Badge colors */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/20 text-[var(--secondary)] text-xs font-bold tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--secondary)]"></span>
                </span>
                LIVE SCHEDULING
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-[var(--foreground)]">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary)] to-[var(--accent-blue)]">Extraordinary</span>
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg leading-relaxed">
                Book a free 60-minute technical strategy session. We'll discuss your architecture, security needs, and growth goals.
              </p>
            </div>

            {/* DIAGRAM TRIGGER: Visualizing the sequence of operations for booking */}
            

            <div className="relative z-10 mt-12 space-y-6">
              {/* UPDATED: Info boxes using variables */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--background)]/50 border border-[var(--border-color)] backdrop-blur-sm">
                <div className="p-3 bg-[var(--secondary)]/10 rounded-lg text-[var(--secondary)]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">60 Minutes</h4>
                  <p className="text-sm text-[var(--foreground-muted)]">Deep dive into your requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--background)]/50 border border-[var(--border-color)] backdrop-blur-sm">
                <div className="p-3 bg-[var(--secondary)]/10 rounded-lg text-[var(--secondary)]">
                  <CalendarIcon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)]">Auto-Sync</h4>
                  <p className="text-sm text-[var(--foreground-muted)]">Instant Google Calendar invitation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT PANEL: FORM --- */}
          <div className="lg:col-span-7 p-8 lg:p-12 bg-[var(--card-bg)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* GOOGLE AUTH BUTTON */}
              {!accessToken ? (
                // UPDATED: Auth box background
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-[var(--border-color)] text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-md mb-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" className="w-6 h-6"/>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Connect Your Calendar</h3>
                  <p className="text-sm text-[var(--foreground-muted)] mb-4">Authorize access to check availability and schedule the meet.</p>
                  <button 
                    type="button" 
                    onClick={() => login()}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Sign in with Google <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-500 font-medium">
                  <ShieldCheck size={20} />
                  <span>Google Account Connected Securely</span>
                </div>
              )}

              {/* INPUT FIELDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative group">
                  <User className="absolute left-4 top-4 text-[var(--foreground-muted)] group-focus-within:text-[var(--secondary)] transition-colors" size={18} />
                  <input 
                    required 
                    name="userName" 
                    value={formData.userName}
                    onChange={handleInputChange} 
                    placeholder="Full Name" 
                    // UPDATED: Input styles using variables
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] focus:border-[var(--secondary)] focus:ring-1 focus:ring-[var(--secondary)] outline-none transition-all placeholder:text-[var(--foreground-muted)]/50" 
                  />
                </div>
                <div className="relative group">
                  <Mail className="absolute left-4 top-4 text-[var(--foreground-muted)] group-focus-within:text-[var(--secondary)] transition-colors" size={18} />
                  <input 
                    required 
                    name="userEmail" 
                    type="email" 
                    value={formData.userEmail}
                    onChange={handleInputChange} 
                    placeholder="Work Email" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] focus:border-[var(--secondary)] focus:ring-1 focus:ring-[var(--secondary)] outline-none transition-all placeholder:text-[var(--foreground-muted)]/50" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative group">
                  <input 
                    required 
                    name="date" 
                    type="date" 
                    value={formData.date}
                    onChange={handleInputChange} 
                    // Added [color-scheme:dark] for dark mode calendar picker, remove or adjust via class if light mode picker is needed
                    className="w-full px-4 py-3.5 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] focus:border-[var(--secondary)] focus:ring-1 focus:ring-[var(--secondary)] outline-none transition-all [color-scheme:dark]" 
                  />
                </div>
                <div className="relative group">
                  <select 
                    required 
                    name="time" 
                    value={formData.time}
                    onChange={handleInputChange} 
                    className="w-full px-4 py-3.5 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] focus:border-[var(--secondary)] focus:ring-1 focus:ring-[var(--secondary)] outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Time Slot</option>
                    {timeSlots.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="absolute right-4 top-4 pointer-events-none text-[var(--foreground-muted)]">
                    <Clock size={18} />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 text-[var(--foreground-muted)] group-focus-within:text-[var(--secondary)] transition-colors" size={18} />
                <textarea 
                  name="notes" 
                  value={formData.notes}
                  onChange={handleInputChange} 
                  placeholder="Tell us about your project requirements..." 
                  className="w-full pl-12 pr-4 py-3.5 h-32 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] focus:border-[var(--secondary)] focus:ring-1 focus:ring-[var(--secondary)] outline-none transition-all resize-none placeholder:text-[var(--foreground-muted)]/50" 
                />
              </div>

              <div className="pt-2">
                <motion.button 
                  disabled={loading || !accessToken} 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }} 
                  // UPDATED: Button gradient using variables
                  className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2 ${
                    accessToken 
                      ? "bg-gradient-to-r from-[var(--secondary)] to-[var(--accent-blue)] text-white shadow-[var(--secondary)]/25 hover:shadow-[var(--secondary)]/40" 
                      : "bg-[var(--border-color)] text-[var(--foreground-muted)] cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Scheduling...
                    </>
                  ) : (
                    "Confirm & Schedule Meeting"
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {status && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    exit={{ opacity: 0, height: 0 }}
                    className={`rounded-xl p-4 flex items-start gap-3 border ${
                      status === 'success' 
                        ? 'bg-green-500/10 border-green-500/20 text-green-500' 
                        : 'bg-red-500/10 border-red-500/20 text-red-500'
                    }`}
                  >
                    {status === 'success' ? <CheckCircle className="shrink-0" size={20} /> : <AlertCircle className="shrink-0" size={20} />}
                    <div className="text-sm">
                      <p className="font-bold">{status === 'success' ? 'Meeting Scheduled!' : 'Scheduling Failed'}</p>
                      <p className="opacity-80">
                        {status === 'success' 
                          ? 'A Google Meet link has been sent to your email and added to your calendar.' 
                          : 'We encountered an error connecting to Google Calendar. Please try again.'}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </form>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default MeetingScheduler;