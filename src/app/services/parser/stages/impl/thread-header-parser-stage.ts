import {ThreadParseStage} from '../thread-parse-stage';
import {Thread} from '../../beans/thread';
import {ThreadParseResult} from '../../thread-parser';
import {ThreadStateParserStage} from './thread-state-parser-stage';

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
