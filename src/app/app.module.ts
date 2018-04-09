import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AnalyzerService} from './analyzer.service';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThreadDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [AnalyzerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
