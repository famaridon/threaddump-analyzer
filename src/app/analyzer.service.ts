import {Injectable} from '@angular/core';
import {LockedStackEntry, SimpleStackEntry, State, Thread, Threaddump, WaintingToLockStackEntry} from './services/parser.service';

@Injectable()
export class AnalyzerService {

  /**
   * a thread header line can be detected by "<thread-name>" and id=
   * @type {RegExp}
   */
  public static readonly THREAD_HEADER_DETECT_REGEX = /^"(.*)".*(tid=).*/;
  public static readonly THREAD_HEADER_PARSE_REGEX = /^"(.*)"(?: (daemon))?(?: (prio)=([0-9]*))?(?: (tid)=([0-9a-z]*))?(?: (nid)=([0-9a-z]*))?(?: (runnable|waiting on condition|in [a-zA-Z.()]*))?(?: \[([0-9a-z]*)\])?/;

  public static readonly THREAD_STATE_REGEX = / *java\.lang\.Thread\.State: (WAITING|NEW|RUNNABLE|BLOCKED|WAITING|TERMINATED|TIMED_WAITING)(?: \(on object monitor\))?/;

  public static readonly THREAD_SIMPLE_STACK_DETECT_REGEX = /^\sat/;

  public static readonly THREAD_LOCKED_STACK_DETECT_REGEX = /^\s- locked <[0-9a-z]*>/;
  public static readonly THREAD_LOCKED_STACK_PARSE_REGEX = /^\s- locked <([0-9a-z]*)> \((a .*)\)/;

  public static readonly THREAD_WAINTING_TO_LOCK_STACK_DETECT_REGEX = /^\s- waiting to lock <[0-9a-z]*>\)/;
  public static readonly THREAD_WAINTING_TO_LOCK_STACK_PARSE_REGEX = /^^\s- waiting to lock <([0-9a-z]*)> \((a .*)\)\)/;

  constructor() {
  }

  public load(file: File): Promise<Threaddump> {
    return new Promise<Threaddump>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(this.parseThreaddump(reader.result));
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  }

  private parseThreaddump(content: string): Threaddump {
    const lines = content.split('\n');

    const threaddump = new Threaddump();

    // first ligne is threaddump date
    threaddump.date = new Date(lines[0]);
    threaddump.description = lines[1];

    let thread: Thread;
    for (let i = 2; i < lines.length; i++) {
      const line = lines[i];

      if (this.isThreadHeader(line)) {
        if (thread) {
          threaddump.threads.push(thread);
        }
        thread = new Thread();
        this.parseThreadHeader(thread, line);
      } else if (this.isThreadState(line)) {
        this.parseThreadState(thread, line);
      } else if (this.isSimpleStack(line)) {
        this.parseSimpleStack(thread, line);
      } else if (this.isLockedStack(line)) {
        this.parseLockedStack(thread, line);
      } else if (this.isWaintingToLockStack(line)) {
        this.parseWaintingToLockStack(thread, line);
      }
    }

    return threaddump;
  }

  private isThreadHeader(line: string): boolean {
    return AnalyzerService.THREAD_HEADER_DETECT_REGEX.test(line);
  }

  private parseThreadHeader(thread: Thread, line: string): void {
    const header = AnalyzerService.THREAD_HEADER_PARSE_REGEX.exec(line);
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
  }

  private isThreadState(line: string): boolean {
    return AnalyzerService.THREAD_STATE_REGEX.test(line);
  }

  private parseThreadState(thread: Thread, line: string): void {
    const state = AnalyzerService.THREAD_STATE_REGEX.exec(line);
    thread.state = State[state[1]];
  }

  private isSimpleStack(line: string): boolean {
    return AnalyzerService.THREAD_SIMPLE_STACK_DETECT_REGEX.test(line);
  }

  private parseSimpleStack(thread: Thread, line: string): void {
    thread.stack.push(new SimpleStackEntry(line));
  }

  private isLockedStack(line: string): boolean {
    return AnalyzerService.THREAD_LOCKED_STACK_DETECT_REGEX.test(line);
  }

  private parseLockedStack(thread: Thread, line: string): void {
    const locked = AnalyzerService.THREAD_LOCKED_STACK_PARSE_REGEX.exec(line);
    thread.stack.push(new LockedStackEntry(line, locked[1], locked[2]));
  }

  private isWaintingToLockStack(line: string): boolean {
    return AnalyzerService.THREAD_WAINTING_TO_LOCK_STACK_DETECT_REGEX.test(line);
  }

  private parseWaintingToLockStack(thread: Thread, line: string): void {
    const locked = AnalyzerService.THREAD_WAINTING_TO_LOCK_STACK_PARSE_REGEX.exec(line);
    thread.stack.push(new WaintingToLockStackEntry(line, locked[1], locked[2]));
  }
}
