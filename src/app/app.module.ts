import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AsyncPipe} from '@angular/common';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {MomentModule} from 'angular2-moment';


import {ParserService} from './services/parser.service';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ThreaddumpComponent} from './components/threaddump/threaddump.component';
import {StackComponent} from './components/thread/stack/stack.component';
import {ThreadDetailsComponent} from './components/thread/thread-details/thread-details.component';
import {AtStackComponent} from './components/thread/stack/at-stack/at-stack.component';
import {UnknownStackComponent} from './components/thread/stack/unknown-stack/unknown-stack.component';
import {LockedStackComponent} from './components/thread/stack/locked-stack/locked-stack.component';

import { WaitingToLockStackComponent } from './components/thread/stack/waiting-to-lock-stack/waiting-to-lock-stack.component';
import { LockSynchronizerComponent } from './components/thread/lock-synchronizer/lock-synchronizer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThreadDetailsComponent,
    ThreaddumpComponent,
    StackComponent,
    AtStackComponent,
    UnknownStackComponent,
    LockedStackComponent,
    WaitingToLockStackComponent,
    LockSynchronizerComponent
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
  entryComponents: [AtStackComponent, LockedStackComponent, UnknownStackComponent, WaitingToLockStackComponent],
  providers: [ParserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
