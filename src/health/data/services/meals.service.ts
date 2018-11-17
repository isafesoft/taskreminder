import { Injectable } from '@angular/core';
import {Store} from 'store';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AuthService} from '../../../auth/shared/services/auth.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: () => boolean;
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
    this.meals$ = this.mealList.valueChanges().pipe(tap(next => this.store.set('meals', next)))
  }

  addMeal(meal: Meal) {
    return this.db.list(`meals/${this.uid}`).push(meal)
  }

  get uid() {
    return this.authService.user.uid
  }
}
