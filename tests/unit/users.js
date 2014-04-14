// Unit tests for the users collection
var users = require('../../models/users');

// Empty the database
exports['setup'] = function(test) {
    users.deleteAll(function() {
        test.done();
    });
};

// Test for a successful registration
exports['Register a user (sucessful)'] = function(test) {
    test.expect(1);
    users.adduser('username', 'password','first_name','last_name', 'email', 'promoted_video_url', 'pic', 'bio', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for an unsuccessful registration
exports['Register a user (unsucessful)'] = function(test) {
    test.expect(1);
    users.adduser('username', 'password','first_name','last_name', 'email', 'promoted_video_url', 'pic', 'bio', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for a successful login
exports['Login user'] = function(test) {
    test.expect(1);
    users.login('username', 'password', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for an unsuccessful login - wrong username
exports['Login bad username'] = function(test) {
    test.expect(1);
    users.login('wrong_username', 'password', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for an unsuccessful login - wrong password
exports['Login bad password'] = function(test) {
    test.expect(1);
    users.login('username', 'wrong_password', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for a successful password change
exports['chage password successful'] = function(test) {
    test.expect(1);
    users.change_password('username', 'password', function(success) {
        test.ok(success);
        test.done();
    });
};

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    users.deleteAll(function() {
        users.close(function() {
            test.done();
        });
    });
};
