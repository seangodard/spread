// History Page
var videos = require('../models/videos');
var history = require('../models/history');
var validator = require('validator');
var video_list = new Array();
var complete_item = {};

// Check whether logged in
module.exports = function(request, response) {
    var loggedin_username = request.session.username;
    
    if (loggedin_username) {
    
    // Function to combine history and video data
         // Retrieve all of a users history
        history.retrieve_all_history(loggedin_username, function(all_user_history) {
            
            // Loop through the history to get data from each video
            all_user_history.forEach(function(history_item) {
               videos.findVideo(history_item.video_owner, history_item.url, function(video) {
                    complete_item.view_count = video.view_count;
                    complete_item.title = video.title;
                    complete_item.timestamp = history_item.timestamp;
                    complete_item.owner = history_item.video_owner;
                    complete_item.url = history_item.url;
                    video_list.push(complete_item);
               });
            });
        });
        
    
        setTimeout(function() {
            response.render('history', {username:loggedin_username,video_list:video_list});
        }, 2000);
    
    }

    else {
        response.redirect('/');
    }
    
};