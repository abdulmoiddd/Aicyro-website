import Contactstart from "../Components/contactus/contactstart";
import ContactSection from "../Components/contactus/contactsection";
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";
import CtaSection from "@/Components/contactus/ctasec";

const ContactPage = () => {
  return (
    <>
      <Seo
        title="Contact Aicyro Solutions | Book a Strategy Call"
        description="Talk with Aicyro Solutions about AI, cybersecurity, SaaS, and scalable software development. Book a strategy call today."
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
