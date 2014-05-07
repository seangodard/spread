// Unit tests for the users collection
var users = require('../../models/users');


// ==================================== WIPE USERS CLEAN ==================================
// Empty users
exports['setup'] = function(test) {
    users.deleteAll(function() {
        test.done();
    });
};

// ==================================== REGISTRATION ======================================

// Test for a successful registration
exports['register a user (sucessful)'] = function(test) {
    test.expect(1);
    users.adduser('username', 'password', 'first_name','last_name', 'email', 'promoted_video_url', 'picture', 'bio', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for an unsuccessful registration
exports['register a user (unsuccessful)'] = function(test) {
    test.expect(1);
    users.adduser('username', 'password', 'first_name','last_name', 'email', 'promoted_video_url', 'picture', 'bio', function(success) {
        test.ok(!success);
        test.done();
    });
};

// ======================================= LOGIN ==========================================

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

// ================================= PASSWORD CHANGE ======================================

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

// ==================================== UPDATE BIO =========================================

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
    users.update_bio('bad_username', 'new_bio', function(success) {
        test.ok(!success);
        test.done();
    });
};

// ==================================== UPDATE PICTURE ======================================

// Test for a successful picture change
exports['update picture (successful)'] = function(test) {
    test.expect(1);
    users.update_picture('username', 'new_picture', function(success) {
        test.ok(success);
        test.done();
    });
};

// Test for an unsuccessful picture change
exports['update picture (unsuccessful)'] = function(test) {
    test.expect(1);
    users.update_picture('bad_username', 'new_picture', function(success) {
        console.log(success);
        test.ok(!success);
        test.done();
    });
};

// ==================================== UPDATE EMAIL ========================================

// Test for a successful email change
exports['update email (successful)'] = function(test) {
    test.expect(1);
    users.update_email('username', 'new_email', function(success) {
        test.ok(!success);
        test.done();
    });
};

// Test for an unsuccessful email change
exports['update email (unsuccessful)'] = function(test) {
    test.expect(1);
    users.update_email('bad_username', 'new_email', function(success) {
        test.ok(!success);
        test.done();
    });
};


// ==================================== CLOSE CONNECTION ===================================

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    users.deleteAll(function() {
        users.close(function() {
            test.done();
        });
    });
};
