import { Request, Response } from 'express'
import { logger } from '../../lib/logger'
import { CasesService } from './cases.service'

export class CasesController {
  static async createCase (req: Request, res: Response) {
    try {
      const { description } = req.body
      await CasesService.createCase({ description })
      res.sendStatus(201)
    } catch (e) {
      logger.error(e.message)
      res.sendStatus(500)
    }
  }

  static async getAllCases (req: Request, res: Response) {
    try {
      const cases = await CasesService.getAllCases()
      res.json({ cases })
    } catch (e) {
      logger.error(e.message)
      res.sendStatus(500)
    }
  }

  static async updateCase (req: Request, res: Response) {
    try {
      const { id } = req.params
      const { description, isClosed } = req.body
      await CasesService.updateCase(id, { description, isClosed })
      res.sendStatus(204)
    } catch (e) {
      logger.error(e.message)
      res.sendStatus(500)
    }
  }
}
