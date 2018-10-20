import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Store } from 'store';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {RouterModule, Routes} from '@angular/router';

import {AuthModule} from '../auth/auth.module';
import {SharedModule} from '../auth/shared/shared.module';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(routes),
    AuthModule,
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
var config = {
    apiKey: "AIzaSyDsSNJHNgSTIFWKORHRV5RfUJ25p7AcbjA",
    authDomain: "task-reminder-mark.firebaseapp.com",
    databaseURL: "https://task-reminder-mark.firebaseio.com",
    projectId: "task-reminder-mark",
    storageBucket: "task-reminder-mark.appspot.com",
    messagingSenderId: "168492252945"
  };
 */
