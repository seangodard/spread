// Database functions
var mongojs = require('mongojs');

// Connect to the database spreadapp, collection: videos
var db = mongojs('spreadapp', ['videos']);

// Change promoted video

// Add video

// Delete all videos in collection
module.exports.deleteAll = function(callback) {
    db.videos.remove({}, function(error) {
        if (error) throw error;
        callback();
    });
};

// Close the connection
module.exports.close = function(callback) {
    db.close(function(error) {
        if (error) throw error;
        callback();
    });
}
