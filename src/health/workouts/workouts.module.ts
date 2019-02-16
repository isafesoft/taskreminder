import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {DataModule} from '../data/data.module';
import { WorkoutComponent } from './containers/workout/workout.component';
import {WorkoutsComponent} from './containers/workouts/workouts.component';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';

export const ROUTES: Routes = [
  {path: '', component: WorkoutsComponent},
  {path: 'new', component: WorkoutComponent},
  {path: ':id', component: WorkoutComponent},
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    DataModule.forRoot()
  ],
  declarations: [WorkoutsComponent,  WorkoutFormComponent, WorkoutComponent, WorkoutFormComponent]
})
export class WorkoutsModule {
}

