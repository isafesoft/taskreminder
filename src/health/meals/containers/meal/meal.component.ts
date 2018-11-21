import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal, MealsService} from '../../../data/services/meals.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, OnDestroy {
  meal$: Observable<Meal>
  subscription: Subscription
  constructor(private mealService: MealsService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  async addNewMeal(event: Meal) {
    await this.mealService.addMeal(event)
    this.backToMeals()
  }

  ngOnInit() {
    this.subscription = this.mealService.meals$.subscribe()
    this.meal$ = this.route.params.pipe(switchMap(params =>
    {
      return this.mealService.getMeal(params.id)
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  backToMeals() {
    this.router.navigate(['meals'])
  }

}
