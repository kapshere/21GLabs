/** @type {import('next').NextConfig} */
const nextConfig = {
  // For GitHub Pages, we need basePath, but for Vercel we should remove it
  // basePath: process.env.NODE_ENV === "production" ? "/21GLabs" : "",
  
  images: { 
    unoptimized: true 
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
