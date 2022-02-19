const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (_, options) => {
  const isDev = options.mode !== 'production';

  return {
    entry: './src/index',
    devtool: isDev ? 'source-map' : false,
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.[contenthash].js',
    },
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
