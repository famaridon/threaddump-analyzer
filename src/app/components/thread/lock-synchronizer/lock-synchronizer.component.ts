import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {LockOwnableSynchronizersEntry, LockSynchronizeEntry, NoneLockSynchronizeEntry} from '../../../services/lock.synchronize.entry';
import {LockedStackComponent} from '../stack/locked-stack/locked-stack.component';
import {AtStackComponent} from '../stack/at-stack/at-stack.component';
import {WaitingToLockStackComponent} from '../stack/waiting-to-lock-stack/waiting-to-lock-stack.component';
import {AtStackEntry, LockedStackEntry, StackEntry} from '../../../services/stack.entry';
import {StackComponentRender} from '../stack/stack.component';
import {UnknownStackComponent} from '../stack/unknown-stack/unknown-stack.component';
import {NoneLockSynchonizerComponent} from './none-lock-synchonizer/none-lock-synchonizer.component';
import {LockOwnableSynchonizerComponent} from './lock-ownable-synchonizer/lock-ownable-synchonizer.component';
import {UnknonwnLockSynchonizerComponent} from './unknonwn-lock-synchonizer/unknonwn-lock-synchonizer.component';

@Component({
  selector: 'app-lock-synchronizer',
  templateUrl: './lock-synchronizer.component.html',
  styleUrls: ['./lock-synchronizer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LockSynchronizerComponent implements OnInit, OnDestroy {

  @Input()
  public lockSynchronizer: LockSynchronizeEntry;

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
    const instance = <LockSynchronizeComponentRender<LockSynchronizeEntry>> this.componentRef.instance;
    instance.setLockSynchronizeEntry(this.lockSynchronizer);
  }

  getComponentType() {
    if (this.lockSynchronizer instanceof NoneLockSynchronizeEntry) {
      return NoneLockSynchonizerComponent;
    } else if (this.lockSynchronizer instanceof LockOwnableSynchronizersEntry) {
      return LockOwnableSynchonizerComponent;
    }
    return UnknonwnLockSynchonizerComponent;
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}


export interface LockSynchronizeComponentRender<T extends LockSynchronizeEntry> {
  setLockSynchronizeEntry(lockSynchronizeEntry: T);
}
