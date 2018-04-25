import {Thread} from '../beans/thread';
import {ThreadParseResult} from '../thread-parser';

export interface ThreadParseStage {

  canParse(line: string): boolean;

  parseNextLine(thread: Thread, line: string): ThreadParseResult;

  nextStage(): ThreadParseStage;
}
