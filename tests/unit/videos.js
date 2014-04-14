// Unit tests for the videos collection
var videos = require('../../models/videos');



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

// Test Change Promoted video
exports['Promote Video'] = function(test) {
    test.expect(1);
    videos.change_promoted_video('username', 'url', function(sucess) {
        test.okay(success);
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
