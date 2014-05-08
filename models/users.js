// Database functions
var mongojs = require('mongojs');
var bcrypt = require('bcrypt');

// Connect to the database spreadapp, collection: users
var db = mongojs('spreadapp', ['users']);

// Add User: username, password, firstname, lastname, email
// Optional: promoted video url, pic, bio
module.exports.adduser = function(username, password, first_name, last_name, email,
                                  promoted_video_url, picture, bio, callback) {    
    bcrypt.hash(password, 10, function(error,hash) {
        if (error) throw error;
        
        // Find and create or modify a new or existing user
        db.users.findAndModify({
            /*search criteria*/
            query: {username:username},
            /*field to change*/
            update: {$setOnInsert:{username:username, password:hash, first_name:first_name,
                    last_name:last_name, email:email, promoted_video_url:promoted_video_url,
                    picture:picture, bio:bio}},
            /*says to return modified version*/
            new: true,
            /*create a new document if there wasn't one*/
            upsert: true
            
        },  function(error, user) {
            if (error) throw error;
            
            callback(user.password === hash);
        
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
/*
// Change password
module.exports.change_password = function(username, old_password, new_password, callback) {
    
    console.log("1 entered old password: "+hash_old);
    
    // Hash the new password
    bcrypt.hash(new_password, 10, function(error, hash_new) {
        if (error) throw error;
        
        // Hash the old password
        bcrypt.hash(old_password, 10, function(error, hash_old) {
            if (error) throw error;
            console.log("1 entered old password: "+hash_old);
            
            // Find the user using their username
            db.users.findOne({username:username}, function(error, user) {
                if (error) throw error;
                console.log('username: '+username);
                
                // compare the hashed new password with the current hashed password
                bcrypt.compare(user.password, hash_old, function(error, success) {
                    if (error) throw error;
                    console.log('2 old password: '+user.password);
                    console.log('3 entered old password: '+hash_old);
            
                    // change the user's password to the new hashed password
                    user.password = hash_new;
                    console.log('current password after change: '+user.password);
                    // save the user
                    db.users.save(user, function(error){
                        if (error) throw error;
                    });  
                    
                });
                callback(user.password === hash_new);
            });
        });
    });
};
*/
// Update bio
module.exports.update_bio = function(username, new_bio, callback) {
    db.users.update({username:username},{$set: {bio:new_bio}}, function(error) {
        if (error) throw error;
        callback(true);
    });
};

// Update profile picture
module.exports.update_picture = function(username, new_picture, callback) {
    db.users.update({username:username},{$set: {picture:new_picture}}, function(error) {
        if (error) throw error;
        callback(true);
    });
};

// Update email
module.exports.update_email = function(username, new_email, callback) {
    db.users.update({username:username},{$set: {email:new_email}}, function(error) {
        if (error) throw error;
        callback(true);
    });
};

// Retrieve the user for getting the user's information on their profile page
module.exports.retrieve_user = function(username, callback) {  
    db.users.findOne({username:username}, function(error, user) {
        if (error) throw error;
        callback(user);
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


