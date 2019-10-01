const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
})

function validateCompany(company) {
  const schema = Joi.object({
    name: Joi.string().required()
  })
  return schema.validate(company)
}

module.exports.companySchema = companySchema
module.exports.Company = mongoose.model('Company', companySchema)
module.exports.validate = validateCompany
