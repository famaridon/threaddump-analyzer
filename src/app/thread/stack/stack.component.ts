import {Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LockedStackEntry, SimpleStackEntry, StackEntry} from '../../analyzer.service';
import {UnknownStackComponent} from './unknown-stack/unknown-stack.component';
import {SimpleStackComponent} from './simple-stack/simple-stack.component';
import {LockedStackComponent} from './locked-stack/locked-stack.component';

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
    const instance = <StackComponentRender> this.componentRef.instance;
    instance.setstackEntry(this.stackEntry);
  }

  getComponentType() {
    if (this.stackEntry instanceof SimpleStackEntry) {
      return SimpleStackComponent;
    } else if (this.stackEntry instanceof LockedStackEntry) {
      return LockedStackComponent;
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