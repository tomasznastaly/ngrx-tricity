import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CarsService } from '../cars.service';
import * as CarsActions from './cars.actions';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class CarsEffects {

  @Effect()
  fetchCars$ = this.actions$.pipe(
    ofType(CarsActions.CarsActionTypes.FETCH_CARS),
    switchMap(() => this.carsService.getCars()
      .pipe(
        map(carsList => new CarsActions.StoreCars({ carsList })),
        catchError(err => of('Bzzz error')),
      )
    )
  );

  constructor(
    private actions$: Actions,
    private carsService: CarsService,
  ) {}
}
