import {Thread} from './thread';

export class Threaddump {
  public name: string;
  public date: Date;
  public description: string;
  public threads: Thread[] = [];
}
