import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Meal} from '../../../data/services/meals.service';



@Component({
  selector: 'app-meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss']
})
export class MealFormComponent implements OnInit, OnChanges {

  @Input() meal: Meal

  @Output() create = new EventEmitter<Meal>();
  @Output() update = new EventEmitter<Meal>();
  @Output() remove = new EventEmitter<Meal>();
  toggled: boolean = false
  exists: boolean = false

  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.meal && this.meal.name) {
      this.exists = true

      this.emptyIngredients()
      this.form.patchValue(this.meal) //only update the title

      if(this.meal.ingredients) {
        for(const item of this.meal.ingredients) {
          this.ingredients.push(new FormControl(item))
        }
      }
    }
  }

  emptyIngredients() {
    while(this.ingredients.controls.length) {
      this.ingredients.removeAt(0)
    }
  }

  createMeal() {
    if(this.form.valid) {
      this.create.emit(this.form.value)
    }
  }

  updateMeal() {
    if(this.form.valid) {
      this.update.emit(this.form.value)
    }
  }

  removeMeal() {
    this.remove.emit(this.form.value)
  }

  addIngredients() {
    this.ingredients.push(new FormControl(''))
  }

  removeIngredients(index: number) {
    this.ingredients.removeAt(index)
  }

  toggle() {
    this.toggled = !this.toggled
  }

  get required() {
    return this.form.get('name').hasError('required') &&
      this.form.get('name').touched
  }
  get ingredients() {
    return this.form.get('ingredients') as FormArray
  }



}
