/** @type {import('next').NextConfig} */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const nextConfig = {
  webpack: (config, options) => {
    config.module.push({
      resolve: {
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
      },
    });

    config.module.loaders = [
      ...config.module.loaders,
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ];

    config.module.resolve.extensions = [
      ...config.module.resolve.extensions,
      ".css",
    ];

    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
