require('dotenv').config()
const express = require('express')
const usersRouter = require('./controllers/users')
const app = express()

app.get('/',(request,response)=>{
  response.send('<h1>Hola</h1>')
})
app.use('/api/users',usersRouter)

const PORT = process.env.PORT
console.log(PORT)
const server = app.listen(PORT, () => {
  console.log("Server Running on port: " + PORT)
})