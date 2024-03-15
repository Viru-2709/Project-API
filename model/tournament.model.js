const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  name: String,
  orgainizer: {
    type: String,
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: 'game',
    required: true
  },
  pricepoll: String,
});

const Tournament = mongoose.model('tournament', tournamentSchema);

module.exports = Tournament
