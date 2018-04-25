import {LockSynchronizeEntry} from './lock.synchronize.entry';
import {StackEntry} from './stack.entry';
import {HtmlConvertable} from '../../html-convertable';

export class Thread implements HtmlConvertable {
  public name: string;
  public daemon = false;
  public status: string;
  public state: State;
  public priority: string;
  public id: string;
  public nativeId: string;
  public in: string;
  public callstack: string;
  public stack: StackEntry[] = [];
  public lock: LockSynchronizeEntry[] = [];

  toHtml(): string {
    let html = `<span class="name">${this.name}</span>`;
    if (this.daemon) {
      html += ` <span class="daemon">daemon</span>`;
    }
    if (this.priority) {
      html += ` <span class="prio">${this.priority}</span>`;
    }
    if (this.id) {
      html += ` <span class="tid">${this.id}</span>`;
    }
    if (this.nativeId) {
      html += ` <span class="nid">${this.nativeId}</span>`;
    }
    if (this.status) {
      html += ` <span class="status">${this.status}</span>`;
    }
    if (this.callstack) {
      html += ` <span class="id" *ngIf="thread.callstack">${this.callstack}</span>`;
    }
    html += '\n';
    if (this.state) {
      html += `   java.lang.Thread.State: <span class="${this.state}">${this.state}</span>\n`;
    }

    this.stack.forEach((entry) => {
      html += '   ' + entry.toHtml();
      html += '\n';
    });

    if (this.lock.length > 0) {
      html += `\n`;
      html += `   Locked ownable synchronizers:\n`;
      this.lock.forEach((entry) => {
        html += '    ' + entry.toHtml();
        html += '\n';
      });
    }

    html += '\n';
    return html;
  }
}

export enum State {
  NEW = 'NEW',
  RUNNABLE = 'RUNNABLE',
  BLOCKED = 'BLOCKED',
  WAITING = 'WAITING',
  TERMINATED = 'TERMINATED',
  TIMED_WAITING = 'TIMED_WAITING'

}
