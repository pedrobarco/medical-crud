import { CasesDao } from './cases.dao'
import { CreateCaseDto, UpdateCaseDto } from './cases.dto'

export class CasesService {
  static async createCase (dto: CreateCaseDto) {
    return CasesDao.addCase(dto)
  }

  static async getAllCases () {
    return CasesDao.getAllCases()
  }

  static async updateCase (id: string, dto: UpdateCaseDto) {
    const c = (await CasesDao.getCaseById(id))?.toObject()
    if (c) {
      if (dto.description) {
        c.description = dto.description
      } if (dto.isClosed) {
        c.isClosed = dto.isClosed
      }
      return CasesDao.updateCase(id, c)
    }
  }

  static async closeCase (id: string) {
    return this.updateCase(id, { isClosed: true })
  }
}
