import {HtmlConvertable} from './html-convertable';

export abstract class StackEntry implements HtmlConvertable{
  public content: string;

  constructor(content: string) {
    this.content = content.trim();
  }

  public abstract toHtml(): string;
}

export class AtStackEntry extends StackEntry {
  constructor(content: string) {
    super(content);
  }

  public toHtml(): string {
    return this.content;
  }
}

export class UnknowStackEntry extends StackEntry {
  constructor(content: string) {
    super(content);
  }

  public toHtml(): string {
    return `<span class="unknown">${this.content}</span>`;
  }
}

export abstract class LockStackEntry extends StackEntry {

  private _lock: string;
  private _a: string;

  constructor(content: string, lock: string, a: string) {
    super(content);
    this._lock = lock;
    this._a = a;
  }

  get lock(): string {
    return this._lock;
  }

  set lock(value: string) {
    this._lock = value;
  }

  get a(): string {
    return this._a;
  }

  set a(value: string) {
    this._a = value;
  }
}

export class LockedStackEntry extends LockStackEntry {
  constructor(content: string, lock: string, a: string) {
    super(content, lock, a);
  }

  public toHtml(): string {
    return `- locked &lt;<span class="lock-id" id="${this.lock}">${this.lock}</span>&gt; (a ${this.a})`;
  }
}

export class WaintingToLockStackEntry extends LockStackEntry {
  constructor(content: string, lock: string, a: string) {
    super(content, lock, a);
  }

  public toHtml(): string {
    return `- waiting to lock &lt;<span class="lock-target" onclick="document.getElementById('${this.lock}').scrollIntoView();" >${this.lock}</span>&gt; (a ${this.a})`;
  }
}
