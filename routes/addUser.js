var express = require('express');
var router = express.Router();
var knex = require('../mysql');

router.post('/', function (req, res, next) {

    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var age = req.body.age;
    var dob = req.body.dob;
    var gender = req.body.gender;
    var ssn = req.body.ssn;
    var email = req.body.email.toLowerCase();
    var password = req.body.password;

    knex('Users').insert({
        UserID: Math.floor(Math.random() * 99999),
        FirstName: firstname,
        LastName: lastname,
        age: age,
        Gender: gender,
        dob: dob,
        SSN: ssn,
        email: email,
        password: password
    })
    .asCallback(function(err) {
        if (err) {
            console.log('ERROR!!')
            console.log(err);
            res.status(200).send({ status: 'error' });
        }
        else {
            console.log('ADDED USER!')
            res.status(200).send({ status: 'ok' });
        }
    })
});



module.exports = router;
