import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AnalyzerService} from './analyzer.service';
import {ThreaddumpComponent} from './threaddump/threaddump.component';
import {StackComponent} from './thread/stack/stack.component';
import {ThreadDetailsComponent} from './thread/thread-details/thread-details.component';
import {SimpleStackComponent} from './thread/stack/simple-stack/simple-stack.component';
import {UnknownStackComponent} from './thread/stack/unknown-stack/unknown-stack.component';
import {LockedStackComponent} from './thread/stack/locked-stack/locked-stack.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThreadDetailsComponent,
    ThreaddumpComponent,
    StackComponent,
    SimpleStackComponent,
    UnknownStackComponent,
    LockedStackComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  entryComponents: [SimpleStackComponent, LockedStackComponent, UnknownStackComponent],
  providers: [AnalyzerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
