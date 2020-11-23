require('dotenv').config()

const mongoose = require('mongoose')

if(process.argv.length < 2) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const db_password = process.env.DB_PASSWORD
const db_username = process.env.DB_USERNAME
const db_collection = process.env.DB_COLLECTION

const db_url =
  `mongodb+srv://${db_username}:${db_password}@cluster0.y42xl.mongodb.net/${db_collection}?retryWrites=true&w=majority`

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

// const note = new Note({
//   content: 'Cyberpunk 2077 is gonna be the tits',
//   date: new Date(),
//   important: true,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })
