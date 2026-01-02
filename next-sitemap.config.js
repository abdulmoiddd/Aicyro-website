/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://aicyro.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Generate a single sitemap file
  exclude: ["/404", "/_app", "/api/*", "/sitemap"], // Exclude pages that shouldn't be indexed
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/404"],
      },
    ],
    additionalSitemaps: ["https://aicyro.com/sitemap.xml"],
  },
};
