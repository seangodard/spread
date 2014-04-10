// Database functions
var mongojs = require('mongojs');

// Connect to the database spreadapp, collection: videos
var db = mongojs('spreadapp', ['videos']);

/* Change promoted video: takes in a username and a url
 * Searches the database for all videos owned by the user
 * and sets the promoted field of that url to false and
 * resets all other promted fields for the users videos to false */
module.exports.change_promoted_video = function(username, url, callback) {
    
};

// Post new video: username, url, length, title, view_count, shares_needed
// likes, favorites, flagged, category, promoted
// Optional: promoted video url, pic, bio
module.exports.post_new_video = function(username, url,length,title,
    view_count,shares_needed,likes,favorites,flagged,category,promoted,
    callback) {
    
    // check if the video already exists
    db.videos.findOne({username:username,url:url}, function(error, video){
        if (error) throw error;
        
        
        if (!video) {
            // Find and create or modify a new or existing video
            db.videos.findAndModify({
                query: {username:username,url:url},/*search criteria*/
                /*field to change*/
                update: {$setOnInsert:{username:username, url:url,
                length:length,view_count:view_count,shares_needed:shares_needed,
                likes:likes, favorites:favorites, flagged:flagged,
                category:category,promoted:promoted}},
                /*says to return modified version*/
                new: true,
                /*create a new document if there wasn't one*/
                upsert: true
                
            }, function(error, user) {
                if (error) throw error;
                
                // Checks each field to make sure that they match
                callback(video.username === username &&
                         video.url === url &&
                         video.length === length &&
                         video.title === title &&
                         video.view_count === view_count &&
                         video.shares_needed === shares_needed &&
                         video.likes === likes &&
                         video.favorites === favorites &&
                         video.flagged === falgged &&
                         video.category === category &&
                         video.promoted === promoted);
            });
           
        }
        
        // if it is there return false
        else {
             callack(false);
        }   
    });
};

module.exports.delete()

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

