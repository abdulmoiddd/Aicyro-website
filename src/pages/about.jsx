import Aboutstart from "../Components/Aboutus/Aboutstart";
import ClientSuccess from "../Components/Aboutus/ClientSuccess";
import KeyFeature from "../Components/Home/keyfeature";
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";

const AboutPage = () => {
  return (
    <>
      <Seo
        title="About"
        description="Learn about Aicyro Solutions, our mission, values, and the expert team building secure, scalable SaaS, AI, and cybersecurity solutions for businesses worldwide."
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
