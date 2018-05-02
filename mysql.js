var knex = require('knex') ({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'password',
      database : 'Travel_Agency'
    },
    debug: true
});

if(knex)
    console.log('Connected to mysql db!')
else console.log('Connection failed')

module.exports = knex;
