// Unit tests for the history collection
var history = require('../../models/history');

// Empty the database
exports['setup'] = function(test) {
    history.deleteAll(function() {
        test.done();
    });
};

// Test add an item to history
exports['add item to history'] = function(test) {
    history.add_item('username','timestamp','url', function() {
        test.done();
    });  
};

// Test retrieve history

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    history.deleteAll(function() {
        history.close(function() {
            test.done();
        });
    });
};