const nodeEnv = process.env.NODE_ENV || 'development'

if (nodeEnv !== 'production') {
  const { config } = require('dotenv')
  config({ path: `.env.${nodeEnv}` })
}

export const env = {
  node: {
    mode: nodeEnv,
    isDeveloping: nodeEnv === 'development',
    isTesting: nodeEnv === 'test',
    isProduction: nodeEnv === 'production'
  },
  npm: {
    packageName: process.env.npm_package_name || ''
  },
  app: {
    port: Number(process.env.APP_PORT) || 8080
  },
  logger: {
    logLevel: process.env.LOG_LEVEL || 'info'
  },
  database: {
    connectionUri: process.env.DATABASE_CONNECTION_URI || '',
    casesCollection: process.env.DATABASE_CASES_COLLECTION || 'cases',
    labelsCollection: process.env.DATABASE_LABELS_COLLECTION || 'labels',
    reviewsCollection: process.env.DATABASE_REVIEWS_COLLECTION || 'reviews',
    usersCollection: process.env.DATABASE_USERS_COLLECTION || 'users'
  }
}
