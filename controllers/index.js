var magellan = require('../models/magellan.js')

var indexController = {
	//this is where information is read from the request, data is looked up in the database, data is organized, and then we feed it to our template.
	index: function(req, res) {
		//used to pass data to our Jade file
		//data is passed to render by putting it in a data object. 
		res.render('index', {expeditions: magellan.expeditions[0]});
	},
	nextPage: function(req, res) {
		//setting a dynamic route
		var newPage = req.params.nextLocation
	
		//filter method used to grab one object from the array stored in variable expeditions found in magellan.js file
		var city = magellan.expeditions.filter(function(city){
			return city.currentlocation === newPage
			
		})
		//if city does not equal the first object in expeditions array, then render the next object in array.
		if (city.length !== 0) {
			res.render('index', {expeditions: city[0]})
		}
		//otherwise, throw error "notfound"=== h1 this location does not exist.
		else {
			res.render('index', {error: "notfound"})
		}
		//passing data to our render request, in a data object, using a counter for filter array
		// res.render('index', {expeditions: city[0]})
	}
		
};

//exposing properties to other files
module.exports = indexController;