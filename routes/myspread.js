// My Spread Page
//var users = require('../models/_replace_with_needed_collections');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    response.render('myspread', {});
};