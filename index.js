require('dotenv').config()
require('./mongo.js')
const express = require('express')
const cors = require('cors')
const usersRouter = require('./controllers/users')
const notFound = require('./middleware/notFound.js')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(request,response)=>{
  response.send('<h1>Hola</h1>')
})
app.use('/api/users',usersRouter)

app.use(notFound)

const PORT = process.env.PORT
console.log(PORT)
const server = app.listen(PORT, () => {
  console.log("Server Running on port: " + PORT)
})