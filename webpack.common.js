const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
};