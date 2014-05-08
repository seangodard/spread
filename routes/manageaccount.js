var users = require('../models/users');
var videos = require('../models/videos');
var posts = require('../models/posts');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use

module.exports = function(request, response) {
    
    var loggedin_username = request.session.username;
    // Get info for update picture
    var new_picture = validator.escape(request.session.new_picture);
    
    // Get info for update email
    var new_email = validator.escape(request.session.new_picture);
    
    // Get info for adding a new video
    var video_url = validator.escape(request.session.video_url);
    var view_count = 0;
    var shares_needed = 0;
    var category = validator.escape(request.session.video_category);
    var promoted = false;
    
    // get these automatically via video url????
        var length;
        var title = validator.escape(request.session.video_title);
        var thumbnail;
    
    // Get info for editing a post
    var new_subject = validator.escape(request.body.new_subject);
    var new_body = validator.escape(request.body.new_body);
    
    // Call retrieve_user to get the user's information from the users collection
    users.retrieve_user(loggedin_username, function(user) {

        // retrieve all of the user's videos taht they have posted
        videos.findAllVideos(loggedin_username, function(allvideos) {
            
            // Call retrieve_posts to display the user's posts
            posts.retrieve_posts(loggedin_username, function(allposts) {
                
                response.render('manageaccount', {username:loggedin_username, user:user, posts:allposts, videos:allvideos});
                
            });
        });
    });
    
};
