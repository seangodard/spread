// Database functions
var mongojs = require('mongojs');

// Connect to the database spreadapp, collection: users
var db = mongojs('spreadapp', ['posts']);

// Add a new post
module.exports.add_post = function(username, timestamp, subject, body, callback) {
    var success = true;
    db.posts.insert({timestamp:timestamp, subject:subject, body:body}, function(error) {
        if (error) throw error;
        success = false;
    });
    callback(success);
};

// Delete a post
module.exports.delete_post = function(username, timestamp, subject, body, callback) {
    var success = true;
    db.posts.remove({username:username, timestamp:timestamp, subject:subject, body:body},{justOne:true}, function(error) {
        if (error) throw error;
        success = false;
    });
    callback(success);
};

// Edit a post
module.exports.edit_post = function() {
    
};

// Retrieve posts
module.exports.retrieve_posts = function () {
    
};


// Delete all posts in collection
module.exports.deleteAll = function(callback) {
    db.posts.remove({}, function(error) {
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