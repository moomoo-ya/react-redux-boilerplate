const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  devtool: 'inline-source-map',
  entry: './src/app.jsx',
  target: 'web',
  output: { path: __dirname, filename: './dist/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  postcss: () => (
    [stylelint, reporter]
  ),
  devServer: {
    contentBase: '.',
    port: 3000,
  },
};
