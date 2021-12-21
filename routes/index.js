const express = require('express')
const router = express.Router()
const dba = require('../services/db_access.js')


router.get('/', (req, res) => {
  res.render('index')
})

router.get('/reset', (req, res) => {
  dba.dbAccess.reset().then((user) => {
    console.log("user " + user);
    res.render('index', { user: user })
  })})

module.exports = router