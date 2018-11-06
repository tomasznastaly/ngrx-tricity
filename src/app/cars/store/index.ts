import { State } from './cars.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { carsReducer } from './cars.reducer';

export const CARS_FEATURE_MODULE_KEY = 'cars';

export interface CarsState {
  cars: State;
  // add more top level properties here
}

export const reducers: ActionReducerMap<CarsState> = {
  cars: carsReducer,
  // add more reducers for this featureModule
};

export const selectCarsState = createFeatureSelector<CarsState>(CARS_FEATURE_MODULE_KEY);
