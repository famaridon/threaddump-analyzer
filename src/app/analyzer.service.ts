import {Injectable} from '@angular/core';

@Injectable()
export class AnalyzerService {

  public static readonly THREAD_HEADER_REGEX = /^"(.*)"(?: (daemon))?(?: (prio)=([0-9]*))?(?: (tid)=([0-9a-z]*))?(?: (nid)=([0-9a-z]*))?(?: (runnable|waiting on condition|in [a-zA-Z.()]*))?(?: \[([0-9a-z]*)\])?/;
  public static readonly THREAD_STATE_REGEX = / *java\.lang\.Thread\.State: (WAITING|NEW|RUNNABLE|BLOCKED|WAITING|TERMINATED|TIMED_WAITING)(?: \(on object monitor\))/;

  constructor() {
  }

  public load(file: File): Promise<Threaddump> {
    return new Promise<Threaddump>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(this.parseThreaddump(reader.result));
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  }

  private parseThreaddump(content: string): Threaddump {
    const lines = content.split('\n');

    const threaddump = new Threaddump();

    // first ligne is threaddump date
    threaddump.date = new Date(lines[0]);
    threaddump.description = lines[1];

    let thread: Thread;
    for (let i = 2; i < lines.length; i++) {
      const line = lines[i];

      if (this.isThreadHeader(line)) {
        if (thread) {
          threaddump.threads.push(thread);
        }
        thread = new Thread();
        this.parseThreadHeader(thread, line);
      } else if (this.isThreadState(line)) {
        this.parseThreadState(thread, line);
      }
    }

    return threaddump;
  }

  private isThreadHeader(line: string): boolean {
    return AnalyzerService.THREAD_HEADER_REGEX.test(line);
  }

  private parseThreadHeader(thread: Thread, line: string): void {
    const header = AnalyzerService.THREAD_HEADER_REGEX.exec(line);
    thread.name = header[1];
    // loop over header parts
    for (let j = 2; j < header.length - 1; j++) {
      if (!header[j]) {
        continue;
      }
      if (header[j] === 'daemon') {
        thread.daemon = true;
      } else if (header[j] === 'prio') {
        thread.prio = header[j + 1];
      } else if (header[j] === 'tid') {
        thread.tid = header[j + 1];
      } else if (header[j] === 'nid') {
        thread.nid = header[j + 1];
      } else if (header[j] === 'in') {
        thread.in = header[j + 1];
      } else if (header[j] === 'runnable' || header[j] === 'waiting on condition' || header[j].startsWith('in ')) {
        thread.status = header[j];
      }
    }
    thread.id = header[header.length - 1];
  }

  private isThreadState(line: string): boolean {
    return AnalyzerService.THREAD_STATE_REGEX.test(line);
  }

  private parseThreadState(thread: Thread, line: string): void {
    const state = AnalyzerService.THREAD_STATE_REGEX.exec(line);
    thread.state = State[state[1]];
  }
}

export class Threaddump {
  public date: Date;
  public description: string;
  public threads: Thread[] = [];
}


export class Thread {
  public name: string;
  public daemon = false;
  public status: string;
  public state: State;
  public prio: string;
  public tid: string;
  public nid: string;
  public in: string;
  public id: string;
}

export enum State {
  NEW = 'NEW',
  RUNNABLE = 'RUNNABLE',
  BLOCKED = 'BLOCKED',
  WAITING = 'WAITING',
  TERMINATED = 'TERMINATED',
  TIMED_WAITING = 'TIMED_WAITING'

}
