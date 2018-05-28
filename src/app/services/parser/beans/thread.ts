import {LockSynchronizeEntry} from './lock.synchronize.entry';
import {StackEntry} from './stack.entry';

export class Thread {
  public name: string;
  public daemon = false;
  public status: string;
  public state: State;
  public priority: string;
  public id: string;
  public nativeId: string;
  public in: string;
  public callstack: string;
  public stack: StackEntry[] = [];
  public lock: LockSynchronizeEntry[] = [];

  public locked: string[] = [];
  public waitingToLock: string;
  public waitingOn: string;
  public parkingToWaitFor: string;
}

export enum State {
  NEW = 'NEW',
  RUNNABLE = 'RUNNABLE',
  BLOCKED = 'BLOCKED',
  WAITING = 'WAITING',
  TERMINATED = 'TERMINATED',
  TIMED_WAITING = 'TIMED_WAITING'

}
