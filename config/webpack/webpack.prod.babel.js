import '@babel/polyfill';
// eslint-disable-next-line import/no-extraneous-dependencies
import CleanWebpackPlugin from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import paths from './paths';

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
                cacheGroups: {
                  vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial',
                  },
                  async: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'async',
                    chunks: 'async',
                    minChunks: 4,
                  },
                },
              },
  noEmitOnErrors: true,
  concatenateModules: true
  },
  plugins: [
    new CleanWebpackPlugin([paths.outputPath.split('/').pop()], {
      root: paths.root,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new CompressionPlugin()
 ],
 module: {
  rules: [{
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env']
              }
          }
      },
      {
          test: /\.s(c|a)ss$/,
          use: {
              loader: MiniCssExtractPlugin.loader,
              options: {
                  publicPath: '../'
              }
          },// Take scss file and split into a separate css file
      },
      {
          test: /\.s(c|a)ss$/,
          use: {
              loader: 'css-loader',
          },// Interprets scss @import and url() like import/require()
      },
      {
          test: /\.s(c|a)ss$/,
          exclude: [/vendor/],
          use: {
              loader: 'postcss-loader',
          },
      }, // PostCSS turns your SCSS file into a JS object & converts that object back to a SCSS file
      {
          test: /\.s(c|a)ss$/,
          use: {
              loader: 'sass-loader',
          },// look for scss file through sass-loader, compile scss into css code
      },
  ]
},
  devtool: '',
};


// import CleanWebpackPlugin from 'clean-webpack-plugin';
// import TerserPlugin from 'terser-webpack-plugin';
// import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import Visualizer from 'webpack-visualizer-plugin';
// import paths from './paths';

// module.exports = {
//     mode: 'production',
//     output: {
//         filename: `${paths.jsFolder}/[name].[hash].js`,
//         path: paths.outputPath,
//         chunkFilename: '[name].[chunkhash].js',
//         publicPath: '/'
//     },
//     optimization: {
//         minimizer: [
//           new TerserPlugin({
//             // Use multi-process parallel running to improve the build speed
//             // Default number of concurrent runs: os.cpus().length - 1
//             parallel: true,
//             // Enable file caching
//             cache: true,
//             sourceMap: true,
//           }),
//           new OptimizeCSSAssetsPlugin(),
//         ],
//         // Automatically split vendor and commons
//         // https://twitter.com/wSokra/status/969633336732905474
//         // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
//         splitChunks: {
//           cacheGroups: {
//             vendors: {
//               test: /[\\/]node_modules[\\/]/,
//               name: 'vendors',
//               chunks: 'initial',
//             },
//             async: {
//               test: /[\\/]node_modules[\\/]/,
//               name: 'async',
//               chunks: 'async',
//               minChunks: 4,
//             },
//           },
//         },
//         // Keep the runtime chunk seperated to enable long term caching
//         // https://twitter.com/wSokra/status/969679223278505985
//         runtimeChunk: true,
//       },

//       module: {
//         rules: [
//           {
//             test: /\.(css|scss)$/,
//             use: [
//               MiniCssExtractPlugin.loader,
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   localsConvention: 'camelCase',
//                   modules: {
//                     localIdentName: '[local]___[hash:base64:5]',
//                   },
//                 },
//               },
//               'sass-loader',
//             ],
//           },
//         ],
//       },
//     plugins: [
//         new CleanWebpackPlugin([paths.outputPath.split('/').pop()], {
//             root: paths.root
//         }),
//         new Visualizer(),
//         new MiniCssExtractPlugin({
//           filename: `${paths.cssFolder}/[name].css`,
//           chunkFilename: `${paths.cssFolder}/[name].css`,
//         }),
//       ],
//     devtool: 'source-map'
// };


// // plugins: [
// //     new CleanWebpackPlugin([paths.outputPath.split('/').pop()], {
// //         root: paths.root
// //     })
// // ],
