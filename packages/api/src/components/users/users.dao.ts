import { User, IUser } from './users.model'

export class UsersDao {
  static async addUser (user: IUser) {
    return User.create(user)
  }

  static async getUserByEmail (email: string) {
    return User.findOne({ email })
  }
}
