import {Diary} from 'diary';

export class Engine {

  constructor() {
    this.logger = Diary.logger('engine');;
  }

  start() {
    this.logger.info('Starting hydrogen-boosted engine!');
  }

}