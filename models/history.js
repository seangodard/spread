// Database functions
var mongojs = require('mongojs');

// Connect to the database spreadapp, collection: history
var db = mongojs('spreadapp', ['history']);

// Add an item to history
module.exports.add_item = function(username, timestamp, url, callback) {
    db.history.insert({username:username,timestamp:timestamp,url:url}, function(error) {
        if (error) throw error;
        callback();
    });
};

// Retrieve history with a date range
module.exports.retrieve_history = function(username, startrange, endrange, callback) {
    
};

// Delete an item from history
module.exports.delete_item = function() {
    
};

// Delete entire history
module.exports.add_history = function() {
    
};

// Delete all posts in collection
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