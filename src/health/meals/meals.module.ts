import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './containers/meals/meals.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {DataModule} from '../data/data.module';

export const ROUTES: Routes = [
  {path: '', component: MealsComponent}
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DataModule.forRoot()
  ],
  declarations: [MealsComponent]
})
export class MealsModule { }
