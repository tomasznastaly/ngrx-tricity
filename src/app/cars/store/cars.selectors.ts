import { createSelector } from '@ngrx/store';
import { Car } from '../car.model';
import * as fromRoot from '../../root-store/app.selectors';
import { CarsState, selectCarsState } from './index';

export const getCars = createSelector(selectCarsState, (state: CarsState) => state.cars.carsList);

export const getCar = (id: number) => createSelector(getCars, (cars: Car[]) => {
  return cars.find(car => car.id === id);
});

export const getCarDynamically = createSelector(getCars, (cars: Car[]) => {
  return (id: number) => cars.find(car => car.id === id);
});

export const getCarByRouteParam = createSelector(
  fromRoot.getRouterState,
  getCars,
  (routerState, cars) => {
    const id = routerState.state.root.firstChild.params.id;
    return cars.find(car => car.id.toString() === id);
  }
);
