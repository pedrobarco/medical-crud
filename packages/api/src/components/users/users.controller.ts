import { Request, Response } from 'express'

export class UsersController {
  static async createUser (_: Request, res: Response) {
    res.sendStatus(201)
  }
}
