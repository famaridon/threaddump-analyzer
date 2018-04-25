import {Injectable} from '@angular/core';

import {Threaddump} from './parser/beans/threaddump';
import {Thread} from './parser/beans/thread';
import {ThreadParseStage} from './parser/stages/thread-parse-stage';
import {ThreadHeaderParserStage} from './parser/stages/impl/thread-header-parser-stage';

export * from './parser/beans/threaddump';
export * from './parser/beans/thread';
export * from './parser/beans/stack.entry';
export * from './parser/beans/lock.synchronize.entry';

export let THREAD_BLANK_LINE_DETECT_REGEX = /^\s*$/;

export enum ThreadParseResult {
  STARTING,
  CONTINUE,
  COMPLETED
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
        const threaddumpParser = new ThreaddumpParser();
        threaddumpParser.parse(reader.result);
        const threaddump = threaddumpParser.getThreaddump();
        threaddump.name = file.name;
        resolve(threaddump);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  }

}
