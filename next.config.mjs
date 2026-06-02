/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML/CSS/JS export for Apache / cPanel shared hosting (no Node server).
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  // Folder-per-route (/about/index.html) so Apache serves clean URLs without rewrites.
  trailingSlash: true,
  images: {
    // The Next.js image optimizer needs a server; static export must serve images as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // NOTE: redirects()/rewrites()/headers() require a server and are ignored in `output: 'export'`.
  // Legacy /privacy and /terms redirects are handled in public/.htaccess instead.
};

export default nextConfig;
