// Unit tests for the posts collection
var posts = require('../../models/posts');

// Empty the database
exports['setup'] = function(test) {
    posts.deleteAll(function() {
        test.done();
    });
};

// Test add a post
exports['post'] = function(test) {
    test.expect(1);
    posts.add_post('username', 'timestamp','subject', 'body', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test delete a post
exports['delete post'] = function(test) {
    test.expect(1);
    posts.delete_post('username', 'timestamp', 'subject', 'body', function(success) {
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