import {StackComponentRender} from './stack.component';
import {StackEntry} from '../../analyzer.service';


export abstract class AbstractStackComponent<T extends StackEntry> implements StackComponentRender<T> {

  public stackEntry: T;

  constructor() {
  }

  setstackEntry(stackEntry: T) {
    this.stackEntry = stackEntry;
  }

}
