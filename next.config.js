/** @type {import('next').NextConfig} */
const IterateWebpackSourcemapUploadPlugin = require("@iterate-ai/iterate-webpack-plugin");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      config.plugins.push(
        new IterateWebpackSourcemapUploadPlugin({
          apiKey:
            "340cf28bcd24d269d1555b3cf37cc5318946034cd1dcf9330786e0c299ad3087",
          owner: "iterate-test1",
          project: "nextui-dashboard",
          url: "https://dev-api.iterate-ai.com/api/v0/source-maps",
          silent: false,
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
