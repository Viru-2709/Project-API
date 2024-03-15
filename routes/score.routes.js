var express = require('express');
var router = express.Router();
const { createTeamScore,
    allTeamScore,
    editTeamScore,
    deleteTeamScore,
    searchTeamScore} = require('../Controller/score.controller')
const {checkToken} = require('../Controller/auth/auth')

//--------------All------------------------
router.get('/allteamscore', allTeamScore)

//--------------create------------------------
router.post('/createteamscore',checkToken, createTeamScore)

//----------------edit--------------------------------
router.patch('/editteamscore/:id',checkToken, editTeamScore)

//-------------------------------delete---------------------------
router.delete('/deleteteamscore/:id',checkToken, deleteTeamScore)

//--------------------------search---------------------------
router.get('/searchteamscore', searchTeamScore)

module.exports = router;
