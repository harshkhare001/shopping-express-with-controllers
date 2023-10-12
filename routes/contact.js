const express = require('express');
const path = require('path');

const router = express.Router();
const contactController = require('../controllers/contact')

router.get('/contactus',contactController.contact);

module.exports = router;