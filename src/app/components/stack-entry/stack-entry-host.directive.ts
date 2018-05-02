import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appStackEntryHost]'
})
export class StackEntryHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
