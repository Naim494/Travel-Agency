var express = require('express');
var router = express.Router();
var knex = require('../mysql');

router.get('/get/login', function (req, res, next) {
  console.log('Request for ' + req.query.firstName + ' ' + req.query.lastName);

  if(knex('users').count().where({
  first_name: req.query.firstName,
  last_name:  req.query.lastName
  }) > '0'){
  // User exists in database
} else{
  // User does not exist 
}

});

module.exports = router;
