// Redirecting to various routes
var express = require('express');

// Create a server
var app = express();

// Server Port number
var port = 8089;

// Configure the server
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.urlencoded({limit:'1kb'})); // default for every route/ prevent form inputs over 1 kb
app.use(express.static(__dirname+'/statics'));

// Enable sessions
app.use(express.cookieParser());
app.use(express.session({secret:'ItsASecret'}));

// Get Routes
app.get('/', require('./routes/home'));
app.get('/watch/:category', require('./routes/categoryselect'))
app.get('/registration', require('./routes/registration'));
app.get('/myspread', require('./routes/myspread'));
app.get('/logout', require('./routes/logout'));
app.get('/login', require('./routes/loginpage'));
app.get('/history',require('./routes/history'));
app.get('/manageaccount', require('./routes/manageaccount'));
app.get('/inbox', require('./routes/inbox'));
app.get('/profile/:username', require('./routes/profile'));


// Post Routes
app.post('/register', require('./routes/register'));
app.post('/login', require('./routes/login'));
app.post('/profilepost', require('./routes/profilepost'));
app.post('/manageaccountpost', require('./routes/manageaccountpost'));
app.post('/inboxpost', require('./routes/inboxpost'));
app.post('/delete_all',require('./routes/delete_all'));

//app.post('/', require('./routes/home'));
//app.post('/register', require('./routes/registration'));
//app.post('/searchresults', require('./routes/search'));
//app.post('/', require('./routes/home'));
//app.post('/register', require('./routes/registration'));
//app.post('/searchresults', require('./routes/search'));
//app.post('/profile', require('./routes/profile'));
//app.post('/history', require('./routes/history'));
//app.post('/manageaccount', require('./routes/manageaccount'));

//app.post('/myspread', require('./routes/myspread'));

app.get('*', require('./routes/error'));

app.listen(port);
console.log('Server is up on port '+port+".");
