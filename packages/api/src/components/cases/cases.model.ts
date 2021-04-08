import { Schema, Document } from 'mongoose'
import { database } from '../../lib/database'

export interface ICase {
  description: string;
  isClosed?: boolean;
}

const CasesSchema = new Schema({
  description: {
    type: String, required: true
  },
  isClosed: {
    type: Boolean, default: false
  }
})

export const Case = database.model<ICase & Document>('Case', CasesSchema)
