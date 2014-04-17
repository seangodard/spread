// Unit tests for the users collection
var users = require('../../models/users');

// Empty the database
exports['setup'] = function(test) {
    users.deleteAll(function() {
        test.done();
    });
};

// Test for a successful registration
exports['register a user (sucessful)'] = function(test) {
    test.expect(1);
    users.adduser('username', 'password','first_name','last_name', 'email', 'promoted_video_url', 'pic', 'bio', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for an unsuccessful registration
exports['register a user (unsuccessful)'] = function(test) {
    test.expect(1);
    users.adduser('username', 'password','first_name','last_name', 'email', 'promoted_video_url', 'pic', 'bio', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for a successful login
exports['login (successful)'] = function(test) {
    test.expect(1);
    users.login('username', 'password', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for an unsuccessful login - wrong username
exports['login (bad username)'] = function(test) {
    test.expect(1);
    users.login('wrong_username', 'password', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for an unsuccessful login - wrong password
exports['login (bad password)'] = function(test) {
    test.expect(1);
    users.login('username', 'wrong_password', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for a successful password change
exports['change password (successful)'] = function(test) {
    test.expect(1);
    users.change_password('username', 'password', 'new_password', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for an unsuccessful password change - wrong current password
exports['change password (unsuccessful)'] = function(test) {
    test.expect(1);
    users.change_password('username', 'wrong_password', 'new_password', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for a successful bio change
exports['update bio (successful)'] = function(test) {
    test.expect(1);
    users.update_bio('username', 'new_bio', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for an unsuccessful bio change
exports['update bio (unsuccessful)'] = function(test) {
    test.expect(1);
    users.update_bio('badusername', 'new_bio', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for a successful pic change
exports['update pic successful'] = function(test) {
    test.expect(1);
    users.update_pic('username', 'pic_url', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for an unsuccessful pic change
exports['update pic unsuccessful'] = function(test) {
    test.expect(1);
    users.update_pic('username', 'bad_pic_url', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for a successful email change
exports['update email successful'] = function(test) {
    test.expect(1);
    users.update_pic('username', 'email', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for an unsuccessful email change
exports['update email unsuccessful'] = function(test) {
    test.expect(1);
    users.update_pic('username', 'bad_email', function(success) {
        test.ok(!success);
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
