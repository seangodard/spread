// Database functions
var mongojs = require('mongojs');
var bcrypt = require('bcrypt');

// Connect to the database spreadapp, collection: users
var db = mongojs('spreadapp', ['videos']);

// Add User: username, password, firstname, lastname, email
// Optional: promoted video url, pic, bio
module.exports.post_new_video = function(username, password, first_name,
        last_name, email, promoted_video_url, pic, bio, callback) {    
    bcrypt.hash(password, 10, function(error,hash) {
        if (error) throw error;
        
        // Find and create or modify a new or existing user
        db.users.findAndModify({
            query: {username:username},/*search criteria*/
            /*field to change*/
            update: {$setOnInsert:{username:username, password:hash,
            first_name:first_name,last_name:last_name, email:email,
            promoted_video_url:promoted_video_url, pic:pic, bio:bio}},
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