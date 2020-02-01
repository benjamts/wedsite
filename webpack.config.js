const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const DefinePlugin = require('webpack').DefinePlugin;

const PRODUCTION = process.env.NODE_ENV === 'production';

const cssName = PRODUCTION ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]';
const config = {
  mode: PRODUCTION ? 'production' : 'development',
  entry: ['babel-polyfill', './index.js'],

  output: {
    filename: '[hash].js',
    path: path.resolve('./docs'),
    publicPath: '/',
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: cssName,
              },
            }
          },
          'postcss-loader',
        ]
      },
    ]
  },

  devServer: {
    inline: false
  },

  plugins: [
    new DefinePlugin({
      PRODUCTION: JSON.stringify(PRODUCTION),
      API_HOST: JSON.stringify(PRODUCTION ? 'https://api.tylerandsarah.com' : 'http://localhost:3000'),
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].css',
      ignoreOrder: true,
    }),
    new StaticSiteGeneratorPlugin({
      crawl: true,
      paths: [
        '/thanks',
      ],
      globals: {
        fs: require('fs'),
        Plates: require('plates'),
        window: {
          Image: function() {
            this.addEventListener = function() {}
          },
          scrollTo: function() {},
          setInterval: function() {},
          setTimeout: function() {},
        }
      }
    }),
  ]
}

module.exports = config;
