const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  nombre: String,
  pais: String
})

userSchema.set('toJSON',{ //modificar el toJSON de la respuesta y eliminar datos innecesarios
  transform: (document,respuesta) =>{
    respuesta.id = respuesta._id
    delete respuesta._id
    delete respuesta.__v
  }
})

const User = model('User', userSchema)

module.exports = User