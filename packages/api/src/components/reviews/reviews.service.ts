import { CasesService } from '../cases'
import { ReviewsDao } from './reviews.dao'
import { CreateReviewDto } from './reviews.dto'

export class ReviewsService {
  static async createReview (dto: CreateReviewDto) {
    return [ReviewsDao.addReview(dto), CasesService.closeCase(dto.caseId)]
  }
}
