const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  nombre: String,
  pais: String
})

const User = model('User', userSchema)

module.exports = User