// Spread Homepage
//var users = require('../models/_replace_with_needed_collections');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    var loggedin_username = request.session.username;
    var primary_video_url = "//www.youtube.com/embed/iTnwPs7wQY0"

    response.render('home', {username:loggedin_username,primary_video_url:primary_video_url});
};