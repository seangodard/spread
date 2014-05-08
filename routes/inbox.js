var validator = require('validator');
var inbox = require('../models/messages');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    var loggedin_username = request.session.username;

    // Redirect a logged in user to home if not signed in
    if (loggedin_username) {
        inbox.retrieve_inbox(loggedin_username,function(allMessages) {
        response.render('inbox', {username:loggedin_username,inbox:allMessages});
    }); 
    } else {
        response.redirect('/');
    }    
};


