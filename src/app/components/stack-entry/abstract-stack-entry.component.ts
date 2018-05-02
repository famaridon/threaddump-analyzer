import {StackEntry} from '../../services/parser/beans/stack.entry';

export abstract class AbstractStackEntryComponent<T extends StackEntry> {
  stackEntry: T;
}