import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Workout} from '../../../data/services/workouts.service';



@Component({
  selector: 'app-workout-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss']
})
export class WorkoutFormComponent implements OnInit, OnChanges {

  @Input() workout: Workout

  @Output() create = new EventEmitter<Workout>();
  @Output() update = new EventEmitter<Workout>();
  @Output() remove = new EventEmitter<Workout>();
  toggled: boolean = false
  exists: boolean = false

  form = this.fb.group({
    name: ['', Validators.required],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if(this.workout && this.workout.name) {
    //   this.exists = true
    //
    //   this.emptyIngredients()
    //   this.form.patchValue(this.workout) //only update the title
    //
    //   if(this.workout.ingredients) {
    //     for(const item of this.workout.ingredients) {
    //       this.ingredients.push(new FormControl(item))
    //     }
    //   }
    // }
  }

  // emptyIngredients() {
  //   while(this.ingredients.controls.length) {
  //     this.ingredients.removeAt(0)
  //   }
  // }

  createWorkout() {
    if(this.form.valid) {
      this.create.emit(this.form.value)
    }
  }

  updateWorkout() {
    if(this.form.valid) {
      this.update.emit(this.form.value)
    }
  }

  removeWorkout() {
    this.remove.emit(this.form.value)
  }

  // addIngredients() {
  //   this.ingredients.push(new FormControl(''))
  // }
  //
  // removeIngredients(index: number) {
  //   this.ingredients.removeAt(index)
  // }

  toggle() {
    this.toggled = !this.toggled
  }

  get required() {
    return this.form.get('name').hasError('required') &&
      this.form.get('name').touched
  }
  // get ingredients() {
  //   return this.form.get('ingredients') as FormArray
  // }
}

