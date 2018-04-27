import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {RouterModule, Routes} from '@angular/router';

import {environment} from '../environments/environment';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatTableModule,
  MatCardModule
} from '@angular/material';

import {MomentModule} from 'angular2-moment';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ThreaddumpComponent} from './components/threaddump/threaddump.component';
import {UploadDialogComponent} from './components/upload-dialog/upload-dialog.component';
import {HelpComponent} from './components/help/help.component';

import {ParserService} from './services/parser.service';
import {StoreService} from './services/store.service';
import {MergedThreadsListComponent} from './components/merged-threads-list/merged-threads-list.component';
import { ThreadComponent } from './components/thread/thread.component';
import { StackComponent } from './components/stack/stack.component';

const appRoutes: Routes = [
  {path: '', component: HelpComponent},
  // {path: ':id', component: ThreaddumpComponent},
  {path: 'thread/:tid', component: ThreadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThreaddumpComponent,
    UploadDialogComponent,
    HelpComponent,
    MergedThreadsListComponent,
    ThreadComponent,
    StackComponent
  ],
  imports: [
    ServiceWorkerModule.register('/threaddump-analyzer/ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: !environment.production} // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatTableModule,
    MomentModule
  ],
  entryComponents: [
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

