const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  mode: "development",
  devServer: { port: 8002 },
  plugins: [
    new ModuleFederationPlugin({
      name: "shared_lib2",
      filename: "remoteEntry.js",
      exposes: {
        "./SharedLib2Index": "./src/bootstrap",
      },
      shared: ["faker-js/faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  entry: "./src/index.ts",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
