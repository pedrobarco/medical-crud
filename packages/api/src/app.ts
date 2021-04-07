import express from 'express'
import { env } from './lib/env'
import { logger } from './lib/logger'

export class App {
  public server;

  constructor () {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.server.use(express.json())
  }

  routes () {
    // this.server.use(routes)
  }

  start () {
    this.server.listen(env.app.port, () => {
      logger.verbose(
        'initializing config in %s mode: %s',
        env.node.mode,
        JSON.stringify(env, null, 2)
      )
      logger.info(`server listening at port ${env.app.port}`)
    })
  }
}
