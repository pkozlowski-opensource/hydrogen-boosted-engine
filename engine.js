export class Engine {

  constructor(logger) {
    this.logger = logger;
  }

  start() {
    this.logger.info('Starting hydrogen-boosted engine!');
  }

}