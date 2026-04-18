import type { NextConfig } from 'next'

const basePath = '/alex-birthday'

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },
}

export default nextConfig
