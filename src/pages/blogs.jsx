
import BlogHero from "../Components/blogs/blogstart";
import BlogGrid from "../Components/blogs/bloggrid";
// import Newsletter from "../Components/Blog/Newsletter";
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";
import LeadMagnet from "@/Components/Home/MVPBlueprint";

const BlogPage = () => {
  return (
    <>
      <Seo
        title="Blog"
        description="Explore insights, tutorials, and trends on AI, Cybersecurity, and SaaS development from the experts at Aicyro Solutions."
        url="/blog"
        keywords="Aicyro Blog, Tech Insights, AI Trends, Cybersecurity News, SaaS Development, Web Development Tutorials"
      />
      {/* Main Wrapper with Dark Theme */}
      <div className="bg-[#0A0118] min-h-screen text-white">
        <BlogHero />
        <BlogGrid />
        {/* <Newsletter /> */}
        <LeadMagnet />
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
