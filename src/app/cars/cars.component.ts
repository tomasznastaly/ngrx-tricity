import { Component, OnInit } from '@angular/core';
import { State } from './store/cars.reducer';
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
export class CarsComponent implements OnInit {
  id: number;
  cars$: Observable<Car[]> = this.store.pipe(select(fromCars.getCars));
  car$: Observable<Car> = this.store.pipe(select(fromCars.getCar(5)));
  carDynamic$: Observable<(id: number) => Car> = this.store.pipe(select(fromCars.getCarDynamic));

  constructor(private store: Store<State>) { }

  ngOnInit() {}

  fetchCars() {
    this.store.dispatch(new FetchCars());
  }
}
