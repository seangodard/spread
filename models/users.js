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

// Change Password
module.exports.change_password = function(username, password, new_password, callback) {
    
    bcrypt.hash(new_password, 10, function(error, hash_new) {
        if (error) throw error;
        
        db.users.findOne({username:username}, function(error, user) {
            if (error) throw error;
            
            bcrypt.compare(user.password, hash_new, function(error, success) {
                if (error) throw error;
        
                if (success) {
                    user.password = hash_new;
                    db.users.save(user, function(error){
                        if (error) throw error;
                    });
                };
            });
            
            callback(user.password === hash_new);
        });
    });
};

// Update bio
module.exports.update_bio = function(username, new_bio, callback) {    

    // Find and modify an existing user's bio
    db.users.findOne({username:username}, function(error, user) {
        if (error) throw error;
        
        user.bio = new_bio;
        
        db.users.save(user, function(error){
            if (error) throw error;
            console.log('\n \n \n \n ');
            callback(user.bio === new_bio);
        });
    });
};

// Update profile picture
module.exports.update_picture = function(username, new_picture, callback) {    

    // Find and modify an existing user's bio
    db.users.findAndModify({
        /*search criteria*/
        query: {username:username},
        /*field to change*/
        update: {$setOnInsert:{picture:new_picture}},
        /*says to return modified version*/
        new: true,
        /*create a new document if there wasn't one*/
        upsert: true
        
        }, function(error, user) {
            
            if (error) throw error;
            
            callback(user.picture === new_picture);  
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
        upsert: true
        
        }, function(error, user) {
            if (error) throw error;
            
            callback(user.email === new_email);
               
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


