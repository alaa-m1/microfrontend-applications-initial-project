const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  mode: "development",
  devServer: { port: 8000 },
  plugins: [
    new ModuleFederationPlugin({
      name: "ecommerce-app",
      remotes: {
        sharedLib1: "shared_lib1@http://localhost:8001/remoteEntry.js",
        sharedLib2: "shared_lib2@http://localhost:8002/remoteEntry.js",
      },
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
