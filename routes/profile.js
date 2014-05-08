// Registration page: try to register
var users = require('../models/users');
var videos = require('../models/videos');
var posts = require('../models/posts');
var validator = require('validator');


// should pass also whether or not the user is logged in, specifically to instruct which header to use

module.exports = function(request, response) {
    var loggedin_username = request.session.username;
    
    var url = request.url;
    var index = url.lastIndexOf("/");
    var profile_username = url.substring(index+1);
    var retrieved_user;
    
    
    // Call retrieve_user to get the user's information from the users collection
    users.retrieve_user(profile_username, function(user) {
        
        retrieved_user = user;
        
        // Call retrieve_posts to display the user's posts
        posts.retrieve_posts(profile_username, function(allposts) {
                
            // Get the profile owner's promoted video
            videos.findPromotedVideo(profile_username, function(promoted_video) {
                
                response.render('profile', {username: loggedin_username, user:retrieved_user, posts:allposts, promoted_video:promoted_video});
            
            });
        });
    });

};

