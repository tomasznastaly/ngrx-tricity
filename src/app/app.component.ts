import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromApp from './root-store/app.selectors';
import { State } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOnline$ = this.store.pipe(select(fromApp.getOnlineStatus));

  constructor(private store: Store<State>) {}
}
