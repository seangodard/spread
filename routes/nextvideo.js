// Spread Homepage
var videos = require('../models/videos');
var history = require('../models/history');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    var url = request.url;
    var index = url.lastIndexOf("/");
    var id = url.substring(index+1);
    
    // Retrieve the video from the url by ID
        if (!video) {
            response.redirect('/error');
        } else {
            request.session.random_cookie_vid;
            response.redirect('/watch/'+video.category);
        }
    });
};