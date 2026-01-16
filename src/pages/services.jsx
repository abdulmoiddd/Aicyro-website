import Start from "../Components/services/start";
import WhyAicyro from "../Components/services/whyAicyro";
import WeOffer from "../Components/Home/weoffer";
import Experience from "../Components/services/Experience";
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";

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
        <Start />
        <WhyAicyro />
        <WeOffer />
        <Experience />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
