// Delete All History
var history = require('../models/history');
var validator = require('validator');

// Check whether logged in
module.exports = function(request, response) {
    var loggedin_username = request.session.username;
    
    
    history.delete_userhistory(loggedin_username, function() {
        console.log('poop');
        response.redirect('/history');
    });
};