import type { NextConfig } from "next";
import { withContentlayer }  from "next-contentlayer2";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  pageExtensions: ['ts', 'tsx', 'mdx', 'js', 'jsx'], 
};

export default withContentlayer(nextConfig);
