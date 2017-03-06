'use strict'
const express = require('express')
const router = express.Router()
const controllers = require('../controllers/twattController')

router.get('/recent', controllers.twitterRecent)

module.exports = router
