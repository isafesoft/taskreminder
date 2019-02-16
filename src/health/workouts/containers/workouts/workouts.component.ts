import {Component, OnDestroy, OnInit} from '@angular/core';
import {Workout, WorkoutsService} from '../../../data/services/workouts.service';
import {Observable, Subscription} from 'rxjs';
import {Store} from 'store';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  workouts$: Observable<Workout[]>;
  subscriptionWorkouts: Subscription;

  constructor(private workoutsService: WorkoutsService, private store: Store) { }

  ngOnInit() {
    this.workouts$ = this.store.select<Workout[]>('workouts')
    this.subscriptionWorkouts = this.workoutsService.workouts$.subscribe()
  }

  ngOnDestroy() {
    this.subscriptionWorkouts.unsubscribe()
  }

  removeWorkout(event: Workout) {
    this.workoutsService.removeWorkout(event.$key)
  }
}

