import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http' if the images are served via http.
        hostname: 'via.placeholder.com', // Add the image host here.
        port: '',
        pathname: '/**', // Path to the images.
      },
    ],
  },
};

export default nextConfig;
