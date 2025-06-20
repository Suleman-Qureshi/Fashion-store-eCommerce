/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
  experimental: {
    appDir: true, // ✅ required for App Router
  },
  images: {domains: ['img.freepik.com','bootstrapmade.com','localhost'],},
    plugins: {
        "@tailwindcss/postcss": {},
      },
};

export default nextConfig;
