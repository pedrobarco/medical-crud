import { Router } from 'express'
import { UsersController } from './users.controller'

export const UsersRouter = Router()

UsersRouter
  .route('/users')
  .post(UsersController.createUser)

UsersRouter
  .route('/login')
  .post(UsersController.loginUser)
