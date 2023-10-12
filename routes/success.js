const express = require('express');
const path = require('path');
const router = express.Router();
const successCont = require('../controllers/successController');

router.get('/success',successCont.getSuccess);

router.post('/success',successCont.postSucccess);

module.exports = router;