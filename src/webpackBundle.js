
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main',
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': 'false',
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      mange: true,
      comments: false,
      compressor: {
        pure_getters: true,
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(process.cwd(), 'src'),
        query: {
          extends: path.join(__dirname, '../.babelrc'),
        },
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
  },
}
