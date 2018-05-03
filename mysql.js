var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Abstergos2!',
        database: 'travel_agency'
    },
    debug: true
});

knex.schema.hasTable('Users').then(function (exists) {
    if (!exists) {
        createAllTables()
    }
    else {
       // console.log(knex.column('firstname', 'lastname', 'age').select().from('Users'));

    }
});

function createAllTables() {
    knex.schema.createTable('Users', function (table) {
        table.integer('SSN').primary().unique();
        table.date('dob').notNullable();
        table.string('FirstName').notNullable();
        table.string('LastName').notNullable();
        table.string('Gender');
        table.integer('age').notNullable()
        table.string('email').unique().notNullable()
        table.string('password').notNullable();
    })

        .createTable('Passengers', function (table) {
            table.integer('PassengerID').primary().unique().notNullable();
            table.integer('SSN').references('Users.SSN');
        })

        .createTable('Employees', function (table) {
            table.integer('employeeID').primary().unique().notNullable();
            table.integer('SSN').references('Users.SSN').notNullable();
            table.date('dateHired').notNullable();
            table.integer('salary').notNullable();
            table.string('role');
        })

        .createTable('Flights', function (table) {
            table.integer('TKNumber').primary().notNullable();
            table.integer('flightNumber').unique().notNullable();
            table.string('Class').notNullable();
        })

        .createTable('Car_rentals', function (table) {
            table.integer('VIN').primary().notNullable();
            table.string('CarRent').notNullable();
            table.string('CarType').notNullable();
            table.string('Address').notNullable();
        })

        .createTable('Cruises', function (table) {
            table.integer('TKNumber').primary().notNullable();
            table.integer('CruiseNumber').notNullable();
            table.string('Class').notNullable();
        })

        .createTable('Buses', function (table) {
            table.integer('TKNumber').primary().notNullable();
        })

        .createTable('Accommodations', function (table) {
            table.integer('AccommodationID').primary().notNullable();
            table.string('PlaceName').notNullable();
            table.integer('Discount');
            table.integer('ratePerNight').notNullable();
            table.string('accommodationType').notNullable();
        })

        .createTable('Locations', function (table) {
            table.integer('locationID').primary().notNullable();
            table.string('Country').notNullable();
            table.string('State').notNullable();
            table.string('city').notNullable();
        })

        .createTable('Groups', function (table) {
            table.integer('groupID').primary().notNullable();
            table.string('purpose').notNullable();
            table.integer('size').notNullable();
            table.string('activities').notNullable();
        })

        .createTable('Reviews', function (table) {
            table.integer('passengerID').primary().references('Passengers.passengerID').notNullable();
            table.integer('groupID').references('Groups.groupID');
            table.string('detailedReview').notNullable();
            table.integer('rating').notNullable();
        })

        .createTable('Sources', function (table) {
            table.integer('sourceID').primary().notNullable();
            table.date('depart_date').notNullable();
            table.time('depart_time').notNullable();
        })

        .createTable('Destinations', function (table) {
            table.integer('destinationID').primary().notNullable();
            table.date('arrival_date').notNullable();
            table.time('arrival_time').notNullable();
        })

        .createTable('Travel_Type', function (table) {
            table.string('transportationID').primary().unique().notNullable();
            table.integer('price').notNullable();
            table.string('serviceProvider').notNullable();
            table.integer('groupID').references('Groups.groupID');
            table.integer('busTKNumber').references('Buses.TKNumber');
            table.integer('cruiseTKNumber').references('Cruises.TKNumber');
            table.integer('flightTKNumber').references('Flights.TKNumber');
            table.integer('VIN').references('Car_Rentals.VIN');
        })

        .catch(function (e) {
            console.error(e);
        });
}

if (knex) {
    console.log('Connected to mysql db!')

    var users = knex.select('firstname', 'lastname', 'age').from('Users')
}    
else console.log('Connection failed')

var dataArr =[];

knex('Users').select('firstname', 'lastname', 'age').then(function(users){
    //do something here
    console.log(users);
    users.forEach(function(value) {
        dataArr.push(value)
     });
     
     //array of js objects
     console.log(dataArr)

     console.log(dataArr[0])

    //convert js obj to json string
     var myJSON = JSON.stringify(dataArr[0])
     console.log(myJSON)

     //convert json string to json obj
     x = JSON.parse(myJSON)
     
     console.log(x['firstname'])
});



module.exports = knex;
