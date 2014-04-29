// Registration page: try to register
var users = require('../models/users');
var videos = require('../models/videos');
var posts = require('../models/posts');
var validator = require('validator');

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {
    var url = request.url;
    var index = url.lastIndexOf("/");
    var itemid = url.substring(index+1);
    users.retrieveOne(itemid, function(oneitem) {
        response.render(‘oneitem’, {item:oneitem});
    });
};
/*  
    // retreive the users
    module.exports.retrieve_user_data = function(username, callback) {
        db.users.findOne({username:username}, function(error, user_data) {
            if (error) throw error;
            callback(user_data);
        });
    };
    
    // retreive the users
    module.exports.retrieve_user_posts = function(username, callback) {
        db.users.findOne({username:username}, function(error, user_posts) {
            if (error) throw error;
            callback(user_posts);
        });
    };
    
    // retreive the users
    module.exports.retrieve_user_videos = function(username, callback) {
        db.users.findOne({username:username}, function(error, user_videos) {
            if (error) throw error;
            callback(user_videos);
        });
    };
    
*/
};