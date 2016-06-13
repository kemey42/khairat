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

  app.post('/api/ahli', function(req,res) {
    var newAhli = new Ahli();
    newAhli.fullname = req.body.fullname;
    newAhli.homeaddress = req.body.homeaddress;
    newAhli.dob = req.body.dob;
    newAhli.icnumber = req.body.icnumber;
    newAhli.homenumber = req.body.homenumber;
    newAhli.mobilenumber = req.body.mobilenumber;
    newAhli.occupation = req.body.occupation;
    newAhli.email = req.body.email;

    newAhli.save(function(err) {
      if(err)
        res.send(err);
      res.json({message:'New ahli created'});
    });
  });
  
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};