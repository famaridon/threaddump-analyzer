import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ThreaddumpComponent} from './threaddump/threaddump.component';
import {StackComponent} from './thread/stack/stack.component';
import {ThreadDetailsComponent} from './thread/thread-details/thread-details.component';
import {AtStackComponent} from './thread/stack/at-stack/at-stack.component';
import {UnknownStackComponent} from './thread/stack/unknown-stack/unknown-stack.component';
import {LockedStackComponent} from './thread/stack/locked-stack/locked-stack.component';
import {ParserService} from './services/parser.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MomentModule} from 'angular2-moment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThreadDetailsComponent,
    ThreaddumpComponent,
    StackComponent,
    AtStackComponent,
    UnknownStackComponent,
    LockedStackComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MomentModule
  ],
  entryComponents: [AtStackComponent, LockedStackComponent, UnknownStackComponent],
  providers: [ParserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
