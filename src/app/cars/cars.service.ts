import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Car } from './car.model';

@Injectable({providedIn: 'root'})
export class CarsService {
  getCars(): Observable<Car[]> {
    return of([
      {
        model: 'Mercedes Benz',
        power: 150,
        id: 5,
      },
      {
        model: 'BMW',
        power: 200,
        id: 10,
      }
    ]).pipe(delay(150));
  }
}
