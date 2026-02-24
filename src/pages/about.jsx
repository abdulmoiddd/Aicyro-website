import Aboutstart from "../Components/Aboutus/Aboutstart";

import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";
import Vision from "../Components/Aboutus/vision"
import Mission from "../Components/Aboutus/Mission"
import Whyus from "../Components/Aboutus/whyus"
import AboutusCTA from "@/Components/Aboutus/AboutusCTA";

const AboutPage = () => {
  return (
    <>
      <Seo
        title="About Aicyro Solutions | Trusted AI & Software Development Partner"
        description="Learn how Aicyro Solutions helps businesses solve complex challenges through AI-driven, secure, and scalable software engineering."
        url="/about"
        keywords="About Aicyro, Aicyro team, software agency, AI company, cybersecurity company, SaaS experts"
      />
      <div className="bg-[#0A0118]">
        {/* <Navbar /> */}
        <Aboutstart />
        <Mission />
        <Vision />
        <Whyus />
        <AboutusCTA />
      
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
