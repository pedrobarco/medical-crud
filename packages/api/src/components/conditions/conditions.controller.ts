import { Request, Response } from 'express'
import { logger } from '../../lib/logger'
import { ConditionsService } from './conditions.service'

export class ConditionsController {
  static async createCondition (req: Request, res: Response) {
    try {
      const { code, description } = req.body
      await ConditionsService.createCondition({ code, description })
      res.sendStatus(201)
    } catch (e) {
      logger.error(e.message)
      res.sendStatus(500)
    }
  }

  static async getAllConditions (_: Request, res: Response) {
    try {
      const conditions = await ConditionsService.getAllConditions()
      res.json({ conditions })
    } catch (e) {
      logger.error(e.message)
      res.sendStatus(500)
    }
  }
}
