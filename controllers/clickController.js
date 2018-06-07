const imageService = require('../services/imageService')

let self = {}


self.update = function(req, res) {
//console.log('hola')
  const likes = imageService.update(req.body.id) //le mando la info a la función update
//console.log(likes)
 res.json({likes: likes})   
  }

module.exports = self;

