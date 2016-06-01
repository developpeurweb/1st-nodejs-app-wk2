//NodeJS Dev. * Week1-Assignment1 * Miguel Estrada

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//Calling the Modules
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');

var hostname = 'localhost';
var port = 3000;
var app = express();
app.use(morgan('dev'));

//Using the Modules
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leadership',leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
