const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")

const SRC = path.resolve(__dirname, 'src');
const NODE_ENV = process.env.NODE_ENV;

const isDev = () => {
  return (NODE_ENV === 'development');
};

const setPublicPath = () => {
  return isDev() ? '/' : '/bulma-admin-dashboard-template/';
};

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
};

function extractHTML (templateFileName) {
  return new HtmlWebpackPlugin({
    filename: `${templateFileName}.html`,
    inject: true,
    template: setPath(`/src/${templateFileName}.ejs`),
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      html5: true,
      minifyCSS: true,
      removeComments: true,
      removeEmptyAttributes: true
    },
    environment: process.env.NODE_ENV
  });
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: isDev() ? path.resolve(__dirname) : setPath('dist'),
    publicPath: setPublicPath(),
    filename: isDev() ? '[name].js' : '[name].[hash].js'
  },
  mode: isDev() ? 'development' : 'production',
  optimization:{
    runtimeChunk: false,
    splitChunks: {
      chunks: "all",
    }
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': SRC
    }
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (isDev() || NODE_ENV === 'staging'),
        NODE_ENV: '"'+NODE_ENV+'"'
      }
    }),
    extractHTML('index'),
    extractHTML('forms'),
    extractHTML('presentations'),
    extractHTML('tables'),
    extractHTML('ui-elements'),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
    new CopyPlugin([
      { from: 'src/logo.png', to: '.' }
    ]),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ]
}
