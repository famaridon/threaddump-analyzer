import { Injectable } from '@angular/core';
import {Threaddump} from './threaddump';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class StoreService {

  private _storage: Promise<Threaddump>[] = [] ;
  private subject: BehaviorSubject<Promise<Threaddump>[]> = new BehaviorSubject([]);

  constructor() { }

  public save(threaddump: Promise<Threaddump>): void {
    this._storage.push( threaddump);
    this.subject.next(this._storage.slice(0));
  }

  public clear(): void {
    this._storage = [];
    this.subject.next(this._storage);
  }

  get storage(): Observable<Promise<Threaddump>[]> {
    return this.subject.asObservable();
  }
}
