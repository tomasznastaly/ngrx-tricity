import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { fromEvent, merge, of } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { ChangeOnlineStatus } from './app.actions';

@Injectable()
export class AppEffects {

  @Effect()
  online$ = merge(
    fromEvent(window, 'online').pipe(mapTo(true)),
    fromEvent(window, 'offline').pipe(mapTo(false)),
  ).pipe(
    map(online => new ChangeOnlineStatus({online})),
  );
}
