import Portfoliostart from "../Components/portfolio/portfoliostart";
import Counter from "../Components/Home/counter";
import Projectdata from "../Components/portfolio/projectsdata";

import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";

const PortfolioPage = () => {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Browse Aicyro Solutions portfolio of SaaS platforms, AI-powered applications, and secure enterprise systems delivered for startups and global businesses."
        url="/portfolio"
        keywords="Aicyro portfolio, case studies, SaaS projects, AI projects, cybersecurity projects, client success stories"
      />
      <div className="bg-[#0B0219]">
        <Portfoliostart />
        <Counter />
        <Projectdata />
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
