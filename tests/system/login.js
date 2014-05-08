// Tests for use cases at the login route
var users = require('../../models/users');
var zombie = require('zombie');
var browser = new zombie();
// Server port number: should be same as spreadapp.js
var portnumber = 8088;

// ADD TEST FOR PROFILE PICTURE

// Empty the database
exports['setup'] = function(test) {
    users.deleteAll(function() {
        users.adduser('alice', 'password', 'alice', 'lastname', 'email@email.com', null, null, null, function(success) {
            if (success) {
                test.done();
            };
        });
    });
};

exports['login (success)'] = function(test) {
    test.expect(1);
    
    browser.visit('http://localhost:'+portnumber+'/login', function() {
        
        browser.
            fill('#username', 'alice').
            fill('#password', 'password').
            pressButton('#login_submit', function() {
                test.ok(browser.query('#logout'));
                browser.clickLink('#logout', function() {
                    test.done();
                });
            });
    });
};

exports['login bad username (unsuccessful)'] = function(test) {
    test.expect(1);
    
    browser.visit('http://localhost:'+portnumber+'/login', function() {
        
        browser.
            fill('#username', 'badusername').
            fill('#password', 'password').
            pressButton('#login_submit', function() {
                test.ok(browser.query('#register'));
                browser.clickLink('#register', function() {
                    test.done();
                });
            });
    });
};

exports['login bad password (unsuccessful)'] = function(test) {
    test.expect(1);
    
    browser.visit('http://localhost:'+portnumber+'/login', function() {
        
        browser.
            fill('#username', 'alice').
            fill('#password', 'badpassword').
            pressButton('#login_submit', function() {
                test.ok(browser.query('#register'));
                browser.clickLink('#register', function() {
                    test.done();
                });
            });
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