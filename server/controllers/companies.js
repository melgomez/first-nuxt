const { Company, validate } = require('../models/company')

module.exports = {
  index: async (req, res) => {
    const companies = await Company.find()
    res.send({ companies })
  },
  show: async (req, res) => {
    const company = await Company.findById(req.params.id)

    if (!company)
      return res
        .status(404)
        .send({ msg: 'Company with the given ID was not found.' })

    res.send({ company })
  },

  create: async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const { name } = req.body
    const newCompany = new Company({ name })
    await newCompany.save()

    res.send({ msg: 'Successfully added company', company: newCompany })
  },

  update: async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const { name } = req.body

    const company = await Company.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    )

    if (!company)
      res.status(404).send({ msg: 'Company with the given ID was not found' })

    res.send({
      msg: 'Company updated successfully!',
      company
    })
  },
  delete: async (req, res) => {
    const company = await Company.findByIdAndRemove(req.params.id)
    if (!company)
      return res
        .status(404)
        .send({ msg: 'Company with the given ID was not found' })

    res.send({ company, msg: `${company.name} successfully deleted!` })
  }
}
