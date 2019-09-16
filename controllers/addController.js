const imageService = require('../services/imageService')

let self = {}

self.agregar = function(req, res) {
 const img = imageService.agregar(req.body) 
  res.json(img)
}  

module.exports = self;  


