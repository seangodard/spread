var users = require('../models/users');
var posts = require('../models/posts');
var videos = require('../models/videos');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    
    var loggedin_username = request.session.username;
    
    // Get info for update email
    var new_email = validator.escape(request.body.new_email);
    
    // Get info for update bio
    var new_bio = validator.escape(request.body.new_bio);
    
    // Get info for adding a new video
    var video_url = validator.escape(request.body.video_url);
    var promoted_video_url = validator.escape(request.body.promoted_video_url);
    var view_count = 0;
    var shares_needed = 0;
    var category = validator.escape(request.body.video_category);
    var promoted = true;
    var length = validator.escape(request.body.length);
    var title = validator.escape(request.body.video_title);
    var thumbnail = request.body.thumbnail;
    
    if (promoted_video_url) {   
        // Get which video the user selected as promoted
        videos.change_promoted_video(loggedin_username, promoted_video_url, function() {
            response.redirect('/profile/'+loggedin_username);
        });
    }
    
    else if (new_email) {
        // Call update email 
        users.update_email(loggedin_username, new_email, function() {
            response.redirect('/profile/'+loggedin_username);
        });            
    }
    
    else if (video_url && title) {
        // Add a new video to the videos collection
        videos.post_new_video(loggedin_username, video_url, length,
                                title, view_count, shares_needed, 0, 0, 0,
                                category, promoted, thumbnail, function() {
            response.redirect('/');
        });                
    }
    
    else if (new_bio) {
        // Call add_post to add a new post to the posts collection
        users.update_bio(loggedin_username, new_bio, function(){                    
            response.redirect('/profile/'+loggedin_username);
                                
        });        
    }
    
    else {
        setTimeout(function() {    
            request.session.error = 'Something went wrong. Please try again. Fill out only one form, then press submit.';
            response.redirect('/manageaccount');
        }, 2000);
    }
    
};