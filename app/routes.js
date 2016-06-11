var Ahli = require('./models/Ahli.js');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

  // Ahli routes
  app.get('/api/ahli', function(req, res) {
    Ahli.find(function(err, ahli){
      if (err)
        res.send(err);
      res.json(ahli);
    });
  });
  
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};