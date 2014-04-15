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
    posts.add_post('Alice', 'timestamp','Subject: Party', 'Body: At my house', function() {
        test.done();
    });
};

// Test retrieve a post successful
exports['retrieve post successful'] = function(test) {
    test.expect(1);
    var success = false;
    posts.retrieve_posts('Alice', 'timestamp' , function(posts) {
        posts.forEach(function(post) {
            if (post.username === 'Alice' && post.timestamp === 'timestamp') {
                success = true;
            }
        });
        test.ok(posts.length === 1 && success);
        test.done();
    });
};

// Test retrieve a post unsuccessful
exports['retrieve post unsuccessful'] = function(test) {
    test.expect(1);
    var success = false;
    posts.retrieve_posts('Bob', 'timestamp' , function(posts) {
        posts.forEach(function(post) {
            if (post.username === 'Bob' && post.timestamp === 'timestamp') {
                success = true;
            }
        });
        test.ok(!(posts.length === 1 && success));
        test.done();
    });
};

// Test delete a post
exports['delete post'] = function(test) {
    posts.delete_post('Alice', 'timestamp', 'subject', 'body', function() {
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