import { CarsActionsUnion, CarsActionTypes } from './cars.actions';
import { Car } from '../car.model';

export interface State {
  carsList: Car[];
}

export const initialState: State = {
  carsList: [],
};

export function carsReducer(state = initialState, action: CarsActionsUnion): State {
  switch (action.type) {
    case CarsActionTypes.STORE_CARS:
      return {
        ...state,
        carsList: action.payload.carsList,
      };

    default: {
      return state;
    }
  }
}
