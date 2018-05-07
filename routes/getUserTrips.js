var express = require('express');
var router = express.Router();
var knex = require('../mysql');

router.get('/', function (req, res, next) {

    var userID = req.cookies.userID;
    var processedTrips = [];

    knex('TripsDetail').where({
        userID: userID
    })
        .asCallback(function (err, trips) {

            var tripJSON;

            if (!err) {
                
                trips.forEach(trip => {

                    console.log(trip);
                    var x = JSON.stringify(trip);

                    x = JSON.parse(x);

                    var from = x['sourceCity'];
                    var to = x['destCity'];

                    tripJSON = {
                        'tripID': x['tripDetailID'],
                        'source': from,
                        'destination': to
                    }

                    processedTrips.push(tripJSON);

                });

                res.status(200).json(processedTrips);
            }
            else {

                res.status(200).send({ status: 'error' });

            }

        });


});

module.exports = router;