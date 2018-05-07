var express = require('express');
var router = express.Router();
var knex = require('../mysql');

router.post('/', function (req, res, next) {

    var userID = req.cookies.userID;
    var reviewTxt = req.body.reviewTxt;

    knex('Payment').insert({
        userID : userID,
        reviewID : Math.floor(Math.random() * 99999),
        reviewTxt : reviewTxt
    })
    .asCallback(function(err) {
        if (!err) {
            console.log('ERROr:' + err)
            console.log('ADDED REVIEW')
            console.log(err);
            res.status(200).send({ status: 'ok' });
        }
        else {
            console.log('ERROr:' + err)
            console.log('ERROR WITH ADDING REVIEW')
            res.status(200).send({ status: 'error' });
        }
    });
});

module.exports = router;