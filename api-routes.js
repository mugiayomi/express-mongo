let router = require('express').Router();

router.get('/', function(request, response) {
    response.json({
        status: 'API is Working Good',
        message: 'Welcome to RestAPI Dude!!!',
    });
});

var tweetController = require('./tweetController');

router.route('/tweets')
    .get(tweetController.index);
    // .post(tweetController.new);

module.exports = router;