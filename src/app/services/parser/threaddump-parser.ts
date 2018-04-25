import {Threaddump} from './beans/threaddump';
import {ThreadParser} from './thread-parser';
import {ThreadParseResult} from './thread-parser';

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
