/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        has: [{ type: "host", value: "cleanwaterprosllc.com" }],
        destination: "https://www.cleanwaterprosllc.com/contact/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;