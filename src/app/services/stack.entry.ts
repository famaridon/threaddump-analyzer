export abstract class StackEntry {
  public content: string;

  constructor(content: string) {
    this.content = content;
  }
}

export class SimpleStackEntry extends StackEntry {
  constructor(content: string) {
    super(content);
  }
}

export abstract class LockStackEntry extends StackEntry {
  public lock: string;
  public a: string;

  constructor(content: string, lock: string, a: string) {
    super(content);
    this.lock = lock;
    this.a = a;
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
