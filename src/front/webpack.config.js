const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/front/main.js"],
  output: {
    path: path.resolve("./dist/front"),
    publicPath: "/",
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.png$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets",
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".css"],
    modules: ["./src/front", "node_modules"],
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/front/index.html" })],

  devServer: {
    contentBase: "./dist",
  },
};
