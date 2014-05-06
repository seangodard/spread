// Registration page: try to register
var users = require('../models/users');
var videos = require('../models/videos');
var posts = require('../models/posts');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use

module.exports = function(request, response) {
    var loggedin_username = request.session.username;
    
    users.retrieve_user(function(user) {
        response.render('profile', {user:user});
    });
    
    posts.add_post(function())
};


// Get new post information if it's there
var subject = validator.escape(request.body.subject);
var body = validator.escape(request.body.post);
var currentdate = new Date();
var timestamp = (currentdate.getMonth()+1) + "/"                   // need the current date and time ?????????????????????????????????????????????????????????????
                + currentdate.getDate() + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


// Add a new post to the posts collection
module.exports.add_post(loggedin_username, timestamp, subject, body, function(success) {
    // Successful registration refreshes the user's profile page with the new post in the all posts section
    if (success) {
        response.redirect('/');                                    // need to refresh the current page/profile page of the currently logged in user ??????????????????
    }
    // Unsuccessful registartion redirects back to registation page with an error
    else {
        response.redirect('/');
    }
});


// Retrieves all of the logged in user's posts from the posts collectionSAC 
module.exports.retrieve_posts(loggedin_username, function(success) {



});




/*  
    // retreive the users
    module.exports.retrieve_user_data = function(username, callback) {
        db.users.findOne({username:username}, function(error, user_data) {
            if (error) throw error;
            callback(user_data);
        });
    };
    
    // retreive the users
    module.exports.retrieve_user_posts = function(username, callback) {
        db.users.findOne({username:username}, function(error, user_posts) {
            if (error) throw error;
            callback(user_posts);
        });
    };
    
    // retreive the users
    module.exports.retrieve_user_videos = function(username, callback) {
        db.users.findOne({username:username}, function(error, user_videos) {
            if (error) throw error;
            callback(user_videos);
        });
    };
    
*/
