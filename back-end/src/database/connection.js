const knex = require('knex');
const configuration = require('../../knexfile');

//process.env.NODE_ENV == 'test' ? configuration.test : 

const config = configuration.development;

const connection = knex(config);

module.exports = connection;