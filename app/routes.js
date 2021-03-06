var Member = require('./models/Member.js');
var Org = require('./models/Org.js');

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
    var newMember = new Member(req.body);
    newMember.save(function(err) {
      if (err) return res.send(err);
      res.json({ message: 'New member created' });
    });
  });

  app.delete('/api/member/:icnumber', function(req, res) {
    if (req.params.icnumber) {
      Member.find({ icnumber: req.params.icnumber }).remove(function(err) {
        if (err) return res.send(err);
        res.json({ message: 'A member deleted' });
      });
    };
  });

  // Organization routes
  app.get('/api/org/:id', function(req, res) {
    if (req.params.id) {
      Org.findById(req.params.id, function(err, data) {
        if (err) return res.send(err);
        res.json(data);
      });
    };
  });

  app.put('/api/org/:id', function(req, res) {
    if (req.params.id) {
      Org.findById(req.params.id, function(err, data) {
        if (err) return res.send(err);
        data.title = req.body.title;
        data.addr = req.body.addr;
        data.registration = req.body.registration;
        data.reference = req.body.reference;
        data.save(function(err) {
          if (err) return res.send(err);
          res.json({ message: 'Organization details updated' });
          return;
        });
      });
    };
  });

  app.post('/api/org', function(req, res) {
    var newOrg = new Org(req.body);
    newOrg.save(function(err) {
      if (err) return res.send(err);
      res.json({ message: 'New organization created' });
    });
  });

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

};
