import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/alex-birthday',
  images: { unoptimized: true },
}

export default nextConfig
