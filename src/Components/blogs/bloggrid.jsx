// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Protect Your Business From Financial Lose",
//     date: "December 26, 2021",
//     category: "Blog",
//     image: "https://dummyimages.netlify.app/blog/blog1.png",
//     link: "/blogs/blog3",
//   },
//   {
//     id: 2,
//     title:
//       "AI-Powered Cyber Threats in 2025: What Every Business Leader Needs to Know",
//     date: "December 26, 2021",
//     category: "Blog",
//     image:
//       "https://dummyimages.netlify.app/services/HDCybersecurity%20&%20Data%20Protection.jpg",
//     link: "/blogs/blog4",
//   },
//   {
//     id: 3,
//     title:
//       "AI-Powered Growth: Why Intelligent Platforms Are a Must for Modern Businesses in 2025",
//     date: "December 26, 2021",
//     category: "Blog",
//     image: "https://dummyimages.netlify.app/services/HDSaaS%20development.jpg",
//     link: "/blogs/blog5",
//   },
//   {
//     id: 4,
//     title:
//       "The Future of AI Automation: How It’s Transforming Business Operations in 2025",
//     date: "December 26, 2021",
//     category: "Blog",
//     image: "https://dummyimages.netlify.app/services/HDQA%20&%20Automation.jpg",
//     link: "/blogs/blog6",
//   },
//   {
//     id: 5,
//     title:
//       "AI-Powered Workflows: How Automation Is Revolutionizing Business in 2025",
//     date: "December 26, 2021",
//     category: "Blog",
//     image: "https://dummyimages.netlify.app/services/HDCloud%20&%20DevOps.jpg",
//     link: "/blogs/blog7",
//   },
//   {
//     id: 6,
//     title: "AI vs. Manual Work: The Hard Truth About Time and Costs in 2025",
//     date: "December 26, 2021",
//     category: "Blog",
//     image: "https://dummyimages.netlify.app/services/HDApp%20Development.jpg",
//     link: "/blogs/blog8",
//   },
// ];

