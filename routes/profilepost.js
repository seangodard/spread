// Profile page: try to add new post
var users = require('../models/users');
var posts = require('../models/posts');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {

    var loggedin_username = request.session.username;
    
    // Get new post information if it's there
    var subject = validator.escape(request.body.subject);
    var body = validator.escape(request.body.body);
    var timestamp = new Date();
    
    // Add the new post to the posts collection
    posts.add_post(loggedin_username, timestamp, subject, body, function() {
        response.redirect('/profile/'+loggedin_username);
    });  
};