const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamname: {
    type: String,
    unique: true
  },
  players: {
    type: Object
  },
  organization: {
    type: String,
  },
  manager: String,
  gamename: String
});

const Team = mongoose.model('team', teamSchema);

module.exports = Team
