const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname:String,
  lastname: String,
  username : String,
  email : {
    type : String,
    unique : true
  },
  password : String
});

const User = mongoose.model('user', userSchema);

module.exports = User
