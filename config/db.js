const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://suresh:suresh12@cluster0.tvmpj6b.mongodb.net/Bookstore_ManagementSystem'
)

const db = mongoose.connection

db.on('error', (error) => {
  console.log('error to connecting with database')
})

db.once('open', function () {
  console.log('Successfully connected to database')
})
