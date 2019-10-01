const express = require('express')
const router = express.Router()
const company = require('../controllers/companies')

router.get('/', company.index)
router.post('/', company.create)

module.exports = router
