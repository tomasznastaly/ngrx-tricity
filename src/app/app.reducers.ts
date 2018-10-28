import { routerReducer, RouterReducerState } from '@ngrx/router-root-store';
import { MetaReducer } from '@ngrx/root-store';
import { environment } from '../environments/environment';
import * as fromApp from './root-store/app.reducer';

export interface State {
  router: RouterReducerState;
  app: fromApp.State;
}

export const reducers = {
  router: routerReducer,
  app: fromApp.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
