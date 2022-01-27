const express = require('express')
const router = express.Router()
const dba = require('../controllers/db_controller.js')


router.get('/', (req, res) => {
  res.render('index')
})

router.get('/reset', (req, res) => {
  let user = dba.dbController.reset();
  console.log("user " + user);
  res.render('index', { user: user })
})

module.exports = router