/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {NEXT_APP_API_URL: process.env.NEXT_APP_API_URL},
  async redirects() {
    return [
      {
        source: "/",
        destination: "/houses",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
