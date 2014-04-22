// Database functions
var mongojs = require('mongojs');

// Connect to the database spreadapp, collection: messages 
var db = mongojs('spreadapp', ['messages']);

// retrieve_inbox: takes a username
// retrieves all the messages that have the username as either the recipient or the sender
module.exports.retrieve_inbox = function(username, callback){
    
    // find a collection in which the username is the sender or the recipient
    db.messages.find({$or:[{sender:username},{recipient:username}]},function(error,inbox){
        if (error) throw error;
        callback(inbox);
    });
};


// send_message: takes a username, recipient, subject, timestamp, and body
// adds two new messages to the messages collection, one with the sender as the owner and
// the other with the recipient as the owner
// returns true if the messages was inserted
module.exports.send_message = function(username,recipient,subject,timestamp,body,callback){
    
    // sets viewed by recipient to false
    var viewed_by_recipient = false;
    // insert two copies of the message to the database;
    db.messages.insert({sender:username,recipient:recipient,subject:subject,timestamp:timestamp,body:body,owner:username},function(error,view){
        if (error) throw error;
        db.messages.insert({sender:username,recipient:recipient,subject:subject,timestamp:timestamp,body:body,owner:recipient},function(error,view){
            if (error) throw error;
            callback(true);
        });
    });
};


// viewed: takes a username, recipient, and a timestamp
// checks if the messages has been read by its recipient
// returns true or false
module.exports.viewed = function(username,recipient,timestamp, callback){
    
    db.findOne({sender:username,recipient:recipinet,timestamp:timestamp},
        function(error,view){ if (error) throw error;
        
        if (view.viewed_by_recipient === true){
            callback(true);
        } else {
            callback(false);
        }
    });
};

// delete_message_recip: Takes a username as the recipient, a sender, subject and timestamp
// deletes a message only for the recipient, so the sender can still view it
// returns true if the message was found and deleted and false if it was not found
module.exports.delete_message_recip = function(username,sender,timestamp, callback){
    
    db.findOne({sender:sender,recipient:username,timestamp:timestamp},function(error, message){
        if (error) throw error;
        
        if (message){
            db.remove({sender:sender,recipient:username,timestamp:timestamp},function(error){
            if (error) throw error; 
            });
            callback(true);
        } else {
            callback(false);
        }; 
    });
};

// delete_message_sender: Takes a username as the sender, a recipient, subject and timestamp
// deletes a message only for the sender, so the recipient can still view it
// returns true if the message was found and deleted and false if it was not found
module.exports.delete_message_recip = function(username,sender,timestamp, callback){
    
    db.findOne({sender:sender,recipient:username,timestamp:timestamp},function(error, message){
        if (error) throw error;
        
        if (message){
            db.remove({sender:sender,recipient:username,timestamp:timestamp},function(error){
            if (error) throw error; 
            });
            callback(true);
        } else {
            callback(false);
        }; 
    });
};












