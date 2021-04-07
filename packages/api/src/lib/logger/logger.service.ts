import { createLogger, format, transports } from 'winston'
import { env } from '../env'

const consoleTransport = new transports.Console({
  level: env.logger.logLevel,
  silent: env.node.isTesting,
  format: format.combine(format.splat(), format.cli())
})

const fileTransport = new transports.File({
  level: env.logger.logLevel,
  filename: 'combined.log',
  options: { flags: 'w' },
  format: format.combine(
    format.align(),
    format.timestamp(),
    format.splat(),
    format.label({ label: env.npm.packageName }),
    format.printf(({ timestamp, label, level, message }) => {
      return `${timestamp} [${label}] ${level}: ${message}`
    })
  )
})

export const logger = createLogger({
  transports: [consoleTransport, fileTransport]
})
