import { CreateUserDto } from './users.dto'
import { User } from './users.model'

export class UsersDao {
  static async addUser (user: CreateUserDto) {
    // generate salt and create user
    User.create(user)
  }
}
