var express = require('express');
var router = express.Router();
var knex = require('../mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.clearCookie('name');
    res.clearCookie('email');
    res.clearCookie('userID');
    res.render('index');
  });
  
  router.post('/', function(req, res, next) {
    res.clearCookie('username');
    res.status(200).json({
      status: 'OK'
    });
  });
  

module.exports = router;