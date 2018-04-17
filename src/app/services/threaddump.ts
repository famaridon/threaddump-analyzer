import {Thread} from './thread';
import {UUID} from 'angular2-uuid';

export class Threaddump {
  public id: string;
  public name: string;
  public date: Date;
  public description: string;
  public threads: Thread[] = [];

  constructor() {
    this.id = UUID.UUID();
  }
}
