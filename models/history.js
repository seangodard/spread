// Database functions
var mongojs = require('mongojs');

// Connect to the database spreadapp, collection: history
var db = mongojs('spreadapp', ['history']);

// Add an item to user's history: only one history item per user url
module.exports.add_item = function(username, video_owner, timestamp, url, callback) {
    db.history.insert({username:username,video_owner:video_owner,timestamp:timestamp,url:url}, function(error) {
        if (error) throw error;
        callback();
    });
};

/*
//--------------------------------------------------------------------------------------

// Toggle Like for a video in the user's history
module.exports.toggleLike = function(username, timestamp, url, callback) {
    db.history.find({username:username, timestamp: {$gte: startrange, $lte:endrange}}, function(error, history) {
        if (error) throw error;
        callback(history);
    });
};

// Toggle Favorite for a video in the user's history
module.exports.toggleFavorite = function(username, timestamp, url, callback) {
    db.history.find({username:username, timestamp: {$gte: startrange, $lte:endrange}}, function(error, history) {
        if (error) throw error;
        callback(history);
    });
};

//--------------------------------------------------------------------------------------
*/

// Retrieve users history within a date range
module.exports.retrieve_range_history = function(username, startrange, endrange, callback) {
    db.history.find({username:username,timestamp: {$gte: startrange, $lte:endrange}}, function(error, history) {
        if (error) throw error;
        callback(history);
    });
};

// Retrieve all users history objects in a list
module.exports.retrieve_all_history = function(username, callback) {
    db.history.find({username:username}, function(error, history) {
        if (error) throw error;
        callback(history);
    });
};

// Delete entire history for a user
module.exports.delete_userhistory = function(username, callback) {
    db.history.remove({username:username}, function(error) {
        if (error) throw error;
        callback();
    });
};

// Delete a list of items from a user's history-----incomplete?
module.exports.delete_userhistory_items = function(username, arrayOfDatesToDelete, callback) {
    arrayOfDatesToDelete.forEach(function(date) {
        db.history.remove({username:username, timestamp: date}, function(error) {
            if (error) throw error;
        });
    });
    callback();
};

// Delete a range of items from a user's history
module.exports.delete_userhistory_range = function(username, startrange, endrange, callback) {
    db.history.remove({username:username, timestamp: {$gte: startrange, $lte:endrange}}, function(error) {
        if (error) throw error;
        callback();
    });
};

// Delete all history in collection
module.exports.deleteAll = function(callback) {
    db.history.remove({}, function(error) {
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