
export abstract class LockSynchronizeEntry {
  private _content: string;

  constructor(content: string) {
    this._content = content;
  }

  get content(): string {
    return this._content;
  }

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
}

export class NoneLockSynchronizeEntry extends LockSynchronizeEntry {
  constructor(content: string) {
    super(content);
  }
}

export class UnknownLockSynchronizeEntry extends LockSynchronizeEntry {
  constructor(content: string) {
    super(content);
  }
}
