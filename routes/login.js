/**
 * Route for Login
 * 
 * This is used to validate a users login information
 */

var express = require('express');
var router = express.Router();
var knex = require('../mysql');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Travel Agency' });
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var name;
    var userID;

    console.log("Finding email: " + email + " password: " + password);

    knex('Users').where({
        email: email,
        password: password
        //password: password
    }).asCallback(function (err, users) {
        if (!err && (users[0] != undefined)) {
            console.log('FOUND USER');
            res.cookie('email', email);

            var userData = JSON.stringify(users[0]);
            userData = JSON.parse(userData);

            name = userData['FirstName'];
            userID = userData['userID'];

            res.cookie('name', name);
            res.cookie('userID', userID);

            res.status(200).send({ status: 'ok' });

        }
        else {
            //console.log(err)
            console.log("USER DOES NOT EXIST");
            res.status(200).send({ status: 'error' });
        }
    })
});

module.exports = router;