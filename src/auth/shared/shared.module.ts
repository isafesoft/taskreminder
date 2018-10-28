import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthFormComponent} from './component/auth-form/auth-form.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthFormComponent
  ],
  exports: [
    AuthFormComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    }
  }
}
