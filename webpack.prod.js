const path = require('path')
const merge = require('webpack-merge')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const common = require('./webpack.common.js')

const output = 'docs'

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, output),
  },
  plugins: [new TransferWebpackPlugin([{ from: 'public' }])],
})
