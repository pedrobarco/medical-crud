import mongoose from 'mongoose'
import { logger } from '../logger'
import { env } from '../env'

mongoose.connect(env.database.connectionUri, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', logger.error.bind(logger))
db.once('open', () => {
  logger.info('connected to database')
})
