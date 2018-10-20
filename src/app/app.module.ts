import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Store } from 'store';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AuthModule} from '../auth/auth.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
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
