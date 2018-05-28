import {Injectable} from '@angular/core';
import {Threaddump} from './parser/beans/threaddump';
import {Thread} from './parser/beans/thread';

@Injectable()
export class LockAnalyserService {

  constructor() {
  }

  public analiseAll(lock: string, threaddumps: Threaddump[]): Promise<LockReport[]> {
    const reports$: Promise<LockReport>[] = [];
    threaddumps.forEach((threaddump) => {
      reports$.push(this.analise(lock, threaddump));
    });
    return Promise.all(reports$);
  }

  public async analise(lock: string, threaddump: Threaddump): Promise<LockReport> {

    const lockReport: LockReport = new LockReport(threaddump);
    threaddump.threads.forEach((thread: Thread) => {
      if (thread.locked.includes(lock)) {
        lockReport.owner = thread;
      }

      if (thread.waitingToLock === lock) {
        lockReport.waitingToLock.push(thread);
      }

      if (thread.waitingOn === lock) {
        lockReport.waitingOn.push(thread);
      }

      if (thread.parkingToWaitFor === lock) {
        lockReport.parkingToWaitFor.push(thread);
      }
    });

    return lockReport;

  }

}

export class LockReport {
  public readonly threaddump: Threaddump;
  private _owner: Thread;
  public readonly waitingToLock: Thread[] = [];
  public readonly waitingOn: Thread[] = [];
  public readonly parkingToWaitFor: Thread[] = [];

  constructor(threaddump: Threaddump) {
    this.threaddump = threaddump;
  }

  get owner(): Thread {
    return this._owner;
  }

  set owner(value: Thread) {
    if (this._owner) {
      throw new Error('Lock can\'t have multiple owner!');
    }
    this._owner = value;
  }

}
