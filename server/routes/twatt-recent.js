'use strict'
const express = require('express')
const router = express.Router()
const controllers = require('../controllers/twattController')

router.get('/recent', controllers.twitterRecent)
router.post('/new', controllers.twittPost)

module.exports = router
