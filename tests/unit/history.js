// Unit tests for the history collection
var history = require('../../models/history');

// Datestamp for testing purposes---fix
var now = new Date();
console.log(now);
var older = now.setMonth(now.getMonth()-2);
console.log(older);
var ancient = now.setFullYear(1990);
console.log(ancient);

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
    history.retrieve_range_history('username', now, now, function(history) {
        test.ok(history.length === 1);
        test.done();
    });  
};


// Test retrieving history with some items that should not be included
exports['retrieve an item from history (excluding properly)'] = function(test) {
    test.expect(1);
    var success = false;
    history.add_item('username', ancient, 'differenturl',  function() {
        history.retrieve_range_history('username', now, now, function(history) {
            history.forEach(function(historyItem) {
                if (history.length === 1 && historyItem.url === 'url') {
                    success = true;
                }
            });
            test.ok(success);
            test.done();
        });
    });  
};

// Test retrieving all of a user's history
exports['retrieve all user\'s history'] = function(test) {
    test.expect(1);
    var success = false;
    history.retrieve_all_history('username', function(history) {
        history.forEach(function(historyItem) {
            if (history.length === 2 && historyItem.url === 'url' || historyItem.url === 'differenturl') {
                success = true;
            } else {
                success = false;
            }
        });
        test.ok(success);
        test.done();
    });  
};

// Test delete a range of items from a user's history
exports['test delete items from user\'s history within a certain range'] = function(test) {
    test.expect(1);
    var success = false;
    history.delete_userhistory_range('username', ancient, ancient, function() {
        history.retrieve_all_history('username', function(history) {
            history.forEach(function(historyItem) {
                if (history.length === 1 && historyItem.url === 'url') {
                    success = true;
                } else {
                    success = false;
                }
            });
            test.ok(success);
            test.done();
        });
    });
};


// Test deleting an entire users history
exports['delete all of a user\'s history'] = function(test) {
    test.expect(1);
    var success = false;
    history.delete_userhistory('username', function() {
        history.retrieve_all_history('username', function(history) {
            if (history.length === 0) {
                success = true;
            }
            test.ok(success);
            test.done();
        });
    });  
};

// Test deleting a list of items from a user's history
// Test timestamps
var test1 = new Date();
test1.setMonth(3);
var test2 = new Date();
test2.setMonth(4);
var test3 = new Date();
test3.setMonth(5);
var testlist = new Array(test1,test3);
console.log(testlist);

// Test delete a list of items from user's history--- Error
exports['test deleting a list of items from a user\'s history'] = function(test) {
    test.expect(1);
    var success = false;
    history.add_item('username',test1,'test1url', function() {
        history.add_item('username',test2,'test2url', function() {
            history.add_item('username',test3,'test3url', function() {
                history.delete_userhistory_items('username',testlist, function() {
                    history.retrieve_all_history('username', function(history) {
                        history.forEach(function(historyItem) {
                            if (history.length ===1 && historyItem.url === 'test2url') {
                                success = true;
                            } else {
                                success = false;
                            }
                        });
                        test.ok(success);
                        test.done();
                    });
                }); 
            });
        });    
    });  
};

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    history.deleteAll(function() {
        history.close(function() {
            test.done();
        });
    });
};