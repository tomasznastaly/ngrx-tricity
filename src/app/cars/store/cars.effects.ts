import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CarsService } from '../cars.service';
import * as CarsActions from './cars.actions';
import { Action, select, Store } from '@ngrx/root-store';
import { merge, fromEvent, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { mapTo, withLatestFrom } from 'rxjs/operators';
import * as fromCars from './cars.selectors';
import { CarsState } from './cars.reducer';


@Injectable()
export class CarsEffects {

  @Effect()
  fetchCars$: Observable<CarsActions.StoreCars | string> = this.actions$.pipe(
    ofType(CarsActions.CarsActionTypes.FETCH_CARS),
    switchMap(() => this.carsService.getCars()
      .pipe(
        map(cars => new CarsActions.StoreCars(cars)),
        catchError(err => of('Bzzz error')),
      )
    )
  );

  // @Effect({dispatch: false}) online = merge(
  //   of(navigator.onLine),
  //   fromEvent(window, 'online').pipe(mapTo(true)),
  //   fromEvent(window, 'offline').pipe(mapTo(false)),
  // ).pipe(
  //   withLatestFrom(this.store.pipe(select(fromCars.getCars))),
  //   map(([online, cars]) => {
  //     console.log('samochodziki', cars, online);
  //     console.log(online ? 'CHANGE_ONLINE_STATUS!' : 'OFFLINE');
  //   }
  // ));

  constructor(
    private actions$: Actions,
    private carsService: CarsService,
    private store: Store<CarsState>,
  ) {}
}
