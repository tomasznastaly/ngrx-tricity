import { Action } from '@ngrx/store';
import { Car } from '../car.model';

export enum CarsActionTypes {
  FETCH_CARS = '[Cars API] Fetch Cars',
  STORE_CARS = '[Cars API] Store Cars',
}

export class FetchCars implements Action {
  readonly type = CarsActionTypes.FETCH_CARS;
}

export class StoreCars implements Action {
  readonly type = CarsActionTypes.STORE_CARS;

  constructor(public payload: {carsList: Car[]}) {}
}

export type CarsActionsUnion =
  | FetchCars
  | StoreCars;
