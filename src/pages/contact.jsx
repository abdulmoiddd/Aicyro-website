
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";
import Contactform from "../Components/contactus/contactform"
import Navbar from "@/Components/Essntials/Navbar";
import ContactCTA from "@/Components/contactus/contactusCTA";
import Test from "@/Components/contactus/test";
import LeadMagnet from "@/Components/Home/MVPBlueprint";

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
        <Navbar />
        <Test />

        <Contactform />
        <LeadMagnet />
        {/* <ContactCTA /> */}
       
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
