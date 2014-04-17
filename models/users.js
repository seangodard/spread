// Database functions
var mongojs = require('mongojs');
var bcrypt = require('bcrypt');

// Connect to the database spreadapp, collection: users
var db = mongojs('spreadapp', ['users']);

// Add User: username, password, firstname, lastname, email
// Optional: promoted video url, pic, bio
module.exports.adduser = function(username, password, first_name, last_name, email, promoted_video_url, pic_url, bio, callback) {    
    bcrypt.hash(password, 10, function(error,hash) {
        if (error) throw error;
        
        // Find and create or modify a new or existing user
        db.users.findAndModify({
            query: {username:username},/*search criteria*/
            /*field to change*/
            update: {$setOnInsert:{username:username, password:hash,first_name:first_name,last_name:last_name, email:email, promoted_video_url:promoted_video_url, pic_url:pic_url, bio:bio}},
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
                     user.pic_url == pic_url &&
                     user.bio == bio);
        });    
    });
};

// Verify credentials for login
module.exports.login = function(username, password, callback) {
    
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

// Change Password
// ******** not finished, copied and pasted, needs test code too
module.exports.change_password = function(username, password, new_password, callback) {    
    var verified_password = false;
    
    // Compare the user's password to their password in the database.
    // If there's a match, return true
    bcrypt.compare(password, new_password, function(error, success) {
        if (error) throw error;
        
        callback(verified_password = true);
    });
    bcrypt.hash(new_password, 10, function(error, hash) {
        if (error) throw error;
            
        // Find and modify an existing user's password
        db.users.findAndModify({
            /*search criteria*/
            query: {username:username},
            /*field to change*/
            update: {$setOnInsert:{password:hash}},
            /*says to return modified version*/
            new: true,
            /*create a new document if there wasn't one*/
            upsert: true
            
        }, function(error, user) {
            if (error) throw error;
            
            // Checks each field to make sure that they match
            callback(user.password == hash);
        });
    });
};

// Update bio
module.exports.update_bio = function(username, new_bio, callback) {    

    // Find and modify an existing user's bio
    db.users.findAndModify({
        /*search criteria*/
        query: {username:username},
        /*field to change*/
        update: {$setOnInsert:{bio:new_bio}},
        /*says to return modified version*/
        new: true,
        /*create a new document if there wasn't one*/
        upsert: true
        
        }, function(error, user) {
            if (error) throw error;
            
            callback(user.password == hash);    
    });
};

// Update profile picture
module.exports.update_pic_url = function(username, new_pic_url, callback) {    

    // Find and modify an existing user's bio
    db.users.findAndModify({
        /*search criteria*/
        query: {username:username},
        /*field to change*/
        update: {$setOnInsert:{pic_url:new_pic_url}},
        /*says to return modified version*/
        new: true,
        /*create a new document if there wasn't one*/
        upsert: false
        
        }, function(error, user) {
            if (error) throw error;
            
            callback(user.pic_url == new_pic_url);  
    });
};

// Update email
module.exports.update_email = function(username, new_email, callback) {    

    // Find and modify an existing user's bio
    db.users.findAndModify({
        /*search criteria*/
        query: {username:username},
        /*field to change*/
        update: {$setOnInsert:{email:new_email}},
        /*says to return modified version*/
        new: true,
        /*create a new document if there wasn't one*/
        upsert: false // ???????????????/
        
        }, function(error, user) {
            if (error) throw error;
            
            // 
            callback(user.email == new_email);    
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


