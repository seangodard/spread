var users = require('../models/users');
var videos = require('../models/videos');
var posts = require('../models/posts');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use

module.exports = function(request, response) {
    var loggedin_username = request.session.username;
    
    // Call retrieve_user to get the user's information from the users collection
    users.retrieve_user(function(user) {
        response.render('manageaccount', {user:user});
    });
    
    users.change_password(loggedin_username, password, function(){
    
    });
    
    // Call add_post to add a new post to the posts collection
    users.update_bio(loggedin_username, timestamp, subject, body, function(){
        
    });
    
    users.update_email()
    
    // Call retrieve_posts to display the user's posts
    posts.retrieve_posts(loggedin_username, function(allposts) {
        response.render('profile', {post:allposts});
    });
    
    
};
