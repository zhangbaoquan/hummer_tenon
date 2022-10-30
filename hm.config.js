const path = require('path')
module.exports = {
  type: 'hummer',
  webpack: {
    entries: "src/index/index2.ts",
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "[name].js"
    },
    plugins: []
  }
}