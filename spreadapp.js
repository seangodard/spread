// Redirecting to various routes
var express = require('express');

// Create a server
var app = express();

// Server Port number
var port = 8088;

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
app.get('/registration', require('./routes/registration'));
app.get('/myspread', require('./routes/myspread'));
app.get('/logout', require('./routes/logout'));
app.get('/login', require('./routes/loginpage'));

// Post Routes
app.post('/register', require('./routes/register'));
app.post('/login', require('./routes/login'));

//app.post('/', require('./routes/home'));
//app.post('/register', require('./routes/registration'));
//app.post('/searchresults', require('./routes/search'));
//app.post('/profile', require('./routes/profile'));
//app.post('/history', require('./routes/history'));
//app.post('/manageaccount', require('./routes/manageaccount'));
//app.post('/inbox', require('./routes/inbox'));
//app.post('/myspread', require('./routes/myspread'));

// app.get('*', require('./routes/error'));

app.listen(port);
console.log('Server is up on port '+port+".");
