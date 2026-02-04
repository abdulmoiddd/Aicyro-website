/** @type {import('next-sitemap').IConfig} */
const SITE_URL = process.env.SITE_URL || "https://aicyro.com";

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/404", "/_app", "/api/*", "/sitemap"],
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  transform: async (config, path) => {
    // Set different priorities based on page type
    let priority = 0.7;
    let changefreq = "daily";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/services")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/portfolio")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path === "/about" || path === "/contact") {
      priority = 0.8;
      changefreq = "monthly";
    } else {
      priority = 0.7;
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/404"],
      },
    ],
    additionalSitemaps: [`${SITE_URL}/sitemap.xml`],
  },
};
