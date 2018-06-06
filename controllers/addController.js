const homeController = require('./homeController.js')

let self = {}

//self.archiveArray = []

const homeData = homeController.data
console.log(homeData)
self.agregar = function(req, res) {
  const findId = homeData.length
  const newIds = homeData[findId-1].id 
    
  homeData.unshift({
    img: req.body.imagen,
    title: req.body.nombre,
    id: newIds +1,
    likes: 0
  })

  //homeData.reverse()

  // console.log(homeData) 
  res.json(homeData)
  }

  module.exports = self;  