/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        domains: ['github.io'],
      },
      experimental: {
        // Other experimental features can go here
        modern: true,
        scrollRestoration: true,
      },
  };
  
  module.exports = nextConfig;