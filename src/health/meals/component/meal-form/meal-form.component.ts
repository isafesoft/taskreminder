import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Meal} from '../../../data/services/meals.service';



@Component({
  selector: 'app-meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss']
})
export class MealFormComponent implements OnInit {

  @Output() create = new EventEmitter<Meal>();
  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  createMeal() {
    if(this.form.valid) {
      console.log(this.form.value)
      this.create.emit(this.form.value)
    }
  }

  addIngredients() {
    this.ingredients.push(new FormControl(''))
  }

  removeIngredients(index: number) {
    this.ingredients.removeAt(index)
  }

  get required() {
    return this.form.get('name').hasError('required') &&
      this.form.get('name').touched
  }
  get ingredients() {
    return this.form.get('ingredients') as FormArray
  }



}
