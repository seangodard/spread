// Redirecting to various routes
var express = require('express');

// Create a server
var app = express();

var db = mongojs('visitapp',['visitors']);

// Configure the server
app.set('view engine', 'ejs');
app.set('views', '/spread/views');
app.use(express.urlencoded({limit:'1kb'})); // default for every route/ prevent form inputs over 1 kb
app.use(express.static('/spread/statics'));

app.get('/', require('./routes/home'));
app.get('/register', require('./routes/registration'));
app.get('/searchresults', require('./routes/search'));

app.get('/profile', require('./routes/profile'));
app.get('/history', require('./routes/history'));
app.get('/manageaccount', require('./routes/manageaccount'));
app.get('/inbox', require('./routes/inbox'));
app.get('/myspread', require('./routes/myspread'));

app.get('*', require('./routes/error'));

app.listen(8080);
console.log('Server is up.');
