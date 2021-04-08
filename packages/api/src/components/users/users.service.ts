import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { UsersDao } from './users.dao'
import { CreateUserDto } from './users.dto'

export class UsersService {
  static async createUser (user: CreateUserDto) {
    const hash = await bcrypt.hash(user.password, 10)
    return UsersDao.addUser({ email: user.email, password: hash })
  }

  static async loginUser (user: CreateUserDto) {
    const foundUser = await UsersDao.getUserByEmail(user.email)
    let match = false
    if (foundUser) {
      match = await bcrypt.compare(user.password, foundUser.password)
    }
    return match
  }
}
