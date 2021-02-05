module.exports = {
  pluginOptions: {
    svgLoader: {
      svgo: {
        plugins: [{removeViewBox: false}, {removeXMLNS: true}]
      }
    }
  }
}
