// Profile page: try to add new message
var messages = require('../models/messages');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {

    var loggedin_username = request.session.username;
    
    // Get new post information if it's there
    var recipient = validator.escape(request.body.recipient);
    var subject = validator.escape(request.body.subject);
    var body = validator.escape(request.body.body);
    var timestamp = new Date();
    
    // Add the new message to messages collection
    messages.send_message(loggedin_username,recipient,subject, timestamp, body, function() {
        response.redirect('/inbox');
    });  
};