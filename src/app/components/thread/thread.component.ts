import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {HtmlRendererService} from '../../services/html-renderer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  constructor(private storeService: StoreService,
              private htmlRendererService: HtmlRendererService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
  }

}
