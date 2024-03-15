var express = require('express');
var router = express.Router();
const {createInquiry} = require('../Controller/inquiry.controller')

router.post('/addinquiry', createInquiry)

module.exports = router;
