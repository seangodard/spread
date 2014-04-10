// Database functions
var mongojs = require('mongojs');

// Connect to the database spreadapp, collection: videos
var db = mongojs('spreadapp', ['videos']);

/* Change promoted video: takes in a username and a url
 * Searches the database for all videos owned by the user
 * and sets the promoted field of that url to false and
 * resets all other promted fields for the users videos to false */
module.exports.change_promoted_video = function(username, url, callback) {
    var success = false;
    db.find({username:username}, function(error, vids) {
        if (error) throw error;
        vids.forEach(function(video) {
            if (video.url === url) {
                video.promoted = true;
                var success = true;
            } else {
                video.promoted = false;
            }
        });
    });
    
    db.save(vids, function(error){
            if (error) throw error;
    });
    callback(success);
};



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