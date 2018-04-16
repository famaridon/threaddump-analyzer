import {Injectable} from '@angular/core';

import {Threaddump} from './threaddump';
import {Thread, State} from './thread';
import {AtStackEntry, LockedStackEntry, StackEntry, UnknowStackEntry, WaintingToLockStackEntry} from './stack.entry';
import {
  LockSynchronizeEntry,
  LockOwnableSynchronizersEntry,
  UnknownLockSynchronizeEntry,
  NoneLockSynchronizeEntry
} from './lock.synchronize.entry';

export * from './threaddump';
export * from './thread';
export * from './stack.entry';
export * from './lock.synchronize.entry';

export let THREAD_BLANK_LINE_DETECT_REGEX = /^\s*$/;

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
        window.console.profile(file.name);
        const threaddumpParser = new ThreaddumpParser();
        threaddumpParser.parse(reader.result);
        const threaddump = threaddumpParser.getThreaddump();
        threaddump.name = file.name;
        resolve(threaddump);
        console.profileEnd();
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  }

}

export class ThreaddumpParser {

  private threaddump: Threaddump;

  constructor() {
    this.threaddump = new Threaddump();
  }

  public getThreaddump(): Threaddump {
    return this.threaddump;
  }

  public parse(content: string): void {
    const lines = content.split('\n');
    // first ligne is threaddump date
    this.threaddump.date = new Date(lines[0]);
    this.threaddump.description = lines[1];

    let threadParser = new ThreadParser();
    // now parse thread
    for (let i = 3; i < lines.length; i++) {
      const result = threadParser.parseNextLine(lines[i]);
      if (result === ThreadParseResult.COMPLETED) {
        this.threaddump.threads.push(threadParser.thread);
        threadParser = new ThreadParser();
        if (i + 1 >= lines.length || !threadParser.canParse(lines[i + 1])) { // check for EOF
          break;
        }
      }
    }
  }

}

export class ThreadParser {

  private _thread: Thread;
  private stage: ThreadParseStage;
  private currentParseResult: ThreadParseResult;

  constructor() {
    this._thread = new Thread();
    this.stage = new ThreadHeaderParserStage();
    this.currentParseResult = ThreadParseResult.STARTING;
  }

  public canParse(line: string): boolean {
    return this.stage.canParse(line);
  }

  public parseNextLine(line: string): ThreadParseResult {
    if (this.currentParseResult === ThreadParseResult.COMPLETED) {
      throw new Error('Try to parse more lines on completed thread parser!');
    }
    this.currentParseResult = this.stage.parseNextLine(this._thread, line);
    this.stage = this.stage.nextStage();

    return this.currentParseResult;
  }

  get thread(): Thread {
    return this._thread;
  }
}

export enum ThreadParseResult {
  STARTING,
  CONTINUE,
  COMPLETED
}

export interface ThreadParseStage {

  canParse(line: string): boolean;

  parseNextLine(thread: Thread, line: string): ThreadParseResult;

  nextStage(): ThreadParseStage;
}

export class ThreadHeaderParserStage implements ThreadParseStage {

  /* tslint:disable */
  public static readonly THREAD_HEADER_PARSE_REGEX = /^"(.*)"(?: (daemon))?(?: (prio)=([0-9]*))?(?: (tid)=([0-9a-z]*))?(?: (nid)=([0-9a-z]*))?(?: (runnable|waiting on condition|in [a-zA-Z.()]*))?(?: \[([0-9a-z]*)\])?/;
  /* tslint:enable */

  public static readonly THREAD_HEADER_DETECT_REGEX = /^"(.*)".*(tid=).*/;

  canParse(line: string): boolean {
    return ThreadHeaderParserStage.THREAD_HEADER_DETECT_REGEX.test(line);
  }

  public parseNextLine(thread: Thread, line: string): ThreadParseResult {
    const header = ThreadHeaderParserStage.THREAD_HEADER_PARSE_REGEX.exec(line);
    thread.name = header[1];
    // loop over header parts
    for (let j = 2; j < header.length - 1; j++) {
      if (!header[j]) {
        continue;
      }
      if (header[j] === 'daemon') {
        thread.daemon = true;
      } else if (header[j] === 'prio') {
        thread.priority = header[j + 1];
      } else if (header[j] === 'tid') {
        thread.id = header[j + 1];
      } else if (header[j] === 'nid') {
        thread.nativeId = header[j + 1];
      } else if (header[j] === 'in') {
        thread.in = header[j + 1];
      } else if (header[j] === 'runnable' || header[j] === 'waiting on condition' || header[j].startsWith('in ')) {
        thread.status = header[j];
      }
    }
    thread.callstack = header[header.length - 1];
    return ThreadParseResult.CONTINUE;
  }

  public nextStage(): ThreadParseStage {
    return new ThreadStateParserStage();
  }

}

export class ThreadStateParserStage implements ThreadParseStage {

  /* tslint:disable */
  public static readonly THREAD_STATE_REGEX = /^\s*java\.lang\.Thread\.State: (WAITING|NEW|RUNNABLE|BLOCKED|WAITING|TERMINATED|TIMED_WAITING)(?: \(on object monitor\))?/;
  /* tslint:enable */
  public static readonly THREAD_DETECT_REGEX = /(^\s*java\.lang\.Thread\.State: .*|^$)/;

