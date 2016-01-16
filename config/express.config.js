
/**
 * config/express.config.js: Load and start the http server.
 */

const http    = require('http'),
      express = require('express');

const app = express();

require('../router')(app);

module.exports = http.createServer(app);
