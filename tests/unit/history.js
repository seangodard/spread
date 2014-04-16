// Unit tests for the history collection
var history = require('../../models/history');

// Datestamp for testing purposes 
var now = new Date();
console.log(now);

// Empty the database
exports['setup'] = function(test) {
    history.deleteAll(function() {
        test.done();
    });
};

// Test add an item to history
exports['add item to history'] = function(test) {
    history.add_item('username',now,'url', function() {
        test.done();
    });  
};

// Test retrieve history
exports['retrieve an item from database'] = function(test) {
    test.expect(1);
    history.retrieve_history('username', now, now, function(history) {
        test.ok(history.length === 1);
        test.done();
    });  
};

/*
// Test retrieving history with some items that should not be included
exports['retrieve an item from database'] = function(test) {
    test.expect(1);
    history.retrieve_history('username', now, now, function(history) {
        test.ok(history.length === 1);
        test.done();
    });  
};
*/

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    history.deleteAll(function() {
        history.close(function() {
            test.done();
        });
    });
};