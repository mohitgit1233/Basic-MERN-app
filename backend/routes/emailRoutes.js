const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {testemail} = require('../controllers/mailcontroller')

router.post('/',testemail)


module.exports = router