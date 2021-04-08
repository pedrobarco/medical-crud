import { User, IUser } from './users.model'

export class UsersDao {
  static async addUser (u: IUser) {
    return User.create(u)
  }

  static async getUserByEmail (email: string) {
    return User.findOne({ email })
  }
}
