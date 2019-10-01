const express = require('express')
const router = express.Router()
const company = require('../controllers/companies')

router.get('/', company.index)
router.get('/:id', company.show)
router.post('/', company.create)
router.put('/:id', company.update)
router.delete('/:id', company.delete)

module.exports = router
