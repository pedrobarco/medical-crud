import { Router } from 'express'
import { ReviewsController } from './reviews.controller'

export const ReviewsRouter = Router()

ReviewsRouter
  .route('/reviews')
  .post(ReviewsController.createReview)
