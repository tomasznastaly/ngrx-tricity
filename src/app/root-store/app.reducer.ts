import { AppActionsUnion, AppActionTypes } from './app.actions';

export interface State {
  isOnline: boolean;
}

export const initialState: State = {
  isOnline: true,
};

export function reducer(state = initialState, action: AppActionsUnion): State {
  switch (action.type) {
    case AppActionTypes.CHANGE_ONLINE_STATUS:
      return {
        ...state,
        isOnline: action.payload.online,
      };

    default: {
      return state;
    }
  }
}
