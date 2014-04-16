// Unit tests for the posts collection
var posts = require('../../models/posts');

// Datestamp for testing purposes 
var now = new Date();
console.log(now);

// Empty the database
exports['setup'] = function(test) {
    posts.deleteAll(function() {
        test.done();
    });
};

// Test add a post
exports['post'] = function(test) {
    posts.add_post('Alice', now,'Subject: Party', 'Body: At my house', function() {
        test.done();
    });
};

// Test retrieve a post successful
exports['retrieve post (testing add)'] = function(test) {
    test.expect(1);
    var success = false;
    posts.retrieve_posts('Alice', function(posts) {
        posts.forEach(function(post) {
            if (post.username === 'Alice') {
                success = true;
            }
        });
        test.ok(posts.length === 1 && success);
        test.done();
    });
};

// Test retrieve a post unsuccessful
exports['retrieve post (testing add: non existing post)'] = function(test) {
    test.expect(1);
    var success = false;
    posts.retrieve_posts('Bob', function(posts) {
        posts.forEach(function(post) {
            if (post.username === 'Bob') {
                success = true;
            }
        });
        test.ok(!(posts.length === 1 && success));
        test.done();
    });
};

// Test edit a post
exports['test editing a post'] = function(test) {
    test.expect(1);
    var success = false;
    posts.edit_post('Alice',now,'new subject','new body', function() {
        posts.retrieve_posts('Alice', function (posts) {
            if (posts.length === 1) {
                posts.forEach(function(post) {
                    if (post.subject === 'new subject' && post.body === 'new body') {
                        success = true;
                    };
                });
            }
            else {
                success = false;
            };        
        test.ok(success);
        test.done();
        });
    });
};

// Test delete a post
exports['delete post'] = function(test) {
    test.expect(1);
    posts.delete_post('Alice', now, function() {
        posts.retrieve_posts('Alice', function(posts) {
            test.ok(posts.length === 0);
            test.done();
        });
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