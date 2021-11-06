const userRouter = require('express').Router()
const User = require('../models/userModel')

userRouter.get('/', (request,response)=>{
  User.find({})
    .then((res)=>{
      console.log(res)
    })
  response.json({hola:'mundo'})
})

userRouter.post('/', (request, response) => {
  console.log('hola')
  console.log({request})
  const { body } = request
  console.log(body)
  const { nombre, pais } = body

  const user = new User({
    nombre,
    pais
  })
  user.save()
    .then((savedUser)=>{
      response.status(200).json(savedUser)
    })
})

module.exports = userRouter