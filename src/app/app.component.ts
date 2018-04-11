import {Component} from '@angular/core';
import {ParserService, Threaddump} from './services/parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  threaddump: Promise<Threaddump> | null;

  constructor(private parserService: ParserService) {
  }

  public onFileChange(event) {

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.threaddump = this.parserService.load(file);
    }
  }

}
