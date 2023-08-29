import {client} from './db';
import {bootServer} from './src/utils/bootServer';
require('dotenv').config();

client
  .connect()
  .then(bootServer)
  .catch(err => {
    console.log('Error connecting to PostgreSQL:', err);
  });
