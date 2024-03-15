const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  team : String,
  kill : Number,
  totalpoints : Number,
  mvp : {
    type : String,
  },
  tournament : {
    type: Schema.Types.ObjectId,
    ref: 'tournament',
    required: true
  }
});

const Score = mongoose.model('score', scoreSchema);

module.exports = Score
