import {Component, OnDestroy, OnInit} from '@angular/core';
import {Workout, WorkoutsService} from '../../../data/services/workouts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, OnDestroy {
  workout$: Observable<Workout>
  subscription: Subscription
  constructor(private workoutService: WorkoutsService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  async addNewWorkout(event: Workout) {
    await this.workoutService.addWorkout(event)
    this.backToWorkouts()
  }

  async updateWorkout(event: Workout) {
    const key = this.route.snapshot.params.id
    await this.workoutService.updateWorkout(key, event)
    this.backToWorkouts()
  }

  async removeWorkout(event: Workout) {
    const key = this.route.snapshot.params.id
    await this.workoutService.removeWorkout(key)
    this.backToWorkouts()
  }

  ngOnInit() {
    this.subscription = this.workoutService.workouts$.subscribe()
    this.workout$ = this.route.params.pipe(switchMap(params =>
    {
      return this.workoutService.getWorkout(params.id)
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  backToWorkouts() {
    this.router.navigate(['workouts'])
  }

}

