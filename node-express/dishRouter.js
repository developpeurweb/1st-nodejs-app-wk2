//NodeJS Dev. * Week1-Assignment1 * Miguel Estrada

var express = require('express');
var bodyParser = require('body-parser');


//Dish Module starts here
var dishRouter = express.Router();
module.exports = dishRouter; //make it a module

// If data contains json data. pasrse it
dishRouter.use(bodyParser.json());


// The route method is specified to be used.  The URL path is specified as '/'
// The specific paths were the following dishRoute will be used is specified below
// in app.use('/dishes',dishRouter)
dishRouter.route('/')

// 'all' is chained into 'route'
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

// 'get' is chained into 'route'
.get(function(req,res,next){
        res.end('Will send all the dishes to you!');
})


// 'post' is chained into 'route'
.post(function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

// 'delete' is chained into 'route' & ';' to end the chain of properties
.delete(function(req, res, next){
        res.end('Deleting all dishes');
});



// define another router, to be applied if there is an id
// same here, as above. Chain the actions together, and end with ';'
dishRouter.route('/:dishId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name +
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting dish: ' + req.params.dishId);
});

//Module ends, All app.use and use.listen transfered to server.js,
//the rest of the routers use pretty much this template but replacing the topic.

// This server is set up to be REST server for dishes
// Therefore, code is specified to handle all request actions (e.g. GET, PUT, DELETE, POST)
// This will be set up for both dishes page and specific ID dishes
// In this case we are using the Express Router, which allows a one-time defintion of the route,
// rather than define it for each response situation


