const path = require('path');
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');

const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins:[
    new HtmlWebPackPlugin({
      template: path.resolve( __dirname, 'public/index.html' ),
      filename: 'index.html',
      favicon: 'public/favicon.ico',
      title: 'Spotify Challenge',
      'meta': {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#1DB954'
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'CLIENT_ID': JSON.stringify(dotenv.parsed.CLIENT_ID),
      }
    }),
  ],
  module:{
    rules:[
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true
                  }
                }
              ],
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  }
};
