import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Threaddump} from '../../services/parser/beans/threaddump';
import {ActivatedRoute, Router} from '@angular/router';
import {StoreService} from '../../services/store.service';
import 'rxjs/add/operator/pluck';
import {HtmlRendererService} from '../../services/html-renderer.service';

@Component({
  selector: 'app-threaddump',
  templateUrl: './threaddump.component.html',
  styleUrls: ['./threaddump.component.css']
})
export class ThreaddumpComponent implements OnInit {

  public threaddump: Threaddump | null = null;
  public ready = false;
  @ViewChild('output', {read: ViewContainerRef})
  private output: ViewContainerRef;

  constructor(private storeService: StoreService,
              private htmlRendererService: HtmlRendererService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.threaddump = null;
      this.ready = false;
      this.output.element.nativeElement.innerHTML = '';

      const found = this.storeService.find(params['id']);
      if (found) {
        console.log(`found ${found.name}`);
        this.threaddump = found;
        this.updateOutput();
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  private async updateOutput() {
    this.htmlRendererService.render(this.threaddump).then((html) => {
      this.ready = true;
      this.output.element.nativeElement.innerHTML = html;
    });
  }

}
