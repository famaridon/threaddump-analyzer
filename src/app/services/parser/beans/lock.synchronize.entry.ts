import {HtmlConvertable} from '../../html-convertable';

export abstract class LockSynchronizeEntry implements HtmlConvertable {
  private _content: string;

  constructor(content: string) {
    this._content = content;
  }

  get content(): string {
    return this._content;
  }

  public abstract toHtml(): string;
}

export class LockOwnableSynchronizersEntry extends LockSynchronizeEntry {
  private _id: string;
  private _a: string;

  constructor(content: string, id: string, a: string) {
    super(content);
    this._id = id;
    this._a = a;
  }


  get id(): string {
    return this._id;
  }

  get a(): string {
    return this._a;
  }

  toHtml(): string {
    return `- &lt;<span id="${this.id}">${this.id}</span>&gt; (a ${this.a}`;
  }
}

export class NoneLockSynchronizeEntry extends LockSynchronizeEntry {
  constructor(content: string) {
    super(content);
  }

  toHtml(): string {
    return '- None';
  }
}

export class UnknownLockSynchronizeEntry extends LockSynchronizeEntry {
  constructor(content: string) {
    super(content);
  }

  toHtml(): string {
    return '<span class="unknown">${this.content}</span>';
  }
}
