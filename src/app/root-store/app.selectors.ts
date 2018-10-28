import { createSelector } from '@ngrx/root-store';
import {State} from '../app.reducers';
import {State as AppState}  from './app.reducer';

export const getAppState = createSelector((state: State) => state.app);

export const getOnlineStatus = createSelector(getAppState, (state: AppState) => state.isOnline);

