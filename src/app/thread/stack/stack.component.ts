import {Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {UnknownStackComponent} from './unknown-stack/unknown-stack.component';
import {AtStackComponent} from './at-stack/at-stack.component';
import {LockedStackComponent} from './locked-stack/locked-stack.component';
import {LockedStackEntry, AtStackEntry, StackEntry} from '../../services/parser.service';
import {WaintingToLockStackEntry} from '../../services/stack.entry';
import {WaitingToLockStackComponent} from './waiting-to-lock-stack/waiting-to-lock-stack.component';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit, OnDestroy {

  @Input()
  public stackEntry: StackEntry;

  @ViewChild('container', {read: ViewContainerRef})
  private container: ViewContainerRef;
  private componentRef: ComponentRef<{}>;
  private componentFactoryResolver: ComponentFactoryResolver;

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    this.componentFactoryResolver = componentFactoryResolver;
  }

  ngOnInit() {
    const componentType = this.getComponentType();
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.componentRef = this.container.createComponent(factory);
    const instance = <StackComponentRender<StackEntry>> this.componentRef.instance;
    instance.setstackEntry(this.stackEntry);
  }

  getComponentType() {
    if (this.stackEntry instanceof AtStackEntry) {
      return AtStackComponent;
    } else if (this.stackEntry instanceof LockedStackEntry) {
      return LockedStackComponent;
    } else if (this.stackEntry instanceof WaintingToLockStackEntry) {
      return WaitingToLockStackComponent;
    }
    return UnknownStackComponent;
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}

export interface StackComponentRender<T extends StackEntry> {
  setstackEntry(stackEntry: T);
}
