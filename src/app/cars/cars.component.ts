import { Component, OnInit } from '@angular/core';
import { CarsState } from './store/index';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Car } from './car.model';
import { FetchCars } from './store/cars.actions';
import * as fromCars from './store/cars.selectors';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars$ = this.store.pipe(select(fromCars.getCars));
  car$ = this.store.pipe(select(fromCars.getCar(5)));
  carDynamic$: Observable<(id: number) => Car> = this.store.pipe(select(fromCars.getCarDynamically));

  constructor(private store: Store<CarsState>) { }

  fetchCars() {
    this.store.dispatch(new FetchCars());
  }
}
