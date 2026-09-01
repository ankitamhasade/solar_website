/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/solar_website",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
