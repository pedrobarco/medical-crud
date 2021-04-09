import { Review, IReview } from './reviews.model'

export class ReviewsDao {
  static async addReview (review: IReview) {
    return Review.create(review)
  }
}
