/**
 * Route for Payment
 * 
 * The UserID is stored as a cookie and the other fields are taken from the request
 * 
 * The fields are then inserted into the Payments table
 */

var express = require('express');
var router = express.Router();
var knex = require('../mysql');

router.post('/', function (req, res, next) {

    var userID = req.cookies.userID;
    var creditCardNumber = req.body.cardNum;
    var securityCode = req.body.secNum;
    var expirationDate = req.body.expDate;
 
    knex('Payments').insert({
        userID : userID,
        paymentID : Math.floor(Math.random() * 99999),
        cardNumber: creditCardNumber,
        securityNumber: securityCode,
        expDate: expirationDate,
    })
    .asCallback(function(err) {
        if (!err) {
            console.log('ERROr:' + err)
            console.log('ADDED Payment!!')
            console.log(err);
            res.status(200).send({ status: 'ok' });
        }
        else {
            console.log('ERROr:' + err)
            console.log('ERROR WITH ADDING Payment!')
            res.status(200).send({ status: 'error' });
        }
    });

});

module.exports = router;