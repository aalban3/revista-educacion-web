/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXTJS_AWS_DOMAIN_1, process.env.NEXTJS_AWS_DOMAIN_2],
  },
  env: {
    S3_BUCKET_URL: process.env.S3_BUCKET_URL,
  },
};

module.exports = nextConfig;
