import {Thread} from '../beans/thread';
import {ThreadParseResult} from '../thread-parse-result';

export let THREAD_BLANK_LINE_DETECT_REGEX = /^\s*$/;

export interface ThreadParseStage {

  canParse(line: string): boolean;

  parseNextLine(thread: Thread, line: string): ThreadParseResult;

  nextStage(): ThreadParseStage;
}
