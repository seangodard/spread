// Unit tests for the videos collection
var videos = require('../../models/videos');

// Empty the database
exports['setup'] = function(test) {
    videos.deleteAll(function() {
        test.done();
    });
};

// ====================================================================== Post Video ==========

// Test post_new_video successful
exports['post new video (successful)'] = function(test){
    test.expect(1);
    videos.post_new_video('username','url','length','title','view_count',
                          'shares_needed','likes','favorites','flagged',
                          'category','promoted','thumbnail', function(success){
        test.ok(success);
        test.done();
    });
};

// Test post_new_video unsuccessful - wrong url
exports['post new video (unsuccessful)'] = function(test){
    test.expect(1);
    videos.post_new_video('username','url','length','title','view_count',
                          'shares_needed','likes','favorites','flagged',
                          'category','promoted','thumbnail', function(success){
        test.ok(!success);
        test.done();
    });
};

// ====================================================================== Change Promoted ==========

// Test Change Promoted video, successful
exports['Promote Video (successful)'] = function(test) {
    test.expect(1);
    videos.change_promoted_video('username', 'url', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test Change Promoted video, unsuccessful - url
exports['Promote Video (unsuccessful)'] = function(test) {
    test.expect(1);
    videos.change_promoted_video('username', 'bad_url', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test Change Promoted video, unsuccessful - username
exports['Promote Video (unsuccessful)'] = function(test) {
    test.expect(1);
    videos.change_promoted_video('bad_username', 'url', function(success) {
        test.ok(!success);
        test.done();
    });
};

// ====================================================================== Like Count ==========

// add one like, successful
exports['Increase like count (successful)'] = function(test) {
    test.expect(1);
    videos.add_likecount('url', function(success) {
        test.ok(success);
        test.done();
    })
}

// subtract one like, successful
exports['Subtract like count (successful)'] = function(test) {
    test.expect(1);
    videos.sub_likecount('url', function(success) {
        test.ok(success);
        test.done();
    })
}

// add one like, unsuccessful
exports['Increase like count (unsuccessful)'] = function(test) {
    test.expect(1);
    videos.add_likecount('bad_url', function(success) {
        test.ok(!success);
        test.done();
    })
}

// subtract one like, unsuccessful
exports['Subtract like count (unsuccessful)'] = function(test) {
    test.expect(1);
    videos.sub_likecount('bad_url', function(success) {
        test.ok(!success);
        test.done();
    })
}



// ====================================================================== Favorite Count ==========

// add one favorite, successful
exports['Add favorite (successful)'] = function(test) {
    test.expect(1);
    videos.add_favorite('url', function(success) {
        test.ok(success);
        test.done();
    })
}

// subtract one favorite, successful
exports['subtract favorite (successful)'] = function(test) {
    test.expect(1);
    videos.sub_favorite('url', function(success) {
        test.ok(success);
        test.done();
    })
}

// add one favorite, unsuccessful
exports['Add favorite (unsuccessful)'] = function(test) {
    test.expect(1);
    videos.add_favorite('bad_url', function(success) {
        test.ok(!success);
        test.done();
    })
}

// subtract one favorite, unsuccessful
exports['subtract favorite (unsuccessful)'] = function(test) {
    test.expect(1);
    videos.sub_favorite('bad_url', function(success) {
        test.ok(!success);
        test.done();
    })
}


// ====================================================================== Flagged Count ==========

// add one flagged, successful
exports['add flagged (successful)'] = function(test) {
    test.expect(1);
    videos.add_flagged('url', function(success) {
        test.ok(success);
        test.done();
    })
}

// add one flagged, unsuccessful
exports['add flagged (unsuccessful)'] = function(test) {
    test.expect(1);
    videos.add_flagged('bad_url', function(success) {
        test.ok(!success);
        test.done();
    })
}

// subtract one flagged, successful
exports['subtract flagged (successful)'] = function(test) {
    test.expect(1);
    videos.sub_flagged('url', function(success) {
        test.ok(success);
        test.done();
    })
}

// subtract one flagged, unsuccessful
exports['subtract flagged (unsuccessful)'] = function(test) {
    test.expect(1);
    videos.sub_flagged('bad_url', function(success) {
        test.ok(!success);
        test.done();
    })
}

// ====================================================================== Shares_Needed Count ==========

// add one share, successful
exports['add share (successful)'] = function(test) {
    test.expect(1);
    videos.add_share('url', function(success) {
        test.ok(success);
        test.done();
    })
}

// add one share, unsuccessful
exports['add share (unsuccessful)'] = function(test) {
    test.expect(1);
    videos.add_share('bad_url', function(success) {
        test.ok(!success);
        test.done();
    })
}

// subtract one share, successful
exports['subtract share (successful)'] = function(test) {
    test.expect(1);
    videos.sub_share('url', function(success) {
        test.ok(success);
        test.done();
    })
}

// subtract one share, unsuccessful
exports['subtract share (unsuccessful)'] = function(test) {
    test.expect(1);
    videos.sub_share('bad_url', function(success) {
        test.ok(!success);
        test.done();
    })
}

// ====================================================================== Find Video ==========
// Test for finding video - successful
exports['Find one video (successful)'] = function(test) {
    test.expect(1);
    videos.findVideo('username','url', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for finding video - unsuccessful - bad_url
exports['Find one video (unsuccessful - url)'] = function(test) {
    test.expect(1);
    videos.findVideo('username','bad_url', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for finding video - unsuccessful - bad_username
exports['Find one video (unsuccessful - username)'] = function(test) {
    test.expect(1);
    videos.findVideo('bad_username','url', function(success) {
        test.ok(!success);
        test.done();
    });
};

// ====================================================================== Finding Random Videos ====
// Test post_new_video successful
exports['add another test video - alice'] = function(test){
    test.expect(1);
    videos.post_new_video('alice','alice_video','length','title','view_count',
                          1,'likes','favorites','flagged',
                          'category',true,'thumbnail', function(success){
        test.ok(success);
        test.done();
    });
};

// Test for retrieving a random video
exports['Retrieve a random video'] = function(test) {
    videos.randomVideo('category', function(video) {
        test.done();
    });
};

// ====================================================================== Single Deletion ==========

// Test for single video deletion - successful
exports['Delete a video (successful)'] = function(test) {
    test.expect(1);
    videos.delete('username', 'url', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for single video deletion - unsuccessful - bad_url
exports['Delete a video (unsuccessful - url)'] = function(test) {
    test.expect(1);
    videos.delete('username','bad_url',function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for single video deletion - unsuccessful - bad_username
exports['Delete a video (unsuccessful - username)'] = function(test) {
    test.expect(1);
    videos.delete('bad_username', 'url', function(success) {
        test.ok(!success);
        test.done();
    });
};

// ====================================================================== Delete all ==========

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    videos.deleteAll(function() {
        videos.close(function() {
            test.done();
        });
    });
};