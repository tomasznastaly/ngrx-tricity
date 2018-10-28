import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarsState } from './cars.reducer';
import { Car } from '../car.model';

export const selectCarsState = createFeatureSelector<CarsState>('carsOOO');

export const getCars = createSelector(selectCarsState, (state: CarsState) => state.carsXX.allCars);

export const getCar = (id: number) => createSelector(getCars, (cars: Car[]) => {
  return cars.find(car => car.id === id);
});

export const getCarDynamic = createSelector(getCars, (cars: Car[]) => {
  return memoize((id: number) => cars.find(car => car.id === id));
});
