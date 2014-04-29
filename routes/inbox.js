//var users = require('../models/_replace_with_needed_collections');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    var loggedin_username = request.session.username;
    
    response.render('inbox', {username:loggedin_username});
};