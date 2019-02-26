var mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
});



var Tweet = module.exports = mongoose.model('tweets', tweetSchema);

module.exports.get = function (callback, limit) {
    Tweet.find(callback).select("-_class");
}



// module.exports.get = function(req, res, next) {
//     //query with mongoose
//     var query = dbSchemas.SomeValue.find({}).select({ "name": 1, "_id": 0});

//     query.exec(function (err, someValue) {
//         if (err) return next(err);
//         res.send(someValue);
//     });
// };