const mongoose = require('mongoose')
const {MONGO_DB_URI} = process.env

mongoose.connect(MONGO_DB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
  console.log('Database connected')
}).catch(err =>{
  console.error(err)
})

process.on('uncaughtException', () => {
  mongoose.connection.close()
})