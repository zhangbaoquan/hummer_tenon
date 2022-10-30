const path = require('path')
module.exports = {
  type: 'hummer',
  webpack: {
    entries: "src/business/broad_order/broadOrderView.ts",
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "[name].js"
    },
    plugins: []
  }
}
