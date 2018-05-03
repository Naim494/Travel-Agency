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
    var email = req.body.email;
    var password = req.body.password;


    knex('Users').insert({
        FirstName: firstname,
        LastName: lastname,
        age: age,
        Gender: gender,
        dob: dob,
        SSN: ssn,
        email: email,
        password: password
    })
    .asCallback(function(err, res) {
        if (err) {
            console.log('ERROR!!')
            console.log(err);
        }
        else {
            console.log('ADDED USER!')
        }
    })


    


});

module.exports = router;