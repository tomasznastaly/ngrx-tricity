import { Component } from '@angular/core';
import { select, Store } from '@ngrx/root-store';
import * as fromApp from './root-store/app.selectors';
import {State} from './cars/store/cars.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOnline$: Observable<boolean> = this.store.pipe(select(fromApp.getOnlineStatus));

  constructor(private store: Store<State>) { }
}
