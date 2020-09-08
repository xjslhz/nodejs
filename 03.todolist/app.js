var express = require('express');
var path = require('path')
var todoapi = require('./api/todoapi');


var app = express();

app.set('view engine','ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static("./public"));

todoapi(app);

app.listen(3000);
console.log('you is todolist');