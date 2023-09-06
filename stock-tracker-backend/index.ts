const db = require('./db');
const runBootServer = require('./src/utils/bootServer');
db.raw('SELECT 1')
  .then(runBootServer)
  .catch(err => {
    console.log('Error connecting to PostgreSQL:', err);
  });
