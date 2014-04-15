// Database functions
var mongojs = require('mongojs');

// Connect to the database spreadapp, collection: posts
var db = mongojs('spreadapp', ['posts']);

// Add a new post
module.exports.add_post = function(username, timestamp, subject, body, callback) {
    db.posts.insert({username:username, timestamp:timestamp, subject:subject, body:body}, function(error) {
        if (error) throw error;
    });
    callback();
};

// Retrieve posts
module.exports.retrieve_posts = function (username, callback) {
    db.posts.find({username:username}, function(error,posts) {
        if (error) throw error;
        callback(posts);
    });
};

// Edit a post
module.exports.edit_post = function(username, timestamp, newsubject, newbody, callback) {
    db.posts.update({username:username,timestamp:timestamp},{$set: {subject:newsubject, body:newbody}}, function(error) {
        if (error) throw error;
        callback();
    });
};

// Delete a post
module.exports.delete_post = function(username, timestamp, callback) {
    db.posts.remove({username:username, timestamp:timestamp},{justOne:true}, function(error) {
        if (error) throw error;
        callback();
    });
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