import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appLockSynchronizeEntryHost]'
})
export class LockSynchronizeEntryHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
