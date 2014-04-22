// Registration page: try to register
//var users = require('../models/users');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    response.render('registration', {});
};