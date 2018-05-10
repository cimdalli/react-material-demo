const path = require('path')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const common = require('./webpack.common.js')

const output = 'docs'

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, output),
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        mangle: {
          keep_fnames: true,
        },
      },
    }),
    new TransferWebpackPlugin([{ from: 'public' }]),
  ],
})
