require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(request,response)=>{
  response.json({error: "holo"})
})

const PORT = process.env.PORT
console.log(PORT)
const server = app.listen(PORT, () => {
  console.log("Server Running on port: " + PORT)
})