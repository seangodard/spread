// Registration page: try to register
var users = require('../models/users');
var posts = require('../models/posts');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {

    var loggedin_username = request.session.username;
    
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
    
    // Add the new post to the posts collection
    posts.add_post(loggedin_username, timestamp, subject, body, function(success) {
        if (success) {
            response.redirect('/profile');
        }
        else {
            request.session.error = 'Post could not be made.';
            response.redirect('/profile');
        }
    });  
};