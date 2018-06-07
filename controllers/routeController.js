const imageService = require('../services/imageService')

let self = {}


self.dinamicRoutes = function(req, res) {
  const id = req.params.id

  const oneImg = imageService.dinamic(id)
  //console.log(oneImg)
  res.render('dinamic', {data: oneImg})
}

module.exports = self;