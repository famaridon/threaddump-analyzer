import {Component} from '@angular/core';
import {AnalyzerService, Threaddump} from './analyzer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  threaddump: Promise<Threaddump> | null;

  constructor(private analyzerService: AnalyzerService) {
  }

  public onFileChange(event) {

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.threaddump = this.analyzerService.load(file);
    }
  }

}
