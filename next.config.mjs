/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Disable CSS minification and optimization to avoid bracket parsing issues
    if (!dev && !isServer) {
      // Remove CSS minimizer
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (minimizer) => minimizer.constructor.name !== 'CssMinimizerPlugin'
      );

      // Disable CSS optimization entirely
      config.optimization.minimize = false;
    }
    return config;
  },
}

export default nextConfig
