import {Thread} from './thread';
import {UUID} from 'angular2-uuid';

export interface HtmlConvertable {
  toHtml(): string;
}
