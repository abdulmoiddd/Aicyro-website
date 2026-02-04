// import React from "react";
// import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";

// import Navbar from "../components/Essntials/Navbar";
// import Footer from "../components/Essntials/Footer";

// // 2. Mock Data
// const blogPosts = [
//   {
//     id: 1,
//     title: "The Future of Web Development in 2026",
//     excerpt:
//       "Explore the latest trends in Next.js, AI integration, and server-side rendering that are shaping the web.",
//     category: "Technology",
//     date: "Jan 5, 2026",
//     author: "Jane Doe",
//     image: "/images/blog-1.jpg",
//     slug: "future-web-dev-2026",
//     readTime: "5 min read",
//   },
//   {
//     id: 2,
//     title: "UI/UX Best Practices for SaaS Products",
//     excerpt:
//       "How to design interfaces that convert users and reduce churn in competitive markets.",
//     category: "Design",
//     date: "Jan 3, 2026",
//     author: "John Smith",
//     image: "/images/blog-2.jpg",
//     slug: "ui-ux-best-practices",
//     readTime: "4 min read",
//   },
//   {
//     id: 3,
//     title: "Scaling Your Startup with Cloud Solutions",
//     excerpt:
//       "A comprehensive guide to moving from monolithic architectures to microservices.",
//     category: "Business",
//     date: "Dec 28, 2025",
//     author: "Sarah Lee",
//     image: "/images/blog-3.jpg",
//     slug: "scaling-startup-cloud",
//     readTime: "6 min read",
//   },
//   // Add more posts here...
// ];

// const Blog = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
//       <Head>
//         <title>Our Blog | Insights & News</title>
//         <meta
//           name="description"
//           content="Read our latest articles on tech, design, and business."
//         />
//       </Head>

//       <Navbar />

//       <main className="flex-grow relative z-10">
//         {/* Decorative Background Gradient (Subtle) */}
//         <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/80 to-transparent -z-10 pointer-events-none" />

//         {/* Hero Section */}
//         <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 text-center px-4">
//           <div className="container mx-auto max-w-4xl">
//             <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
//               Our Blog
//             </span>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
//               Latest insights on{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//                 Technology & Design
//               </span>
//             </h1>
//             <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//               Discover articles, tutorials, and case studies to help you build
//               better products and scale your business.
//             </p>
//           </div>
//         </section>

//         {/* Blog Grid Section */}
//         <section className="container mx-auto px-4 pb-20">
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {blogPosts.map((post) => (
//               <Link href={`/blog/${post.slug}`} key={post.id} className="group">
//                 <article className="h-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1">
//                   {/* Image Container with Zoom Effect */}
//                   <div className="relative h-56 w-full overflow-hidden bg-slate-200">
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
//                     />
//                     <div className="absolute top-4 left-4">
//                       <span className="px-3 py-1 text-xs font-bold text-blue-800 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
//                         {post.category}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 flex flex-col flex-grow">
//                     <div className="flex items-center text-xs text-slate-500 mb-3 font-medium uppercase tracking-wide">
//                       <span>{post.date}</span>
//                       <span className="mx-2 text-slate-300">•</span>
//                       <span>{post.readTime}</span>
//                     </div>

//                     <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
//                       {post.title}
//                     </h3>

//                     <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
//                       {post.excerpt}
//                     </p>

//                     {/* Footer of Card */}
//                     <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
//                       <div className="flex items-center space-x-2">
//                         <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
//                           {post.author.charAt(0)}
//                         </div>
//                         <span className="text-sm font-medium text-slate-700">
//                           {post.author}
//                         </span>
//                       </div>
//                       <span className="text-blue-600 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
//                         Read
//                         <svg
//                           className="w-4 h-4 ml-1"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M17 8l4 4m0 0l-4 4m4-4H3"
//                           />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                 </article>
//               </Link>
//             ))}
//           </div>
//         </section>

//         {/* Improved Newsletter Section */}
//         <section className="container mx-auto px-4 mb-20">
//           <div className="relative overflow-hidden bg-slate-900 rounded-3xl p-8 sm:p-16 text-center shadow-2xl">
//             {/* Background Decoration */}
//             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500 blur-3xl opacity-20 pointer-events-none"></div>
//             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500 blur-3xl opacity-20 pointer-events-none"></div>

//             <div className="relative z-10 max-w-2xl mx-auto">
//               <h2 className="text-3xl font-bold text-white mb-4">
//                 Subscribe to our newsletter
//               </h2>
//               <p className="text-slate-300 mb-8 text-lg">
//                 Get the latest insights, tutorials, and trends delivered
//                 straight to your inbox. No spam, ever.
//               </p>

//               <form className="flex flex-col sm:flex-row gap-3">
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   className="flex-grow px-5 py-3.5 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/30 border-0"
//                 />
//                 <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25">
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Blog;

//
//
//
//
//
//
//
//
//
//
//
//
///
//
//
//
//
//
//
//
//
import BlogHero from "../Components/blogs/blogstart";
import BlogGrid from "../Components/blogs/bloggrid";
// import Newsletter from "../Components/Blog/Newsletter";
import Footer from "../Components/Essntials/footer";
import Seo from "../Components/Essntials/Seo";

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
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
