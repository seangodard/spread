// Redirecting to various routes
var express = require('express');

// Create a server
var app = express();

// Configure the server
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.urlencoded({limit:'1kb'})); // default for every route/ prevent form inputs over 1 kb
app.use(express.static(__dirname+'/statics'));

// Enable sessions
app.use(express.cookieParser());
app.use(express.session({secret:'ItsASecret'}));

//app.post('/', require('./routes/home'));
app.get('/register', require('./routes/registration'));
//app.post('/register', require('./routes/registration'));
//app.post('/searchresults', require('./routes/search'));

//app.post('/profile', require('./routes/profile'));
//app.post('/history', require('./routes/history'));
//app.post('/manageaccount', require('./routes/manageaccount'));
//app.post('/inbox', require('./routes/inbox'));
//app.post('/myspread', require('./routes/myspread'));

// app.get('*', require('./routes/error'));

app.listen(8080);
console.log('Server is up.');
