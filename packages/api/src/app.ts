import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { env } from './lib/env'
import { logger } from './lib/logger'
import { UsersRouter } from './components/users'
import { CasesRouter } from './components/cases'
import { ConditionsRouter } from './components/conditions'

export class App {
  public server;

  constructor () {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.server.use(helmet())
    this.server.use(cors())
    this.server.use(express.json())
  }

  routes () {
    this.server.use(UsersRouter)
    this.server.use(CasesRouter)
    this.server.use(ConditionsRouter)
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
