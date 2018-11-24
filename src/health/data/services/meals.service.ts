import { Injectable } from '@angular/core';
import {Store} from 'store';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AuthService} from '../../../auth/shared/services/auth.service';
import {Observable, of} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

import {nextTick} from 'q';

export interface Meal {
  name: string;
  ingredients: string[];
  $key: string;
  timestamp: number;
}
@Injectable({
  providedIn: 'root'
})
export class MealsService {

  meals$: Observable<Meal[]> = undefined
  mealList: AngularFireList<any> = this.db.list(`meals/${this.uid}`)

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    /*
    this.meals$ = this.mealList.valueChanges().pipe(
      tap(next => this.store.set('meals', next)),
      tap(next => console.log()),
      */
    this.meals$ = this.mealList.snapshotChanges()
      .pipe(map(next => next.map(c => {
          let temp = ({$key: c.payload.key, ...c.payload.val()});
          console.log(temp);
          return temp;
        })),
        tap(next => this.store.set('meals', next))
      );
  }

  get mealListTag() {
    return `meals/${this.uid}`
  }

  addMeal(meal: Meal) {
    return this.db.list(this.mealListTag).push(meal);
  }

  getMeal(key: string) {
   if(!key) {
     return of({})
   }
   else {
     return this.store.select<Meal[]>('meals')
       .pipe(
       filter(Boolean),
       map(meals => meals.find((meal: Meal) => meal.$key === key))
       )
   }
  }

  updateMeal(key: string, meal: Meal) {
      return this.db.object(this.mealListTag + key, ).update(meal)
  }

  removeMeal(key: string) {
    return this.db.list(`meals/${this.uid}`).remove(key)
  }

  get uid() {
    return this.authService.user.uid;
  }
}
