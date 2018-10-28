import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Store } from 'store';
import {RouterModule, Routes} from '@angular/router';

import {AuthModule} from '../auth/auth.module';
import { NavComponent } from './components/nav/nav.component';
import {HeaderComponent} from './components/header/header.component';
import {HealthModule} from '../health/health.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'schedule'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AuthModule,
    HealthModule
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
