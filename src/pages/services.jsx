
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";
import ServicesIntro from "@/Components/services/ServicesIntro";
import Navbar from "@/Components/Essntials/Navbar";
import CoreServices from "@/Components/services/detailcoreservices";
import AdditionalCapabilities from "@/Components/services/AdditionalCapabilities";
import ProcessSection from "@/Components/services/ProcessSection";

const ServicesPage = () => {
  return (
    <>
      <Seo
        title="AI, SaaS & Secure Software Development Services | Aicyro"
        description="Custom AI, SaaS, web, and secure software development services designed to scale, protect, and grow modern businesses globally."
        url="/services"
        keywords="Aicyro services, SaaS development, AI integration, cybersecurity services, cloud architecture, web development, app development"
      />
      <div className="bg-[#0B0219]">
        <Navbar/>
        <ServicesIntro />
        <CoreServices />
        <AdditionalCapabilities />
        <ProcessSection />
        <Footer />
        
      </div>
    </>
  );
};

export default ServicesPage;
