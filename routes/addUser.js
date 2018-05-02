var express = require('express');
var router = express.Router();
var knex = require('../mysql');

router.post('/addUser', function (req, res) {
  console.log('Posting User ' + req.body.firstName + ' ' + req.body.lastName);
  knex('users').insert([{firstName: req.body.firstName}, {lastName: req.body.lastName}]);
});

module.exports = router;
