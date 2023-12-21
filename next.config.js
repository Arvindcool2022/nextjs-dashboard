// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// images - The images config object
// remotePatterns - Whitelisted hostnames for next/image
// protocol - The protocol used (https)
// hostname - The hostname used in your image src
// port - Port if applicable
// pathname - Pathname pattern to match images on this host
// Using '/**' will match all paths on 'i.dummyjson.com'.

// This will configure Next.js to allow your next/image components to load images from 'i.dummyjson.com' without errors.
