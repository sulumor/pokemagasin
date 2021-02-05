module.exports = {
  pluginOptions: {
    svg: {
      external: {}
    },   
    
    svgLoader: {
      svgo: {
        plugins: [{removeViewBox: false}, {removeXMLNS: true}]
      }
    }
  }
}
