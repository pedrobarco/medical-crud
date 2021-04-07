import express from 'express'

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
}
