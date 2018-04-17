import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Threaddump} from '../../services/threaddump';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {StoreService} from '../../services/store.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-threaddump',
  templateUrl: './threaddump.component.html',
  styleUrls: ['./threaddump.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreaddumpComponent implements OnInit {

  @Input()
  public threaddump: Threaddump | null = null;

  constructor(private storeService: StoreService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.threaddump = null;
      const found = this.storeService.find(params['id']);
      if (found) {
        console.log(`found ${found.name}`);
        this.threaddump = found;
      } else {
        this.router.navigate(['/']);
      }
    });

  }

}
