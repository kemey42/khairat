// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define schema
var memberSchema = new Schema({
  fullname: String,
  homeaddr: String,
  dob: String,
  icnumber: String,
  phone: {
    home: String,
    mobile: String
  },
  occupation: String,
  emailaddr: String,
  dependents: [{
    fullname: String,
    relationship: String,
    dob: String,
    icnumber: String
  }],
  status: { type: Boolean, default: true},
  created_at: Date,
  updated_at: Date
});

// define custom method for schema
memberSchema.methods.namify = function(){
  this.fullname = this.fullname + ' OK';
  return this.fullname;
};

  // on every save, add the date
memberSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Member', memberSchema);
