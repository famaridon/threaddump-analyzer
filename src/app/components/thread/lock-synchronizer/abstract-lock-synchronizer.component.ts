import {LockSynchronizeEntry} from '../../../services/lock.synchronize.entry';
import {LockSynchronizeComponentRender} from './lock-synchronizer.component';


export abstract class AbstractLockSynchronizerComponent<T extends LockSynchronizeEntry> implements LockSynchronizeComponentRender<T> {

  private _lockSynchronizeEntry: T;

  constructor() {
  }

  setLockSynchronizeEntry(lockSynchronizeEntry: T) {
    this._lockSynchronizeEntry = lockSynchronizeEntry;
  }


  get lockSynchronizeEntry(): T {
    return this._lockSynchronizeEntry;
  }
}
