var express = require('express');
var router = express.Router();
var knex = require('../mysql');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('user');
});

router.get('/username', function (req, res, next) {

  var name = req.cookies.name;

  res.json({ name: name });

});

router.get('/getUsers', function (req, res, next) {

  var processedUsers = [];

  knex.select().table('Users')
    .asCallback(function (err, users) {

      var userJSON;

      if (!err) {

        users.forEach(user => {

          console.log(user);
          var x = JSON.stringify(user);

          x = JSON.parse(x);

          var ID = x['userID'];
          var first = x['FirstName'];
          var last = x['LastName'];

          userJSON = {
            'ID': ID,
            'first': first,
            'last': last
          }

          processedUsers.push(userJSON);

        });

        res.status(200).json(processedUsers);

      }
      else {
        res.status(200).send({ status: 'error' });
      }

    });


});


router.delete('/deleteUser/:id', function (req, res) {

  var userToDelete = req.params.id;
  console.log(userToDelete);

  knex('Employees')
    .where({
      userID: userToDelete
    })
    .del()
    .asCallback(function (err) {

      if(err){

        console.log('ERROR DELETING EMPLOYEE');
        console.log(err);
        //res.status(200).send({ msg: 'ERROR DELETING EMPLOYEE' });

      }
      else{
        console.log('EMPLOYEE DELETED');
        //res.status(200).send({ msg: 'ok' });

      }

    });

    knex('Reviews')
    .where({
      userID: userToDelete
    })
    .del()
    .asCallback(function (err) {

      if(err){

        console.log('ERROR DELETING REVIEW');
        console.log(err);
        //res.status(200).send({ msg: 'ERROR DELETING REVIEW' });

      }
      else{
        console.log('REVIEW DELETED');
        //res.status(200).send({ msg: 'ok' });

      }

    });

    knex('Trips')
    .where({
      userID: userToDelete
    })
    .del()
    .asCallback(function (err) {

      if(err){

        console.log('ERROR DELETING TRIP');
        console.log(err);
        //res.status(200).send({ msg: 'ERROR DELETING TRIP' });

      }
      else{
        console.log('TRIP DELETED');
        //res.status(200).send({ msg: 'ok' });

      }

    });

    knex('TripsDetail')
    .where({
      userID: userToDelete
    })
    .del()
    .asCallback(function (err) {

      if(err){

        console.log('ERROR DELETING TRIP DETAIL');
        console.log(err);
        //res.status(200).send({ msg: 'ERROR DELETING TRIP DETAIL' });

      }
      else{
        console.log('TRIP DETAIL DELETED');
        //res.status(200).send({ msg: 'ok' });

      }

    });

    knex('Payments')
    .where({
      userID: userToDelete
    })
    .del()
    .asCallback(function (err) {

      if(err){

        console.log('ERROR DELETING PAYMENT INFO');
        console.log(err);
        //res.status(200).send({ msg: 'ERROR DELETING PAYMENT INFO' });

      }
      else{
        console.log('PAYMENT INFO DELETED');
        //res.status(200).send({ msg: 'ok' });

      }

    });

  knex('Users')
    .where({
      userID: userToDelete
    })
    .del()
    .asCallback(function (err) {

      if(err){

        console.log('ERROR DELETING USER');
        console.log(err);
        res.status(200).send({ msg: 'ERROR DELETING USER' });

      }
      else{
        console.log('USER DELETED');
        res.status(200).send({ msg: 'ok' });

      }

    });
});

module.exports = router;
