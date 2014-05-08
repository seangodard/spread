// Error Page

module.exports = function(request,response) {
    
    var loggedin_username = request.session.username;
    
    response.render('error',{username:loggedin_username});
};