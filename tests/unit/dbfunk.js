// Unit tests for the users collection
var dbfunk = require('../../models/dbfunk');

// Empty the database
exports['setup'] = function(test) {
    dbfunk.deleteAll(function() {
        test.done();
    });
};

exports['Register a user (sucessful)'] = function(test) {
    test.expect(1);
    dbfunk.adduser('username', 'password','first_name','last_name', 'email', 'promoted_video_url', 'pic', 'bio', function(success) {
        test.ok(success);
        test.done();
    });
};

exports['Register a user (unsucessful)'] = function(test) {
    test.expect(1);
    dbfunk.adduser('username', 'password','first_name','last_name', 'email', 'promoted_video_url', 'pic', 'bio', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    dbfunk.deleteAll(function() {
        dbfunk.close(function() {
            test.done();
        });
    });
};
