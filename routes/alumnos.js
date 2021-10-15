var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/alumnos', function(req, res, next) {
  res.render('alumnos', { title: 'Express' });
});

/* post home page. */
router.post('/alumnos', function(req, res, next) {
  var personal= req.body.personal

  res.render('alumnos', { personal });
});

module.exports = router;