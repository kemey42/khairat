// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define schema
var orgSchema = new Schema({
  title: String,
  addr: String,
  registration: String,
  reference: String
});

module.exports = mongoose.model('Org', orgSchema);