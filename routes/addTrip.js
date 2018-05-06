var express = require('express');
var router = express.Router();
var knex = require('../mysql');

router.post('/', function (req, res, next) {

    var sourceCountry = req.body.sourceCountry;
    var sourceState = req.body.sourceState;
    var sourceCity = req.body.sourceCity;
    var sourceDate = req.body.sourceDate;
    var sourceTime = req.body.sourceTime;
    var sourceLocationID = Math.floor(Math.random() * 99999);
    var sourceID = Math.floor(Math.random() * 99999);

    var destCountry = req.body.destCountry;
    var destState = req.body.destState;
    var destCity = req.body.destCity;
    var destDate = req.body.destDate;
    var destTime = req.body.destTime;
    var destLocationID = Math.floor(Math.random() * 99999);
    var destinationID = Math.floor(Math.random() * 99999);

    var groupID = Math.floor(Math.random() * 99999);
    var purposeVar = req.body.purpose;
    var sizeVar = req.body.size;
    var activityVar = req.body.activity;

    var busTKNumber = req.body.busTKNumber;
    var busPrice = req.body.busPrice;

    var cruiseTKNumber = req.body.cruiseTKNumber;
    var cruiseNumber = req.body.cruiseNumber;
    var cruiseClass = req.body.cruiseClass;
    var cruisePrice = req.body.cruisePrice;

    var flightTKNumber = req.body.flightTKNumber;
    var flightNumber = req.body.flightNumber;
    var flightClass = req.body.flightClass;
    var flightPrice = req.body.flightPrice;

    var carVIN = req.body.carVIN;
    var carType = req.body.carType;
    var carPrice = req.body.carPrice;

    var placeName = req.body.placeName;
    var discount = req.body.discount;
    var ratePerNight = req.body.ratePerNight;
    var accommodationType = req.body.accommodationType;

    var tripID = Math.floor(Math.random() * 99999);

    knex('Locations').insert({
        locationID: sourceLocationID,
        Country: sourceCountry,
        State: sourceState,
        City: sourceCity
    })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING SOURCE LOCATION')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            } else {
                console.log("SUCCESSFULLY INSERTED SOURCE LOCATION")
            }
        });

    knex('Locations').insert({
        locationID: destLocationID,
        Country: destCountry,
        State: destState,
        City: destCity
    })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING DEST LOCATION')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            } else {
                console.log("SUCCESSFULLY INSERTED DEST LOCATION")
            }
        });

    knex('Sources').insert({
        sourceID: sourceID,
        locationID: sourceLocationID,
        depart_date: sourceDate,
        depart_time: sourceTime
    })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING SOURCE')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            } else {
                console.log("SUCCESSFULLY INSERTED SOURCE")
            }
        });

    knex('Destinations').insert({
        destinationID: destinationID,
        locationID: destLocationID,
        arrival_date: destDate,
        arrival_time: destTime
    })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING DESTINATION')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            } else {
                console.log("SUCCESSFULLY INSERTED DESTINATION")
            }
        });

    knex('Groups').insert({
        groupID: groupID,
        purpose: purposeVar,
        size: sizeVar,
        activities: activityVar
    })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING GROUP')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            } else {
                console.log("SUCCESSFULLY INSERTED GROUP")
            }
        });


    knex('Buses').insert({
        TKNumber: busTKNumber,
        price: busPrice,
    })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING BUS')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            }
            else {
                console.log("SUCCESSFULLY INSERTED BUS")
            }
        });



    knex('Cruises').insert({
        TKNumber: cruiseTKNumber,
        CruiseNumber: cruiseNumber,
        Class: cruiseClass,
        price: cruisePrice
    })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING CRUISE')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            }
            else {
                console.log('SUCCESSFULLY INSERTED CRUISE')
            }
        });

    knex('Flights').insert({
        TKNumber: flightTKNumber,
        flightNumber: flightNumber,
        Class: flightClass,
        price: flightPrice
    })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING FLIGHT')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            }
            else {
                console.log('SUCCESSFULLY INSERTED FLIGHT')
            }
        });

    knex('Car_rentals').insert({
        Vin: carVIN,
        CarType: carType,
        price: carPrice
    })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING CAR RENTAL')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            }
            else {
                console.log('SUCCESSFULLY INSERTED CAR RENTAL')
            }
        });

    knex('Accommodations').insert({
        AccommodationID: Math.floor(Math.random() * 99999),
        PlaceName: placeName,
        Discount: discount,
        ratePerNight: ratePerNight,
        accommodationType: accommodationType
    })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING ACCOMMODATION')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            }
            else {
                console.log('SUCCESSFULLY INSERTED ACCOMMODATION')
            }
        });

        knex('Trips').insert({
            userID: req.cookies.userID,
            tripID: tripID,
            sourceID: sourceID,
            destinationID: destinationID,
            date: sourceDate,
            time: sourceTime,
            groupID: groupID
        })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING TRIP')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            }
            else {
                console.log('SUCCESSFULLY INSERTED TRIP')
            }

        });

        knex('TripsDetail').insert({
            userID: req.cookies.userID,
            tripDetailID: tripID,
            sourceCity: sourceCity,
            destCity: destCity
        })
        .asCallback(function (err) {
            if (err) {
                console.log('ERROR WITH INSERTING TRIP DETAIL')
                console.log(err);
                res.status(200).send({ status: 'error' });
                res.end;
            }
            else {
                console.log('SUCCESSFULLY INSERTED TRIP DETAIL')
            }

        });

    res.status(200).send({ status: 'ok' });

});

module.exports = router;