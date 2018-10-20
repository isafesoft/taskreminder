import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {SharedModule} from './shared/shared.module';

const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login'},
      // lazyload, needn't to import corresponding module at more
      { path: 'login', loadChildren: './login/login.module#LoginModule'},
      { path: 'register', loadChildren: './register/register.module#RegisterModule'},
      ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule.forRoot()
  ],
  declarations: []
})
export class AuthModule { }
