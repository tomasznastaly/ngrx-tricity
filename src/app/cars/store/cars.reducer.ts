import { CarsActionsUnion, CarsActionTypes } from './cars.actions';
import { Car } from '../car.model';
import { ActionReducerMap } from '@ngrx/root-store';

export interface State {
  allCars: Car[];
}

export const initialState: State = {
  allCars: [],
};

export function reducer(state = initialState, action: CarsActionsUnion): State {
  switch (action.type) {
    case CarsActionTypes.STORE_CARS:
      return {
        ...state,
        allCars: action.payload,
      };

    default: {
      return state;
    }
  }
}

export interface CarsState {
  carsXX: State;
}

export const reducers: ActionReducerMap<CarsState, CarsActionsUnion> = {
  carsXX: reducer,
};
