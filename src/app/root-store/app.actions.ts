import { Action } from '@ngrx/root-store';

export enum AppActionTypes {
  CHANGE_ONLINE_STATUS = '[App] Online Status',
}

export class ChangeOnlineStatus implements Action {
  readonly type = AppActionTypes.CHANGE_ONLINE_STATUS;

  constructor(public payload: {online: boolean}) {}
}

export type AppActionsUnion =
  | ChangeOnlineStatus;
