import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AsyncPipe} from '@angular/common';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule, MatProgressSpinnerModule, MatListModule
} from '@angular/material';

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

import {WaitingToLockStackComponent} from './components/thread/stack/waiting-to-lock-stack/waiting-to-lock-stack.component';
import {LockSynchronizerComponent} from './components/thread/lock-synchronizer/lock-synchronizer.component';
import {UnknonwnLockSynchonizerComponent} from './components/thread/lock-synchronizer/unknonwn-lock-synchonizer/unknonwn-lock-synchonizer.component';
import {NoneLockSynchonizerComponent} from './components/thread/lock-synchronizer/none-lock-synchonizer/none-lock-synchonizer.component';
import {LockOwnableSynchonizerComponent} from './components/thread/lock-synchronizer/lock-ownable-synchonizer/lock-ownable-synchonizer.component';
import {UploadDialogComponent} from './components/upload-dialog/upload-dialog.component';
import {StoreService} from './services/store.service';
import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {HelpComponent} from './components/help/help.component';

const appRoutes: Routes = [
  {path: '', component: HelpComponent},
  {path: ':id', component: ThreaddumpComponent}
];

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
    LockSynchronizerComponent,
    UnknonwnLockSynchonizerComponent,
    NoneLockSynchonizerComponent,
    LockOwnableSynchonizerComponent,
    UploadDialogComponent,
    HelpComponent
  ],
  imports: [
    ServiceWorkerModule.register('/threaddump-analyzer/ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: !environment.production} // <-- debugging purposes only
    ),
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatListModule,
    MomentModule
  ],
  entryComponents: [
    AtStackComponent,
    LockedStackComponent,
    UnknownStackComponent,
    WaitingToLockStackComponent,
    UnknonwnLockSynchonizerComponent,
    NoneLockSynchonizerComponent,
    LockOwnableSynchonizerComponent,
    UploadDialogComponent
  ],
  providers: [
    ParserService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

