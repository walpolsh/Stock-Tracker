const knexInstance = require('../db');
const bootServer = require('./utils/bootServer');
knexInstance
  .raw('SELECT 1')
  .then(bootServer)
  .catch(err => {
    console.log('Error connecting to PostgreSQL:', err);
  });
