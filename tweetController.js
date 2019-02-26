let Tweet = require('./tweetModel');

exports.index = function (request, response) {
    Tweet.get(function (err, tweets) {
        if(err) {
            response.json({
                status: "error",
                message: err,
            });
        }
        response.json({
            status: "success",
            message: "Tweets retrieved",
            data: tweets
        });
    });
};

