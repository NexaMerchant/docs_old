/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    experimental: {
        images: true,
    },
  };
  
  module.exports = nextConfig;