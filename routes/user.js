var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user');
});

router.get('/username', function(req, res, next) {

  var name = req.cookies.name;

  res.json({name: name});

});

module.exports = router;
