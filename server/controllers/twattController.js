'use strict'

const express = require('express')
const router = express.Router()
const oAuth = require('oauth')
require('dotenv').config()

let my_oAuth = new oAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.CONSUMER_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
)

module.exports = {
  twitterRecent: function (req, res, next) {
    my_oAuth.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json`,
      process.env.ACCESS_TOKEN, // test user token
      process.env.TOKEN_SECRET, // test user secret
      function (e, data, respond) {
        if (e) console.error(e)
        console.log(require('util').inspect(data))
        res.send(data)
      }
    )
  }
}
