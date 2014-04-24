// Unit tests for the videos collection
var messages = require('../../models/messages');

// ====================================Send Message=============================================
// Test if post video worked 
exports['send message successfull'] = function(test){
    test.expect(1);
    messages.send_message('username','recipient','subject','timestamp','body',function(success){
        test.ok(success);
        test.done(); 
    });
};

// ====================================Retrieve Inbox===========================================
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

// ====================================viewed===================================================
// Test for an successful viewed 
exports['viewed successfull'] = function(test){
  test.expect(1);
  messages.viewed('username','recipient','timestamp', function (success){
    //console.log("test");
    test.ok(!success);
    test.done();
  });
};

// ====================================delete message recipient=================================
// Send a message to be deleted 
exports['send test message for delete message recip'] = function(test){
    test.expect(1);
    messages.send_message('sender','recipient','subject','timestamp','body',function(success){
        test.ok(success);
        test.done(); 
    });
};

// tests if the recipient message was deleted
exports['delete message recipient successfull'] = function(test){
    test.expect(1);
    messages.delete_message_recip('recipient','sender','timestamp',function(success){
        //console.log(success);
        test.ok(success);
        test.done(); 
    });
};

// ====================================delete message sender===================================
// Send a message to be deleted 
exports['send test message for delete message sender'] = function(test){
    test.expect(1);
    messages.send_message('recipient','sender','subject','timestamp','body',function(success){
        test.ok(success);
        test.done(); 
    });
};

// tests if the recipient message was deleted
exports['delete message sender successfull'] = function(test){
    test.expect(1);
    messages.delete_message_sender('sender','recipient','timestamp',function(success){
        //console.log(success);
        test.ok(success);
        test.done(); 
    });
};












