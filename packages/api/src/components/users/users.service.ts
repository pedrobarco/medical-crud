import bcrypt from 'bcrypt'

import { UsersDao } from './users.dao'
import { CreateUserDto } from './users.dto'

export class UsersService {
  static async createUser (dto: CreateUserDto) {
    const hash = await bcrypt.hash(dto.password, 10)
    return UsersDao.addUser({ email: dto.email, password: hash })
  }

  static async loginUser (dto: CreateUserDto) {
    const foundUser = await UsersDao.getUserByEmail(dto.email)
    let match = false
    if (foundUser) {
      match = await bcrypt.compare(dto.password, foundUser.password)
    }
    return match
  }
}
