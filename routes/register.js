// Registration page: try to register
var users = require('../models/users');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {

    // Get the post fields   
    var name = validator.escape(request.body.username);
    var password = validator.escape(request.body.password);
    var first_name = validator.escape(request.body.first_name);
    var last_name = validator.escape(request.body.last_name);
    var email = validator.escape(request.body.email);
    var promoted_video_url = validator.escape(request.body.promoted_video_url);
    var picture = validator.escape(request.body.picture);
    var bio = validator.escape(request.body.bio);
    
    users.adduser(name, password, first_name, last_name, email, promoted_video_url, picture, bio, function(success) {
        // Successful registration redirects to homepage
        if (success) {
            request.session.username = name;
            response.redirect('/');
        }
        // Unsuccessful registartion redirects back to registation page with an error
        else {
            request.session.error = 'Username '+name+' is not available.';
            response.redirect('registration');
            delete request.session.error;
        }            
    });  
};