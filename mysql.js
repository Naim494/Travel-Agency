var knex = require('knex') ({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'Abstergos2!',
      database : 'travel_agency'
    },
    debug: true
});

if(knex)
    console.log('Connected to mysql db!')
else console.log('Connection failed')

module.exports = knex;
