import { Action } from '@ngrx/root-store';
import { Car } from '../car.model';

export enum CarsActionTypes {
  FETCH_CARS = '[Cars] Fetch Cars',
  STORE_CARS = '[Cars] Store Cars',
}

export class FetchCars implements Action {
  readonly type = CarsActionTypes.FETCH_CARS;
}

export class StoreCars implements Action {
  readonly type = CarsActionTypes.STORE_CARS;

  constructor(public payload: Car[]) {}
}

export type CarsActionsUnion =
  | FetchCars
  | StoreCars;
