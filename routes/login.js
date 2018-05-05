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

    console.log("Finding email: " + email + " password: " + password);

    knex('Users').where({
        email: email,
        password: password
        //password: password
    }).asCallback(function (err, users) {
        if (!err) {
            console.log('FOUND USER');
            res.cookie('email', email);

            var userData = JSON.stringify(users[0]);
            userData = JSON.parse(userData);
           
            name = userData['FirstName'];
            res.cookie('name', name);

            res.status(200).send({ status: 'ok' });

        }
        else {
            console.log("USER DOES NOT EXIST");
        
        }
    })
});

module.exports = router;