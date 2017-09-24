const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const PRODUCTION = process.env.NODE_ENV === 'production';

const cssName = PRODUCTION ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]';
const config = {
  entry: ['babel-polyfill', './index.js'],

  output: {
    filename: '[hash].js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.svg$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              /* Inline data URLs for images <= 5kb */
              limit: 5000,
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            `css-loader?modules&importLoaders=1&localIdentName=${cssName}`,
            'postcss-loader',
          ]
        })
      },
    ]
  },

  devServer: {
    inline: false
  },

  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[hash].css',
      ignoreOrder: false,
    }),
    new StaticSiteGeneratorPlugin({
      crawl: true,
      globals: {
        fs: require('fs'),
        Plates: require('plates'),
        window: {
          Image: function() {
            this.addEventListener = function() {}
          },
          scrollTo: function() {},
        }
      }
    }),
  ]
}

if (PRODUCTION) {
  // config.plugins.push(
  //   new OptimizeCssAssetsPlugin({
  //     cssProcessorOptions: { discardComments: { removeAll: true } },
  //   })
  // );
  // Inline critical CSS into each page
  [
    '',
    'bridal-party/',
    'registry/',
    'rsvp/',
    'venue/',
  ].forEach(function(page) {
    config.plugins.push(
      new HtmlCriticalPlugin({
        base: path.resolve('dist'),
        src: `${page}index.html`,
        dest: `${page}index.html`,
        inline: true,
        minify: true,
        extract: true,
        penthouse: {
          blockJSRequests: true,
        }
      })
    );
  });
}

module.exports = config;