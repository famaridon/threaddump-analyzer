import {Thread} from './parser/beans/thread';
import {UUID} from 'angular2-uuid';

export interface HtmlConvertable {
  toHtml(): string;
}
