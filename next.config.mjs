/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mustafa-dev.s3.eu-north-1.amazonaws.com',
        //port: '',
        //pathname: '/account123/**',
      }
    ]
  }
};

export default nextConfig;
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'amazonaws.com',
//         //port: '',
//         //pathname: '/account123/**',
//       },
//     ],
//   },
// }