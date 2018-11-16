import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './containers/meals/meals.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {DataModule} from '../data/data.module';
import { MealComponent } from './containers/meal/meal.component';
import { MealFormComponent } from './component/meal-form/meal-form.component';

export const ROUTES: Routes = [
  {path: '', component: MealsComponent},
  {path: 'new', component: MealComponent},
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DataModule.forRoot()
  ],
  declarations: [MealsComponent, MealComponent, MealFormComponent]
})
export class MealsModule { }
