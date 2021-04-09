import { Router } from 'express'
import { ConditionsController } from './conditions.controller'

export const ConditionsRouter = Router()

ConditionsRouter
  .route('/conditions')
  .get(ConditionsController.getAllConditions)
  .post(ConditionsController.createCondition)
