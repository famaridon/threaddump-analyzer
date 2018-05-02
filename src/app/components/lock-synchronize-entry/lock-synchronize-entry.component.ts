import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild} from '@angular/core';
import {
  LockOwnableSynchronizersEntry,
  LockSynchronizeEntry,
  NoneLockSynchronizeEntry
} from '../../services/parser/beans/lock.synchronize.entry';
import {LockSynchronizeEntryHostDirective} from './lock-synchronize-entry-host.directive';
import {LockOwnableSynchronizersEntityComponent} from './lock-ownable-synchronizers-entity/lock-ownable-synchronizers-entity.component';
import {NoneLockSynchronizeEntityComponent} from './none-lock-synchronize-entity/none-lock-synchronize-entity.component';
import {UnknowLockSynchronizeEntityComponent} from './unknow-lock-synchronize-entity/unknow-lock-synchronize-entity.component';
import {AbstractLockSynchronizeEntryComponent} from './abstract-lock-synchronize-entry.component';

@Component({
  selector: 'app-lock-synchronize-entry',
  templateUrl: './lock-synchronize-entry.component.html',
  styleUrls: ['./lock-synchronize-entry.component.scss']
})
export class LockSynchronizeEntryComponent implements OnInit {

  @Input() lockSynchronizeEntry: LockSynchronizeEntry;
  @ViewChild(LockSynchronizeEntryHostDirective) lockSynchronizeEntryHost: LockSynchronizeEntryHostDirective;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentType());

    const viewContainerRef = this.lockSynchronizeEntryHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AbstractLockSynchronizeEntryComponent<LockSynchronizeEntry>>componentRef.instance).lockSynchronizeEntry = this.lockSynchronizeEntry;
  }

  private getComponentType(): Type<AbstractLockSynchronizeEntryComponent<LockSynchronizeEntry>> {
    if (this.lockSynchronizeEntry instanceof LockOwnableSynchronizersEntry) {
      return LockOwnableSynchronizersEntityComponent;
    } else if (this.lockSynchronizeEntry instanceof NoneLockSynchronizeEntry) {
      return NoneLockSynchronizeEntityComponent;
    }  else {
      return UnknowLockSynchronizeEntityComponent;
    }
  }
}
