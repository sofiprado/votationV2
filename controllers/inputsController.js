let self = {}

self.newInputs = function(req, res) {
  res.render('add', {data: self.newInputs})
  }

module.exports = self;  

