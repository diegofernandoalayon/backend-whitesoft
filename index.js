require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT
console.log(PORT)
const server = app.listen(PORT, () => {
  console.log("Server Running on port: " + PORT)
})