const knex = require('knex');
const config = require('./knexfile');

const knexInstance = knex(config);
export default knexInstance;
