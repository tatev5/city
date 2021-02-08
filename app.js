var express = require('express');
var path = require('path');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cityRoutes = require('./routes/cityRoutes');

var app = express();


app.use(express.static(path.join(__dirname, './public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/submit', cityRoutes);



app.listen(5050);



module.exports = app;
