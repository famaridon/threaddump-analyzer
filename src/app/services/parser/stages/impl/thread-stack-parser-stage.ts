import {ThreadParseStage} from '../thread-parse-stage';
import {Thread} from '../../beans/thread';
import {AtStackEntry, LockedStackEntry, StackEntry, UnknowStackEntry, WaintingToLockStackEntry} from '../../beans/stack.entry';
import {THREAD_BLANK_LINE_DETECT_REGEX, ThreadParseResult} from '../../../parser.service';
import {ThreadLocksParserStage} from './thread-locks-parser-stage';

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
