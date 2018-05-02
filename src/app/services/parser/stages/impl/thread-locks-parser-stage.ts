import {ThreadParseStage} from '../thread-parse-stage';
import {Thread} from '../../beans/thread';
import {
  LockOwnableSynchronizersEntry,
  LockSynchronizeEntry,
  NoneLockSynchronizeEntry,
  UnknownLockSynchronizeEntry
} from '../../beans/lock.synchronize.entry';
import {THREAD_BLANK_LINE_DETECT_REGEX} from '../thread-parse-stage';
import {ThreadParseResult} from '../../thread-parse-result';

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
      console.error(`Can't parse lock line: ${line}`);
      lockEntry = new UnknownLockSynchronizeEntry(line);
    }
    thread.lock.push(lockEntry);
    return ThreadParseResult.CONTINUE;
  }

  nextStage(): ThreadParseStage {
    return this;
  }
}
