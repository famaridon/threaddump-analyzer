import {Injectable} from '@angular/core';
import {Threaddump} from './threaddump';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class StoreService {

  private _storage: Promise<Threaddump>[] = [];
  private completed: Map<string, Threaddump> = new Map();
  private subject: BehaviorSubject<Promise<Threaddump>[]> = new BehaviorSubject([]);

  constructor() {
  }

  public save(threaddump: Promise<Threaddump>): void {
    this._storage.push(threaddump);
    threaddump.then((t) => {
      this.completed.set(t.id, t);

    });
    this.subject.next(this._storage.slice(0));
  }

  public find(id: string): Threaddump | undefined {
    return this.completed.get(id);
  }

  public clear(): void {
    this._storage = [];
    this.subject.next(this._storage);
  }

  get storage(): Observable<Promise<Threaddump>[]> {
    return this.subject.asObservable();
  }
}
