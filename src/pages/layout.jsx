import { useRouter } from "next/router";
import AicyroChatbot from "@/Components/Chatbot/AicyroChatbot";
import Sticky from "../Components/Home/StickyEstimateBtn";
import CookieConsentBanner from "../Components/Essntials/CookieConsentBanner";

export default function RootLayout({ children }) {
  const router = useRouter();

  // Check if the current page is the admin dashboard (/lg)
  const isDashboard = router.pathname === "/lg";

  return (
    <div>
      <main>
        {children}
        <CookieConsentBanner />
        {/* Only render the chatbot if we are NOT on the dashboard */}
        {!isDashboard && <AicyroChatbot />}
        {!isDashboard && <Sticky />}
      </main>
    </div>
  );
}
