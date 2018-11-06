import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromApp from './root-store/app.reducer';

export interface State {
  router: RouterReducerState;
  app: fromApp.State;
}

export const reducers = {
  router: routerReducer,
  app: fromApp.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action) => {
    const result = reducer(state, action);

    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
