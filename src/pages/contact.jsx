import Contactstart from "../Components/contactus/contactstart";
import ContactSection from "../Components/contactus/contactsection";
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";
import CtaSection from "@/Components/contactus/ctasec";

const ContactPage = () => {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Aicyro Solutions to discuss your SaaS, AI, or cybersecurity project. Get in touch with our team to schedule a discovery call or request a proposal."
        url="/contact"
        keywords="Contact Aicyro, get in touch, software project inquiry, AI consulting, SaaS consulting, cybersecurity consulting"
      />
      <div className="bg-[#0A0118]">
        <Contactstart />
        {/* <CtaSection /> */}
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
