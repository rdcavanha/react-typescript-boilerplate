import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration, WebpackOptionsNormalized } from 'webpack';

const createConfiguration = (_: unknown, options: WebpackOptionsNormalized): Configuration => {
  const isDev = options.mode !== 'production';

  return {
    entry: './src/index',
    devtool: isDev ? 'source-map' : false,
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
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

export default createConfiguration;
