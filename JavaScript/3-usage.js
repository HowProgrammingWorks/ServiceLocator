'use strict';

const { ServiceLocator } = require('./2-locator.js');

class Server {
  constructor() {
    const { Logger } = ServiceLocator.get('logger');
    this.logger = new Logger();
  }

  shutdown() {
    this.logger.log('Shutting down...');
  }
}

const logger = require('./logger.js');
ServiceLocator.set('logger', logger);

const server = new Server();
server.shutdown();
console.log('Bye!');
