//var users = require('../models/_replace_with_needed_collections');
var validator = require('validator');
var inbox = require('../models/messages');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    var loggedin_username = request.session.username;

    inbox.retrieve_inbox(loggedin_username,function(allMessages) {
        response.render('inbox', {username:loggedin_username,inbox:allMessages});
        //response.render('inbox', {inbox:allMessages});
    });   
};


