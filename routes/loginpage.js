// Log In page

// should pass also whether or not the user is logged in, specifically to instruct which header to use
module.exports = function(request,response) {

    // Get the logged in user's username from cookies
    var loggedin_username = request.session.username;
    var error = request.session.error;
    
    
    // Redirect a logged in user to home
    if (loggedin_username) {
        response.redirect('/');
    }
    
    // Render page
    else {
        response.render('login',{error:error,username:loggedin_username});
        delete request.session.error;
    }
    
};