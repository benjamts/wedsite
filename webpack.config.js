var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './index.js'],

  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]_[local]--[hash:base64:8]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('postcss-icss-values'),
                  require('autoprefixer')(),
                ]
              }
            }
          ]
        })
      },
      { test: /\.svg$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
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
    ]
  },

  devServer: {
    inline: false
  },

  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new StaticSiteGeneratorPlugin({ crawl: true })
  ]
}
