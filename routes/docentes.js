var express = require('express');
var router = express.Router();

/* GET Docentes */
router.get('/', function(req, res, next) {
  res.render('docentes', { title: 'Docentes' });
});

module.exports = router;