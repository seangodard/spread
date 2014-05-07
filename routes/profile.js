// Registration page: try to register
var users = require('../models/users');
var videos = require('../models/videos');
var posts = require('../models/posts');
var validator = require('validator');

// Get new post information if it's there
var subject = validator.escape(request.body.subject);
var body = validator.escape(request.body.post);
var currentdate = new Date();
var timestamp = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate() + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


// should pass also whether or not the user is logged in, specifically to instruct which header to use

module.exports = function(request, response) {
    var loggedin_username = request.session.username;
    
    // Call retrieve_user to get the user's information from the users collection
    users.retrieve_user(function(user) {
        response.render('profile', {user:user});
    });
    
    // Call add_post to add a new post to the posts collection
    posts.add_post(loggedin_username, timestamp, subject, body, function(){
        
    });
    
    // Call retrieve_posts to display the user's posts
    posts.retrieve_posts(loggedin_username, function(allposts) {
        response.render('profile', {post:allposts});
    });
    
    
};

