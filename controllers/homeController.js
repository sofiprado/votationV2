let self = {}

 self.data = [
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

self.home = function(req, res, next) {

  res.render('index', {data: self.data}
  )
}

module.exports = self;





