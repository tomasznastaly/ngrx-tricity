import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffects } from './store/cars.effects';
import { reducers } from './store/cars.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('carsOOO', reducers),
    EffectsModule.forFeature([CarsEffects]),
  ],
  declarations: [CarsComponent],
  exports: [CarsComponent]
})
export class CarsModule { }