// const BlogGrid = () => {
//   return (
//     <section className="w-full bg-[#0A0118] py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <div key={post.id} className="group cursor-pointer">
//               {/* WRAPPED IMAGE CONTAINER IN LINK */}
//               <Link
//                 href={post.link}
//                 className="relative w-full h-64 overflow-hidden rounded-2xl mb-6 block"
//               >
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-[#5D84D3]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {/* Button Container */}
//                   <div className="text-white flex items-center gap-3 group-hover:translate-y-0 transition-all duration-300">
//                     <span className="text-2xl font-bold tracking-wider">
//                       Read More
//                     </span>

//                     {/* Arrow Icon */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={2.5}
//                       stroke="currentColor"
//                       className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </Link>

//               {/* Content */}
//               <div className="flex flex-col">
//                 <h3 className="text-white text-2xl font-bold leading-tight mb-4 group-hover:text-[#7648D5] transition-colors">
//                   <Link href={post.link}>{post.title}</Link>
//                 </h3>

//                 {/* Meta Data */}
//                 {/* <div className="flex items-center text-sm font-medium text-[#677ED6]"> */}
//                 {/* <span>{post.date}</span> */}

//                 {/* Diamond Separator */}
//                 {/* <span className="mx-3 text-[10px] transform rotate-45">
//                     ♦
//                   </span> */}

//                 {/* <span>{post.category}</span> */}
//                 {/* </div> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogGrid;

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
//
//
import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Survival Protocol: Cybersecurity as Financial Defense",
   date: "December 26, 2025",
    category: "Blog",
    image: "https://dummyimages.netlify.app/blog/blog1.png",
    link: "/blogs/blog3",
  },
  {
    id: 2,
    title:
      "AI-Powered Cyber Threats in 2025: What Every Business Leader Needs to Know",
    date: "December 26, 2025",
    category: "Blog",
    image:
      "https://dummyimages.netlify.app/services/HDCybersecurity%20&%20Data%20Protection.jpg",
    link: "/blogs/blog4",
  },
  {
    id: 3,
    title:
      "AI-Powered Growth: Why Intelligent Platforms Are a Must for Modern Businesses in 2025",
    date: "December 26, 2025",
    category: "Blog",
    image: "https://dummyimages.netlify.app/services/HDSaaS%20development.jpg",
    link: "/blogs/blog5",
  },
  {
    id: 4,
    title:
      "The Future of AI Automation: How It’s Transforming Business Operations in 2025",
    date: "December 26, 2025",
    category: "Blog",
    image: "https://dummyimages.netlify.app/services/HDQA%20&%20Automation.jpg",
    link: "/blogs/blog6",
  },
  {
    id: 5,
    title:
      "AI-Powered Workflows: How Automation Is Revolutionizing Business in 2025",
    date: "December 26, 2025",
    category: "Blog",
    image: "https://dummyimages.netlify.app/services/HDCloud%20&%20DevOps.jpg",
    link: "/blogs/blog7",
  },
  {
    id: 6,
    title: "AI vs. Manual Work: The Hard Truth About Time and Costs in 2025",
    date: "December 26, 2025",
    category: "Blog",
    image: "https://dummyimages.netlify.app/services/HDApp%20Development.jpg",
    link: "/blogs/blog8",
  },
   {
    id: 7,
    title: "The 2025 Shift: Why AI Automation is No Longer Optional",
    date: "Jan 22, 2026",
    category: "Blog",
    image: "https://dummyimages.netlify.app/services/HDAI%20Solutions%20.jpg",
    link: "/blogs/blog11",
}, {
    id: 8,
    title: "The Velocity Trap: Why Manual Testing is Obsolete in 2026",
    date: "Jan 9, 2026",
    category: "Blog",
    image: "https://dummyimages.netlify.app/services/HDCybersecurity%20&%20Data%20Protection.jpg",
    link: "/blogs/blog12",
}, {
    id: 9,
    title: "Scale vs. Stall: The Cloud Architecture Defining 2026",
    date: "Jan 10, 2026",
    category: "Blog",
    image: "https://dummyimages.netlify.app/services/HDWeb%20Development.jpg",
    link: "/blogs/blog13",
}, {
    id: 10,
    title: "Beyond Digital Presence: Why 'Just a Website' Fails in 2026",
    date: "Jan 11, 2026",
    category: "Blog",
    image: "https://dummyimages.netlify.app/services/HDWeb%20Development.jpg",
    link: "/blogs/blog14",
}, {
    id: 11,
    title: "The Silent Reshaping: Real-World Asset Tokenization in 2026",
    date: "Jan 12, 2026",
    category: "Blog",
    image: "https://dummyimages.netlify.app/services/HDBlockchain.jpg",
    link: "/blogs/blog15",
}, {
    id: 12,
    title: "The App Trap: Why Most Fail After Launch in 2026",
    date: "Jan 13, 2026",
    category: "Blog",
    image: "https://dummyimages.netlify.app/services/HDApp%20Development.jpg",
    link: "/blogs/blog16",
},
];

const BlogGrid = () => {
  return (
    // UPDATED: Background uses variable
    <section className="w-full bg-[var(--background)] py-16 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* WRAPPED IMAGE CONTAINER IN LINK */}
              <Link
                href={post.link}
                className="relative w-full h-64 overflow-hidden rounded-2xl mb-6 block"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                {/* UPDATED: Overlay color uses variable */}
                <div className="absolute inset-0 bg-[var(--image-overlay)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Button Container */}
                  <div className="text-white flex items-center gap-3 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-2xl font-bold tracking-wider">
                      Read More
                    </span>

                    {/* Arrow Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="flex flex-col">
                {/* UPDATED: Title Color uses foreground and secondary variables */}
                <h3 className="text-[var(--foreground)] text-2xl font-bold leading-tight mb-4 group-hover:text-[var(--secondary)] transition-colors">
                  <Link href={post.link}>{post.title}</Link>
                </h3>

                {/* Meta Data (Commented out in original code, but if uncommented, use var(--foreground-muted)) */}
                {/* <div className="flex items-center text-sm font-medium text-[var(--foreground-muted)]"> */}
                {/* <span>{post.date}</span> */}
                {/* ... */}
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
