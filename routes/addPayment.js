var express = require('express');
var router = express.Router();
var knex = require('../mysql');

router.post('/', function (req, res, next) {

    var userID = req.cookies.userID;
    var creditCardNumber = req.body.creditCardNumber;
    var securityCode = req.body.securityCode;
    var expirationDate = req.body.expirationDate;
 
    console.log('userID '  + userID);
    console.log('creditCardNumber '  + creditCardNumber);
    console.log('securityCode '  + securityCode);
    console.log('expirationDate '  + expirationDate);
 
    knex('Payment').insert({
        userID : userID,
        paymentID : Math.floor(Math.random() * 99999),
        cardNumber: creditCardNumber,
        securityCode: securityCode,
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