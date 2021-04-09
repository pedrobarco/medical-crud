import { Request, Response } from 'express'
import { logger } from '../../lib/logger'
import { ReviewsService } from './reviews.service'

export class ReviewsController {
  static async createReview (req: Request, res: Response) {
    try {
      const { userId, caseId, conditionId } = req.body
      await ReviewsService.createReview({ userId, caseId, conditionId })
      res.sendStatus(201)
    } catch (e) {
      logger.error(e.message)
      res.sendStatus(500)
    }
  }
}
