import { Injectable } from '@angular/core';
import {Threaddump} from './threaddump';
import { UUID } from 'angular2-uuid';


@Injectable()
export class StoreService {

  private _storage: Map<string, Promise<Threaddump>> = new Map<string, Promise<Threaddump>>();

  constructor() { }

  public save(threaddump: Promise<Threaddump>): string {
    const id = UUID.UUID();
    this._storage.set(id, threaddump);
    return id;
  }

  public find(id: string): Promise<Threaddump> {
    return this._storage.get(id);
  }

  get storage(): Map<string, Promise<Threaddump>> {
    return this._storage;
  }
}
