import { Injectable } from '@angular/core';
import {Threaddump} from './parser/beans/threaddump';

@Injectable()
export class LockAnalyserService {

  constructor() { }

  public analise(lock: string, treaddump: Threaddump ): void {

  }

}

export class LockReport {
  owner: Threaddump;
  // locked
}
