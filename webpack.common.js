const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // externals: [nodeExternals()],
  entry: './src/app.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/public'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
}
