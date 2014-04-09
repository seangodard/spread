// Database functions
var mongojs = require('mongojs');
var bcrypt = require('bcrypt');

// Connect to the database spreadapp, collection: users
var db = mongojs('spreadapp', ['users']);

// Add User: username, password, firstname, lastname, email
// Optional: promoted video url, pic, bio
module.exports.adduser = function(username, password, first_name, last_name, email, promoted_video_url, pic, bio, callback) {    
    bcrypt.hash(password, 10, function(error,hash) {
        if (error) throw error;
        
        // Find and create or modify a new or existing user
        db.users.findAndModify({
            query: {username:username},/*search criteria*/
            /*field to change*/
            update: {$setOnInsert:{username:username, password:hash,first_name:first_name,last_name:last_name, email:email, promoted_video_url:promoted_video_url, pic:pic, bio:bio}},
            /*says to return modified version*/
            new: true,
            /*create a new document if there wasn't one*/
            upsert: true
            
        }, function(error, user) {
            if (error) throw error;
            
            // Checks each field to make sure that they match
            callback(user.username == username &&
                     user.password == hash &&
                     user.first_name == first_name &&
                     user.last_name == last_name &&
                     user.email == email &&
                     user.promoted_video_url == promoted_video_url &&
                     user.pic == pic &&
                     user.bio == bio);
        });    
    });
};

// Delete all users in collection
module.exports.deleteAll = function(callback) {
    db.users.remove({}, function(error) {
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

// Verify credentials for login
module.exports.retrieve = function(username, password, callback) {
    
    db.users.findOne({username:username}, function(error, user) {
        if (error) throw error;
        
        if (!user) {
            callback(false);
        }
        
        else {
            bcrypt.compare(password, user.password, function(error, success) {
                if (error) throw error;
                
                callback(success);
            })
        }
    });
};