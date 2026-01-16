import Aboutstart from "../Components/Aboutus/Aboutstart";
import ClientSuccess from "../Components/Aboutus/ClientSuccess";
import KeyFeature from "../Components/Home/keyfeature";
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";

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
        <Aboutstart />
        <ClientSuccess />
        <KeyFeature />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
