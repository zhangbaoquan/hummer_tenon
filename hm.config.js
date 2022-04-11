const path = require('path')
module.exports = {
  type: 'hummer',
  webpack: {
    entries: "src/**/test1.ts",
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "[name].js"
    },
    plugins: []
  }
}