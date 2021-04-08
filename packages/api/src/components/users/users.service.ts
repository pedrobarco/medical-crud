import { UsersDao } from './users.dao'
import { CreateUserDto } from './users.dto'

export class UsersService {
  static async create (resource: CreateUserDto) {
    return UsersDao.addUser(resource)
  }
}
