// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// next.config.ts
// next.config.ts
// next.config.ts
// next.config.ts
// import type { NextConfig } from 'next'

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'images.unsplash.com' },
//       { protocol: 'https', hostname: 'plus.unsplash.com' },
//       { protocol: 'https', hostname: 'source.unsplash.com' }, // query-based Unsplash
//       { protocol: 'https', hostname: 'picsum.photos' },       // Picsum fallback
//     ],
//   },
// }

// export default nextConfig

// next.config.ts
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      // ⭐ Add this for the AI image query endpoint
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },
}

export default nextConfig
