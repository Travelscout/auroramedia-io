const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.auroramedia.io" }],
        destination: "https://auroramedia.io/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
