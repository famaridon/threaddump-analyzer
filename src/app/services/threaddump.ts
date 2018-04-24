import {Thread} from './thread';
import {UUID} from 'angular2-uuid';
import {HtmlConvertable} from './html-convertable';

export class Threaddump implements HtmlConvertable {
  public id: string;
  public name: string;
  public date: Date;
  public description: string;
  public threads: Thread[] = [];

  constructor() {
    this.id = UUID.UUID();
  }

  toHtml(): string {
    const html = `${this.date.toDateString()}
${this.description}

${this.threadsToHtml()}
`;
    return html;
  }

  private threadsToHtml(): string {
    let html = '';
    this.threads.forEach((thread) => {
      html += thread.toHtml();
    });
    return html;
  }
}
