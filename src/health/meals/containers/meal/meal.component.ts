import { Component, OnInit } from '@angular/core';
import {Meal} from '../../../data/services/meals.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor() { }

  addNewMeal(event: Meal) {
    console.log(event)
  }
  ngOnInit() {
  }

}
