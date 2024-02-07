/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/gift/index.html',
  //     },
  //   ]
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/gift/index.html',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
