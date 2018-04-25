import {ThreadParseStage} from '../thread-parse-stage';
import {State, Thread} from '../../beans/thread';
import {THREAD_BLANK_LINE_DETECT_REGEX, ThreadParseResult} from '../../../parser.service';
import {ThreadStackParserStage} from './thread-stack-parser-stage';

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
