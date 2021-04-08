import { Schema, model } from 'mongoose'

const UsersSchema = new Schema({
  email: {
    type: String, required: true
  },
  password: {
    type: String, required: true
  },
  salt: {
    type: String, required: true
  }
})

export const User = model('User', UsersSchema)
