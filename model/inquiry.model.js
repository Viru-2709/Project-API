const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inquirySchema = new Schema({
  name : String,
  email : {
    type : String,
    unique : true
  }, 
  number : String,
  subject : {
    type : String,
    enum : ['organize' , 'analysis']
  },
  message : String
});

const Inquiry = mongoose.model('inquiry', inquirySchema);

module.exports = Inquiry
