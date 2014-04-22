// Unit tests for the videos collection
var messages = require('../../models/messages');

// Test if post video worked 
exports['send message successfull'] = function(test){
    test.expect(1);
    messages.send_message('username','recipient','subject','timestamp','body',function(success){
        test.ok(success);
        test.done(); 
    });
};

// Test if the inbox is returning correctly 
exports['retrive inbox successfull'] = function(test){
    test.expect(1);
    messages.retrieve_inbox('username',function(inbox){
        
        var success = false;
        inbox.forEach(function(box){
            if (box.sender === 'username' || box.recipient === 'username' ) {
                success = true;
            }
        });
        test.ok(success);
        test.done(); 
    });
};
