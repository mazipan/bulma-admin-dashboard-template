const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
})

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/bulma-admin-dashboard-template',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    quiet: true,
    compress: true,
    open: true,
    port: 4000,
    contentBase: path.join(__dirname, ""),
    index: 'index.html',
    publicPath: "/bulma-admin-dashboard-template/dist/",
    openPage: 'bulma-admin-dashboard-template/index.html',
    proxy: {
      "/bulma-admin-dashboard-template": {
        target: "http://localhost:4000",
        bypass: function(req, res, proxyOptions) {
          let view = req.url.replace('/bulma-admin-dashboard-template', '')
          return view;
        }
      }
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    extractSass,
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ])
}