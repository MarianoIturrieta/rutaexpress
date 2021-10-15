var express = require('express');
var router = express.Router();

/* GET Padres */
router.get('/', function(req, res, next) {
  res.render('padres', { title: 'Padres' });
});

module.exports = router;