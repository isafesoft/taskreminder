import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal, MealsService} from '../../../data/services/meals.service';
import {Observable, Subscription} from 'rxjs';
import {Store} from 'store';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit, OnDestroy {

  meals$: Observable<Meal[]>;
  subscriptionMeals: Subscription;

  constructor(private mealsService: MealsService, private store: Store) { }

  ngOnInit() {
    this.meals$ = this.store.select<Meal[]>('meals')
    this.subscriptionMeals = this.mealsService.meals$.subscribe()
  }

  ngOnDestroy() {
    this.subscriptionMeals.unsubscribe()
  }

}
