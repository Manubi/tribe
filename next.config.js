/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "assets-eu-01.kc-usercontent.com"],
  },
};

module.exports = nextConfig;
