const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: { port: 8001 },
  plugins: [
    new ModuleFederationPlugin({
      name: "shared_lib1",
      filename: "remoteEntry.js",
      exposes: {
        "./SharedLib1Index": "./src/bootstrap",
      },
      shared:['@faker-js/faker'],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
