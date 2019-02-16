import { Injectable } from '@angular/core';
import {Store} from 'store';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AuthService} from '../../../auth/shared/services/auth.service';
import {Observable, of} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';


export interface Workout {
  name: string;
  type: string; // endurance | strength
  endurance: string;
  strength: string;
  $key: string;
  timestamp: number;
}
@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  workouts$: Observable<Workout[]> = undefined
  workoutList: AngularFireList<any> = this.db.list(`workouts/${this.uid}`)

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    /*
    this.workouts$ = this.workoutList.valueChanges().pipe(
      tap(next => this.store.set('workouts', next)),
      tap(next => console.log()),
      */
    this.workouts$ = this.workoutList.snapshotChanges()
      .pipe(map(next => next.map(c => {
          let temp = ({$key: c.payload.key, ...c.payload.val()});
          console.log(temp);
          return temp;
        })),
        tap(next => this.store.set('workouts', next))
      );
  }

  get workoutListTag() {
    return `workouts/${this.uid}`
  }

  addWorkout(workout: Workout) {
    return this.db.list(this.workoutListTag).push(workout);
  }

  getWorkout(key: string) {
    if(!key) {
      return of({})
    }
    else {
      return this.store.select<Workout[]>('workouts')
        .pipe(
          filter(Boolean),
          map(workouts => workouts.find((workout: Workout) => workout.$key === key))
        )
    }
  }

  updateWorkout(key: string, workout: Workout) {
    return this.db.object(this.workoutListTag + key, ).update(workout)
  }

  removeWorkout(key: string) {
    return this.db.list(`workouts/${this.uid}`).remove(key)
  }

  get uid() {
    return this.authService.user.uid;
  }
}
