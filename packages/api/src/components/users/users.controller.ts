import { Request, Response } from 'express'
import { UsersService } from './users.service'

export class UsersController {
  static async createUser (req: Request, res: Response) {
    try {
      const { email, password } = req.body
      await UsersService.createUser({ email, password })
      res.sendStatus(201)
    } catch (e) {
      res.sendStatus(500)
    }
  }

  static async loginUser (req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const jwt = await UsersService.loginUser({ email, password })
      return jwt ? res.sendStatus(200).json(jwt) : res.sendStatus(401)
    } catch (e) {
      res.sendStatus(500)
    }
  }
}
