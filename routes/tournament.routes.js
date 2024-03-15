var express = require('express');
var router = express.Router();
const {createTournament,
    allTournament,
    editTournament,
    deleteTournament,
    searchTournament} = require('../Controller/tournament.controller')
const {checkToken} = require('../Controller/auth/auth')

//--------------All------------------------
router.get('/alltournament', allTournament)

//--------------create------------------------
router.post('/createtournament',checkToken, createTournament)

//----------------edit--------------------------------
router.patch('/edittournament/:id',checkToken, editTournament)

//-------------------------------delete---------------------------
router.delete('/deletetournament/:id',checkToken, deleteTournament)

//--------------------------search---------------------------
router.get('/searchtournament', searchTournament)

module.exports = router;
