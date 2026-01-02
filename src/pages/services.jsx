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
        title="Services"
        description="Explore Aicyro Solutions services: SaaS product development, AI integration, cybersecurity & VAPT, cloud-native architecture, and full-stack web & mobile development."
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
