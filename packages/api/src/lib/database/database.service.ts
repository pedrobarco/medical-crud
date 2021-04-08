import mongoose from 'mongoose'
import { env } from '../env'

mongoose.connect(env.database.connectionUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export { mongoose as database }
