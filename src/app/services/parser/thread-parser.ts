import {Thread} from './beans/thread';
import {ThreadParseStage} from './stages/thread-parse-stage';
import {ThreadHeaderParserStage} from './stages/impl/thread-header-parser-stage';
import {ThreadParseResult} from './thread-parse-result';

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
