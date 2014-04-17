// Database functions
var mongojs = require('mongojs');

// Connect to the database spreadapp, collection: messages 
var db = mongojs('spreadapp', ['messages']);

// retrieve_inbox: takes a username
// retrieves all the messages that have the username as both the recipient and the sender
module.exports.retieve_inbox = function(username, callback){
    
    // find a collection in which the username is the sender or the recipient
    db.find({$or:[{sender:username},{recipient:username}]},
        function(error,inbox){if (error) throw error;});
}


// send_message: takes a username, recipient, subject, timestamp, and body
// adds a new message to the messages collection retunrs true if the messages was inserted
module.exports.send_message = function(username,recipient,subject,timestamp,body,callback){
    
    // sets viewed by recipient to false
    var viewed_by_recipient = false;
    
    // the message to the database;
    db.insert({sender:username,recipient:recipient,subject:subject,timestamp:timestamp,body:body},
        function(error,view){if (error) throw error;});
    callback(true)
}


// viewed: takes a username, recipient, and a timestamp
// checks if the messages has been read by its recipient and return true or false
module.exports.viewed = function(username,recipient,timestamp, callback){
    
    db.findOne({sender:username,recipient:recipinet,timestamp:timestamp},
        function(error,view){ if (error) throw error;
        
        if (view.viewed_by_recipient === true){
            callback(true);
        } else {
            callback(false);
        }
    });
}

