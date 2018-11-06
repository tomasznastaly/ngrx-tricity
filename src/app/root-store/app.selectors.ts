import { createSelector } from '@ngrx/store';
import { State } from '../app.reducers';
import { State as rootState } from '../app.reducers';
import { State as AppState } from './app.reducer';


export const getAppState = createSelector((state: State) => state.app);
export const getRouterState = createSelector((state:  rootState) => state.router);

export const getOnlineStatus = createSelector(getAppState, (state: AppState) => state.isOnline);
