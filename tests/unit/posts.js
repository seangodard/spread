// Unit tests for the posts collection
var posts = require('../../models/posts');

// Empty the database
exports['setup'] = function(test) {
    posts.deleteAll(function() {
        test.done();
    });
};

exports['post'] = function(test) {
    test.expect(1);
    posts.add_post('timestamp','subject', 'body', function(success) {
        test.ok(success);
        test.done();
    });
};

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    posts.deleteAll(function() {
        posts.close(function() {
            test.done();
        });
    });
};