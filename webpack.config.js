const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

new webpack.DefinePlugin({
  NODE_ENV: JSON.stringify(process.env.NODE_ENV)
});

module.exports = {
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
    analytics: "./src/analytics.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          {
            loader: "file-loader?name=./images/[name].[ext]",
            options: {
              esModule: false,
              outputPath: "images"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=./vendor/[name].[ext]",
        options: {
          outputPath: "fonts"
        }
      }
    ]
  },
  plugins: [
    new WebpackMd5Hash(),
    new MiniCssExtractPlugin({ filename: "styles/[name].[contenthash].css" }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default"]
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/about.html",
      filename: "about.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/analytics.html",
      filename: "analytics.html"
    })
  ]
};
