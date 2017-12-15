const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const DefinePlugin = require('webpack').DefinePlugin;

const PRODUCTION = process.env.NODE_ENV === 'production';

const cssName = PRODUCTION ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]';
const config = {
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
        use: ExtractTextPlugin.extract({
          use: [
            `css-loader?modules&importLoaders=1&localIdentName=${cssName}&minimize=true`,
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
    new DefinePlugin({
      PRODUCTION: JSON.stringify(PRODUCTION),
      API_HOST: JSON.stringify(PRODUCTION ? 'https://api.tylerandsarah.com' : 'http://localhost:3000'),
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[hash].css',
      ignoreOrder: false,
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
