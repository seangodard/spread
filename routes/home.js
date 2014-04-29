// Spread Homepage
var videos = require('../models/videos');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    var loggedin_username = request.session.username;
    
    var primary_video_url = "//www.dailymotion.com/embed/video/x1r8v42"
    
    /*
    videos.get_random_videos(function(video1,video2,video3) {
        response.render('home', {username:loggedin_username, primary_video:video1, video2:video2, video3:video3});
    });*/
    
    response.render('home', {username:loggedin_username, primary_video_url:primary_video_url});
};