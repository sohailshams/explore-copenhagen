require('dotenv').config({ path: './.env' }); 
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const api_key = process.env.KEY;

module.exports = {
entry: './assets/js/script.js',
  output: {
    
    filename: 'bundle.js',
    
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
    ]
  },
  devServer: {
    contentBase: "./assets/",
   
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './assets/index.html',
      filename: 'index.html',
      inject: 'body',
      inlineSource: 'output.bundle.js',
  
      apiUrl: `https://maps.googleapis.com/maps/api/js?key=${api_key}&libraries=places`,

    }),
    new Dotenv()
  ]
}

