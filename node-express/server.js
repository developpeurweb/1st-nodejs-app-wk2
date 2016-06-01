//NodeJS Dev. * Week1-Assignment1 * Miguel Estrada
// All following notes taken from an assignment revision by a collegue


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

// Make use of middle ware called 'static'.  This will be used to specify the location
// of the static resources (ie html files).
// The folder location will be used by the app (and 'dev) for determing responses
app.use(express.static(__dirname + '/public'));


// Use the app.listen function to start up the server
// this is the short hand version of set up, no need for createServer commands
app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});

//load express router & morgan
//Morgan is also loaded.  Morgan will performa number of dealut operations:
//      - handle responss to requests for static resources
//      - display to console info about type of request

// Morgan will be used by express.  'dev' is a pre-formatted log output that morgan supports
// Morgan default supports access to static resources, there only GET of existing files
// There are inbuilt responses that will display based on the request commands.
// If the file is found in the specified folder, the content is piped to the response.
// If requested static resource cannot be found in specified folder, default error message is posted.
// If a non GET message is sent as command, the default will recognise this and post error
