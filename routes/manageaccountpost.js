var users = require('../models/users');
var posts = require('../models/posts');
var videos = require('../models/videos');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    
    var loggedin_username = request.session.username;
    
    // Get new post information if it's there
    var new_subject = validator.escape(request.body.subject);
    var new_body = validator.escape(request.body.body);
    var timestamp = new Date();
    
    // Get info for update picture
    var new_picture = validator.escape(request.session.new_picture);
    
    // Get info for update email
    var new_email = validator.escape(request.session.new_picture);
    
    // Get info for adding a new video
    var video_url = validator.escape(request.session.video_url);
    var promoted_video = validator.escape(request.session.promoted_video)
    var view_count = 0;
    var shares_needed = 0;
    var category = validator.escape(request.session.video_category);
    var promoted = false;
    var length = validator.escape(request.session.length);
    var title = validator.escape(request.session.video_title);
    var thumbnail = request.session.thumbnail;
        
    
    // Get which video the user selected as promoted 
    videos.change_promoted_video(loggedin_username, promoted_video, function() {
        
        // Call update picture
        users.update_picture(loggedin_username, new_picture, function() {
            
            // Call update email 
            users.update_email(loggedin_username, new_email, function() {
                
                // Add a new video to the videos collection
                videos.post_new_video(loggedin_username, video_url, length,
                                      title, view_count, shares_needed, 0, 0, 0,
                                      category, promoted, thumbnail, function() {
                    
                    // Edit a post
                    posts.edit_post(loggedin_username, timestamp, new_subject, new_body, function() {
                        
                        // Call add_post to add a new post to the posts collection
                        users.update_bio(loggedin_username, new_bio, function(){
                        
                            response.redirect('/manageaccount');
                            
                        });
                    });
                });
            });
        });
    });
    
};