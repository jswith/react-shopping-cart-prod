const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { join } = require("path");

module.exports = {
  mode: "development",
  entry: join(__dirname, "/src/index.jsx"),
  devtool: "source-map",
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  output: {
    filename: "main.js",
    path: join(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, "public/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".scss"],
  },
};
