/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // domains: ["openweathermap.org"], old version v12.*
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
        pathname: "/img/wn/**",
      },
    ],
  },
};

module.exports = nextConfig
