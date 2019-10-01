const express = require('express')
const companies = require('../routes/companyRoutes')

module.exports = (app) => {
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use('/company', companies)
}
