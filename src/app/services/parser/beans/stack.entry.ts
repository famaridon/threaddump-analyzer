export abstract class StackEntry {
  public content: string;

  constructor(content: string) {
    this.content = content.trim();
  }

}

export class AtStackEntry extends StackEntry {
  constructor(content: string) {
    super(content);
  }

}

export class UnknowStackEntry extends StackEntry {
  constructor(content: string) {
    super(content);
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
}

export class WaintingToLockStackEntry extends LockStackEntry {
  constructor(content: string, lock: string, a: string) {
    super(content, lock, a);
  }
}
