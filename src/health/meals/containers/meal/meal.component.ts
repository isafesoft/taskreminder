import { Component, OnInit } from '@angular/core';
import {Meal, MealsService} from '../../../data/services/meals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor(private mealService: MealsService,
              private router: Router) { }

  async addNewMeal(event: Meal) {
    await this.mealService.addMeal(event)
    this.backToMeals()
  }

  ngOnInit() {
  }

  backToMeals() {
    this.router.navigate(['meals'])
  }

}
