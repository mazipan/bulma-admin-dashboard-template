const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")

const extractSass = new ExtractTextPlugin({
  filename: "main.css",
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
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
  devtool: '#eval-source-map',
  plugins: [
    extractSass
  ]
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
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ])
}
