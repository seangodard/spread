// Spread Homepage
var videos = require('../models/videos');
var history = require('../models/history');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    // Get the logged in user's username
    var loggedin_username = request.session.username;
    
    // Browsing categories posibilities 
    var categories = ['art','comedy','music','sports','educational','films','technology','random'];
    
    // Retrieve the category from url
    var url = request.url;
    var index = url.lastIndexOf("/");
    var category = url.substring(index+1);
    
    // Check if the category exists
    if (categories.indexOf(category) !== -1) {
        videos.randomVideo(category, function(video1) {
            if (video1) {
                // Decrease the shares needed for the video you're visiting by 1
                videos.sub_share(video1.username,video1.url, function(success) {
                    
                    videos.findPromotedVideo(loggedin_username, function(video) {
                        // Add 1 to the shares needed for your video if you are promoting one
                        if (video) {
                            videos.add_share(loggedin_username, video.url, function(success) {
                                response.render('home', {username:loggedin_username, video:video1, categories:categories});
                            });
                        } else {
                            response.render('home', {username:loggedin_username, video:video1, categories:categories});
                        }                       
                    });
                });
            } else {
                // Render default video
                var default_vid = {title:'Doom.', url:"//www.youtube.com/embed/FiARsQSlzDc"};
                response.render('home', {username:loggedin_username, video:default_vid, categories:categories});
            }
        });        
    } else {
        response.redirect('/error');
    }
};