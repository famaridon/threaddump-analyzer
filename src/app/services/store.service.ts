import {Injectable} from '@angular/core';
import {Threaddump} from './parser/beans/threaddump';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class StoreService {

  private _storage: Threaddump[] = [];
  private _completed: Map<string, Threaddump> = new Map();
  /**
   * need BehaviorSubject to get the last state when subscribe on it
   * @type {BehaviorSubject<any[]>}
   */
  private subject: Subject<Threaddump[]> = new BehaviorSubject([]);

  constructor() {
  }

  public saveAll($threaddumps: Promise<Threaddump>[]): void {
    Promise.all($threaddumps).then((threaddumps) => {
      threaddumps.forEach((threaddump) => {
        this._completed.set(threaddump.id, threaddump);
        this._storage.push(threaddump);
      });
      this.subject.next(this._storage.slice(0));
    });
  }

  public save(threaddump: Promise<Threaddump>): void {
    threaddump.then((t) => {
      this._completed.set(t.id, t);
      this._storage.push(t);
      this.subject.next(this._storage.slice(0));
    });
  }

  public find(id: string): Threaddump | undefined {
    return this._completed.get(id);
  }

  public clear(): void {
    this._storage = [];
    this.subject.next(this._storage);
  }

  get storage(): Observable<Threaddump[]> {
    return this.subject.asObservable();
  }
}
