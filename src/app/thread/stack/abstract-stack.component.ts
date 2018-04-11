import {StackComponentRender} from './stack.component';
import {StackEntry} from '../../services/parser.service';


export abstract class AbstractStackComponent<T extends StackEntry> implements StackComponentRender<T> {

  public stackEntry: T;

  constructor() {
  }

  setstackEntry(stackEntry: T) {
    this.stackEntry = stackEntry;
  }

}
