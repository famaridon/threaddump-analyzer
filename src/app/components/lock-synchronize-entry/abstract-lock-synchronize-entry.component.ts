import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild} from '@angular/core';
import {AtStackEntry, LockedStackEntry, StackEntry, WaitingToLockStackEntry} from '../../services/parser/beans/stack.entry';
import {AbstractStackEntryComponent} from '../stack-entry/abstract-stack-entry.component';
import {WaitingToLockStackEntryComponent} from '../stack-entry/waiting-to-lock-stack-entry/waiting-to-lock-stack-entry.component';
import {StackEntryHostDirective} from '../stack-entry/stack-entry-host.directive';
import {AtStackEntryComponent} from '../stack-entry/at-stack-entry/at-stack-entry.component';
import {LockedStackEntryComponent} from '../stack-entry/locked-stack-entry/locked-stack-entry.component';
import {UnknowStackEntryComponent} from '../stack-entry/unknow-stack-entry/unknow-stack-entry.component';
import {LockSynchronizeEntry} from '../../services/parser/beans/lock.synchronize.entry';
import {LockSynchronizeEntryHostDirective} from './lock-synchronize-entry-host.directive';


export abstract class AbstractLockSynchronizeEntryComponent<T extends LockSynchronizeEntry> {
  lockSynchronizeEntry: LockSynchronizeEntry;
}
