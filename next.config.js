/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        domains: ['github.io'],
      },
  };
  
  module.exports = nextConfig;