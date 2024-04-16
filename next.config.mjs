/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  // env: {
  //   BASE_URL: process.env.BASE_URL,
  //   BASE_FILE: process.env.BASE_FILE
  // },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    return config;
  },
};

export default nextConfig;
