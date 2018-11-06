import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffects } from './store/cars.effects';
import { CARS_FEATURE_MODULE_KEY, reducers } from './store';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    StoreModule.forFeature(CARS_FEATURE_MODULE_KEY, reducers),
    EffectsModule.forFeature([CarsEffects]),
  ],
  declarations: [CarsComponent, CarComponent],
  exports: [CarsComponent]
})
export class CarsModule { }
