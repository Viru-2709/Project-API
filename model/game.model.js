const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: String,
  type: String,
});

const Game = mongoose.model('game', gameSchema);

module.exports = Game
