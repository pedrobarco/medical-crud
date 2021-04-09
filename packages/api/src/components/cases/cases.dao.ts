import { UpdateCaseDto } from './cases.dto'
import { Case, ICase } from './cases.model'

export class CasesDao {
  static async addCase (c: ICase) {
    return Case.create(c)
  }

  static async getAllCases () {
    return Case.find({})
  }

  static async updateCase (id: string, dto: UpdateCaseDto) {
    return Case.updateOne({ _id: id }, dto)
  }

  static async getCaseById (id: string) {
    return Case.findById(id)
  }
}
