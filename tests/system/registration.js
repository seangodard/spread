// Tests for use cases at the registration route
var users = require('../../models/users');
var zombie = require('zombie');
var browser = new zombie();
// Server port number: should be same as spreadapp.js
var portnumber = 8086;

// ADD TEST FOR PROFILE PICTURE

// Empty the database
exports['setup'] = function(test) {
    users.deleteAll(function() {
        test.done();
    });
};

exports['make an account (success)'] = function(test) {
    test.expect(1);
    
    browser.visit('http://localhost:'+portnumber+'/registration', function() {
        
        browser.
            fill('#first_name', 'Alice').
            fill('#last_name', 'Test').
            fill('#username', 'alice').
            fill('#password', 'password').
            fill('#email', 'password').
            fill('#bio', 'This is a test bio input for Alice.').
            pressButton('#register_submit', function() {
                test.ok(browser.query('#logout'));
                browser.clickLink('#logout', function() {
                    test.done();
                });
            });
    });
}

exports['make an account (failure)'] = function(test) {
    test.expect(1);
    
    browser.visit('http://localhost:'+portnumber+'/registration', function() {
        
        browser.
            fill('#first_name', 'Alice').
            fill('#last_name', 'Test').
            fill('#username', 'alice').
            fill('#password', 'password').
            fill('#email', 'password').
            fill('#bio', 'This is a test bio input for Alice.').
            pressButton('#register_submit', function() {
                test.ok(browser.query('#error'));
                test.done();
            });
    });
}

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    users.deleteAll(function() {
        users.close(function() {
            test.done();
        });
    });
};