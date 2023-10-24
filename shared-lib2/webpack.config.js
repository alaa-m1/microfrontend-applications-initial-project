const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
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
      shared:['@faker-js/faker'],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
