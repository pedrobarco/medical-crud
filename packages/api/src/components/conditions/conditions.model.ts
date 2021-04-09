import { Schema, Document } from 'mongoose'
import { database } from '../../lib/database'

export interface ICondition {
  code: string;
  description: string;
}

const ConditionsSchema = new Schema({
  code: {
    type: String, required: true
  },
  description: {
    type: String, required: true
  }
})

export const Condition = database.model<ICondition & Document>('Condition', ConditionsSchema)
