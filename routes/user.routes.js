var express = require('express');
var router = express.Router();
const {SignUp , LogIn} = require('../Controller/user.controller')

/* GET users listing. */
router.post('/signup', SignUp)

router.post('/login', LogIn)

module.exports = router;
