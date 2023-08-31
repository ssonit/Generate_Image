/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "picsum.photos", "cdn.pixabay.com"], // <== Domain name
  },
};

module.exports = nextConfig;
