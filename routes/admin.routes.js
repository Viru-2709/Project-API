var express = require('express');
var router = express.Router();
const {adminSignUp , adminLogIn} = require('../Controller/admin.controller')

/* GET users listing. */
router.post('/signup', adminSignUp)

router.post('/login', adminLogIn)

module.exports = router;
