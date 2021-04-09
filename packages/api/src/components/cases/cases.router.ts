import { Router } from 'express'
import { CasesController } from './cases.controller'

export const CasesRouter = Router()

CasesRouter
  .route('/cases')
  .get(CasesController.getAllCases)
  .post(CasesController.createCase)

CasesRouter
  .route('/cases/:id')
  .patch(CasesController.updateCase)
