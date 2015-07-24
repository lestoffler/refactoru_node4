var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

//calling express returns an app object. Calling methods on the app object configure our application.
var app = express();

//setting view enginge to Jade, this is where static files are served. App.set tells express we're using Jade templates.
app.set('view engine', 'jade');

//This app.set tells express where our Jade templates are.
app.set('views', __dirname + '/views');

//app.use runs on every request. app.use declares MIDDLEWARE (a function that runs in the middle of things). Express checks public folder for any file you are calling, it finds it, it stops looking.
app.use(express.static(__dirname + '/public'));


//body parser converts URL strings and coded garbage to JSON
app.use(bodyParser.urlencoded({extended: false}));

//this is the home route. initial route handler for home route.
app.get('/', indexController.index);

//colon denotes a dynamic route. Denotes the name of the route we want to make dynamic. Second argument is a th
app.get('/next/:nextLocation', indexController.nextPage);


var server = app.listen(8812, function() {
	console.log('WE HAVE LIFT OFF AT: ' + server.address().port);
});
