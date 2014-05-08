// Spread Homepage
var videos = require('../models/videos');
var history = require('../models/history');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    // Get the logged in user's username
    var loggedin_username = request.session.username;
    // Get the selected random video from cookies passed in
    var random_cookie_vid = request.session.random_cookie_vid;
    delete request.session.random_cookie_vid;
    
    // The default video if none is found
    var default_vid = {title:'Doom.', url:"//www.youtube.com/embed/FiARsQSlzDc",bad:'bad'};
    
    // Browsing categories posibilities 
    var categories = ['art','comedy','music','sports','educational','films','technology','random'];
    
    // Retrieve the category from url
    var url = request.url;
    var index = url.lastIndexOf("/");
    var category = url.substring(index+1);
    
    
    // Check if the category exists
    if (categories.indexOf(category) !== -1) {
        // Check if a video has been passed
        if (random_cookie_vid) {
            update_database(random_cookie_vid, function() {
                render_page(random_cookie_vid, category);
            });
        // No video has been passed so randomly select one
        } else {
            // Randomly select a video
            videos.randomVideo(category, function(video) {
                if (video) {
                    update_database(video, function() {
                        render_page(video, category);
                    });                    
                } else {
                    render_page(default_vid, category);
                }
            });        
        }
    } else {
        response.redirect('/error');
    }
    
    
    // Functions
    
    // Retrive two random videos to display at the bottom of the page and then render the page with the main video
    var render_page = function(main_video, category) {
        videos.randomVideo(category, function(secondary_vid1) {
            if (!secondary_vid1) {
                secondary_vid1 = default_vid;
            }
            videos.randomVideo(category, function(secondary_vid2) {
                if (!secondary_vid2) {
                    secondary_vid2 = default_vid;
                }
                response.render('home', {username:loggedin_username, video:main_video, next_vid1:secondary_vid1, next_vid2:secondary_vid2, categories:categories});
            });
        });
    };
    
    // Update the shares needed for the viewed video and the user's promoted video
    var update_database = function(video, callback) {      
        // Decrease the shares needed for the video you're visiting by 1
        videos.sub_share(video.username,video.url, function(success) {                       
            videos.findPromotedVideo(loggedin_username, function(users_video) {
                // Add 1 to the shares needed for your video if you are promoting one
                videos.add_share(loggedin_username, users_video.url, function(success) {
                    callback();           
                }); 
            });
        });
    };    
};