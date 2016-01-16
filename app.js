
/**
 * app.js: Main entrance.
 */

const server = require('./config/express.config'),
      twit   = require('./config/twitter.config');
      io     = require('socket.io')(server);

server.listen(3000, function () {
  console.log('Express server listen at 3000 ...');
});
