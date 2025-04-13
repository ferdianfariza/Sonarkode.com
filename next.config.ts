import type { NextConfig } from "next";
import { withContentlayer }  from "next-contentlayer2";

const nextConfig: NextConfig = {
  // Your Next.js config options here
  reactStrictMode: true, // Example setting, adjust according to your needs
  pageExtensions: ['ts', 'tsx', 'mdx', 'js', 'jsx'], // Ensure MDX is handled
};

export default withContentlayer(nextConfig);
