import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import * as fromCars from './cars/store/cars.reducer';
import { MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';

export interface State {
  router: RouterReducerState;
}

export const reducers = {
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
