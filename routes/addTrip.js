/**
 * Route for Trip
 * 
 * There are many fields for this route and as such there are error checking 
 * in case the fields were left blank. For example, not every trip may take
 * an airplane in which case, when the add trip button is placed, a empty string 
 * should not be inserted into the flights table. This logic is used for all 
 * tables in this route
 */

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

    if (!(empty(sourceCountry) || empty(sourceState) ||
        empty(sourceCity) || empty(sourceDate) ||
        empty(sourceTime) || empty(sourceLocationID) ||
        empty(sourceID))) {

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
    }

    if (!(empty(destCountry) || empty(destState) ||
        empty(destCity) || empty(destDate) ||
        empty(destTime) || empty(destLocationID) ||
        empty(destinationID))) {
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
    }


    if (!(empty(sourceID) || empty(sourceLocationID) ||
        empty(sourceDate) || empty(sourceTime))) {

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
    }


    if (!(empty(destinationID) || empty(destLocationID) ||
        empty(destDate) || empty(destTime))) {
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
    }

    if (!(empty(groupID) || empty(purposeVar) ||
        empty(sizeVar) || empty(activityVar))) {
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
    }


    if (!(empty(busTKNumber) || empty(busPrice))) {
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
    }


    if (!(empty(cruiseTKNumber) || empty(cruiseNumber) ||
        empty(cruiseClass) || empty(cruisePrice))) {
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
    }

    if (!(empty(flightTKNumber) || empty(flightNumber) ||
        empty(flightClass) || empty(flightPrice))) {
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
    }


    if (!(empty(carVIN) || empty(carType) ||
        empty(carPrice))) {
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
    }

    if (!(empty(placeName) || empty(discount) ||
    empty(ratePerNight) || empty(accommodationType))) {
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
    }

    if (!(empty(tripID) || empty(sourceID) ||
    empty(destinationID) || empty(sourceDate) ||
    empty(sourceTime) || empty(groupID))) {
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
    }

    if (!(empty(sourceCity) || empty(destCity))) {
    knex('TripsDetail').insert({
        userID: req.cookies.userID,
        tripDetailID: Math.floor(Math.random() * 99999),
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
    }

    res.status(200).send({ status: 'ok' });

});

function empty(data) {
    if (typeof (data) == 'number' || typeof (data) == 'boolean') {
        return false;
    }
    if (typeof (data) == 'undefined' || data === null) {
        return true;
    }
    if (typeof (data.length) != 'undefined') {
        return data.length == 0;
    }
    var count = 0;
    for (var i in data) {
        if (data.hasOwnProperty(i)) {
            count++;
        }
    }
    return count == 0;
}

module.exports = router;