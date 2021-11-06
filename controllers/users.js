const userRouter = require('express').Router()
const User = require('../models/userModel')

userRouter.get('/', (request,response)=>{
  User.find({})
    .then((res)=>{
      response.status(200).json(res)
    })
})

userRouter.post('/', (request, response) => {
  const { body } = request
  const { nombre, pais } = body

  const user = new User({
    nombre,
    pais
  })
  user.save()
    .then((savedUser)=>{
      response.status(201).json(savedUser)
    })
})

module.exports = userRouter