  private nextThreadParseStage: ThreadParseStage;

  public canParse(line: string): boolean {
    return ThreadStateParserStage.THREAD_DETECT_REGEX.test(line);
  }

  public parseNextLine(thread: Thread, line: string): ThreadParseResult {
    if (THREAD_BLANK_LINE_DETECT_REGEX.test(line)) {
      return ThreadParseResult.COMPLETED;
    }
    this.nextThreadParseStage = new ThreadStackParserStage();
    const state = ThreadStateParserStage.THREAD_STATE_REGEX.exec(line);
    thread.state = State[state[1]];
    return ThreadParseResult.CONTINUE;
  }

  public nextStage(): ThreadParseStage {
    return this.nextThreadParseStage;
  }
}

export class ThreadStackParserStage implements ThreadParseStage {

  public static readonly THREAD_AT_STACK_DETECT_REGEX = /^\s*at/;

  public static readonly THREAD_LOCKED_STACK_DETECT_REGEX = /^\s*- locked <[0-9a-z]*>/;
  public static readonly THREAD_LOCKED_STACK_PARSE_REGEX = /^\s*- locked <([0-9a-z]*)> \(a (.*)\)/;

  public static readonly THREAD_WAINTING_TO_LOCK_STACK_DETECT_REGEX = /^\s*- waiting to lock <[0-9a-z]*>/;
  public static readonly THREAD_WAINTING_TO_LOCK_STACK_PARSE_REGEX = /^\s*-\s*waiting to lock <([0-9a-z]*)> \(a (.*)\)/;

  private nextThreadParseStage: ThreadParseStage;

  constructor() {
    this.nextThreadParseStage = this;
  }

  public canParse(line: string): boolean {
    return true;
  }

  public parseNextLine(thread: Thread, line: string): ThreadParseResult {
    if (THREAD_BLANK_LINE_DETECT_REGEX.test(line)) { // test blank line
      this.nextThreadParseStage = new ThreadLocksParserStage();
      return ThreadParseResult.CONTINUE;
    }

    let stackEntry: StackEntry;
    if (ThreadStackParserStage.THREAD_AT_STACK_DETECT_REGEX.test(line)) {
      stackEntry = new AtStackEntry(line);
    } else if (ThreadStackParserStage.THREAD_LOCKED_STACK_DETECT_REGEX.test(line)) {
      const parsed = ThreadStackParserStage.THREAD_LOCKED_STACK_PARSE_REGEX.exec(line);
      const lockedStackEntry = new LockedStackEntry(line, parsed[1], parsed[2]);
      stackEntry = lockedStackEntry;
    } else if (ThreadStackParserStage.THREAD_WAINTING_TO_LOCK_STACK_DETECT_REGEX.test(line)) {
      const parsed = ThreadStackParserStage.THREAD_WAINTING_TO_LOCK_STACK_PARSE_REGEX.exec(line);
      const lockedStackEntry = new WaintingToLockStackEntry(line, parsed[1], parsed[2]);
      stackEntry = lockedStackEntry;
    } else {
      // default case is an unknow
      stackEntry = new UnknowStackEntry(line);
    }

    thread.stack.push(stackEntry);
    return ThreadParseResult.CONTINUE;
  }

  public nextStage(): ThreadParseStage {
    return this.nextThreadParseStage;
  }
}

export class ThreadLocksParserStage implements ThreadParseStage {


  public static readonly LOCK_HEADER_DETECT_REGEX = /^\s*Locked ownable synchronizers:\s*/;
  public static readonly LOCK_OWNNABLE_SYNCHRONIZE_PARSE_REGEX = /^\s*-\s*<([a-z-0-9]*)>\s*\(a\s*(.*)\)/;
  public static readonly NONE_LOCK_DETECT_REGEX = /^\s*-\s*None\s*/;

  public canParse(line: string): boolean {
    return true;
  }

  parseNextLine(thread: Thread, line: string): ThreadParseResult {
    if (THREAD_BLANK_LINE_DETECT_REGEX.test(line)) { // test blank line
      return ThreadParseResult.COMPLETED;
    }

    if (ThreadLocksParserStage.LOCK_HEADER_DETECT_REGEX.test(line)) {
      return ThreadParseResult.CONTINUE;
    }

    let lockEntry: LockSynchronizeEntry;
    if (ThreadLocksParserStage.LOCK_OWNNABLE_SYNCHRONIZE_PARSE_REGEX.test(line)) {
      const parsed = ThreadLocksParserStage.LOCK_OWNNABLE_SYNCHRONIZE_PARSE_REGEX.exec(line);
      lockEntry = new LockOwnableSynchronizersEntry(line, parsed[1], parsed[2]);
    } else if (ThreadLocksParserStage.NONE_LOCK_DETECT_REGEX.test(line)) {
      lockEntry = new NoneLockSynchronizeEntry(line);
    } else {
      lockEntry = new UnknownLockSynchronizeEntry(line);
    }
    thread.lock.push(lockEntry);
    return ThreadParseResult.CONTINUE;
  }

  nextStage(): ThreadParseStage {
    return this;
  }
}
