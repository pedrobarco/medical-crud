import { ConditionsDao } from './conditions.dao'
import { CreateConditionDto } from './conditions.dto'

export class ConditionsService {
  static async createCondition (dto: CreateConditionDto) {
    return ConditionsDao.addCondition(dto)
  }

  static async getAllConditions () {
    return ConditionsDao.getAllConditions()
  }
}
