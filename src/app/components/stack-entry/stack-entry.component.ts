import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild} from '@angular/core';
import {StackEntryHostDirective} from './stack-entry-host.directive';
import {AtStackEntry, LockedStackEntry, StackEntry, WaitingToLockStackEntry} from '../../services/parser/beans/stack.entry';
import {AtStackEntryComponent} from './at-stack-entry/at-stack-entry.component';
import {UnknowStackEntryComponent} from './unknow-stack-entry/unknow-stack-entry.component';
import {LockedStackEntryComponent} from './locked-stack-entry/locked-stack-entry.component';
import {WaitingToLockStackEntryComponent} from './waiting-to-lock-stack-entry/waiting-to-lock-stack-entry.component';
import {AbstractStackEntryComponent} from './abstract-stack-entry.component';

@Component({
  selector: 'app-stack-entry',
  templateUrl: './stack-entry.component.html',
  styleUrls: ['./stack-entry.component.scss']
})
export class StackEntryComponent implements OnInit {

  @Input() stackEntry: StackEntry;
  @ViewChild(StackEntryHostDirective) stackEntryHost: StackEntryHostDirective;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentType());

    const viewContainerRef = this.stackEntryHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AbstractStackEntryComponent<StackEntry>>componentRef.instance).stackEntry = this.stackEntry;
  }

  private getComponentType(): Type<AbstractStackEntryComponent<StackEntry>> {
    if (this.stackEntry instanceof AtStackEntry) {
      return AtStackEntryComponent;
    } else if (this.stackEntry instanceof LockedStackEntry) {
      return LockedStackEntryComponent;
    } else if (this.stackEntry instanceof WaitingToLockStackEntry) {
      return WaitingToLockStackEntryComponent;
    } else {
      return UnknowStackEntryComponent;
    }
  }

}

