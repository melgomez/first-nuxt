const mongoose = require('mongoose')
const config = require('config')
const consola = require('consola')

module.exports = () => {
  const db = config.get('db')

  mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })

  mongoose.connection.on('connected', () => {
    consola.log(`Connected to ${db} successfully!`)
  })

  mongoose.connection.on('error', (error) => {
    consola.log('Error', error)
  })
}
