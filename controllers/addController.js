const imageService = require('../services/imageService')

let self = {}

//self.archiveArray = []



self.agregar = function(req, res) {
 const img = imageService.agregar(req.body) // le mando todo el body a la función agregar en service
  res.json(img)
}  

module.exports = self;  


