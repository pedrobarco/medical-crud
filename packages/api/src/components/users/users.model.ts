import { Schema, Document } from 'mongoose'
import { database } from '../../lib/database'

export interface IUser {
  email: string;
  password: string;
}

const UsersSchema = new Schema({
  email: {
    type: String, required: true
  },
  password: {
    type: String, required: true
  }
})

export const User = database.model<IUser & Document>('User', UsersSchema)
