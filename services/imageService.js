let self = {}

 self.imgsArray = [
  {
    img: "https://ih0.redbubble.net/image.7218954.2821/flat,1000x1000,075,f.jpg",
    title: "Firenze",
    id: 1,
    likes: 0
  },
  {
    img: "https://cdn.supadupa.me/shop/8962/images/727861/il_fullxfull.317683574_massive.jpg?1356746522",
    title: "Playa",
    id: 2,
    likes: 0
  },
  {
    img: "https://1.bp.blogspot.com/-U49MC-eDm3c/V5JN_ECoWDI/AAAAAAAABMA/ExKbiwGSi1s5Rvz9JeeYBa0gyCan2QBzACLcB/s1600/Pala%2Bde%2BVernel.sm.jpg",
    title: "Montañas",
    id: 3,
    likes: 0
  }]


  self.agregar = function(data){ 
    const findId = this.imgsArray.length
    const newIds = this.imgsArray[findId-1].id 
   // console.log(this)
  this.imgsArray.unshift({
    img: data.imagen,
    title: data.nombre,
    id: newIds +1,
    likes: 0
  });
 return this.imgsArray 
}

self.update = function(id){ 
let likes = 0 
for (var i = 0; i < this.imgsArray.length; i++) {
  if (this.imgsArray[i].id == id) { 
  //  console.log(data[i])
    this.imgsArray[i]['likes'] = parseInt(this.imgsArray[i]['likes']) + 1
   // console.log(data[i])
    likes = this.imgsArray[i]['likes']
  }
} return likes
}

self.dinamic = function(id) {
  let dinamicId = id
let nuevaVista = ''
//console.log(dinamicId)
  for (var i = 0; i < this.imgsArray.length; i++) {
  //  console.log('holaaa')
    if (this.imgsArray[i].id == dinamicId) {
          console.log(this.imgsArray[i])
          nuevaVista = this.imgsArray[i]
    }
  } return nuevaVista
}

module.exports = self;