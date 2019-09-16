var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

const homeController = require('../controllers/homeController.js')

const clickController = require('../controllers/clickController.js')

const addController = require('../controllers/addController.js')

const inputsController = require('../controllers/inputsController.js')

const routeController = require('../controllers/routeController.js')


router.get('/home', homeController.home) 

router.put('/home', clickController.update)

router.post('/agregar', addController.agregar)

router.get('/agregar', addController.agregar)

router.get('/inputs', inputsController.newInputs)

router.get('/hola/:id', routeController.dinamicRoutes)


module.exports = router;


