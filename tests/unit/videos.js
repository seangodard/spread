// Unit tests for the videos collection
var videos = require('../../models/videos');

// Test for posting a new video - successful

// Test for posting a new video - unsuccessful

// Test for adding a like - successful
exports['Add a like (successful)'] = function(test) {
    test.expect(1);
    videos.add_likecount('', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for adding a like - unsuccessful

// Test for deleting a like - successful

// Test for deleting a like - unsuccessful

// Test for adding a favorite - successful

// Test for adding a favorite - unsuccessful

// Test for deleting a favorite - successful

// Test for deleting a favorite - unsuccessful

// Test for adding a flagged - successful

// Test for adding a flagged - unsuccessful

// Test for deleting a flagged - successful

// Test for deleting a flagged - unsuccessful

// Test Change Promoted video
exports['Promote Video'] = function(test) {
    test.expect(1);
    videos.change_promoted_video('username', 'url', function(sucess) {
        test.okay(success);
        test.done();
    });
};

// Test for single video deletion - successful
exports['Delete a video (sucessful)'] = function(test) {
    test.expect(1);
    videos.delete('', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for single video deletion - unsuccessful

// Empty the database
exports['setup'] = function(test) {
    videos.deleteAll(function() {
        test.done();
    });
};

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    videos.deleteAll(function() {
        videos.close(function() {
            test.done();
        });
    });
};


    