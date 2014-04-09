// Unit tests for the videos collection
var videos = require('../../models/videos');

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
