import {Component} from '@angular/core';
import {ParserService, Threaddump} from './services/parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public threaddumps: Threaddump[] = [];
  public selectedThreaddump: Threaddump;

  constructor(private parserService: ParserService) {
  }

  public onFileChange(event) {

    if (event.target.files && event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.parserService.load(event.target.files[i]).then((threaddump) => {
          this.threaddumps.push(threaddump);
        });
      }
    }
  }

  public changeSelectedThreaddump(selectedThreaddump: Threaddump): void {
    this.selectedThreaddump = selectedThreaddump;
  }

}
