// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      optimizeCss: false, // ← disables Lightning CSS
    },
  };
  
  export default nextConfig; // use `module.exports = nextConfig;` if not using ESM
  