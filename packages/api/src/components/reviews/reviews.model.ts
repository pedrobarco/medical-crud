import { Schema, Document } from 'mongoose'
import { database } from '../../lib/database'

export interface IReview {
  userId: string;
  caseId: string;
  conditionId: string;
  created?: Date;
}

const ReviewsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, required: true, ref: 'User'
  },
  caseId: {
    type: Schema.Types.ObjectId, required: true, ref: 'Case'
  },
  conditionId: {
    type: Schema.Types.ObjectId, required: true, ref: 'Condition'
  },
  created: {
    type: Date, required: true, default: Date.now
  }
})

export const Review = database.model<IReview & Document>('Review', ReviewsSchema)
