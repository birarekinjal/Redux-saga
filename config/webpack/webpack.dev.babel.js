/* eslint-disable import/no-extraneous-dependencies */
import '@babel/polyfill';
import webpack from 'webpack';
import Jarvis from 'webpack-jarvis';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import paths from './paths';

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.outputPath,
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 20000000,
    maxEntrypointSize: 8500000,
    assetFilter: (assetFilename) => (
      assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    ),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: paths.outputPath,
    compress: true,
    hot: true,
    historyApiFallback: true,
    // port: 8180,
    // host: '8080',
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Jarvis({
      port: 1337,
    }),
  ],
};
