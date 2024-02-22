/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.themoviedb.org',
        port: '',
        // pathname: 'https://image.tmdb.org/t/p/original/',
      },
    ],
  },
}

export default nextConfig
