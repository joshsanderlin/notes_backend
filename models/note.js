const mongoose = require('mongoose')

/* Configure MongoDB connection */
const db_password = process.env.DB_PASSWORD
const db_username = process.env.DB_USERNAME
const db_collection = process.env.DB_COLLECTION
const db_url =
  `mongodb+srv://${db_username}:${db_password}@cluster0.y42xl.mongodb.net/${db_collection}?retryWrites=true&w=majority`

console.log('connecting to MongoDB...')

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    console.log('Connection to MongoDB established!')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message)
  })

/* Configure Schema */
const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)

