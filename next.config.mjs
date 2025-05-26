/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
}

export default nextConfig
