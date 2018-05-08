/**
 * Route for Admin Page
 * 
 * The admin page has access to all data from the various users
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('adminPage');
});

module.exports = router;