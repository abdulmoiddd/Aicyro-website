
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow external images (Unsplash)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "dummyimages.netlify.app",
      },
    ],
  },

// ADD THIS HEADERS SECTION
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirect configuration
  async redirects() {
    return [
      // ==============================================================================
      // SCENARIO 1: Redirect ENTIRE SITE to a new domain
      // ==============================================================================
      /*
      {
        source: '/:path*',
        destination: 'https://www.new-domain.com/:path*',
        permanent: true,
      },
      */
      // ==============================================================================
      // SCENARIO 2: Redirect ALL pages within a specific folder
      // ==============================================================================
      /*
      {
        source: '/blog/:slug*',
        destination: '/articles/:slug*',
        permanent: true,
      },
      */
      // ==============================================================================
      // SCENARIO 3: Maintenance Mode (Redirect ALL pages to one page)
      // ==============================================================================
      /*
      {
        source: '/((?!maintenance).*)',
        destination: '/maintenance',
        permanent: false,
      },
      */
    ];
  },
};

module.exports = nextConfig;
