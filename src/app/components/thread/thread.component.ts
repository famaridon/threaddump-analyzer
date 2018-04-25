import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {HtmlRendererService} from '../../services/html-renderer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Threaddump} from '../../services/parser/beans/threaddump';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit, OnDestroy {

  private tidSubscription: Subscription;
  private tid: string;
  private $threaddumpListSubscription: Subscription;
  public $threaddumpList: Threaddump[] = [];

  constructor(private storeService: StoreService,
              private htmlRendererService: HtmlRendererService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.tidSubscription = this.route.params.subscribe((params) => {
      this.tid = params['tid'];
    });
    this.storeService.storage.subscribe(($threaddump) => {
      this.$threaddumpList = $threaddump;
    });
  }

  ngOnDestroy(): void {
    this.tidSubscription.unsubscribe();
    this.$threaddumpListSubscription.unsubscribe();
  }

}
