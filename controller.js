
const twit = require('./config/twitter.config');

var Controller = function () { };

// static methods
Controller.list = function (req, res) {
  twit.get('search/tweets', { q: '55_kumamon' },
    function (err, tweets, response) {
      res.json(tweets);
    });
};

module.exports = Controller;
