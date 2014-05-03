// Spread Homepage
var videos = require('../models/videos');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    var loggedin_username = request.session.username;
    
    var category = 'comedy';
    
    videos.randomVideo(category, function(video1) {
        if (video1) {
            response.render('home', {username:loggedin_username, video:video1});
        } else {
            // Render default video
            var default_vid = {title:'Doom.', url:"//www.youtube.com/embed/FiARsQSlzDc"};
            response.render('home', {username:loggedin_username, video:default_vid});
        }
    });
    
    //response.render('home', {username:loggedin_username, primary_video_url:primary_video_url});
};