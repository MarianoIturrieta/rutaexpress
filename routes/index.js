var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* post home page. */
router.post('/ingresar', function(req, res, next) {
  var personal= req.body.personal

  res.render('personal', { personal });
});

module.exports = router;