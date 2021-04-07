import express from 'express'
import { env } from './lib/env'

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
      console.log(`server listening at port ${env.app.port}`)
    })
  }
}
