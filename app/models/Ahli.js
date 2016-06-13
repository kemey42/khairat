// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define schema
var ahliSchema = new Schema({
  fullname: String,
  homeaddress: String,
  dob: String,
  icnumber: String,
  homenumber: String,
  mobilenumber: String,
  occupation: String,
  email: String,
  created_at: Date,
  updated_at: Date
});

// define custom method for schema
ahliSchema.methods.namify = function(){
  this.fullname = this.fullname + ' OK';
  return this.fullname;
};

  // on every save, add the date
ahliSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Ahli', ahliSchema);
