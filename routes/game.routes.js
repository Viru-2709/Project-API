var express = require('express');
var router = express.Router();
const {createGame,
    allGame,
    editGame,
    deleteGame,
    searchGame} = require('../Controller/game.controller')
const {checkToken} = require('../Controller/auth/auth')

//--------------All------------------------
router.get('/allgame', allGame)

//--------------create------------------------
router.post('/creategame',checkToken, createGame)

//----------------edit--------------------------------
router.patch('/editgame/:id',checkToken, editGame)

//-------------------------------delete---------------------------
router.delete('/deletegame/:id',checkToken, deleteGame)

//--------------------------search---------------------------
router.get('/searchgame', searchGame)

module.exports = router;
