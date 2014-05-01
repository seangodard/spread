// Database functions
var mongojs = require('mongojs');

// Connect to the database spreadapp, collection: videos
var db = mongojs('spreadapp', ['videos']);

// Post new video: username, url, length, title, view_count, shares_needed
// likes, favorites, flagged, category, promoted
// Optional: promoted video url, pic, bio
module.exports.post_new_video = function(username,url,length,title,
    view_count,shares_needed,likes,favorites,flagged,category,promoted,thumbnail,
    callback) {
    
    // check if the video already exists
    db.videos.findOne({username:username,url:url}, function(error, video){
        if (error) throw error;
        
        // if the video doesn't already exist
        if (!video) {
            
            var new_video = {username:username,url:url,length:length,view_count:view_count,shares_needed:shares_needed,likes:likes, favorites:favorites, flagged:flagged,category:category,promoted:promoted,thumbnail:thumbnail};
            
            db.videos.insert(new_video, function(error) {
                if (error) throw error;
            });
            callback(true);
        }
        
        // if it is there return false
        else {
             callback(false);
        }   
    });
};

/* Change promoted video: takes in a username and a url
 * Searches the database for all videos owned by the user
 * and sets the promoted field of that url to false and
 * resets all other promted fields for the users videos to false */
module.exports.change_promoted_video = function(username, promote_url, callback) {
    var success = false;
    db.videos.find({username:username}, function(error, vids) {
        if (error) throw error;
        
        vids.forEach(function(video) {
            if (video.url === promote_url) {
                video.promoted = true;
                success = true;
                db.videos.save(video, function(error) {
                    if (error) throw error;
                })
            }
        });
        callback(success);
    });
};

//============================================================== Likes ==========

// Add a like to the like count
module.exports.add_likecount = function(url, callback) {
    db.videos.findOne({url:url}, function(error, video) {
        if (error) throw error;
        
        if (!video) {
            callback(false);
        }
        
        else {
            video.likecount = video.likecount + 1;
    
            db.videos.save(video, function(error) {
                if (error) throw error;
                callback(true);
            });
        }
    });
};

// Subtract a like from the like count
module.exports.sub_likecount = function(url, callback) {
    db.videos.findOne({url:url}, function(error, video) {
        if (error) throw error;
        
        if (!video) {
            callback(false);
        }
        
        else {
            video.likecount = video.likecount - 1;
    
            db.videos.save(video, function(error) {
                if (error) throw error;
                callback(true);
            });
        }
    });
};

// ============================================================= Favorites ========

// Add a favorite to the favorites count
module.exports.add_favorite = function(url, callback) {
    db.videos.findOne({url:url}, function(error, video) {
        if (error) throw error;
        
        if (!video) {
            callback(false);
        }
        
        else {
            video.likecount = video.favorites + 1;
    
            db.videos.save(video, function(error) {
                if (error) throw error;
                callback(true);
            });
        }
    });
};

// Subtract a favorite from the favorites count
module.exports.sub_favorite = function(url, callback) {
    db.videos.findOne({url:url}, function(error, video) {
        if (error) throw error;
        
        if (!video) {
            callback(false);
        }
        
        else {
            video.likecount = video.favorites - 1;
    
            db.videos.save(video, function(error) {
                if (error) throw error;
                callback(true);
            });
        }
    });
};

// ============================================================= Flagged =========

// Add a flagged to the flagged count
module.exports.add_flagged = function(url, callback) {
    db.videos.findOne({url:url}, function(error, video) {
        if (error) throw error;
        
        if (!video) {
            callback(false);
        }
        
        else {
            video.likecount = video.flagged + 1;
    
            db.videos.save(video, function(error) {
                if (error) throw error;
                callback(true);
            });
        }
    });
};

// Subtract a flagged from the flagged count
module.exports.sub_flagged = function(url,callback) {
    db.videos.findOne({url:url}, function(error, video) {
        if (error) throw error;
        
        if (!video) {
            callback(false);
        }
        
        else {
            video.likecount = video.flagged - 1;
    
            db.videos.save(video, function(error) {
                if (error) throw error;
                callback(true);
            });
        }
    });
};

// ============================================================= Shares ==========

// Add a share to the shares count
module.exports.add_share = function(url, callback) {
    db.videos.findOne({url:url}, function(error, video) {
        if (error) throw error;
        
        if (!video) {
            callback(false);
        }
        
        else {
            video.likecount = video.shares_needed + 1;
    
            db.videos.save(video, function(error) {
                if (error) throw error;
                callback(true);
            });
        }
    });
};

// Subtract a share to the shares count
module.exports.sub_share = function(url, callback) {
    db.videos.findOne({url:url}, function(error, video) {
        if (error) throw error;
        
        if (!video) {
            callback(false);
        }
        
        else {
            video.likecount = video.shares_needed - 1;
    
            db.videos.save(video, function(error) {
                if (error) throw error;
                callback(true);
            });
        }
    });
};

//============================================================= Find Video ==========
// Find a specific video
module.exports.findVideo = function(username,url, callback) {
    db.videos.findOne({username:username, url:url}, function(error, video) {
        if (error) throw error;
        
        if (video) {
            callback(video);
        }
        
        else {
            callback(false);
        }
    })
}

//============================================================= Delete ==========
// Delete a specific video
module.exports.delete = function(username, url, callback) {
    db.videos.findOne({username:username, url:url}, function(error, video) {
        if (error) throw error;
        
        if (video) {
            db.videos.remove({username:username, url:url});
            callback(true);
        }
        
        else {
            callback(false);
        }
    });
};

// Delete all videos
module.exports.deleteAll = function(callback) {
    db.videos.remove({}, function(error) {
        if (error) throw error;
        callback();
    });
};

// Close the connection
module.exports.close = function(callback) {
    db.close(function(error) {
        if (error) throw error;
        callback();
    });
};

