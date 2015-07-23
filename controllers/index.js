var magellan = require('../models/magellan.js')

var indexController = {
	index: function(req, res) {
		res.render('index', {expeditions: magellan.expeditions[0]});
	},
	nextPage: function(req, res) {
		var newPage = req.params.nextLocation

		var city 	= magellan.expeditions.filter(function(city){
			
		return city.currentlocation === newPage
			
		})
		console.log(city)

		res.render('index', {expeditions: city[0]})
	}
		
};

module.exports = indexController;