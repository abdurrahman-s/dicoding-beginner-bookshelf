const Hapi = require('@hapi/hapi') // eslint-disable-line import/no-extraneous-dependencies
const winston = require('winston') // eslint-disable-line import/no-extraneous-dependencies
const routes = require('./routes')

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ],
})

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  })
  server.route(routes)

  await server.start()
  logger.info(`Server berjalan pada ${server.info.uri}`)
}

init()
