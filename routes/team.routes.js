var express = require('express');
var router = express.Router();
const {createTeam,
    allTeam,
    editTeam,
    deleteTeam,
    searchTeam} = require('../Controller/team.controller')
const {checkToken} = require('../Controller/auth/auth')

//--------------All------------------------
router.get('/allteam', allTeam)

//--------------create------------------------
router.post('/createteam',checkToken, createTeam)

//----------------edit--------------------------------
router.patch('/editteam/:id',checkToken, editTeam)

//-------------------------------delete---------------------------
router.delete('/deleteteam/:id',checkToken, deleteTeam)

//--------------------------search---------------------------
router.get('/searchteam', searchTeam)

module.exports = router;
