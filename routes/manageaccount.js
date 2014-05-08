var users = require('../models/users');
var videos = require('../models/videos');
var posts = require('../models/posts');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use

module.exports = function(request, response) {
    
    var loggedin_username = request.session.username;
    var error = request.session.error;
    
    if (loggedin_username) {
        // Call retrieve_user to get the user's information from the users collection
        users.retrieve_user(loggedin_username, function(user) {
    
            // retrieve all of the user's videos taht they have posted
            videos.findAllVideos(loggedin_username, function(allvideos) {
                
                // Call retrieve_posts to display the user's posts
                posts.retrieve_posts(loggedin_username, function(allposts) {
                    
                    response.render('manageaccount', {error:error, username:loggedin_username, user:user, posts:allposts, videos:allvideos});
                    
                });
            });
        });
    } else {
        response.redirect('/');
    }
    
    
};
