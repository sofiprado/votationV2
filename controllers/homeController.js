let self = {}

const imageService = require('../services/imageService')
const imgsArray = imageService.imgsArray

self.home = function(req, res, next) {
  
  res.render('index', {data: imgsArray}
  )
}

module.exports = self;





