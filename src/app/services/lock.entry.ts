export abstract class LockEntry {
  private _content: string;

  constructor(content: string) {
    this._content = content;
  }

  get content(): string {
    return this._content;
  }
}

export class LockOwnableSynchronizersEntry extends LockEntry {
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
}

export class UnknowLockEntry extends LockEntry {
  constructor(content: string) {
    super(content);
  }

}
