import {Thread} from '../beans/thread';
import {ThreadParseResult} from '../../parser.service';

export interface ThreadParseStage {

  canParse(line: string): boolean;

  parseNextLine(thread: Thread, line: string): ThreadParseResult;

  nextStage(): ThreadParseStage;
}
