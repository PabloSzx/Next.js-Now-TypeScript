const withTypescript = require("@zeit/next-typescript");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = withPlugins(
  [[withTypescript], [withCSS], [withSass], [withBundleAnalyzer]],
  {
    webpack: (config, options) => {
      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
      }

      return config;
    },
    target: "serverless",
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      browser: {
        analyzerMode: "static",
        reportFilename: "../bundles/client.html",
      },
    },
  }
);
