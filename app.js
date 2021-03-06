const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const notesRouter = require('./controllers/notes')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

/* Connect to MongoDB Server */
logger.info('connecting to MongoDB...')

const db_collection = config.NODE_ENV === 'test'
  ? config.TEST_DB_COLLECTION
  : config.DB_COLLECTION

const db_url =
  `mongodb+srv://${config.DB_USERNAME}:${config.DB_PASSWORD}@cluster0.y42xl.mongodb.net/${db_collection}?retryWrites=true&w=majority`

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('Connection to MongoDB established!')
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB:', error.message)
  })

/* Finish app configuration */
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/notes', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
