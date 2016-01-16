
/**
 * app.js: Main entrance.
 */

const server = require('./config/express.config'),
      twit   = require('./config/twitter.config');
      io     = require('socket.io')(server);

var PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log('Express server listen at %d ...', PORT);
});
