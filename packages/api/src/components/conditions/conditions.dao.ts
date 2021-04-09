import { Condition, ICondition } from './conditions.model'

export class ConditionsDao {
  static async addCondition (condition: ICondition) {
    return Condition.create(condition)
  }

  static async getAllConditions () {
    return Condition.find({})
  }
}
