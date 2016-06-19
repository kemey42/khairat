var Member = require('./models/Member.js');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // Member routes
  app.get('/api/member', function(req, res) {
    Member.find(function(err, data) {
      if (err) return res.send(err);
      res.json(data);
    });
  });

  app.get('/api/member/:icnumber', function(req, res) {
    if (req.params.icnumber) {
      Member.find({ icnumber: req.params.icnumber }, function(err, data) {
        if (err) return res.send(err);
        res.json(data);
      });
    };
  });

  app.post('/api/member', function(req, res) {
    var newMember = new Member();
    newMember.fullname = req.body.fullname;
    newMember.homeaddress = req.body.homeaddress;
    newMember.dob = req.body.dob;
    newMember.icnumber = req.body.icnumber;
    newMember.homenumber = req.body.homenumber;
    newMember.mobilenumber = req.body.mobilenumber;
    newMember.occupation = req.body.occupation;
    newMember.email = req.body.email;

    newMember.save(function(err) {
      if (err) return res.send(err);
      res.json({ message: 'New member created' });
    });
  });

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

};
