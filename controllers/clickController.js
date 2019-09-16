const imageService = require('../services/imageService')

let self = {}


self.update = function(req, res) {

  const likes = imageService.update(req.body.id) 

  res.json({likes: likes})   
  }

module.exports = self;

