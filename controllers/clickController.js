const homeController = require('./homeController.js')

let self = {}

const homeData = homeController.data

self.update = function(req, res) {
  let likes = 0 
  for (var i = 0; i < homeData.length; i++) {

    if (homeData[i].id == req.body.id) {
    //  console.log(data[i])
      homeData[i]['likes'] = parseInt(homeData[i]['likes']) + 1
     // console.log(data[i])
      likes = homeData[i]['likes']
    }
  }
  res.json({likes: likes})   
}

module.exports = self;

