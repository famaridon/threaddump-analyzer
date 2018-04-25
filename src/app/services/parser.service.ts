import {Injectable} from '@angular/core';

import {Threaddump} from './parser/beans/threaddump';
import {ThreaddumpParser} from './parser/threaddump-parser';

export * from './parser/beans/threaddump';
export * from './parser/beans/thread';
export * from './parser/beans/stack.entry';
export * from './parser/beans/lock.synchronize.entry';



/**
 * this service add ability to parse thread dump as object
 */
@Injectable()
export class ParserService {

  constructor() {
  }

  /**
   * promise to parse thread dump file
   * @param {File} file
   * @returns {Promise<Threaddump>}
   */
  public load(file: File): Promise<Threaddump> {
    return new Promise<Threaddump>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const threaddumpParser = new ThreaddumpParser();
        threaddumpParser.parse(reader.result);
        const threaddump = threaddumpParser.getThreaddump();
        threaddump.name = file.name;
        resolve(threaddump);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  }

}
