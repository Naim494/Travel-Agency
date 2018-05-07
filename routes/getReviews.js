var express = require('express');
var router = express.Router();
var knex = require('../mysql');

router.get('/', function (req, res, next) {

  var processedReviews = [];

  knex.select().table('Reviews')
    .asCallback(function (err, reviews) {

      var reviewJSON;

      if (!err) {

        reviews.forEach(review => {

          console.log(review);
          var x = JSON.stringify(review);

          x = JSON.parse(x);

          //console.log(x);
          var username = x['username'];
          //console.log(x['reviewTxt'])
          var reviewTxt = x['reviewTxt'];

          reviewJSON = {
            'username': username,
            'reviewText': reviewTxt
          }

          processedReviews.push(reviewJSON);

        });

        res.status(200).json(processedReviews);

      }
      else {
        res.status(200).send({ status: 'error' });
      }

    });

});

module.exports = router;