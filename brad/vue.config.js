// module.exports = {
//   runtimeCompiler: true,
//   outputDir: 'ghP'
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/iambradblackburn/'
  : '/'
}