const userRouter = require('express').Router()

userRouter.get('/', (request,response)=>{
  response.json({hola:'mundo'})
})

module.exports = userRouter