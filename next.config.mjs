/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {domains: ['img.freepik.com','bootstrapmade.com','localhost'],},
    plugins: {
        "@tailwindcss/postcss": {},
      },
};

export default nextConfig;
