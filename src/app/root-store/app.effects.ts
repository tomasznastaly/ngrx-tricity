import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/root-store';
import {fromEvent, merge, Observable, of} from 'rxjs';
import {catchError, map, mapTo, switchMap, withLatestFrom} from 'rxjs/operators';
import {ChangeOnlineStatus} from './app.actions';

@Injectable()
export class AppEffects {
  @Effect() online$ = merge(
    of(navigator.onLine),
    fromEvent(window, 'online').pipe(mapTo(true)),
    fromEvent(window, 'offline').pipe(mapTo(false)),
  ).pipe(
    map(online => new ChangeOnlineStatus({online})),
  );
}
