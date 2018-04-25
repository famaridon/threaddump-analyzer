import {Injectable} from '@angular/core';
import {Threaddump} from './parser/beans/threaddump';
import {reject} from 'q';

@Injectable()
export class HtmlRendererService {

  private cache: Map<string, Promise<String>> = new Map<string, Promise<String>>();

  constructor() {
  }

  public render(threaddump: Threaddump): Promise<String> {
    let render$ = this.cache.get(threaddump.id);
    if (!render$) {
      render$ = new Promise<String>((resolve) => {
        setTimeout(() => {
          resolve(threaddump.toHtml());
        }, 1000);
      });
      this.cache.set(threaddump.id, render$);
    }

    return render$;
  }

}
